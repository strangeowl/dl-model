var Q=Object.defineProperty;var D=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var L=(o,e,t)=>e in o?Q(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,F=(o,e)=>{for(var t in e||(e={}))W.call(e,t)&&L(o,t,e[t]);if(D)for(var t of D(e))$.call(e,t)&&L(o,t,e[t]);return o};import{a4 as q,m as C,y as x,j as a,aa as z,ab as E,l as R,A as H,a as p}from"./index.10fce9af.js";import{L as J,u as K,S as O}from"./lists.fc9b0f74.js";import{f as P,B as U,F as V,a as X}from"./filterConfig.bc18b9a3.js";import{G as Y}from"./GlowToggle.31297deb.js";import{u as Z,G as _}from"./Gallery.7c0ceb07.js";import{M as k,C as tt,c as G,u as T,s as c}from"./styles.ad0699e3.js";import{g as et}from"./index.a053496e.js";import{B as f}from"./Box.1fb295c0.js";import{a as ot,b as at}from"./DialogTitle.441830a9.js";import{I as st}from"./Close.80d15002.js";import"./createSvgIcon.e4fddf2e.js";import"./ButtonBase.1d005958.js";import"./Popover.3b8fc2dd.js";/* empty css               */const nt=[],it=["w","b","e"],rt=o=>it.some(e=>o.startsWith(e)),lt=o=>rt(o.id)?a(k,F({},o)):a(tt,F({},o));function ct({compact:o,content:e,searchQuery:t,searchAll:s,filter:n=nt,onSelect:i}){var u;const l=(u=Z(g=>g[e]))!=null?u:[],[r,d]=C([]),[y,m]=C(!1);return x(()=>d(l),[e]),x(()=>{m(!0);async function g(){if(s)return t?await z(t):l;const h=await E(l,t);return await P(h,n)}setTimeout(async()=>{const h=await g();d(h),m(!1)})},[t,n,s]),l.length&&!y?a(_,{list:r,component:o?k:lt,onClick:i}):a(J,{})}var dt=q(ct);const mt=o=>{let e=G;const t=[];return o.forEach(s=>{const n=e[s],i=n==null?void 0:n.value;i!==void 0&&(t.push(i),e=n.options)}),t.join("-")},j=[];function Lt({compact:o,onSelect:e=()=>{},onAfterSelect:t}){const{indices:s,setIndex:n,showFilter:i,toggleFilter:l,searchAll:r,toggleSearchAll:d}=R(),y=!!indexedDB,[m,u]=C(""),g=K(m,500),[h,b]=C(j),w=o||T("(max-width:640px)")||T("(max-height:640px)"),N=H(S=>{const{value:I,name:A}=S.currentTarget.dataset;e(I,A),t==null||t()},[]),M=mt(s),B=et(M);x(()=>b(j),[i,s]),x(()=>{u(""),r&&d()},[s]);const v=s.join();return p(f,{className:"ModelCatalog",sx:c.root,children:[p(f,{sx:c.top,children:[a(ot,{sx:c.title,children:"Model Select"}),a(U,{options:G,selectedIndices:s,setIndex:n}),p(f,{sx:c.searchFilter,children:[p(f,{sx:c.search,children:[y&&a(Y,{type:"text",value:"All",checked:r,onClick:d,title:"Whether to search all model"}),a(O,{query:m,onChange:u},v),B&&!r&&a(st,{title:"Toggle Filter",onClick:l,size:"large",children:a(V,{})})]}),!r&&i&&B&&a(X,{config:B,onChange:b,compact:w},v)]})]}),a(at,{sx:c.content,children:a(dt,{compact:w,searchQuery:g,filter:h,content:M,onSelect:N,searchAll:r})})]})}export{Lt as default};
