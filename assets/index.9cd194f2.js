import{s as S,ab as y,y as C}from"./vendor.53cececb.js";import{u as x}from"./useKey.ac4fdaca.js";import{b as D,r as L,B as T,a as r,j as a,v as j}from"./index.e0313822.js";import{S as w}from"./Stretcher.38c83e08.js";import{h as I,j as k}from"./BoneManager.3ce8994b.js";import{B as n}from"./Box.b565a1a7.js";import{a as F,b as P}from"./DialogTitle.d8718db4.js";import{S as E}from"./Gallery.be667483.js";import{M as G}from"./MenuItem.65fd8182.js";import{B as K}from"./Button.5812b963.js";/* empty css               */import"./ModelIcon.c772ce81.js";import"./Accordion.a947323f.js";import"./useToggleState.2f89d68a.js";import"./createSvgIcon.bc3133ad.js";import"./ButtonBase.aa069ef6.js";import"./ColorButton.debadc5f.js";import"./Popover.bc08558c.js";import"./filterConfig.0fd8d2b2.js";import"./GlowToggle.b065a96a.js";import"./lists.276155c4.js";import"./Close.8ff660fd.js";import"./FaceSelect.7a94d8ad.js";import"./FacePartSelector.68042e52.js";import"./Selector.32510bdf.js";import"./MeshMouthSelect.1f1c14dc.js";import"./FaceTexture.172922bd.js";import"./styles.99eef384.js";import"./SkipPrevious.d9a8ef57.js";import"./AddWeapon.8fa46fd0.js";import"./index.6de870a1.js";function he(){var m,l;const{activeModel:t}=D();if(!t)return null;const[u,h]=x(),{inputModel:f}=L(),s=S(()=>{}),c=["root",...(l=(m=t==null?void 0:t.bones)==null?void 0:m.list)!=null?l:[]],[i,g]=y(c[0]),b=T(t.attachment.list.map(e=>e.parentBone));C(()=>{if(!t)return;s.current();const e=t.addEventListener("AttachmentChanged",h);return s.current=()=>t.removeEventListener("AttachmentChanged",e),s.current},[t]);const M=e=>{g(e.target.value)},d=async(e=i)=>{const p=await f();if(!p)return;const[A,B]=p,o=await j.loadDLModel(A);o.userData.name=B,t.attach(o,e==="root"?void 0:e),o.outline.code=t.outline.code,o.material.code=t.material.code,j.render()},v=()=>d();return r(n,{className:"AttachmentManager",children:[r(n,{className:"AttachmentManager-top",children:[a(F,{children:"Manage Attachments"}),r(n,{className:"AttachmentManager-add",children:[a(E,{onChange:M,value:i,className:"AttachmentManager-select",children:c.map(e=>a(G,{value:e,children:e},e))}),a(K,{title:"Add Attachment",variant:"contained",onClick:v,children:a(I,{})})]})]}),r(P,{className:"AttachmentManager-body",children:[a(w,{}),b.map(e=>a(k,{add:d,bone:e},e))]},u)]})}export{he as default};
