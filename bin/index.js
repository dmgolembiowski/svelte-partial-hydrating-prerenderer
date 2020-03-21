#!/usr/bin/env node
const fs = require('fs').promises;
const path = require('path');
const puppeteer = require('puppeteer');
const config = require(`../prerender.config.js`);

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    // page.setViewport({ width: 1920, height: 1080 });

    // Set a global variable so the app can understand it's in prerender mode
    await page.evaluateOnNewDocument(() => {
        window.__PRERENDER_MODE__ = true;
    });

    // Run custom page init logic
    config.onPageInit && (await config.onPageInit(page));

    // Grab content of every page
    for (const p of config.pages) {
        const url = `${config.url}${p.path}`;
        await page.goto(url);

        // Run page plugins
        if (config.plugins) {
            await runPlugins(page, config.plugins);
        }

        p.content = await page.content();
    }

    // Save each page
    await Promise.all(
        config.pages.map(async p => {
            const fileName = p.output || path.join(p.path, 'index.html');
            const outputPath = path.join(config.output, fileName);
            await makeDir(outputPath);
            return fs.writeFile(outputPath, p.content);
        })
    );

    await browser.close();
})();

async function makeDir(outputPath) {
    await fs.mkdir(path.dirname(outputPath), { recursive: true });
}

async function runPlugins(page, plugins) {
    for (const p of plugins) {
        await page.evaluate(p);
    }
}
