import{SvelteComponent as t,add_flush_callback as e,append as n,attr as s,bind as l,binding_callbacks as r,check_outros as o,children as i,claim_component as a,claim_element as u,claim_space as c,claim_text as m,create_component as f,destroy_component as $,detach as d,element as v,group_outros as p,init as b,insert as h,listen as g,mount_component as x,noop as z,prevent_default as y,safe_not_equal as w,space as E,text as I,transition_in as V,transition_out as j}from"/svelte-partial-hydrating-prerenderer/dist/web_modules/svelte/internal.js";import D from"/svelte-partial-hydrating-prerenderer/dist/components/ui/Button.js";import T from"/svelte-partial-hydrating-prerenderer/dist/components/ui/Input.js";function k(t){let e,l;return{c(){e=v("div"),l=I("Thanks for submitting!"),this.h()},l(t){e=u(t,"DIV",{class:!0});var n=i(e);l=m(n,"Thanks for submitting!"),n.forEach(d),this.h()},h(){s(e,"class","info svelte-1r3bnez")},m(t,s){h(t,e,s),n(e,l)},p:z,i:z,o:z,d(t){t&&d(e)}}}function B(t){let o,m,p,b,z,w,I,k,B;function A(e){t[4].call(null,e)}let C={label:"Title"};void 0!==t[2]&&(C.value=t[2]);const F=new T({props:C});function M(e){t[5].call(null,e)}r.push(()=>l(F,"value",A));let O={label:"Artist"};void 0!==t[1]&&(O.value=t[1]);const R=new T({props:O});r.push(()=>l(R,"value",M));const _=new D({props:{primary:!0,submit:!0,$$slots:{default:[S]},$$scope:{ctx:t}}});return{c(){o=v("form"),m=v("div"),f(F.$$.fragment),b=E(),f(R.$$.fragment),w=E(),I=v("div"),f(_.$$.fragment),this.h()},l(t){o=u(t,"FORM",{novalidate:!0,class:!0});var e=i(o);m=u(e,"DIV",{class:!0});var n=i(m);a(F.$$.fragment,n),b=c(n),a(R.$$.fragment,n),n.forEach(d),w=c(e),I=u(e,"DIV",{class:!0});var s=i(I);a(_.$$.fragment,s),s.forEach(d),e.forEach(d),this.h()},h(){s(m,"class","inputs svelte-1r3bnez"),s(I,"class","buttons svelte-1r3bnez"),o.noValidate=!0,s(o,"class","svelte-1r3bnez")},m(e,s,l){h(e,o,s),n(o,m),x(F,m,null),n(m,b),x(R,m,null),n(o,w),n(o,I),x(_,I,null),k=!0,l&&B(),B=g(o,"submit",y(t[3]))},p(t,n){const s={};!p&&4&n&&(p=!0,s.value=t[2],e(()=>p=!1)),F.$set(s);const l={};!z&&2&n&&(z=!0,l.value=t[1],e(()=>z=!1)),R.$set(l);const r={};64&n&&(r.$$scope={dirty:n,ctx:t}),_.$set(r)},i(t){k||(V(F.$$.fragment,t),V(R.$$.fragment,t),V(_.$$.fragment,t),k=!0)},o(t){j(F.$$.fragment,t),j(R.$$.fragment,t),j(_.$$.fragment,t),k=!1},d(t){t&&d(o),$(F),$(R),$(_),B()}}}function S(t){let e;return{c(){e=I("Submit")},l(t){e=m(t,"Submit")},m(t,n){h(t,e,n)},d(t){t&&d(e)}}}function A(t){let e,n,s,l;const r=[B,k],a=[];function c(t,e){return t[0]?1:0}return n=c(t),s=a[n]=r[n](t),{c(){e=v("div"),s.c()},l(t){e=u(t,"DIV",{});var n=i(e);s.l(n),n.forEach(d)},m(t,s){h(t,e,s),a[n].m(e,null),l=!0},p(t,[l]){let i=n;n=c(t),n===i?a[n].p(t,l):(p(),j(a[i],1,1,()=>{a[i]=null}),o(),s=a[n],s||(s=a[n]=r[n](t),s.c()),V(s,1),s.m(e,null))},i(t){l||(V(s),l=!0)},o(t){j(s),l=!1},d(t){t&&d(e),a[n].d()}}}function C(t,e,n){let s=!1,l="",r="";return[s,l,r,function(){n(0,s=!0)},function(t){r=t,n(2,r)},function(t){l=t,n(1,l)}]}export default class extends t{constructor(t){var e;super(),document.getElementById("svelte-1r3bnez-style")||((e=v("style")).id="svelte-1r3bnez-style",e.textContent="form.svelte-1r3bnez{margin:2em auto;max-width:300px}.inputs.svelte-1r3bnez{margin:2em 0}.inputs.svelte-1r3bnez>div{margin:0 0 12px 0}.info.svelte-1r3bnez{font-weight:bold;text-align:center;color:#ee811c;padding:10px 0 0 0}.buttons.svelte-1r3bnez{display:flex;justify-content:center}",n(document.head,e)),b(this,t,C,A,w,{})}}