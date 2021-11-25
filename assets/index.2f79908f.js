var W=Object.defineProperty;var M=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var D=(o,e,t)=>e in o?W(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,b=(o,e)=>{for(var t in e||(e={}))$.call(e,t)&&D(o,t,e[t]);if(M)for(var t of M(e))q.call(e,t)&&D(o,t,e[t]);return o};import{j as a,J as z,K as A,k as E,a as p}from"./index.ad76c2cd.js";import{ao as J,ab as h,y as C,a8 as K}from"./vendor.534e66ad.js";import{L as P,u as R,S as H}from"./lists.c4d27b88.js";import{f as O,B as U,F as V,a as X}from"./filterConfig.03285f2e.js";import{G as Y}from"./GlowToggle.4078d8a1.js";import{u as Z,G as _}from"./Gallery.f065c3d7.js";import{M as T,C as tt,c as G,u as k,s as c}from"./styles.670090a4.js";import{g as et}from"./index.5988479a.js";import{B as j}from"./Box.4470b764.js";import{a as ot,b as at}from"./DialogTitle.a32e1644.js";import{I as st}from"./Close.9dc98cd3.js";import"./createSvgIcon.a9d6f60b.js";import"./ButtonBase.d2e7478f.js";import"./Popover.4f4ad640.js";import"./MenuItem.a0a18147.js";/* empty css               */const nt=[],it=["w","b"],rt=o=>it.some(e=>o.startsWith(e)),lt=o=>rt(o.id)?a(T,b({},o)):a(tt,b({},o));function ct({compact:o,content:e,searchQuery:t,searchAll:s,filter:n=nt,onSelect:i}){var u;const l=(u=Z(g=>g[e]))!=null?u:[],[r,d]=h([]),[x,m]=h(!1);return C(()=>d(l),[e]),C(()=>{m(!0);async function g(){if(s)return t?await z(t):l;const f=await A(l,t);return await O(f,n)}setTimeout(async()=>{const f=await g();d(f),m(!1)})},[t,n,s]),l.length&&!x?a(_,{list:r,component:o?T:lt,onClick:i}):a(P,{})}var dt=J(ct);const mt=o=>{let e=G;const t=[];return o.forEach(s=>{const n=e[s],i=n==null?void 0:n.value;i!==void 0&&(t.push(i),e=n.options)}),t.join("-")},I=[];function Gt({compact:o,onSelect:e=()=>{},onAfterSelect:t}){const{indices:s,setIndex:n,showFilter:i,toggleFilter:l,searchAll:r,toggleSearchAll:d}=E(),x=!!indexedDB,[m,u]=h(""),g=R(m,500),[f,B]=h(I),F=o||k("(max-width:640px)")||k("(max-height:640px)"),L=K(S=>{const{value:N,name:Q}=S.currentTarget.dataset;e(N,Q),t==null||t()},[]),w=mt(s),y=et(w);C(()=>B(I),[i,s]),C(()=>{u(""),r&&d()},[s]);const v=s.join();return p(j,{className:"ModelCatalog",sx:c.root,children:[p(j,{sx:c.top,children:[a(ot,{sx:c.title,children:"Model Select"}),a(U,{options:G,selectedIndices:s,setIndex:n}),p(j,{sx:c.searchFilter,children:[p(j,{sx:c.search,children:[x&&a(Y,{type:"text",value:"All",checked:r,onClick:d,title:"Whether to search all model"}),a(H,{query:m,onChange:u},v),y&&!r&&a(st,{title:"Toggle Filter",onClick:l,size:"large",children:a(V,{})})]}),!r&&i&&y&&a(X,{config:y,onChange:B,compact:F},v)]})]}),a(at,{sx:c.content,children:a(dt,{compact:F,searchQuery:g,filter:f,content:w,onSelect:L,searchAll:r})})]})}export{Gt as default};
