import{G as d}from"./GlowToggle.8d8f0d18.js";import{j as g}from"./index.7f884fcf.js";function i({name:e,options:r,type:a,state:l,toggle:c}){const s=o=>{const{group:u,value:p}=o.currentTarget.dataset;c(u,p)},t=o=>`img/appIcon/${e}_${o}.png`,n=r.map(o=>g(d,{icon:t(o),value:o,type:a,checked:l[o],"data-group":e,onClick:s}));return g("div",{className:"ToggleGroup",children:n})}export{i as T};
