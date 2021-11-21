import{s as S,ab as y,y as C}from"./vendor.10b98a91.js";import{u as x}from"./useKey.7b6884a2.js";import{b as D,r as L,B as T,a as r,j as a,v as j}from"./index.9a01e849.js";import{S as w}from"./Stretcher.18e3921d.js";import{h as I,j as k}from"./BoneManager.5df99144.js";import{B as n}from"./Box.c3de57c8.js";import{a as F,b as P}from"./DialogTitle.17128295.js";import{S as E}from"./Gallery.e903cac5.js";import{M as G}from"./MenuItem.b9736474.js";import{B as K}from"./Button.c6704658.js";/* empty css               */import"./ModelIcon.9b88b333.js";import"./Accordion.992f4b2a.js";import"./useToggleState.e53855b8.js";import"./createSvgIcon.c44a7281.js";import"./ButtonBase.03fd6b65.js";import"./ColorButton.2100912a.js";import"./Popover.043652aa.js";import"./filterConfig.f3142c62.js";import"./GlowToggle.f85631f3.js";import"./lists.5c98753c.js";import"./Close.8350def0.js";import"./FaceSelect.87208bc1.js";import"./FacePartSelector.a32dc65b.js";import"./Selector.c03d9b43.js";import"./MeshMouthSelect.b91fcf40.js";import"./FaceTexture.164c0ae2.js";import"./styles.afdd1409.js";import"./SkipPrevious.dbdc02c7.js";import"./AddWeapon.4e1ea3ad.js";import"./index.f44cccd7.js";function ht(){var d,l;const{activeModel:e}=D();if(!e)return null;const[u,h]=x(),{inputModel:f}=L(),s=S(()=>{}),c=["root",...(l=(d=e==null?void 0:e.bones)==null?void 0:d.list)!=null?l:[]],[i,g]=y(c[0]),b=T(e.attachment.list.map(t=>t.parentBone));C(()=>{if(!e)return;s.current();const t=e.addEventListener("AttachmentChanged",h);return s.current=()=>e.removeEventListener("AttachmentChanged",t),s.current},[e]);const M=t=>{g(t.target.value)},m=async(t=i)=>{const p=await f();if(!p)return;const[A,B]=p,o=await j.loadDLModel(A);o.userData.name=B,e.attach(o,t==="root"?void 0:t),o.outline.code=e.outline.code,o.material.code=e.material.code,j.render()},v=()=>m();return r(n,{className:"AttachmentManager",children:[r(n,{className:"AttachmentManager-top",children:[a(F,{children:"Manage Attachments"}),r(n,{className:"AttachmentManager-add",children:[a(E,{onChange:M,value:i,className:"AttachmentManager-select",children:c.map(t=>a(G,{value:t,children:t},t))}),a(K,{title:"Add Attachment",variant:"contained",onClick:v,children:a(I,{})})]})]}),r(P,{className:"AttachmentManager-body",children:[a(w,{}),b.map(t=>a(k,{add:m,bone:t},t))]},u)]})}export{ht as default};
