import{s as S,ab as x,y}from"./vendor.d89dcd89.js";import{u as C}from"./useKey.588338c4.js";import{b as D,r as L,B as T,a as r,j as a,v as f}from"./index.535aa750.js";import{S as w}from"./Stretcher.6d284af4.js";import{h as k,i as F}from"./BoneManager.8d663cc8.js";import{B as n}from"./Box.ad83a8a7.js";import{a as I,b as P}from"./DialogTitle.2fc66c4b.js";import{S as E}from"./Gallery.c6690e25.js";import{M as G}from"./filterConfig.736c6802.js";import{B as K}from"./Button.3234d08d.js";/* empty css               */import"./ModelIcon.350ac606.js";import"./Accordion.173f0a4b.js";import"./useToggleState.b55f24e6.js";import"./createSvgIcon.a0bc0e7f.js";import"./ButtonBase.16f5c76d.js";import"./Popover.fb8eea6f.js";import"./ColorButton.658f960e.js";import"./SkipPrevious.6d9d8c44.js";import"./index.65f1d40b.js";import"./Close.1b99cfab.js";import"./FaceSelect.fc000824.js";import"./FacePartSelector.0cd596fc.js";import"./Selector.49e8f71a.js";import"./GlowToggle.2673612f.js";import"./MeshMouthSelect.76568e58.js";import"./FaceTexture.115b94eb.js";import"./lists.6fba0292.js";import"./styles.66f96a0f.js";import"./AddWeapon.65f190e4.js";import"./index.56a84111.js";function jt(){var d,l;const{activeModel:e}=D();if(!e)return null;const[h,j]=C(),{inputModel:u}=L(),s=S(()=>{}),c=["root",...(l=(d=e==null?void 0:e.bones)==null?void 0:d.list)!=null?l:[]],[i,g]=x(c[0]),v=T(e.attachment.list.map(t=>t.parentBone));y(()=>{if(!e)return;s.current();const t=e.addEventListener("AttachmentChanged",j);return s.current=()=>e.removeEventListener("AttachmentChanged",t),s.current},[e]);const A=t=>{g(t.target.value)},m=async(t=i)=>{const p=await u();if(!p)return;const[b,B]=p,o=await f.loadDLModel(b);o.userData.name=B,e.attach(o,t==="root"?void 0:t),o.outline.code=e.outline.code,o.material.code=e.material.code,f.render()},M=()=>m();return r(n,{className:"AttachmentManager",children:[r(n,{className:"AttachmentManager-top",children:[a(I,{children:"Manage Attachments"}),r(n,{className:"AttachmentManager-add",children:[a(E,{onChange:A,value:i,className:"AttachmentManager-select",children:c.map(t=>a(G,{value:t,children:t},t))}),a(K,{title:"Add Attachment",variant:"contained",onClick:M,children:a(k,{})})]})]}),r(P,{className:"AttachmentManager-body",children:[a(w,{}),v.map(t=>a(F,{add:m,bone:t},t))]},h)]})}export{jt as default};
