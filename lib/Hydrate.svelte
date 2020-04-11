<script context="module">
    const mountedNodes = {};
    const nodeProps = {};
    const scriptNodes = {};
    let ssgIdCounter = 0;

    function markHydratableComponent(fileUrl, node, componentProps) {
        // Ignore if not in prerender mode
        if (!window.__PRERENDER_MODE__) return;

        mountedNodes[fileUrl] = mountedNodes[fileUrl] || [];

        // Prevent infinitely remounting
        if (node.dataset.ssgref) return;
        mountedNodes[fileUrl].push(node);

        const ssgRef = ssgIdCounter++;
        // A parent can only have ONE hydratable child which is why this component renders
        // a div wrapper. Hydratable components also must have ONE root element inside their
        // component, not multiple.
        node.dataset.ssgref = ssgRef;
        nodeProps[ssgRef] = componentProps;

        createComponentLoaderScript(fileUrl);
    }

    function createComponentLoaderScript(fileUrl) {
        const targets = mountedNodes[fileUrl].map(n => {
            const ssgRef = n.dataset.ssgref;
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
</script>

<script>
    // The component's file url for import
    export let _this;

    let componentProps;
    let node;

    $: {
        // Capture all other props except _this (component's import url)
        componentProps = Object.assign({}, $$props);
        delete componentProps['_this'];
    }

    $: importComponent = _this && import(_this);

    $: _this &&
        node &&
        componentProps &&
        markHydratableComponent(_this, node, componentProps);
</script>

<div bind:this={node}>
    {#if importComponent}
        {#await importComponent then loadedComponent}
            <svelte:component
                this={loadedComponent.default}
                {...componentProps} />
        {/await}
    {/if}
</div>
