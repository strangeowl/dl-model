var G=Object.defineProperty,N=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var v=(s,e,t)=>e in s?G(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,w=(s,e)=>{for(var t in e||(e={}))Q.call(e,t)&&v(s,t,e[t]);if(T)for(var t of T(e))$.call(e,t)&&v(s,t,e[t]);return s},D=(s,e)=>N(s,P(e));import{ab as i,y as C,a8 as q}from"./vendor.2dfd018b.js";import{u as z}from"./useToggleState.24c1b3d1.js";import{L as A,u as E,S as R}from"./lists.3fb74184.js";import{F as W}from"./FacePartSelector.1ecde91e.js";import{f as H,c as J,B as K,F as O,a as U}from"./filterConfig.d06c7eba.js";import{u as V,G as X}from"./Gallery.de2d8f89.js";import{M as Y,C as Z,c as _,s as n,u as I}from"./styles.1e7777d5.js";import{j as a,I as ee,a as g}from"./index.509d4a00.js";import{B as y}from"./Box.2a9ecd4e.js";import{a as te,b as se}from"./DialogTitle.16536542.js";import{I as ae}from"./Close.18f9679d.js";function oe({compact:s,searchQuery:e,filter:t,content:d,onSelect:r}){var p;const u=(p=V(o=>o[`chara-${d}`]))!=null?p:[],m=u.filter(({id:o})=>!o.endsWith("h")),[h,c]=i([]),[F,f]=i(!1);return C(()=>c(m),[d]),C(()=>{f(!0);async function o(){const l=e?await ee(e):m;return await H(l,t)}setTimeout(async()=>{const l=await o();c(l),f(!1)})},[e,t]),u.length&&!F?a(X,{list:h,component:s?Y:Z,onClick:r}):a(A,{})}const b=_.find(({value:s})=>s==="chara").options,re=[],ie=D(w({},n.top),{"& .Selector":{margin:"0.1rem 2rem 0.1rem 0"}});function Fe({compact:s,onSelect:e,onAfterSelect:t}){const d=!!indexedDB,[r,u]=i(0),m=(S,x)=>u(x),[h,c]=i(""),F=E(h,500);C(()=>{c("")},[r]);const[f,p]=i(re),[o,l]=i("Both"),[L,M]=z(!0),j=b[r].value==="regular"&&J,B=s||I("(max-width:640px)")||I("(max-height:640px)"),k=q(S=>{const{value:x}=S.currentTarget.dataset;o!=="Eyes"&&e(x,"mouth"),o!=="Mouth"&&e(x,"eye"),t==null||t()},[o]);return g(y,{className:"FaceTexture",sx:n.root,children:[g(y,{sx:ie,children:[a(te,{sx:n.title,children:"Select Texture"}),a(W,{value:o,onClick:l}),a(K,{options:b,selectedIndices:[r],setIndex:m}),g(y,{sx:n.searchFilter,children:[g(y,{sx:n.search,children:[a(R,{query:h,onChange:c,placeholder:d?"Search All":"Search"},r[0]),j&&a(ae,{onClick:M,size:"large",children:a(O,{})})]}),L&&j&&a(U,{config:j,onChange:p,compact:B})]})]}),a(se,{sx:n.content,children:a(oe,{compact:B,searchQuery:F,filter:f,content:b[r].value,onSelect:k})})]})}export{Fe as F};
