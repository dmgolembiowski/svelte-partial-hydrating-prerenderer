import{SvelteComponent as e,claim_component as t,claim_space as n,create_component as r,destroy_component as m,detach as $,init as o,insert as f,mount_component as a,noop as s,safe_not_equal as g,space as i,transition_in as l,transition_out as p}from"/svelte-partial-hydrating-prerenderer/dist/web_modules/svelte/internal.js";import c from"./components/Header.js";import d from"./components/Footer.js";import u from"./HomePage/index.js";function j(e){let o,g,j;const w=new c({}),x=new u({}),H=new d({});return{c(){r(w.$$.fragment),o=i(),r(x.$$.fragment),g=i(),r(H.$$.fragment)},l(e){t(w.$$.fragment,e),o=n(e),t(x.$$.fragment,e),g=n(e),t(H.$$.fragment,e)},m(e,t){a(w,e,t),f(e,o,t),a(x,e,t),f(e,g,t),a(H,e,t),j=!0},p:s,i(e){j||(l(w.$$.fragment,e),l(x.$$.fragment,e),l(H.$$.fragment,e),j=!0)},o(e){p(w.$$.fragment,e),p(x.$$.fragment,e),p(H.$$.fragment,e),j=!1},d(e){m(w,e),e&&$(o),m(x,e),e&&$(g),m(H,e)}}}export default class extends e{constructor(e){super(),o(this,e,null,j,g,{})}}
