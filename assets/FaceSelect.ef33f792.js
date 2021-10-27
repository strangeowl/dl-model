var T=Object.defineProperty,k=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var F=(e,c,s)=>c in e?T(e,c,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[c]=s,p=(e,c)=>{for(var s in c||(c={}))y.call(c,s)&&F(e,s,c[s]);if(x)for(var s of x(c))v.call(c,s)&&F(e,s,c[s]);return e},M=(e,c)=>k(e,C(c));var f=(e,c)=>{var s={};for(var n in e)y.call(e,n)&&c.indexOf(n)<0&&(s[n]=e[n]);if(e!=null&&x)for(var n of x(e))c.indexOf(n)<0&&v.call(e,n)&&(s[n]=e[n]);return s};import{a as u,j as t,w as D,b as K,F as S}from"./index.652c414c.js";import{aK as b,aD as j}from"./vendor.07c175f9.js";import{F as L}from"./FacePartSelector.48863fbc.js";import{E as P,M as U,i as w,b as z,c as $}from"./MeshMouthSelect.b9fe92c2.js";import{a as B,b as q}from"./DialogTitle.4eb2eaa5.js";function A(){const[e,c]=b(0);return[e,()=>c(n=>n+1)]}function G(d){var i=d,{eyeTexture:e,eyeIdx:c,mouthTexture:s,mouthIdx:n}=i,o=f(i,["eyeTexture","eyeIdx","mouthTexture","mouthIdx"]);return u("div",M(p({className:"FaceBox"},o),{children:[t(P,{texture:e,index:c}),t(U,{texture:s,index:n})]}))}function H({target:e,onSelect:c}){const s=e==null?void 0:e.face;if(!s||(s==null?void 0:s.type)!=="uv")return t("h2",{children:"Not Available"});const[n,o]=A();j(()=>{const l=s.addEventListener("change",({propName:a})=>{(a.includes("Base")||a.includes("Texture"))&&o()});return()=>s.removeEventListener("change",l)},[]);const d=D(),[i,h]=b("Both");j(()=>!d&&o(),[i]);const r=l=>{const{index:a}=l.currentTarget.dataset;i!=="Eyes"&&c(a,"mouth"),i!=="Mouth"&&c(a,"eye")},{eyeBaseIdx:m,eyeTexture:E,mouthBaseIdx:I,mouthTexture:N}=s;return u("div",{className:"UvFaceSelect",children:[t(L,{value:i,onClick:h}),t("div",{className:"FaceBoxes",children:w.map(l=>t(G,{eyeTexture:E,eyeIdx:i==="Mouth"?m:l,mouthTexture:N,mouthIdx:i==="Eyes"?I:l,"data-index":l,onClick:r}))},n)]})}function J({target:e,onSelect:c}){var n,o;const s=e==null?void 0:e.face;return(s==null?void 0:s.type)==="meshes"&&u("div",{className:"MeshFaceSelect",children:[((n=s==null?void 0:s.eyeList)==null?void 0:n.length)>0&&t(z,{target:e,onSelect:c}),((o=s==null?void 0:s.mouthList)==null?void 0:o.length)>0&&t($,{target:e,onSelect:c})]})}const O={uv:H,meshes:J},Q={display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",fontSize:"large"};function _({target:e,onSelect:c,onAfterSelect:s}){var h,r;const{activeModel:n}=K();e!=null||(e=n);const o=(h=e==null?void 0:e.face)==null?void 0:h.type,d=(r=O[o])!=null?r:()=>t(S,{}),i=(...m)=>{c(...m),s==null||s()};return(e==null?void 0:e.face)?u("div",{className:"FaceSelect",children:[t(B,{sx:{textAlign:"center"},children:"Face Select"}),t(q,{sx:{padding:"1rem"},children:t(d,{target:e,onSelect:i})})]}):u(S,{children:[t(B,{sx:{textAlign:"center"},children:"Face Select"}),t("div",{style:Q,children:"Not available"})]})}export{_ as F,A as u};
