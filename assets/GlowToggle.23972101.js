var p=Object.defineProperty,v=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;var t=(o,a,e)=>a in o?p(o,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[a]=e,g=(o,a)=>{for(var e in a||(a={}))n.call(a,e)&&t(o,e,a[e]);if(s)for(var e of s(a))r.call(a,e)&&t(o,e,a[e]);return o},f=(o,a)=>v(o,w(a));var G=(o,a)=>{var e={};for(var l in o)n.call(o,l)&&a.indexOf(l)<0&&(e[l]=o[l]);if(o!=null&&s)for(var l of s(o))a.indexOf(l)<0&&r.call(o,l)&&(e[l]=o[l]);return e};import{j as c}from"./index.64b21fb0.js";function $(x){var i=x,{type:o,value:a,icon:e,checked:l=!1,name:d=a,onClick:b=()=>{}}=i,h=G(i,["type","value","icon","checked","name","onClick"]);const j=`GlowToggle ${l?"checked":""}`,m=o==="icon"?c("img",{src:e,alt:d}):c("span",{children:d});return c("div",f(g({className:j,"data-type":o,"data-value":a,onClick:b},h),{children:m}))}export{$ as G};
