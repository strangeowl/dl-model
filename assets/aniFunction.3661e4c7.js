var c=Object.defineProperty;var s=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var t=(a,e,n)=>e in a?c(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n,i=(a,e)=>{for(var n in e||(e={}))m.call(e,n)&&t(a,n,e[n]);if(s)for(var n of s(e))d.call(e,n)&&t(a,n,e[n]);return a};import{a1 as l,a2 as o}from"./index.a7f60097.js";function p(){return new Worker("/dl-model/assets/aniWorker.31196477.js",{type:"module"})}const u=async a=>{const e=new p;return new Promise(n=>{e.addEventListener("message",r=>{e.terminate(),n(r.data)}),e.postMessage(i({},a))})},A=async a=>{const e=await u(a);await l(e,"animation"),console.info("Animation DB Initialized")},g=a=>o({type:"search",store:"animation",index:"fullName",value:a}),B=a=>o({type:"getAllByIndex",store:"animation",index:"User",value:a});export{B as g,A as i,g as s};