var T=Object.defineProperty;var d=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var h=(a,t,o)=>t in a?T(a,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[t]=o,k=(a,t)=>{for(var o in t||(t={}))u.call(t,o)&&h(a,o,t[o]);if(d)for(var o of d(t))b.call(t,o)&&h(a,o,t[o]);return a};var x=(a,t)=>{var o={};for(var e in a)u.call(a,e)&&t.indexOf(e)<0&&(o[e]=a[e]);if(a!=null&&d)for(var e of d(a))t.indexOf(e)<0&&b.call(a,e)&&(o[e]=a[e]);return o};import{ab as y}from"./vendor.732e1712.js";import{T as I}from"./TabBar.cc09db4a.js";import{C as P}from"./ColorPicker.1daf545c.js";import{G as w,T as R,u as f}from"./Gallery.0d7933e6.js";import{j as n,a as g,F as W,v as C}from"./index.b677834c.js";import{B as v}from"./Box.7c4b4fda.js";import{U as L,f as $}from"./file2dataURL.c016b930.js";import{B as D}from"./Button.7d8ddbc8.js";import{a as F,b as G}from"./DialogTitle.dc7cc1c0.js";import"./ButtonBase.f7b5d3a9.js";import"./Popover.62cae1c4.js";import"./createSvgIcon.dda3d449.js";import"./ColorButton.4daab9d4.js";const p={gallery:{gap:"1rem"},container:{boxSizing:"border-box",maxWidth:"8rem",maxHeight:"8rem",position:"relative",cursor:"pointer",borderRadius:"5%",overflow:"hidden",filter:"drop-shadow(0 0 2px rgba(0,0,0,0.5))",objectFit:"cover",contentVisibility:"auto",containIntrinsicSize:"0 8rem",alignSelf:"stretch",margin:"auto","&:hover":{border:"1px solid white",filter:"drop-shadow(0.1rem 0.1rem 0.2rem black)"},"&[data-name]::after":{content:"attr(data-name)",position:"absolute",bottom:"0.25rem",left:0,backgroundColor:"rgba(0,0,0,0.8)",color:"#fff",textAlign:"center",padding:"0.1rem",width:"100%"},"&[data-name]:hover::after":{backgroundColor:"rgba(255,255,255,0.6)",color:"black"}},image:{maxWidth:"100%"}},S=({src:a,value:t,name:o,onClick:e})=>n(v,{sx:p.container,"data-name":o,children:n("img",{src:a,"data-value":t,onClick:e,style:p.image})}),B=({list:a,onClick:t})=>n(w,{style:p.gallery,onClick:t,list:a,component:S}),j={input:{paddingRight:"0.2rem",minWidth:"8rem"},button:{padding:"0.5rem 1rem",margin:0,backgroundColor:"rgba(16, 16, 16, 0.8)",color:"rgba(255, 255, 255, 0.9)",border:"1px solid rgba(16, 16, 16, 0.5)","&:hover":{backgroundColor:"rgba(50, 50, 50, 0.8)",border:"1px solid rgba(16, 16, 16, 0.8)"}}};function z(e){var i=e,{onApply:a,applyLabel:t="Apply"}=i,o=x(i,["onApply","applyLabel"]);const[r,s]=y(""),c=U=>s(U.target.value),l=()=>a(r),m=n(D,{sx:j.button,variant:"contained",onClick:l,children:t});return n(R,k({value:r,onChange:c,placeholder:"Enter URL",margin:"none",InputProps:{endAdornment:m,sx:j.input},inputProps:{type:"url"},size:"small"},o))}const A={external:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"0.5rem",maxWidth:"100%",marginBottom:"0.5rem"}};function N({onSelect:a}){const t=f(r=>r["background-image"]),o=r=>{const{value:s}=r.target.dataset,c=`img:${s}`;a(c)},e=async r=>{const c=`img:${await $(r[0])}`;a(c)},i=r=>{if(!r)return;const s=`img:${r}`;a(s)};return g(W,{children:[g(v,{sx:A.external,children:[n(L,{onChange:e}),n(z,{onApply:i})]}),n(B,{list:t,onClick:o})]})}function E({onSelect:a}){const t=f(e=>e["background-skybox"]);return n(B,{list:t,onClick:e=>{const{value:i}=e.target.dataset,r=`sky:${i}`;a(r)}})}const H=["Color","Image","Skybox"].map(a=>({name:a})),V={Color:P,Image:N,Skybox:E},_=a=>a.startsWith("sky:")?"Skybox":a.startsWith("img:")?"Image":"Color";function na({onAfterSelect:a}){var c;const t=_(C.background),[o,e]=y(t),i=l=>{C.background=l,a==null||a()},r=(l,m)=>e(m),s=(c=V[o])!=null?c:()=>null;return g("div",{className:"BackgroundPicker",children:[n(F,{sx:{textAlign:"center"},children:"Choose a background"}),n(I,{value:o,onChange:r,tabs:H}),n(G,{children:n(s,{onSelect:i})})]})}export{na as default};
