import{G as m}from"./GlowToggle.ace1eaf9.js";import{j as o}from"./index.5d319d1a.js";function f({type:c,value:r,options:l,icons:s=[],onClick:t,labels:n=[]}){const d=e=>{e.stopPropagation();const{value:a}=e.currentTarget.dataset;t(a)},i=l.map((e,a)=>o(m,{type:c,value:e,name:n[a],icon:s[a],onClick:d,checked:r===e},e));return o("div",{className:"Selector",children:i})}export{f as S};
