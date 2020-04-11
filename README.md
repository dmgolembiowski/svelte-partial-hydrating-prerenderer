# Svelte Partial-hydrating Prerenderer

A **proof of concept** partial-hydrating prerenderer for svelte.

This project was an experiment and is not intended to be used by anyone. Hopefully the ideas presented here will help spawn more discussion around partial hydration and bundlers.

---


## What's partial hydration?

First, let's talk about normal hydration.

When you prerender your site, either at build time or at runtime via server-side rendering (SSR), the client receives a completely rendered html tree upfront. Once your js bundles have finished downloading, your app root typically mounts to the tree (hydrates it) and handles rendering and interactivity from that point forwards.

What's the problem with this?

Well for many sites, a lot of the content may actually be static. Hydrating static content is unnecessary for the most part and you end up sending down excess js to render what's already showing. A good example of this is a site's header and footer which rarely include interactivity other than static links to pages. For a blog, likely most of the content is static. Maybe you just have a simple newsletter signup form with an email input and submit button at the bottom of every page which is interactive.

The goal of partial hydration is to only hydrate parts of the site that need to be. Ideally, we only want to hydrate the interactive parts, as the static parts won't change after a rerender. This also means we don't want to load unnecessary js files that the client doesn't need.

So if we know that our header, footer and body text is static, then we don't want to send down the js for those since the prerender phase already rendered them to our html file. But for interactive parts, like an email newsletter form, we want to hydrate that so it works.



## Why doesn't everyone do partial hydration?

Mostly because it's hard right now. Existing bundlers combine js files into chunks based on the assumption that you want to load _all_ your js at runtime. Because of this, it can be challenging to configure the correct separation of code that efficient partial hydration requires.

Here's an example scenario. If you have a `Button` component that's used in many places, it may get put into a common bundle that contains other components like `Input`, `Header` and `Footer`. Now let's say that you have an `EmailNewsletterSignupForm` at the bottom of every page which is just an `Input` and `Button` to submit. Ideally, you don't want to send down all the js for the static parts of your site... but because your `Button` is bundled with `Header` and `Footer`, you're going to be loading unnecessary code.

The other reason is that prerendering and partial hydration _does not_ make sense for certain sites. For a static site or blog with a few interactive components, partial hydration is ideal. But for a fully dynamic and interactive app with limited static content, it won't usually end up being worth it. And if you really think you need _global-infecting features_ like client-side routing or theming, then partial hydration is just not a right fit for you.

In my case, I wanted the ability to develop _static_ sites completely with svelte and not ship all the unnecessary js. I only have a few form components that benefit from interactivity. And I don't need client-side routing... I'm just using plain, old, simple links. That's why prerendering and partial hydration works for me :)




## What does this proof of concept do?

I've published this [example module to npm][npm]. It has two jobs.

First, it's a [`<Hydrate/>`][hydrate_component] component that lets you _mark_ a svelte component as hydratable.

Second, it's a [headless chrome prerenderer][module_cli] that loads your svelte site, renders your component tree and outputs each page to static html files.





## Marking a hydratable component

Marking a component as hydratable is pretty simple.

~~~html
<!-- src/HomePage/index.svelte -->
<script>
    // 1. Import the <Hydrate/> component.
    import { Hydrate } from 'svelte-partial-hydrating-prerenderer';
</script>

<div>
    <div>...</div>

    <!-- 2. Pass an absolute file path to the component you want to make hydratable. -->
    <Hydrate
        _this="/dist/HomePage/SomeInteractiveForm.js"
        _style="display: flex"
        _class="someclass"
        someProp="whatever"
        anotherProp="whatever"/>
    <!-- 💡 Any props you add will be passed through to that component. -->
    <!-- 💡 _style is used to style the wrapping div. -->
    <!-- 💡 _class is also available to style the wrapping div. -->

    <div>...</div>
</div>
~~~






## How does it work?

When the headless chrome [prerender phase][demo_prerender_script] runs, the `<Hydrate/>` generates a script tag for their component and [appends it to the DOM][demo_partial_script_tags] which is saved as a static html file. The [root script tag][demo_root_script] ends up [getting removed][demo_config_plugin] as well.

This results in the client loading a complete html tree upfront, followed by the partial hydration of any interactive components. No unnecessary js is loaded!

This prototype only works if your components are **not** bundled together. It's made especially to work with ES Modules which is what [svelvet][svelvet] outputs. However, this concept is not dependent on svelvet and could work with any svelte bundler that outputs components to individual ES Modules.








## Demo comparison

> TODO: i need to rebuild these demos

The [demo project][demo] has been deployed in three different ways. If you load all the demos and view the Network tab to compare, you'll notice that partial hydration only loads the js files required for the two interactive components and their children.

> If the demo was a more complex, realistic site, we should notice a greater difference in the amount of js saved due to partial hydration.

**[No hydration](https://jakedeichert.github.io/svelte-partial-hydrating-prerenderer/no-hydration/)**

This demo was compiled with svelvet and then deployed [as is](https://github.com/jakedeichert/svelte-partial-hydrating-prerenderer/blob/gh-pages/no-hydration/index.html), with no prerendering phase.

**[Partial hydration](https://jakedeichert.github.io/svelte-partial-hydrating-prerenderer/partial-hydration/)**

This demo was compiled with svelvet and then [prerendered](https://github.com/jakedeichert/svelte-partial-hydrating-prerenderer/blob/gh-pages/partial-hydration/index.html) with this [module][npm]. The root script tag was removed and only the interactive component script tags remain.

**[Full hydration](https://jakedeichert.github.io/svelte-partial-hydrating-prerenderer/full-hydration/)**

This demo was compiled with svelvet and then [prerendered](https://github.com/jakedeichert/svelte-partial-hydrating-prerenderer/blob/gh-pages/full-hydration/index.html) but without partial hydration.






## Problems with this prototype

### You still have to deploy all the js files

This doesn't keep track of the graph of imports and which files are not needed after the prerender phase. This means you end up deploying all those excess js files, but at least the client doesn't have to load them.



## Other marker api attempts

I tried a few concepts that didn't work out...

### Monkey patching svelte/internal methods

My goal here was to hack the svelte methods at runtime during the prerender phase (not in production) to look for the existence of a `hydrate=true` prop. If that prop was found on a component, I would [mark it][prerender_mark]. The problem here is that you can't monkey patch `svelte/internal` methods when loading it via ES Modules... because they are read-only!

### use:hydrate component action

TODO...



[hydrate_component]: https://github.com/jakedeichert/svelte-partial-hydrating-prerenderer/blob/fb23969a33c016003b805a4a684980c337a93fc0/lib/Hydrate.svelte
[module_api]: https://github.com/jakedeichert/svelte-partial-hydrating-prerenderer/blob/master/lib/index.js
[module_cli]: https://github.com/jakedeichert/svelte-partial-hydrating-prerenderer/blob/master/bin/index.js
[svelvet]: https://github.com/jakedeichert/svelvet
[use_action_hydrate]: https://github.com/jakedeichert/svelte-partial-hydrating-prerenderer/blob/8b35859fcd75452f5deebbc88cf46b62a75aed07/lib/index.js#L3
[prerender_mark]: https://github.com/jakedeichert/svelte-partial-hydrating-prerenderer/blob/master/plugins/mark-hydratable-component.js
[demo]: https://github.com/jakedeichert/svelte-partial-hydrating-prerenderer/tree/master/demo
[npm]: https://www.npmjs.com/package/svelte-partial-hydrating-prerenderer
[use_action]: https://svelte.dev/docs#use_action
[demo_prerender_script]: https://github.com/jakedeichert/svelte-partial-hydrating-prerenderer/blob/b5737a1f50124b66307189596e8550b214ad4f02/demo/package.json#L10
[demo_partial_script_tags]: https://github.com/jakedeichert/svelte-partial-hydrating-prerenderer/blob/2d76445a9640698c31f1ec770edb2e3612ac77de/partial-hydration/index.html#L88-L106
[demo_root_script]: https://github.com/jakedeichert/svelte-partial-hydrating-prerenderer/blob/b5737a1f50124b66307189596e8550b214ad4f02/demo/public/index.html#L51-L57
[demo_config_plugin]: https://github.com/jakedeichert/svelte-partial-hydrating-prerenderer/blob/d21d1c0827711ace4fcdf2fb9038fe55f10a9a8d/demo/prerender.config.js#L1-L11

