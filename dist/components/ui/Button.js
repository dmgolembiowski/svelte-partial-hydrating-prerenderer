import{SvelteComponent as e,append as n,attr as i,bubble as l,children as t,claim_element as a,create_slot as c,detach as r,element as d,get_slot_changes as s,get_slot_context as o,init as p,insert as g,listen as u,null_to_empty as f,safe_not_equal as b,transition_in as m,transition_out as v}from"/svelte-partial-hydrating-prerenderer/dist/web_modules/svelte/internal.js";import{cx as j}from"/svelte-partial-hydrating-prerenderer/dist/utils/common.js";function h(e){let n,l,p,b;const j=e[9].default,h=c(j,e,e[8],null);return{c(){n=d("button"),h&&h.c(),this.h()},l(e){n=a(e,"BUTTON",{type:!0,class:!0});var i=t(n);h&&h.l(i),i.forEach(r),this.h()},h(){i(n,"type",e[0]),i(n,"class",l=f(e[1])+" svelte-16jcgni")},m(i,l,t){g(i,n,l),h&&h.m(n,null),p=!0,t&&b(),b=u(n,"click",e[10])},p(e,[t]){h&&h.p&&256&t&&h.p(o(j,e,e[8],null),s(j,e[8],t,null)),(!p||1&t)&&i(n,"type",e[0]),(!p||2&t&&l!==(l=f(e[1])+" svelte-16jcgni"))&&i(n,"class",l)},i(e){p||(m(h,e),p=!0)},o(e){v(h,e),p=!1},d(e){e&&r(n),h&&h.d(e),b()}}}function y(e,n,i){let t,a,{submit:c=!1}=n,{plain:r=!1}=n,{primary:d=!1}=n,{danger:s=!1}=n,{disabled:o=!1}=n,{cancel:p=!1}=n,{$$slots:g={},$$scope:u}=n;return e.$set=e=>{"submit"in e&&i(2,c=e.submit),"plain"in e&&i(3,r=e.plain),"primary"in e&&i(4,d=e.primary),"danger"in e&&i(5,s=e.danger),"disabled"in e&&i(6,o=e.disabled),"cancel"in e&&i(7,p=e.cancel),"$$scope"in e&&i(8,u=e.$$scope)},e.$$.update=()=>{4&e.$$.dirty&&i(0,t=c?"submit":"button"),248&e.$$.dirty&&i(1,a=j("plain",!r&&!p&&"filled",d&&"primary",s&&"danger",o&&"disabled",p&&"cancel"))},[t,a,c,r,d,s,o,p,u,g,function(n){l(e,n)}]}export default class extends e{constructor(e){var i;super(),document.getElementById("svelte-16jcgni-style")||((i=d("style")).id="svelte-16jcgni-style",i.textContent=".plain.svelte-16jcgni{background-color:transparent;color:#67a8c1;cursor:pointer;font-size:18px;font-weight:bold;margin:0 10px;padding:10px;display:inline-block;text-align:center;vertical-align:middle;flex-shrink:0}.plain.svelte-16jcgni:hover{color:#4f8499}.filled.svelte-16jcgni{background:#67a8c1;border-radius:100px;padding:10px 18px;color:#fff;min-width:100px}.filled.svelte-16jcgni:hover{color:#fff;background:#4f8499}.filled.danger.svelte-16jcgni{background:#dd4747}.filled.danger.svelte-16jcgni:hover{background:#b92525}.primary.svelte-16jcgni{background:#61c689}.primary.svelte-16jcgni:hover{background:#3e9d63}.loading.svelte-16jcgni{padding:2px 0}.disabled.svelte-16jcgni{background:#8f8f8f;cursor:not-allowed}.disabled.svelte-16jcgni:hover{background:#8f8f8f}.cancel.svelte-16jcgni{color:#606f7b}@media(max-width: 550px){.plain.svelte-16jcgni{font-size:15px}}",n(document.head,i)),p(this,e,y,h,b,{submit:2,plain:3,primary:4,danger:5,disabled:6,cancel:7})}}