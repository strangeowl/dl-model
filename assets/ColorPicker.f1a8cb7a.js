import{_ as f,a as n,j as o}from"./index.ca34b317.js";import{az as h,aK as k,aE as p}from"./vendor.079a595c.js";import{C as s}from"./ColorButton.8da565fa.js";const u=[{name:"Green",hex:"#00ff00"},{name:"Black",hex:"#000000"},{name:"Discord",hex:"#36393f",title:"Discord Dark Mode"},{name:"Grey",hex:"#cccccc"},{name:"Discord",hex:"#f2f3f5",title:"Discord Light Mode"},{name:"White",hex:"#ffffff"}];const v=h(()=>f(()=>import("./index.fcf4027f.js"),["assets/index.fcf4027f.js","assets/vendor.079a595c.js","assets/ButtonBase.b987992f.js","assets/index.ca34b317.js","assets/index.15a3e0a4.css"]).then(c=>({default:c.ChromePicker})));function D({initColor:c="#cccccc",onSelect:t}){const[r,l]=k(c),i=({hex:e})=>l(e),m=e=>l(e.target.value),d=()=>t(r);return n("div",{className:"ColorPicker",children:[n("div",{className:"ColorPicker-select",children:[o(()=>o("div",{className:"ColorPicker-common",children:u.map(({name:e,hex:a,title:C})=>o(s,{onClick:m,value:a,color:a,title:C,children:e},a))}),{}),o(p,{fallback:null,children:o(v,{color:r,onChangeComplete:i})})]}),o(s,{color:r,onClick:d,children:"Apply"})]})}export{D as C};
