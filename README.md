# Svelte Partial-hydrating Prerenderer

A **proof of concept** partial-hydrating prerenderer for svelte.


**This doc is still in progress...**


---


## What's partial hydration?

## Why doesn't everyone do partial hydration?

## What does this proof of concept do?

I've published this [example module to npm][npm]. It has two jobs.

First, it's a [`use:action`][use_action] helper that lets you _mark_ a svelte component as hydratable.

Second, it's a headless chrome prerenderer that loads your svelte site, renders your component tree and outputs each page to static html files.





## Marking a hydratable component

Marking a component as hydratable is very simple.

> This is what the v1 prototype looks like. I have an [alternative api][v2_idea] I'm currently working on.

~~~html
<script>
    // 1. Import the `hydrate` function
    import { hydrate } from 'svelte-partial-hydrating-prerenderer';
    import Button from '/components/ui/Button';

    let submitted = false;

    function handleSubmit() {
        console.log(`clicked button`);
        submitted = true;
    }
</script>

<!-- 2. Use it and pass it the current props of this component -->
<div use:hydrate={$$props}>
    {#if !submitted}
        <Button on:click={handleSubmit}>
            Submit
        </Button>
    {:else}
        <div>
            Thanks for submitting!
        </div>
    {/if}
</div>
~~~






## How does it work?

When the headless chrome [prerender phase][demo_prerender_script] runs, _marked_ hydratable components [are found][demo_config_pageinit] and their script tags are [appended to the DOM][demo_partial_script_tags] which is saved as a static html file. The [root script tag][demo_root_script] ends up [getting removed][demo_config_plugin] as well.

This results in the client loading a complete html tree upfront, followed by the partial hydration of any interactive components. No unnecessary js is loaded!

This prototype only works if your components are **not** bundled together. It's made especially to work with ES Modules which is what [svelvet][svelvet] outputs. However, this concept is not dependent on svelvet and could work with any svelte bundler that outputs components to individual ES Modules.








## Demo comparison

The [demo project][demo] has been deployed in three different ways. If you load all the demos and view the Network tab to compare, you'll notice that partial hydration only loads the required js files for the two interactive components.

> If the demo was a more complex, realistic site, we should notice a greater difference in amount of js saved due to partial hydration.

**[No hydration](https://jakedeichert.github.io/svelte-partial-hydrating-prerenderer/no-hydration/)**

This demo was compiled with svelvet to a `./public/dist` directory and then deployed as is, with no prerendring phase.

**[Partial hydration](https://jakedeichert.github.io/svelte-partial-hydrating-prerenderer/partial-hydration/)**

This demo was compiled with svelvet and then prerendered with this [module][npm]. The root script tag was removed and only the interactive component script tags remain.

**[Full hydration](https://jakedeichert.github.io/svelte-partial-hydrating-prerenderer/full-hydration/)**

This demo was compiled with svelvet and then prerendered but without partial hydration.






## Problems with this prototype

### You still have to deploy all the js files

This doesn't keep track of the graph of imports and which files are not needed after the prerender phase. This means you end up deploying all those excess js files, but at least the client doesn't have to load them.

Though, this should be easily solvable.

### The hydratable component's parent must ensure it's a single child

This is an unfortunate trade-off of the current marker api. However, my [v2 idea][v2_idea] should solve this.

~~~html
<main>
    <p>Stuff...</p>

    <div>
        <!-- Must be the single child within a parent to make it partially-hydratable -->
        <SomeComponentMarkedAsHydratable />
    </div>

    <p>Other things...</p>
</main>
~~~






## Alternative marker api

I have an alternative way to mark a component as hydratable and it solves the "single child of parent" problem described above.

Once I find time in the next few weeks to test this out, I'll update this repo.







[svelvet]: https://github.com/jakedeichert/svelvet
[demo]: https://github.com/jakedeichert/svelte-partial-hydrating-prerenderer/tree/master/demo
[npm]: https://www.npmjs.com/package/svelte-partial-hydrating-prerenderer
[use_action]: https://svelte.dev/docs#use_action
[v2_idea]: #alternative-marker-api
[demo_prerender_script]: https://github.com/jakedeichert/svelte-partial-hydrating-prerenderer/blob/b5737a1f50124b66307189596e8550b214ad4f02/demo/package.json#L10
[demo_partial_script_tags]: https://github.com/jakedeichert/svelte-partial-hydrating-prerenderer/blob/2d76445a9640698c31f1ec770edb2e3612ac77de/partial-hydration/index.html#L88-L106
[demo_root_script]: https://github.com/jakedeichert/svelte-partial-hydrating-prerenderer/blob/b5737a1f50124b66307189596e8550b214ad4f02/demo/public/index.html#L51-L57
[demo_config_plugin]: https://github.com/jakedeichert/svelte-partial-hydrating-prerenderer/blob/97000cae79f9029e5abd943aa345cdb91d0ddbfb/demo/prerender.config.js#L4-L12
[demo_config_pageinit]: https://github.com/jakedeichert/svelte-partial-hydrating-prerenderer/blob/97000cae79f9029e5abd943aa345cdb91d0ddbfb/demo/prerender.config.js#L23-L25



