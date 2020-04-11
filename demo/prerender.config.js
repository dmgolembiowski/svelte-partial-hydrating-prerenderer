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
    // Which directory to serve.
    // npm run prerender copies `./public` to `./prerendered` before starting.
    serve: 'prerendered',
    // Where to save the files to (overwrites html files)
    output: 'prerendered',
    // Plugins to run during prerender
    plugins,
    // All pages to save
    pages: [
        {
            path: '/',
        },
    ],
};
