var $=Object.defineProperty;var M=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var D=(o,e,t)=>e in o?$(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,b=(o,e)=>{for(var t in e||(e={}))q.call(e,t)&&D(o,t,e[t]);if(M)for(var t of M(e))z.call(e,t)&&D(o,t,e[t]);return o};import{j as s,I as A,J as E,i as J,a as p}from"./index.b677834c.js";import{ao as P,ab as h,a4 as C,a8 as R}from"./vendor.732e1712.js";import{L as W,u as H,S as K}from"./lists.9c30838d.js";import{f as O,B as U,F as V,a as X}from"./filterConfig.39795da8.js";import{G as Y}from"./GlowToggle.496c099f.js";import{u as Z,G as _}from"./Gallery.0d7933e6.js";import{M as G,C as tt,c as I,u as T,s as l}from"./styles.123343ed.js";import{g as et}from"./index.fa8b8019.js";import{B as j}from"./Box.7c4b4fda.js";import{a as ot,b as st}from"./DialogTitle.dc7cc1c0.js";import{I as at}from"./Close.112308c7.js";import"./createSvgIcon.dda3d449.js";import"./ButtonBase.f7b5d3a9.js";import"./Popover.62cae1c4.js";import"./MenuItem.5fe91807.js";/* empty css               */const nt=[],it=["w","b"],rt=o=>it.some(e=>o.startsWith(e)),ct=o=>rt(o.id)?s(G,b({},o)):s(tt,b({},o));function lt({compact:o,content:e,searchQuery:t,searchAll:a,filter:n=nt,onSelect:i}){var u;const c=(u=Z(g=>g[e]))!=null?u:[],[r,d]=h([]),[x,m]=h(!1);return C(()=>d(c),[e]),C(()=>{m(!0);async function g(){if(a)return t?await A(t):c;const f=await E(c,t);return await O(f,n)}setTimeout(async()=>{const f=await g();d(f),m(!1)})},[t,n,a]),c.length&&!x?s(_,{list:r,component:o?G:ct,onClick:i}):s(W,{})}var dt=P(lt);const mt=o=>{let e=I;const t=[];return o.forEach(a=>{const n=e[a],i=n==null?void 0:n.value;i!==void 0&&(t.push(i),e=n.options)}),t.join("-")},L=[];function It({compact:o,onSelect:e=()=>{},onAfterSelect:t}){const{indices:a,setIndex:n,showFilter:i,toggleFilter:c,searchAll:r,toggleSearchAll:d}=J(),x=!!indexedDB,[m,u]=h(""),g=H(m,500),[f,B]=h(L),w=o||T("(max-width:640px)")||T("(max-height:640px)"),S=R(k=>{const{value:N,name:Q}=k.currentTarget.dataset;e(N,Q),t==null||t()},[]),F=mt(a),y=et(F);C(()=>B(L),[i,a]),C(()=>{u(""),r&&d()},[a]);const v=a.join();return p(j,{className:"ModelCatalog",sx:l.root,children:[p(j,{sx:l.top,children:[s(ot,{sx:l.title,children:"Model Select"}),s(U,{options:I,selectedIndices:a,setIndex:n}),p(j,{sx:l.searchFilter,children:[p(j,{sx:l.search,children:[x&&s(Y,{type:"text",value:"All",checked:r,onClick:d}),s(K,{query:m,onChange:u},v),y&&!r&&s(at,{onClick:c,size:"large",children:s(V,{})})]}),!r&&i&&y&&s(X,{config:y,onChange:B,compact:w},v)]})]}),s(st,{sx:l.content,children:s(dt,{compact:w,searchQuery:g,filter:f,content:F,onSelect:S,searchAll:r})})]})}export{It as default};
