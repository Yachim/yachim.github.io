import s from"./ContentSlot.b9d90576.js";import{h as o,i as u,l as f,x as i}from"./entry.f83e56e2.js";import"./utils.5041cc1a.js";const l=o({name:"Markdown",extends:s,setup(t){const{parent:e}=i(),{between:n,default:a}=u(),r=f(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:a,tags:r,between:n,parent:e}}});export{l as default};