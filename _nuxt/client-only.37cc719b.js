import{h as o,r as u,L as d,I as k}from"./entry.7061c7f9.js";const i=o({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(b,{slots:a,attrs:t}){const l=u(!1);return d(()=>{l.value=!0}),e=>{var r;if(l.value)return(r=a.default)==null?void 0:r.call(a);const n=a.fallback||a.placeholder;if(n)return n();const c=e.fallback||e.placeholder||"",f=e.fallbackTag||e.placeholderTag||"span";return k(f,t,c)}}});export{i as _};
