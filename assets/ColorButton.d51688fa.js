var C=Object.defineProperty,b=Object.defineProperties;var i=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var f=(t,o,n)=>o in t?C(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,a=(t,o)=>{for(var n in o||(o={}))u.call(o,n)&&f(t,n,o[n]);if(s)for(var n of s(o))g.call(o,n)&&f(t,n,o[n]);return t},c=(t,o)=>b(t,i(o));var l=(t,o)=>{var n={};for(var r in t)u.call(t,r)&&o.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&s)for(var r of s(t))o.indexOf(r)<0&&g.call(t,r)&&(n[r]=t[r]);return n};import{j as m}from"./index.a7f60097.js";import{B}from"./Button.c3d35d8a.js";const d=t=>{const o=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null},v=({r:t,g:o,b:n})=>(t*299+o*587+n*114)/1e3,I=t=>{const o=d(t);return v(o)>128?"#000000":"#ffffff"};function R(j){var e=j,{color:t,children:o=null,title:n=void 0,style:r={}}=e,p=l(e,["color","children","title","style"]);const x=a({color:I(t),backgroundColor:t,"&:hover":{backgroundColor:t}},r);return m(B,c(a({className:"ColorButton",sx:x,variant:"contained",title:n},p),{children:o!=null?o:t}))}export{R as C};