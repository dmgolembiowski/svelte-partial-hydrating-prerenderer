import{SvelteComponent as t,action_destroyer as e,add_flush_callback as l,append as n,assign as o,attr as s,bind as i,binding_callbacks as u,check_outros as c,children as r,claim_component as a,claim_element as f,claim_space as d,claim_text as m,create_component as h,destroy_component as g,destroy_each as p,detach as $,element as w,exclude_internal_props as v,group_outros as A,init as x,insert as S,is_function as H,listen as N,mount_component as y,noop as z,prevent_default as b,safe_not_equal as E,space as j,text as I,transition_in as V,transition_out as D}from"/svelte-partial-hydrating-prerenderer/dist/web_modules/svelte/internal.js";import{hydrate as k}from"/svelte-partial-hydrating-prerenderer/dist/web_modules/svelte-partial-hydrating-prerenderer.js";import B from"/svelte-partial-hydrating-prerenderer/dist/components/ui/Button.js";import G from"./Guest.js";function R(t,e,l){const n=t.slice();return n[13]=e[l],n[14]=e,n[15]=l,n}function T(t){let e,l;return{c(){e=w("div"),l=I("Thanks for responding!"),this.h()},l(t){e=f(t,"DIV",{class:!0});var n=r(e);l=m(n,"Thanks for responding!"),n.forEach($),this.h()},h(){s(e,"class","info svelte-xcz2d8")},m(t,o){S(t,e,o),n(e,l)},p:z,i:z,o:z,d(t){t&&$(e)}}}function _(t){let e,l,o,i,u,m,v=t[1],x=[];for(let e=0;e<v.length;e+=1)x[e]=C(R(t,v,e));const H=t=>D(x[t],1,1,()=>{x[t]=null}),z=new B({props:{primary:!0,submit:!0,$$slots:{default:[F]},$$scope:{ctx:t}}});let E=t[1].length<5&&M(t);return{c(){e=w("form");for(let t=0;t<x.length;t+=1)x[t].c();l=j(),o=w("div"),h(z.$$.fragment),i=j(),E&&E.c(),this.h()},l(t){e=f(t,"FORM",{novalidate:!0,class:!0});var n=r(e);for(let t=0;t<x.length;t+=1)x[t].l(n);l=d(n),o=f(n,"DIV",{class:!0});var s=r(o);a(z.$$.fragment,s),i=d(s),E&&E.l(s),s.forEach($),n.forEach($),this.h()},h(){s(o,"class","buttons svelte-xcz2d8"),e.noValidate=!0,s(e,"class","svelte-xcz2d8")},m(s,c,r){S(s,e,c);for(let t=0;t<x.length;t+=1)x[t].m(e,null);n(e,l),n(e,o),y(z,o,null),n(o,i),E&&E.m(o,null),u=!0,r&&m(),m=N(e,"submit",b(t[2]))},p(t,n){if(18&n){let o;for(v=t[1],o=0;o<v.length;o+=1){const s=R(t,v,o);x[o]?(x[o].p(s,n),V(x[o],1)):(x[o]=C(s),x[o].c(),V(x[o],1),x[o].m(e,l))}for(A(),o=v.length;o<x.length;o+=1)H(o);c()}const s={};65536&n&&(s.$$scope={dirty:n,ctx:t}),z.$set(s),t[1].length<5?E?(E.p(t,n),V(E,1)):(E=M(t),E.c(),V(E,1),E.m(o,null)):E&&(A(),D(E,1,1,()=>{E=null}),c())},i(t){if(!u){for(let t=0;t<v.length;t+=1)V(x[t]);V(z.$$.fragment,t),V(E),u=!0}},o(t){x=x.filter(Boolean);for(let t=0;t<x.length;t+=1)D(x[t]);D(z.$$.fragment,t),D(E),u=!1},d(t){t&&$(e),p(x,t),g(z),E&&E.d(),m()}}}function C(t){let e,n,o,c,m,p,v,A;function x(e){t[8].call(null,e,t[13])}function H(e){t[9].call(null,e,t[13])}function N(e){t[10].call(null,e,t[13])}function z(e){t[11].call(null,e,t[13])}function b(e){t[12].call(null,e,t[13])}let E={num:t[15]+1,onRemove:function(...e){return t[7](t[15],...e)}};void 0!==t[13].fullName&&(E.fullName=t[13].fullName),void 0!==t[13].isAttending&&(E.isAttending=t[13].isAttending),void 0!==t[13].wantHotel&&(E.wantHotel=t[13].wantHotel),void 0!==t[13].wantShuttle&&(E.wantShuttle=t[13].wantShuttle),void 0!==t[13].foodAllergies&&(E.foodAllergies=t[13].foodAllergies);const I=new G({props:E});return u.push(()=>i(I,"fullName",x)),u.push(()=>i(I,"isAttending",H)),u.push(()=>i(I,"wantHotel",N)),u.push(()=>i(I,"wantShuttle",z)),u.push(()=>i(I,"foodAllergies",b)),{c(){h(I.$$.fragment),p=j(),v=w("div"),this.h()},l(t){a(I.$$.fragment,t),p=d(t),v=f(t,"DIV",{class:!0}),r(v).forEach($),this.h()},h(){s(v,"class","spacer svelte-xcz2d8")},m(t,e){y(I,t,e),S(t,p,e),S(t,v,e),A=!0},p(s,i){t=s;const u={};!e&&2&i&&(e=!0,u.fullName=t[13].fullName,l(()=>e=!1)),!n&&2&i&&(n=!0,u.isAttending=t[13].isAttending,l(()=>n=!1)),!o&&2&i&&(o=!0,u.wantHotel=t[13].wantHotel,l(()=>o=!1)),!c&&2&i&&(c=!0,u.wantShuttle=t[13].wantShuttle,l(()=>c=!1)),!m&&2&i&&(m=!0,u.foodAllergies=t[13].foodAllergies,l(()=>m=!1)),I.$set(u)},i(t){A||(V(I.$$.fragment,t),A=!0)},o(t){D(I.$$.fragment,t),A=!1},d(t){g(I,t),t&&$(p),t&&$(v)}}}function F(t){let e;return{c(){e=I("Submit")},l(t){e=m(t,"Submit")},m(t,l){S(t,e,l)},d(t){t&&$(e)}}}function M(t){let e;const l=new B({props:{$$slots:{default:[O]},$$scope:{ctx:t}}});return l.$on("click",t[3]),{c(){h(l.$$.fragment)},l(t){a(l.$$.fragment,t)},m(t,n){y(l,t,n),e=!0},p(t,e){const n={};65536&e&&(n.$$scope={dirty:e,ctx:t}),l.$set(n)},i(t){e||(V(l.$$.fragment,t),e=!0)},o(t){D(l.$$.fragment,t),e=!1},d(t){g(l,t)}}}function O(t){let e;return{c(){e=I("Add Guest")},l(t){e=m(t,"Add Guest")},m(t,l){S(t,e,l)},d(t){t&&$(e)}}}function q(t){let l,n,o,s,i,u;const a=[_,T],d=[];function m(t,e){return t[0]?1:0}return n=m(t),o=d[n]=a[n](t),{c(){l=w("div"),o.c()},l(t){l=f(t,"DIV",{});var e=r(l);o.l(e),e.forEach($)},m(o,c,r){S(o,l,c),d[n].m(l,null),i=!0,r&&u(),u=e(s=k.call(null,l,t[5]))},p(t,[e]){let i=n;n=m(t),n===i?d[n].p(t,e):(A(),D(d[i],1,1,()=>{d[i]=null}),c(),o=d[n],o||(o=d[n]=a[n](t),o.c()),V(o,1),o.m(l,null)),s&&H(s.update)&&32&e&&s.update.call(null,t[5])},i(t){i||(V(o),i=!0)},o(t){D(o),i=!1},d(t){t&&$(l),d[n].d(),u()}}}function J(t,e,l){let n=!1;const s=()=>({fullName:"",isAttending:!0,wantHotel:!1,wantShuttle:!1,foodAllergies:""});let i=[{fullName:"",isAttending:!0,wantHotel:!1,wantShuttle:!1,foodAllergies:""},{fullName:"",isAttending:!0,wantHotel:!1,wantShuttle:!1,foodAllergies:""}];function u(t){i.splice(t,1),l(1,i)}return t.$set=t=>{l(5,e=o(o({},e),v(t)))},e=v(e),[n,i,function(){l(0,n=!0)},function(){l(1,i=[...i,{fullName:"",isAttending:!0,wantHotel:!1,wantShuttle:!1,foodAllergies:""}])},u,e,s,t=>u(t),function(t,e){e.fullName=t,l(1,i)},function(t,e){e.isAttending=t,l(1,i)},function(t,e){e.wantHotel=t,l(1,i)},function(t,e){e.wantShuttle=t,l(1,i)},function(t,e){e.foodAllergies=t,l(1,i)}]}export default class extends t{constructor(t){var e;super(),document.getElementById("svelte-xcz2d8-style")||((e=w("style")).id="svelte-xcz2d8-style",e.textContent="form.svelte-xcz2d8{margin:2em auto;max-width:500px}.spacer.svelte-xcz2d8{min-height:20px}.info.svelte-xcz2d8{font-weight:bold;text-align:center;color:#ee811c;padding:10px 0 0 0}.buttons.svelte-xcz2d8{display:flex;justify-content:center}",n(document.head,e)),x(this,t,J,q,E,{})}}