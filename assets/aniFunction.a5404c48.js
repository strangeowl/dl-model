var c=Object.defineProperty;var n=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var t=(s,e,a)=>e in s?c(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a,i=(s,e)=>{for(var a in e||(e={}))m.call(e,a)&&t(s,a,e[a]);if(n)for(var a of n(e))d.call(e,a)&&t(s,a,e[a]);return s};import{w as l,x as o}from"./index.0c0a9a15.js";function p(){return new Worker("/dl-model/assets/aniWorker.63742bf1.js",{type:"module"})}const u=async s=>{const e=new p;return new Promise(a=>{e.addEventListener("message",r=>{e.terminate(),a(r.data)}),e.postMessage(i({},s))})},g=async s=>{const e=await u(s);await l(e,"animation"),console.log("Animation DB Initialized")},x=s=>o({type:"search",store:"animation",index:"fullName",value:s}),A=s=>o({type:"getAllByIndex",store:"animation",index:"User",value:s});export{A as g,g as i,x as s};
