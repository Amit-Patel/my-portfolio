import{n as f,s as p}from"./scheduler.f368f94a.js";const e=[];function d(o,l=f){let i;const n=new Set;function r(t){if(p(o,t)&&(o=t,i)){const c=!e.length;for(const s of n)s[1](),e.push(s,o);if(c){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function b(t){r(t(o))}function _(t,c=f){const s=[t,c];return n.add(s),n.size===1&&(i=l(r,b)||f),t(o),()=>{n.delete(s),n.size===0&&i&&(i(),i=null)}}return{set:r,update:b,subscribe:_}}var u;const h=((u=globalThis.__sveltekit_29cfx8)==null?void 0:u.base)??"/my-portfolio";var a;const m=((a=globalThis.__sveltekit_29cfx8)==null?void 0:a.assets)??h;export{m as a,h as b,d as w};