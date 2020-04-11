// Example from https://github.com/jakedeichert/svelvet/tree/c3b271a649ec3e9ecd2d54a518ee347cc7948c01/tests/snapshot-snowpack-config
// This file will not be needed once this issue is fixed: https://github.com/jakedeichert/svelvet/issues/49

const rollupPluginSvelte = require('rollup-plugin-svelte');

module.exports = {
    rollup: {
        plugins: [
            rollupPluginSvelte({
                dev: process.env.NODE_ENV !== 'production',
                hydratable: true,
            }),
        ],
    },
};
