var x=Object.defineProperty,N=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;var l=(o,s,r)=>s in o?x(o,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[s]=r,m=(o,s)=>{for(var r in s||(s={}))d.call(s,r)&&l(o,r,s[r]);if(c)for(var r of c(s))i.call(s,r)&&l(o,r,s[r]);return o},p=(o,s)=>N(o,S(s));var A=(o,s)=>{var r={};for(var a in o)d.call(o,a)&&s.indexOf(a)<0&&(r[a]=o[a]);if(o!=null&&c)for(var a of c(o))s.indexOf(a)<0&&i.call(o,a)&&(r[a]=o[a]);return r};import{a7 as $}from"./vendor.732e1712.js";import{u as b}from"./useToggleState.6a131330.js";import{j as e,a as u}from"./index.b677834c.js";import{c as v}from"./createSvgIcon.dda3d449.js";var z=v(e("path",{d:"m7 10 5 5 5-5z"}),"ArrowDropDown"),C=v(e("path",{d:"m7 14 5-5 5 5z"}),"ArrowDropUp");const k=$((o,s)=>{const t=o,{children:r,className:a="",defaultOpen:f=!1,disableGutters:g=!1}=t,h=A(t,["children","className","defaultOpen","disableGutters"]),[n,j]=b(f),w=`Accordion ${g?"noGutters":""} ${n?"open":""} ${a}`,D=n?e(C,{}):e(z,{});return u("div",p(m({className:w},h),{ref:s,children:[r[0]&&u("div",{onClick:j,className:"Accordion-summary",children:[D,r[0]]}),n&&r[1]&&e("div",{className:"Accordion-details",children:r[1]})]}))});export{k as A,C as a,z as b};
