var f=Object.defineProperty;var u=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var h=(e,a,t)=>a in e?f(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,m=(e,a)=>{for(var t in a||(a={}))j.call(a,t)&&h(e,t,a[t]);if(u)for(var t of u(a))B.call(a,t)&&h(e,t,a[t]);return e};import{b as p,j as c,F as y,a as x}from"./index.535aa750.js";import{E as F,M,b,c as g}from"./MeshMouthSelect.76568e58.js";import{B as C}from"./Button.3234d08d.js";import{a as P,b as N}from"./DialogTitle.2fc66c4b.js";import"./vendor.d89dcd89.js";import"./Box.ad83a8a7.js";import"./ButtonBase.16f5c76d.js";const E=[1,2,3,4,5,6,7,8,9],T={eye:F,mouth:M},D={eye:b,mouth:g};function S({part:e,onSelect:a}){var l;const{activeModel:t}=p(),n=(l=t==null?void 0:t.face)==null?void 0:l.type,s=o=>{const i=parseInt(o.currentTarget.dataset.index);a(i,e)};switch(n){case"uv":const o=T[e],i=t.face[`${e}Texture`];return x("div",{className:"PartialFaceSelect-body",children:[E.map(d=>c(o,{index:d,texture:i,"data-index":d,onClick:s},d)),c(C,{"data-index":"0",onClick:s,children:"Remove"})]});case"meshes":const r=D[e];return c("div",{className:"PartialFaceSelect-body",children:c(r,{target:t,onSelect:a})});default:return c(y,{children:"Not Available"})}}const k={eye:"Select Eye",mouth:"Select Mouth"};function v({part:e,onSelect:a,onAfterSelect:t}){var o;const{activeModel:n}=p(),s=(o=n==null?void 0:n.face)==null?void 0:o.type;if(!s)return c(y,{children:"Not Available"});const l=(i,r)=>{a(i,r),t==null||t()};return s==="uv"?x("div",{className:"PartialFaceSelect","data-type":s,children:[c(P,{sx:{textAlign:"center"},children:k[e]}),c(N,{sx:{padding:"1rem"},children:c(S,{part:e,onSelect:l})})]}):c("div",{className:"PartialFaceSelect","data-type":s,children:c(S,{part:e,onSelect:l})})}const G=e=>c(v,m({part:"eye"},e)),H=e=>c(v,m({part:"mouth"},e));export{G as EyeSelect,H as MouthSelect,v as default};
