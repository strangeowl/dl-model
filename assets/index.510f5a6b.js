var $=Object.defineProperty;var M=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var D=(o,t,e)=>t in o?$(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,y=(o,t)=>{for(var e in t||(t={}))q.call(t,e)&&D(o,e,t[e]);if(M)for(var e of M(t))z.call(t,e)&&D(o,e,t[e]);return o};import{j as s,I as A,J as E,i as J,a as p}from"./index.53b7e3fd.js";import{ao as P,ab as h,a4 as b,a8 as R}from"./vendor.732e1712.js";import{L as W,u as H,S as K}from"./lists.d1f1bc44.js";import{f as O,B as U,F as V,a as X}from"./filterConfig.01879eb0.js";import{G as Y}from"./GlowToggle.eaed4909.js";import{u as Z,G as _}from"./Gallery.adf422b4.js";import{M as G,C as ee,c as I,u as T,s as c}from"./styles.3ebe7bbb.js";import{g as te}from"./index.8da822cd.js";import{B as C}from"./Box.6f03ff47.js";import{a as oe,b as se}from"./DialogTitle.ddb3ab90.js";import{I as ae}from"./Close.4f75fd8d.js";import"./createSvgIcon.f4de0425.js";import"./ButtonBase.9f46f3cf.js";import"./Popover.8bcc0e5c.js";import"./MenuItem.b271bfee.js";/* empty css               */const ne=[],ie=["w","b"],re=o=>ie.some(t=>o.startsWith(t)),le=o=>re(o.id)?s(G,y({},o)):s(ee,y({},o));function ce({compact:o,content:t,searchQuery:e,searchAll:a,filter:n=ne,onSelect:i}){var u;const l=(u=Z(f=>f[t]))!=null?u:[],[r,d]=h([]),[j,m]=h(!1);return b(()=>d(l),[t]),b(()=>{m(!0);async function f(){if(a)return e?await A(e):l;const g=await E(l,e);return await O(g,n)}setTimeout(async()=>{const g=await f();d(g),m(!1)})},[e,n,a]),l.length&&!j?s(_,{list:r,component:o?G:le,onClick:i}):s(W,{})}var de=P(ce);const me=o=>{let t=I;const e=[];return o.forEach(a=>{const n=t[a],i=n==null?void 0:n.value;i!==void 0&&(e.push(i),t=n.options)}),e.join("-")},L=[];function Ie({compact:o,onSelect:t=()=>{},onAfterSelect:e}){const{indices:a,setIndex:n,showFilter:i,toggleFilter:l,searchAll:r,toggleSearchAll:d}=J(),j=!!indexedDB,[m,u]=h(""),f=H(m,500),[g,B]=h(L),w=o||T("(max-width:640px)")||T("(max-height:640px)"),S=R(k=>{const{value:N,name:Q}=k.currentTarget.dataset;t(N,Q),e==null||e()},[]),F=me(a),x=te(F);b(()=>B(L),[i,a]),b(()=>{u(""),r&&d()},[a]);const v=a.join();return p(C,{className:"ModelCatalog",sx:c.root,children:[p(C,{sx:c.top,children:[s(oe,{sx:c.title,children:"Model Select"}),s(U,{options:I,selectedIndices:a,setIndex:n}),p(C,{sx:c.searchFilter,children:[p(C,{sx:c.search,children:[j&&s(Y,{type:"text",value:"All",checked:r,onClick:d}),s(K,{query:m,onChange:u},v),x&&!r&&s(ae,{onClick:l,size:"large",children:s(V,{})})]}),!r&&i&&x&&s(X,{config:x,onChange:B,compact:w},v)]})]}),s(se,{sx:c.content,children:s(de,{compact:w,searchQuery:f,filter:g,content:F,onSelect:S,searchAll:r})})]})}export{Ie as default};
