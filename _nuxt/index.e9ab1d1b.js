import{h as p,C as w,o as m,I as h,Q as a,F as u,H as _,R as t,S as o,U as j,G as y,V as B,W as P,r as v,L as C,u as f,X as $,Y as O,Z as q,e as T}from"./entry.942b8d9e.js";import{_ as k}from"./client-only.9892c6d5.js";/* empty css                   *//* empty css                    *//* empty css                      */const A=["title","href"],S=p({__name:"SocialButton",props:{title:null,icon:null,href:null},setup(s){const e=s;return(i,r)=>{const n=w("font-awesome-icon"),l=k;return m(),h("a",{title:e.title,class:"social-button",href:e.href,target:"_blank"},[a(l,null,{default:u(()=>[a(n,{icon:e.icon},null,8,["icon"])]),_:1})],8,A)}}}),E={},M={id:"top",class:"page-part"},R={class:"grid grid-areas-aboutMobile sm:grid-areas-about grid-cols-aboutMobile sm:grid-cols-about grid-rows-aboutMobile sm:grid-rows-about gap-x-8 gap-y-8 place-items-center"},z=t("h1",{class:"grid-in-heading font-medium text-6xl text-accent text-center"},"Jáchym Kohout",-1),F=t("h2",{class:"grid-in-subheading text-3xl text-center"},"Frontend developper",-1),H={class:"flex gap-3 grid-in-socials"},L={href:"#projects",class:"flex grid-in-projects-button gap-3 items-center transition-seeSkills duration-300 hover:gap-5 py-2 px-7 border-accent border-2 rounded-[3rem] hover:bg-accent"};function N(s,e){const i=S,r=w("font-awesome-icon"),n=k;return m(),h("div",M,[t("div",R,[z,F,t("div",H,[a(i,{title:"GitHub",icon:"fa-brands fa-github",href:"https://github.com/Yachim"}),a(i,{title:"LinkedIn",icon:"fa-brands fa-linkedin",href:"https://www.linkedin.com/in/jachym-kohout/"}),a(i,{title:"Email",icon:"fa-solid fa-envelope",href:"mailto:jachym.kohout@gmail.com"})]),t("a",L,[o(" See projects "),a(n,null,{default:u(()=>[a(r,{icon:"fa-solid fa-arrow-right"})]),_:1})])])])}const G=_(E,[["render",N]]),Q={class:"relative"},V={class:"text-accent text-xl absolute p-2 w-full h-1/2 bg-gradient-to-b from-bg"},Y=["src","alt"],J={class:"absolute flex flex-row-reverse w-full gap-2 right-0 bottom-0 p-2 opacity-30 transition-opacity duration-300 ease-in-out icons bg-gradient-to-t from-bg"},K={class:"project-desc"},D=p({__name:"OtherProjectItem",props:{name:null,image:null,siteUrl:null,ghUrl:null,order:null},setup(s){const e=s;return(i,r)=>{const n=S;return m(),h("div",{style:B({"--order":s.order}),class:"wrapper flex flex-col gap-3 w-[300px] flex-shrink-0"},[t("div",Q,[t("h4",V,j(e.name),1),t("img",{class:"aspect-video object-cover w-full rounded-lg",src:e.image,alt:`${e.name}'s Image`},null,8,Y),t("div",J,[a(n,{class:"bg-bg",title:`${e.name}'s GitHub`,icon:"fa-brands fa-github",href:e.ghUrl},null,8,["title","href"]),a(n,{class:"bg-bg",title:`${e.name}'s Site`,icon:"fa-solid fa-arrow-up-right-from-square",href:e.siteUrl},null,8,["title","href"])])]),t("div",K,[y(i.$slots,"default",{},void 0,!0)])],4)}}}),x=_(D,[["__scopeId","data-v-afb3c4d3"]]),W=["data-align"],X=["href"],Z=["src","alt"],ee=["src","alt"],te={class:"grid-in-name text-accent text-xl"},oe={class:"project-desc grid-in-desc"},se={class:"grid-in-links flex gap-2 links self-center"},ne=p({__name:"ProjectItem",props:{name:null,image1:null,image2:null,siteUrl:null,ghUrl:null,align:null},setup(s){const e=s;return(i,r)=>{const n=S;return m(),h("div",{"data-align":e.align,class:P(["wrapper w-full gap-x-6 gap-y-4 grid grid-areas-projectMobile grid-cols-projectMobile grid-rows-projectMobile xl:grid-rows-project",e.align==="left"?"xl:grid-areas-projectLeft xl:grid-cols-projectLeft":"xl:grid-areas-projectRight xl:grid-cols-projectRight"])},[t("a",{target:"_blank",href:e.siteUrl,class:"grid-in-img image flex-[2_1_0%]"},[t("img",{class:"second-img",src:e.image2,alt:`${e.name}'s Second Image`},null,8,Z),t("img",{class:"first-img",src:e.image1,alt:`${e.name}'s First Image`},null,8,ee)],8,X),t("h4",te,j(e.name),1),t("div",oe,[y(i.$slots,"default",{},void 0,!0)]),t("div",se,[a(n,{title:`${e.name}'s GitHub`,icon:"fa-brands fa-github",href:e.ghUrl},null,8,["title","href"]),a(n,{title:`${e.name}'s Site`,icon:"fa-solid fa-arrow-up-right-from-square",href:e.siteUrl},null,8,["title","href"])])],10,W)}}}),ae=_(ne,[["__scopeId","data-v-fa31e6ff"]]),c=s=>(O("data-v-3a6bbb2f"),s=s(),q(),s),ie=c(()=>t("a",{id:"projects",name:"projects",class:"scroll-mt-32"},null,-1)),re={class:"page-part h-auto flex-col gap-10 pb-8 overflow-x-hidden"},le=c(()=>t("h2",{class:"text-3xl"},"Projects",-1)),ce=c(()=>t("p",null," The popular online game Shakes & Fidget has a collectible minigame - pets. Each pet has different requirements for it to be available. The app tracks these requirements and displays the availability of pets. ",-1)),de=c(()=>t("p",null,[o(" Built with "),t("em",null,"React"),o(" and styled with "),t("em",null,"SCSS"),o(". The app uses "),t("em",null,"React Context"),o(" for state management and "),t("em",null,"React Query"),o(" with "),t("em",null,"Axios"),o(" for fetching users' data. ")],-1)),ue=c(()=>t("h3",{class:"text-2xl"},"Other smaller projects",-1)),pe=c(()=>t("p",null,[o(" A "),t("em",null,"React"),o(" app that uses an "),t("a",{href:"https://github.com/shevabam/breaking-bad-quotes"},"API"),o(" to request a quote from the Breaking Bad series. "),t("em",null,"Tailwind CSS"),o(" was used for styling, and "),t("em",null,"React Query"),o(" with "),t("em",null,"Axios"),o(" for fetching. ")],-1)),me=c(()=>t("p",null,[o(" An app for creating ASCII file trees made with "),t("em",null,"Svelte"),o(" and styled with "),t("em",null,"Tailwind CSS"),o(". State management was done with the help of "),t("em",null,"stores"),o(". ")],-1)),he=c(()=>t("p",null,[o(" A famous mathematical puzzle called the Tower of Hanoi built with "),t("em",null,"React"),o(". The app uses "),t("em",null,"SCSS"),o(" for styling. "),t("em",null,"React Context"),o(" was used for state management. ")],-1)),ge=p({__name:"Projects",setup(s){const e=v(null),i=v(null);return C(()=>{const r=(g,b)=>{g.forEach(d=>{d.isIntersecting&&(d.target.classList.add("visible"),b.unobserve(d.target))})},n=(g,b)=>{g.forEach(d=>{d.isIntersecting&&(d.target.childNodes.forEach(U=>U.classList.add("visible")),b.unobserve(d.target))})},l=new IntersectionObserver(r);e.value.childNodes.forEach(g=>{l.observe(g)}),new IntersectionObserver(n).observe(i.value)}),(r,n)=>(m(),h($,null,[ie,t("div",re,[le,t("div",{class:"flex flex-col gap-10 items-center w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] 2xl:w-[70%]",ref_key:"projects",ref:e},[a(f(ae),{name:"SfPets",image1:"/images/projects/sfpets/pets1.png",image2:"/images/projects/sfpets/pets2.png",siteUrl:"https://sfpets.yachim.cz",ghUrl:"https://github.com/yachim/sfpets",align:"left"},{default:u(()=>[ce,de]),_:1})],512),ue,t("div",{ref_key:"otherProjects",ref:i,class:"flex justify-start gap-10 overflow-x-auto max-w-[90%] md:max-w-[85%] lg:max-w-[80%] xl:max-w-[75%] 2xl:max-w-[70%] scrollbar relative pb-5"},[a(f(x),{order:0,name:"Breaking Bad Quotes Client",image:"/images/other_projects/brba.png",siteUrl:"https://brba-quotes.yachim.cz/",ghUrl:"https://github.com/Yachim/brba-quotes-client"},{default:u(()=>[pe]),_:1}),a(f(x),{order:1,name:"Ascii Tree Builder",image:"/images/other_projects/ascii_tree.png",siteUrl:"https://ascii-tree-builder.yachim.cz/",ghUrl:"https://github.com/yachim/ascii-tree-builder"},{default:u(()=>[me]),_:1}),a(f(x),{order:2,name:"Tower of Hanoi",image:"/images/other_projects/hanoi.png",siteUrl:"https://towerofhanoi.yachim.cz/",ghUrl:"https://github.com/Yachim/towerofhanoi/"},{default:u(()=>[he]),_:1})],512)])],64))}}),_e=_(ge,[["__scopeId","data-v-3a6bbb2f"]]),fe=s=>Object.fromEntries(Object.entries(s).filter(([,e])=>e!==void 0)),I=(s,e)=>(i,r)=>(T(()=>s({...fe(i),...r.attrs},r)),()=>{var n,l;return e?(l=(n=r.slots).default)==null?void 0:l.call(n):null}),be={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:[String,Object,Array],contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},xe=p({name:"Title",inheritAttrs:!1,setup:I((s,{slots:e})=>{var r,n,l;return{title:((l=(n=(r=e.default)==null?void 0:r.call(e))==null?void 0:n[0])==null?void 0:l.children)||null}})}),Se=p({name:"Meta",inheritAttrs:!1,props:{...be,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:I(s=>{const e={...s};return e.httpEquiv&&(e["http-equiv"]=e.httpEquiv,delete e.httpEquiv),{meta:[e]}})}),ve={};function we(s,e){const i=xe,r=Se,n=G,l=_e;return m(),h($,null,[a(i,null,{default:u(()=>[o("Jáchym Kohout")]),_:1}),a(r,{name:"description",content:"I am a frontend developper. Here you can find about my projects."}),a(n),a(l)],64)}const Be=_(ve,[["render",we]]);export{Be as default};
