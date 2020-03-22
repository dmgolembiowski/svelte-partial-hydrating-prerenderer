import{SvelteComponent as t,action_destroyer as e,add_flush_callback as n,append as l,assign as s,attr as r,bind as o,binding_callbacks as a,check_outros as i,children as u,claim_component as c,claim_element as m,claim_space as f,claim_text as d,create_component as p,destroy_component as $,detach as v,element as b,exclude_internal_props as h,group_outros as g,init as x,insert as z,is_function as y,listen as w,mount_component as E,noop as I,prevent_default as j,safe_not_equal as V,space as D,text as T,transition_in as k,transition_out as B}from"/svelte-partial-hydrating-prerenderer/dist/web_modules/svelte/internal.js";import{hydrate as S}from"/svelte-partial-hydrating-prerenderer/dist/web_modules/svelte-partial-hydrating-prerenderer.js";import _ from"/svelte-partial-hydrating-prerenderer/dist/components/ui/Button.js";import A from"/svelte-partial-hydrating-prerenderer/dist/components/ui/Input.js";function C(t){let e,n;return{c(){e=b("div"),n=T("Thanks for submitting!"),this.h()},l(t){e=m(t,"DIV",{class:!0});var l=u(e);n=d(l,"Thanks for submitting!"),l.forEach(v),this.h()},h(){r(e,"class","info svelte-1r3bnez")},m(t,s){z(t,e,s),l(e,n)},p:I,i:I,o:I,d(t){t&&v(e)}}}function F(t){let e,s,i,d,h,g,x,y,I;function V(e){t[5].call(null,e)}let T={label:"Title"};void 0!==t[2]&&(T.value=t[2]);const S=new A({props:T});function C(e){t[6].call(null,e)}a.push(()=>o(S,"value",V));let F={label:"Artist"};void 0!==t[1]&&(F.value=t[1]);const O=new A({props:F});a.push(()=>o(O,"value",C));const R=new _({props:{primary:!0,submit:!0,$$slots:{default:[M]},$$scope:{ctx:t}}});return{c(){e=b("form"),s=b("div"),p(S.$$.fragment),d=D(),p(O.$$.fragment),g=D(),x=b("div"),p(R.$$.fragment),this.h()},l(t){e=m(t,"FORM",{novalidate:!0,class:!0});var n=u(e);s=m(n,"DIV",{class:!0});var l=u(s);c(S.$$.fragment,l),d=f(l),c(O.$$.fragment,l),l.forEach(v),g=f(n),x=m(n,"DIV",{class:!0});var r=u(x);c(R.$$.fragment,r),r.forEach(v),n.forEach(v),this.h()},h(){r(s,"class","inputs svelte-1r3bnez"),r(x,"class","buttons svelte-1r3bnez"),e.noValidate=!0,r(e,"class","svelte-1r3bnez")},m(n,r,o){z(n,e,r),l(e,s),E(S,s,null),l(s,d),E(O,s,null),l(e,g),l(e,x),E(R,x,null),y=!0,o&&I(),I=w(e,"submit",j(t[3]))},p(t,e){const l={};!i&&4&e&&(i=!0,l.value=t[2],n(()=>i=!1)),S.$set(l);const s={};!h&&2&e&&(h=!0,s.value=t[1],n(()=>h=!1)),O.$set(s);const r={};128&e&&(r.$$scope={dirty:e,ctx:t}),R.$set(r)},i(t){y||(k(S.$$.fragment,t),k(O.$$.fragment,t),k(R.$$.fragment,t),y=!0)},o(t){B(S.$$.fragment,t),B(O.$$.fragment,t),B(R.$$.fragment,t),y=!1},d(t){t&&v(e),$(S),$(O),$(R),I()}}}function M(t){let e;return{c(){e=T("Submit")},l(t){e=d(t,"Submit")},m(t,n){z(t,e,n)},d(t){t&&v(e)}}}function O(t){let n,l,s,r,o,a;const c=[F,C],f=[];function d(t,e){return t[0]?1:0}return l=d(t),s=f[l]=c[l](t),{c(){n=b("div"),s.c()},l(t){n=m(t,"DIV",{});var e=u(n);s.l(e),e.forEach(v)},m(s,i,u){z(s,n,i),f[l].m(n,null),o=!0,u&&a(),a=e(r=S.call(null,n,t[4]))},p(t,[e]){let o=l;l=d(t),l===o?f[l].p(t,e):(g(),B(f[o],1,1,()=>{f[o]=null}),i(),s=f[l],s||(s=f[l]=c[l](t),s.c()),k(s,1),s.m(n,null)),r&&y(r.update)&&16&e&&r.update.call(null,t[4])},i(t){o||(k(s),o=!0)},o(t){B(s),o=!1},d(t){t&&v(n),f[l].d(),a()}}}function R(t,e,n){let l=!1,r="",o="";return t.$set=t=>{n(4,e=s(s({},e),h(t)))},e=h(e),[l,r,o,function(){n(0,l=!0)},e,function(t){o=t,n(2,o)},function(t){r=t,n(1,r)}]}export default class extends t{constructor(t){var e;super(),document.getElementById("svelte-1r3bnez-style")||((e=b("style")).id="svelte-1r3bnez-style",e.textContent="form.svelte-1r3bnez{margin:2em auto;max-width:300px}.inputs.svelte-1r3bnez{margin:2em 0}.inputs.svelte-1r3bnez>div{margin:0 0 12px 0}.info.svelte-1r3bnez{font-weight:bold;text-align:center;color:#ee811c;padding:10px 0 0 0}.buttons.svelte-1r3bnez{display:flex;justify-content:center}",l(document.head,e)),x(this,t,R,O,V,{})}}
