import{_ as f,a,j as o}from"./index.7415e1fb.js";import{a2 as h,ab as k,a5 as p}from"./vendor.10b98a91.js";import{C as s}from"./ColorButton.2cd93288.js";const u=[{name:"Green",hex:"#00ff00"},{name:"Black",hex:"#000000"},{name:"Discord",hex:"#36393f",title:"Discord Dark Mode"},{name:"Grey",hex:"#cccccc"},{name:"Discord",hex:"#f2f3f5",title:"Discord Light Mode"},{name:"White",hex:"#ffffff"}];const v=h(()=>f(()=>import("./index.78125bd3.js"),["assets/index.78125bd3.js","assets/vendor.10b98a91.js","assets/ButtonBase.f118d284.js","assets/index.7415e1fb.js","assets/index.15a3e0a4.css"]).then(c=>({default:c.ChromePicker})));function D({initColor:c="#cccccc",onSelect:t}){const[r,n]=k(c),i=({hex:e})=>n(e),m=e=>n(e.target.value),d=()=>t(r);return a("div",{className:"ColorPicker",children:[a("div",{className:"ColorPicker-select",children:[o(()=>o("div",{className:"ColorPicker-common",children:u.map(({name:e,hex:l,title:C})=>o(s,{onClick:m,value:l,color:l,title:C,children:e},l))}),{}),o(p,{fallback:null,children:o(v,{color:r,onChangeComplete:i})})]}),o(s,{color:r,onClick:d,children:"Apply"})]})}export{D as C};
