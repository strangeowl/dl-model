var T=Object.defineProperty;var d=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var h=(a,t,e)=>t in a?T(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,k=(a,t)=>{for(var e in t||(t={}))u.call(t,e)&&h(a,e,t[e]);if(d)for(var e of d(t))b.call(t,e)&&h(a,e,t[e]);return a};var x=(a,t)=>{var e={};for(var o in a)u.call(a,o)&&t.indexOf(o)<0&&(e[o]=a[o]);if(a!=null&&d)for(var o of d(a))t.indexOf(o)<0&&b.call(a,o)&&(e[o]=a[o]);return e};import{ab as f}from"./vendor.1559e0f8.js";import{T as I}from"./TabBar.b0d05393.js";import{C as P}from"./ColorPicker.6eded962.js";import{G as w,T as R,u as y}from"./Gallery.1de219aa.js";import{j as n,a as g,F as W,v as C}from"./index.93175a86.js";import{B as v}from"./Box.4ae9e518.js";import{U as L,f as $}from"./file2dataURL.43147271.js";import{B as D}from"./Button.a7e74bfa.js";import{a as F,b as G}from"./DialogTitle.b6d02fde.js";import"./ButtonBase.ba3c4b12.js";import"./Popover.fc3e10c0.js";import"./createSvgIcon.d92e9aee.js";import"./ColorButton.0ec94244.js";const p={gallery:{gap:"1rem"},container:{boxSizing:"border-box",maxWidth:"8rem",maxHeight:"8rem",position:"relative",cursor:"pointer",borderRadius:"5%",overflow:"hidden",filter:"drop-shadow(0 0 2px rgba(0,0,0,0.5))",objectFit:"cover",contentVisibility:"auto",containIntrinsicSize:"0 8rem",alignSelf:"stretch",margin:"auto","&:hover":{border:"1px solid white",filter:"drop-shadow(0.1rem 0.1rem 0.2rem black)"},"&[data-name]::after":{content:"attr(data-name)",position:"absolute",bottom:"0.25rem",left:0,backgroundColor:"rgba(0,0,0,0.8)",color:"#fff",textAlign:"center",padding:"0.1rem",width:"100%"},"&[data-name]:hover::after":{backgroundColor:"rgba(255,255,255,0.6)",color:"black"}},image:{maxWidth:"100%"}},S=({src:a,value:t,name:e,onClick:o})=>n(v,{sx:p.container,"data-name":e,children:n("img",{src:a,"data-value":t,onClick:o,style:p.image})}),B=({list:a,onClick:t})=>n(w,{style:p.gallery,onClick:t,list:a,component:S}),j={input:{paddingRight:"0.2rem",minWidth:"8rem"},button:{padding:"0.5rem 1rem",margin:0,backgroundColor:"rgba(16, 16, 16, 0.8)",color:"rgba(255, 255, 255, 0.9)",border:"1px solid rgba(16, 16, 16, 0.5)","&:hover":{backgroundColor:"rgba(50, 50, 50, 0.8)",border:"1px solid rgba(16, 16, 16, 0.8)"}}};function z(o){var i=o,{onApply:a,applyLabel:t="Apply"}=i,e=x(i,["onApply","applyLabel"]);const[r,s]=f(""),l=U=>s(U.target.value),c=()=>a(r),m=n(D,{sx:j.button,variant:"contained",onClick:c,children:t});return n(R,k({value:r,onChange:l,placeholder:"Enter URL",margin:"none",InputProps:{endAdornment:m,sx:j.input},inputProps:{type:"url"},size:"small"},e))}const A={external:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"0.5rem",maxWidth:"100%",marginBottom:"0.5rem"}};function N({onSelect:a}){const t=y(r=>r["background-image"]),e=r=>{const{value:s}=r.target.dataset,l=`img:${s}`;a(l)},o=async r=>{const l=`img:${await $(r[0])}`;a(l)},i=r=>{if(!r)return;const s=`img:${r}`;a(s)};return g(W,{children:[g(v,{sx:A.external,children:[n(L,{onChange:o}),n(z,{onApply:i})]}),n(B,{list:t,onClick:e})]})}function E({onSelect:a}){const t=y(o=>o["background-skybox"]);return n(B,{list:t,onClick:o=>{const{value:i}=o.target.dataset,r=`sky:${i}`;a(r)}})}const H=["Color","Image","Skybox"].map(a=>({name:a})),V={Color:P,Image:N,Skybox:E},_=a=>a.startsWith("sky:")?"Skybox":a.startsWith("img:")?"Image":"Color";function na({onAfterSelect:a}){var l;const t=_(C.background),[e,o]=f(t),i=c=>{C.background=c,a==null||a()},r=(c,m)=>o(m),s=(l=V[e])!=null?l:()=>null;return g("div",{className:"BackgroundPicker",children:[n(F,{sx:{textAlign:"center"},children:"Choose a background"}),n(I,{value:e,onChange:r,tabs:H}),n(G,{children:n(s,{onSelect:i})})]})}export{na as default};
