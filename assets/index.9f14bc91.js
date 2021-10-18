import{u as S,S as F}from"./lists.92f95f36.js";import{j as o,a as p,b as G,C as N,D as T,v as L,H as R}from"./index.7f884fcf.js";import{aX as M,aG as x,aD as j}from"./vendor.7867cdc7.js";import{f as $,B as E,F as H,a as P}from"./filterConfig.d4afb169.js";import{G as q}from"./GlowToggle.8d8f0d18.js";import{g as z}from"./index.8c68b94f.js";import{u as O}from"./useAppData.dd089d42.js";import{G as Q}from"./Gallery.66078525.js";import{u as D}from"./useToggleState.269650a2.js";/* empty css               */import{M as V}from"./ModelIcon.b1ee35c0.js";import{L as X}from"./LoadSpinner.bdc69ca5.js";import{B}from"./Box.65bd9130.js";import{D as Y,a as J}from"./DialogTitle.936889f0.js";import{I as K}from"./Close.7561fffa.js";import"./TextField.2cbd9c7c.js";import"./ButtonBase.1beca0f5.js";import"./Popover.591e05e0.js";import"./MenuItem.34e7d9be.js";import"./ToggleGroup.3e95f79a.js";import"./DialogContext.32b4e0e7.js";const h={root:{display:"flex",flexDirection:"column",overflowY:"hidden",minHeight:"90vh","& svg":{color:"rgba(16, 16, 16, 0.8)"}},top:{display:"flex",flexWrap:"wrap",borderBottom:"1px solid rgba(16, 16, 16, 0.4)",boxShadow:"0 0.2rem 0.3rem rgba(16, 16, 16, 0.4)"},searchFilter:{marginTop:"0.2rem",display:"flex",flexDirection:"column",width:"100%",minWidth:"20rem",alignItems:"center",justifyContent:"center","& .MuiTextField-root":{justifyContent:"center"}},search:{display:"flex",width:"100%",justifyContent:"center"},title:{padding:"0.5rem 1rem",textAlign:"center",flexGrow:.1,margin:"auto"},content:{padding:"0.3rem",textAlign:"center",minHeight:"60vh"}},w=[{value:"weapon",label:"Weapon",icon:"img/appIcon/weapon.png",options:[{value:"regular",label:"Regular"},{value:"special",label:"Special"},{value:"extra",label:"Extra"}]},{value:"chara",label:"Adventurer",icon:"img/appIcon/chara.png",options:[{value:"regular",label:"Regular"},{value:"allies",label:"Allies"},{value:"enemies",label:"Enemies"}]},{value:"dragon",label:"Dragon",icon:"img/appIcon/dragon.png",options:[{value:"regular",label:"Regular"},{value:"special",label:"Special"}]},{value:"boss",label:"Boss",icon:"img/appIcon/boss.png",options:[{value:"archdemon",label:"Archdemon",icon:"img/appIcon/archdemon.png"},{value:"agito",label:"Agito",icon:"img/appIcon/agito.png"},{value:"raid",label:"Raid",icon:"img/appIcon/raid.png"},{value:"void",label:"Void",icon:"img/appIcon/void.png"},{value:"others",label:"Others"}]}],U=e=>{let a=w;const i=[];return e.forEach(c=>{const t=a[c],l=t==null?void 0:t.value;l!==void 0&&(i.push(l),a=t.options)}),i.join("-")},Z={Left:"\u21D0",Right:"\u21D2"},I=({side:e,onClick:a})=>o("div",{className:"WeaponButton-addBtn","data-side":e,onClick:a,children:Z[e]});const _=e=>e.stopPropagation();function ee({id:e,name:a,noIcon:i,onClick:c}){const[t,l]=D(!1),[u,m]=D(!1),g=!i&&o(V,{modelId:e,className:"WeaponButton-icon"}),n=t&&p("div",{className:"WeaponButton-grip",onClick:_,children:[o("input",{type:"checkbox",id:`grip-${e}`,checked:u,onChange:m}),o("label",{htmlFor:`grip-${e}`,children:"Reverse Grip"})]}),f=d=>{d.stopPropagation();const{side:s}=d.currentTarget.dataset;c({side:s,id:e,name:a,reverse:u})};return p("div",{className:"WeaponButton",children:[g,t?p("div",{className:"WeaponButton-add",onClick:l,children:[n,p("div",{className:"WeaponButton-addBtnGroup",children:[o(I,{side:"Left",onClick:f}),o("div",{children:"ADD"}),o(I,{side:"Right",onClick:f})]})]}):o("div",{className:"WeaponButton-name",onClick:l,children:a})]})}const oe=[];function te({content:e,searchQuery:a,searchAll:i,filter:c=oe}){var d;const t=(d=O(s=>s[e]))!=null?d:[],[l,u]=x([]),[m,g]=x(!1),{activeModel:n}=G();j(()=>u(t),[e]),j(()=>{g(!0);async function s(){if(i)return a?await N(a):t;const r=await T(t,a);return await $(r,c)}setTimeout(async()=>{const r=await s();u(r),g(!1)})},[a,c,i]);const f=async({side:s,id:r,name:v,reverse:W})=>{var y;const C=`jWeapon${s[0]}`;if(!(n==null?void 0:n.bones.list.includes(C)))return;const b=await L.loadDLModel(r);b.userData.name=v,W&&(b.rotation.y=Math.PI),(y=n.attachment[C])==null||y.forEach(k=>k.dispose()),n.attach(b,C),b.outline.code=n.outline.code,b.material.code=n.material.code};return t.length&&!m?o(Q,{list:l,component:ee,onClick:f}):o(X,{})}var ae=M(te);const A=[];function we(){const{indices:e,setIndex:a,showFilter:i,toggleFilter:c,searchAll:t,toggleSearchAll:l}=R(),u=!!indexedDB,[m,g]=x(""),n=S(m,500),[f,d]=x(A),s=U(e),r=z(s);j(()=>d(A),[i,e]),j(()=>{g(""),t&&l()},[e]);const v=e.join();return p(B,{className:"AddWeapon",sx:h.root,children:[p(B,{sx:h.top,children:[o(Y,{sx:h.title,children:"Add Weapon"}),o(E,{options:w,selectedIndices:e,setIndex:a}),p(B,{sx:h.searchFilter,children:[p(B,{sx:h.search,children:[u&&o(q,{type:"text",value:"All",checked:t,onClick:l}),o(F,{query:m,onChange:g},v),r&&!t&&o(K,{onClick:c,size:"large",children:o(H,{})})]}),!t&&i&&r&&o(P,{config:r,onChange:d},v)]})]}),o(J,{sx:h.content,children:o(ae,{searchQuery:n,filter:f,content:s,searchAll:t})})]})}export{we as default};
