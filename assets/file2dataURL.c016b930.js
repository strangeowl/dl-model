var y=Object.defineProperty,U=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;var p=(t,o,e)=>o in t?y(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,n=(t,o)=>{for(var e in o||(o={}))d.call(o,e)&&p(t,e,o[e]);if(a)for(var e of a(o))c.call(o,e)&&p(t,e,o[e]);return t},u=(t,o)=>U(t,v(o));var m=(t,o)=>{var e={};for(var r in t)d.call(t,r)&&o.indexOf(r)<0&&(e[r]=t[r]);if(t!=null&&a)for(var r of a(t))o.indexOf(r)<0&&c.call(t,r)&&(e[r]=t[r]);return e};import{a3 as w}from"./vendor.732e1712.js";import{a as C,j as b}from"./index.b677834c.js";import{B as F}from"./Box.7c4b4fda.js";import{B as R}from"./Button.7d8ddbc8.js";const f={button:{padding:"0.5rem 1rem",margin:0,color:"rgba(16, 16, 16, 0.8)",border:"1px solid rgba(16, 16, 16, 0.5)","&:hover":{border:"1px solid rgba(16, 16, 16, 0.8)",backgroundColor:"rgba(210, 210, 210, 0.2)"}},input:{opacity:0,width:0,maxWidth:0}};function W(D){var i=D,{id:t="upload",multiple:o=!1,label:e="Upload",mimeType:r="image/*",onChange:g,style:x={}}=i,h=m(i,["id","multiple","label","mimeType","onChange","style"]);const l=w(),j=()=>{const s=l.current.files;g(s)},B=n(n({},f.button),x);return C(F,{children:[b(R,u(n({variant:"outlined",htmlFor:t,component:"label",sx:B},h),{children:e})),b("input",{name:t,id:t,type:"file",multiple:o,accept:r,style:f.input,ref:s=>l.current=s,onChange:j})]})}const q=async t=>new Promise(o=>{const e=new FileReader;e.onload=r=>o(r.target.result),e.readAsDataURL(t)});export{W as U,q as f};
