import{G as m}from"./GlowToggle.547a70a7.js";import{j as o}from"./index.4d2bee0c.js";function p({type:t,value:l,options:a,icons:c=[],onClick:n,labels:s=[]}){const i=e=>{e.stopPropagation();const{value:r}=e.currentTarget.dataset;n(r)},d=a.map((e,r)=>o(m,{type:t,value:e,name:s[r],icon:c[r],onClick:i,checked:l===e},e));return o("div",{className:"Selector",children:d})}export{p as S};