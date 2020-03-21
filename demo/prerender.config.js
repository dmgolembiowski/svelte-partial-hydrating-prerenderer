const fs = require('fs').promises;

const plugins = [
    // Remove all elements we don't want in the static build
    () => {
        const els = [
            ...document.querySelectorAll('[data-remove-from-static-build]'),
        ];
        els.forEach(el => {
            el.parentNode.removeChild(el);
        });
    },
];

module.exports = {
    // The website url to load
    url: 'http://localhost:8080',
    // Where to save the files to
    output: 'public/dist',
    plugins,
    async onPageInit(page) {
        await injectSvelteHydrationMarkerLogic(page);
    },
    // All pages to save
    pages: [
        {
            path: '/',
        },
    ],
};

async function injectSvelteHydrationMarkerLogic(page) {
    const script =
        './node_modules/svelte-partial-hydrating-prerenderer/plugins/mark-hydratable-component.js';
    const source = await fs.readFile(script, 'utf8');
    await page.evaluateOnNewDocument(source);
}
