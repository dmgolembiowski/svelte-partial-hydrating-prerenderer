// This file is injected into the headless chrome window context during the prerender phase.
// https://github.com/jakedeichert/svelte-partial-hydrating-prerenderer/blob/master/demo/prerender.config.js#L21-L23

const mountedNodes = {};
const nodeProps = {};
const scriptNodes = {};
let ssgIdCounter = 0;

window.markHydratableComponent = (node, componentProps) => {
    const fileUrl = getFileUrl();
    mountedNodes[fileUrl] = mountedNodes[fileUrl] || [];

    // Prevent infinitely remounting
    if (node.parentElement.dataset.ssgref) return;
    mountedNodes[fileUrl].push(node);

    const ssgRef = ssgIdCounter++;
    // A parent can only have ONE hydratable child. All hydratable components should
    // be wrapped in their own div within their parent component's source. They also
    // must have ONE root element inside their component, not multiple.
    node.parentElement.dataset.ssgref = ssgRef;
    nodeProps[ssgRef] = componentProps;

    createComponentLoaderScript(fileUrl);
};

function createComponentLoaderScript(fileUrl) {
    const targets = mountedNodes[fileUrl].map(n => {
        const ssgRef = n.parentElement.dataset.ssgref;
        return `
            new c({
                target: document.querySelector('[data-ssgref="${ssgRef}"]'),
                hydrate: true,
                props: ${JSON.stringify(nodeProps[ssgRef])}
            });
        `;
    });

    // If a script node was already created for this fileUrl, remove it
    // and create a new one with the new target included. All targets
    // share a single script node.
    if (scriptNodes[fileUrl]) {
        document.body.removeChild(scriptNodes[fileUrl]);
    }

    const s = document.createElement('script');
    s.type = 'module';
    const code = `
        import c from '${fileUrl}';
        ${targets.join('\n')}
    `;

    s.appendChild(document.createTextNode(code));
    document.body.appendChild(s);
    scriptNodes[fileUrl] = s;
}

// SUCH A HACK. Read about it here...
// https://jakedeichert.com/blog/2020/02/a-super-hacky-alternative-to-import-meta-url/
function getFileUrl() {
    const stackTraceFrames = String(new Error().stack)
        // WARNING!!!
        // Depending on how rollup compiles this, it sometimes inlines this
        // function directly inside its caller. If that happens, then this
        // "replace" line below is NOT needed. It's a huge gotcha...
        .replace(/^Error.*\n/, '') // Remove Chrome's first "Error" line
        .split('\n'); // Separate frames
    // 0 is this getFileUrl function
    // 1 is this markHydratableComponent function
    // 2 is the lib/index.js hydrate function
    // 3 is the actual component use:hydrate call point
    const componentTrace = stackTraceFrames[3];
    const url = componentTrace.match(/http.*\.js/)[0];
    // url: http://localhost:8080/components/MyComponent.js
    // relativeUrl: /components/MyComponent.js
    const relativeUrl = new URL(url).pathname;
    return relativeUrl;
}
