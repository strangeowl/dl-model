import{G as m}from"./GlowToggle.aa3a4f56.js";import{j as o}from"./index.d31bae91.js";function f({type:r,value:c,options:l,icons:s=[],onClick:t,labels:n=[]}){const d=e=>{e.stopPropagation();const{value:a}=e.currentTarget.dataset;t(a)},i=l.map((e,a)=>o(m,{type:r,value:e,name:n[a],icon:s[a],onClick:d,checked:c===e},e));return o("div",{className:"Selector",children:i})}export{f as S};
