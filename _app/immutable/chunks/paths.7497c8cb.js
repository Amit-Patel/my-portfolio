import{n as c,s as p}from"./scheduler.f368f94a.js";const e=[];function m(o,a=c){let i;const n=new Set;function r(t){if(p(o,t)&&(o=t,i)){const b=!e.length;for(const s of n)s[1](),e.push(s,o);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){r(t(o))}function _(t,b=c){const s=[t,b];return n.add(s),n.size===1&&(i=a(r,f)||c),t(o),()=>{n.delete(s),n.size===0&&i&&(i(),i=null)}}return{set:r,update:f,subscribe:_}}var l;const h=((l=globalThis.__sveltekit_6jlm1q)==null?void 0:l.base)??"/my-portfolio";var u;const q=((u=globalThis.__sveltekit_6jlm1q)==null?void 0:u.assets)??h;export{q as a,h as b,m as w};
