var x=Object.defineProperty,N=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;var d=(o,s,r)=>s in o?x(o,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[s]=r,m=(o,s)=>{for(var r in s||(s={}))i.call(s,r)&&d(o,r,s[r]);if(c)for(var r of c(s))l.call(s,r)&&d(o,r,s[r]);return o},p=(o,s)=>N(o,S(s));var f=(o,s)=>{var r={};for(var a in o)i.call(o,a)&&s.indexOf(a)<0&&(r[a]=o[a]);if(o!=null&&c)for(var a of c(o))s.indexOf(a)<0&&l.call(o,a)&&(r[a]=o[a]);return r};import{a7 as $}from"./vendor.732e1712.js";import{u as b}from"./useToggleState.6a131330.js";import{j as e,a as A}from"./index.3e210454.js";import{c as u}from"./createSvgIcon.f14f52b6.js";var z=u(e("path",{d:"m7 10 5 5 5-5z"}),"ArrowDropDown"),C=u(e("path",{d:"m7 14 5-5 5 5z"}),"ArrowDropUp");const k=$((o,s)=>{const t=o,{children:r,className:a="",defaultOpen:v=!1,disableGutters:g=!1}=t,h=f(t,["children","className","defaultOpen","disableGutters"]),[n,j]=b(v),w=`Accordion ${g?"noGutters":""} ${n?"open":""} ${a}`,D=n?e(C,{}):e(z,{});return A("div",p(m({className:w},h),{ref:s,children:[r[0]&&A("div",{onClick:j,className:"Accordion-summary",children:[D,r[0]]}),n&&r[1]&&e("div",{className:"Accordion-details",children:r[1]})]}))});export{k as A,C as a,z as b};
