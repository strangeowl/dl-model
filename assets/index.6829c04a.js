var P=Object.defineProperty,k=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var D=(a,e,t)=>e in a?P(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,v=(a,e)=>{for(var t in e||(e={}))Q.call(e,t)&&D(a,t,e[t]);if(T)for(var t of T(e))$.call(e,t)&&D(a,t,e[t]);return a},w=(a,e)=>k(a,N(e));import{aG as i,aD as F,aJ as q}from"./vendor.7867cdc7.js";import{u as z}from"./useToggleState.269650a2.js";import{u as A,S as E}from"./lists.a665435f.js";import{F as J}from"./FacePartSelector.b16587d0.js";import{f as R,c as W,B as H,F as K,a as O}from"./filterConfig.99ee377a.js";import{u as U}from"./useAppData.dd089d42.js";import{G as V}from"./Gallery.c24aeda5.js";import{M as X,C as Y,s as n}from"./styles.012e815f.js";import{L as Z}from"./LoadSpinner.09aea2ae.js";import{j as s,I as _,a as x}from"./index.7875a9f2.js";import{c as ee,u as I}from"./categories.cdf2be59.js";import{B as j}from"./Box.8f7dd023.js";import{D as te,a as ae}from"./DialogTitle.12f4a490.js";import{I as se}from"./Close.ed34face.js";import"./TextField.4b71dc25.js";import"./ButtonBase.c570257e.js";import"./Popover.202a4dff.js";import"./Selector.51b671fb.js";import"./GlowToggle.49f9393e.js";import"./MenuItem.46122a49.js";import"./ToggleGroup.02e68090.js";/* empty css               */import"./DialogContext.c5249012.js";function oe({compact:a,searchQuery:e,filter:t,content:d,onSelect:r}){var h;const m=(h=U(o=>o[`chara-${d}`]))!=null?h:[],u=m.filter(({id:o})=>!o.endsWith("h")),[p,c]=i([]),[y,f]=i(!1);return F(()=>c(u),[d]),F(()=>{f(!0);async function o(){const l=e?await _(e):u;return await R(l,t)}setTimeout(async()=>{const l=await o();c(l),f(!1)})},[e,t]),m.length&&!y?s(V,{list:p,component:a?X:Y,onClick:r}):s(Z,{})}const B=ee.find(({value:a})=>a==="chara").options,re=[],ie=w(v({},n.top),{"& .Selector":{margin:"0.1rem 2rem 0.1rem 0"}});function Me({compact:a,onSelect:e,onAfterSelect:t}){const d=!!indexedDB,[r,m]=i(0),u=(S,g)=>m(g),[p,c]=i(""),y=A(p,500);F(()=>{c("")},[r]);const[f,h]=i(re),[o,l]=i("Both"),[L,M]=z(!0),C=B[r].value==="regular"&&W,b=a||I("(max-width:640px)")||I("(max-height:640px)"),G=q(S=>{const{value:g}=S.currentTarget.dataset;o!=="Eyes"&&e(g,"mouth"),o!=="Mouth"&&e(g,"eye"),t==null||t()},[o]);return x(j,{className:"ModelCatalog",sx:n.root,children:[x(j,{sx:ie,children:[s(te,{sx:n.title,children:"Select Texture"}),s(J,{value:o,onClick:l}),s(H,{options:B,selectedIndices:[r],setIndex:u}),x(j,{sx:n.searchFilter,children:[x(j,{sx:n.search,children:[s(E,{query:p,onChange:c,placeholder:d?"Search All":"Search"},r[0]),C&&s(se,{onClick:M,size:"large",children:s(K,{})})]}),L&&C&&s(O,{config:C,onChange:h,compact:b})]})]}),s(ae,{sx:n.content,children:s(oe,{compact:b,searchQuery:y,filter:f,content:B[r].value,onSelect:G})})]})}export{Me as default};
