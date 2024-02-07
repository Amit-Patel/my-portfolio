import{s as O,T as P,U as C,h as k,d as h,j as c,i as p,K as g,n as V,q as te,a as I,f as E,l as y,V as se,c as $,g as x,m as D,W as le,M as ae}from"../chunks/scheduler.f368f94a.js";import{S as W,i as X,b as Y,d as J,m as Q,a as M,c as ne,t as S,e as R,g as re}from"../chunks/index.b73477ac.js";import{e as G}from"../chunks/each.98ea469f.js";import{I as T,u as U,g as ie,T as Z,H as oe}from"../chunks/params.12183f11.js";import{M as ce}from"../chunks/MainTitle.3fa226c4.js";import{i as fe}from"../chunks/index.97b3c5e0.js";import{b as ue}from"../chunks/paths.bd152e90.js";const K=l=>l===T.Youtube?"0 0 461.001 461.001":l===T.Facebook?"0 0 408.788 408.788":[T.GitHub,T.Search,T.Code].includes(l)?"0 0 16 16":"0 0 24 24";function me(l){let e,a,n;return{c(){e=P("svg"),a=P("path"),this.h()},l(s){e=C(s,"svg",{class:!0,viewBox:!0,fill:!0,height:!0,width:!0});var t=k(e);a=C(t,"path",{d:!0}),k(a).forEach(h),t.forEach(h),this.h()},h(){c(a,"d",l[2]),c(e,"class","inline-block"),c(e,"viewBox",n=K(l[2])),c(e,"fill",l[1]),c(e,"height",l[0]),c(e,"width",l[0])},m(s,t){p(s,e,t),g(e,a),l[4](e)},p(s,[t]){t&4&&c(a,"d",s[2]),t&4&&n!==(n=K(s[2]))&&c(e,"viewBox",n),t&2&&c(e,"fill",s[1]),t&1&&c(e,"height",s[0]),t&1&&c(e,"width",s[0])},i:V,o:V,d(s){s&&h(e),l[4](null)}}}function he(l,e,a){let n,{size:s="30px"}=e,{color:t="var(--main-text)"}=e,{icon:f}=e;function d(m){te[m?"unshift":"push"](()=>{n=m,a(3,n)})}return l.$$set=m=>{"size"in m&&a(0,s=m.size),"color"in m&&a(1,t=m.color),"icon"in m&&a(2,f=m.icon)},[s,t,f,n,d]}class _e extends W{constructor(e){super(),X(this,e,he,me,O,{size:0,color:1,icon:2})}}function L(l,e,a){const n=l.slice();return n[7]=e[a],n}function ge(l){let e,a,n,s;return{c(){e=y(l[3]),a=I(),n=y(l[1]),s=y(",")},l(t){e=D(t,l[3]),a=$(t),n=D(t,l[1]),s=D(t,",")},m(t,f){p(t,e,f),p(t,a,f),p(t,n,f),p(t,s,f)},p:V,d(t){t&&(h(e),h(a),h(n),h(s))}}}function N(l){let e,a,n,s;return a=new _e({props:{icon:ie(l[7].platform),color:"var(--accent-text)",size:"20px"}}),{c(){e=E("a"),Y(a.$$.fragment),n=I(),this.h()},l(t){e=x(t,"A",{class:!0,href:!0,target:!0,rel:!0});var f=k(e);J(a.$$.fragment,f),n=$(f),f.forEach(h),this.h()},h(){c(e,"class","decoration-none"),c(e,"href",`${l[5](l[7].link)?"mailto:":""}${l[7].link}`),c(e,"target","_blank"),c(e,"rel","noreferrer")},m(t,f){p(t,e,f),Q(a,e,null),g(e,n),s=!0},p:V,i(t){s||(M(a.$$.fragment,t),s=!0)},o(t){S(a.$$.fragment,t),s=!1},d(t){t&&h(e),R(a)}}}function de(l){let e,a,n,s,t,f,d,m,z,v,q,w,F,B;document.title=e=U(l[4],Z),t=new ce({props:{classes:"md:text-left ",$$slots:{default:[ge]},$$scope:{ctx:l}}});let b=G(l[2]),i=[];for(let r=0;r<b.length;r+=1)i[r]=N(L(l,b,r));const ee=r=>S(i[r],1,1,()=>{i[r]=null});return{c(){a=I(),n=E("div"),s=E("div"),Y(t.$$.fragment),f=I(),d=E("p"),m=y(l[0]),z=I(),v=E("div");for(let r=0;r<i.length;r+=1)i[r].c();q=I(),w=E("img"),this.h()},l(r){se("svelte-gorrxo",document.head).forEach(h),a=$(r),n=x(r,"DIV",{class:!0});var _=k(n);s=x(_,"DIV",{class:!0});var o=k(s);J(t.$$.fragment,o),f=$(o),d=x(o,"P",{class:!0});var j=k(d);m=D(j,l[0]),j.forEach(h),z=$(o),v=x(o,"DIV",{class:!0});var H=k(v);for(let A=0;A<i.length;A+=1)i[A].l(H);H.forEach(h),o.forEach(h),q=$(_),w=x(_,"IMG",{src:!0,alt:!0}),_.forEach(h),this.h()},h(){c(d,"class","text-[var(--tertiary-text)] text-center md:text-left text-[1.2em] font-extralight"),c(v,"class","row justify-center md:justify-start p-y-15px p-x-0px gap-2"),c(s,"class","md:flex-1 gap-10px"),le(w.src,F=ue+"/images/profile/amit.jpeg")||c(w,"src",F),c(w,"alt","Description of the image"),c(n,"class","col self-center flex-1 md:flex-row md:slef-stretch justify-center lg:justify-between items-center p-y-0px p-x-10px")},m(r,u){p(r,a,u),p(r,n,u),g(n,s),Q(t,s,null),g(s,f),g(s,d),g(d,m),g(s,z),g(s,v);for(let _=0;_<i.length;_+=1)i[_]&&i[_].m(v,null);g(n,q),g(n,w),B=!0},p(r,[u]){(!B||u&16)&&e!==(e=U(r[4],Z))&&(document.title=e);const _={};if(u&1024&&(_.$$scope={dirty:u,ctx:r}),t.$set(_),u&36){b=G(r[2]);let o;for(o=0;o<b.length;o+=1){const j=L(r,b,o);i[o]?(i[o].p(j,u),M(i[o],1)):(i[o]=N(j),i[o].c(),M(i[o],1),i[o].m(v,null))}for(re(),o=b.length;o<i.length;o+=1)ee(o);ne()}},i(r){if(!B){M(t.$$.fragment,r);for(let u=0;u<b.length;u+=1)M(i[u]);B=!0}},o(r){S(t.$$.fragment,r),i=i.filter(Boolean);for(let u=0;u<i.length;u+=1)S(i[u]);B=!1},d(r){r&&(h(a),h(n)),R(t),ae(i,r)}}}function pe(l){const{description:e,lastName:a,links:n,name:s,title:t,skills:f}=oe;return[e,a,n,s,t,m=>{const z=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return!fe(m)&&z.test(m)}]}class $e extends W{constructor(e){super(),X(this,e,pe,de,O,{})}}export{$e as component};
