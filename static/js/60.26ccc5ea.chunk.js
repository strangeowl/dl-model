(this["webpackJsonpdl-model"]=this["webpackJsonpdl-model"]||[]).push([[60],{208:function(e,t,c){"use strict";var a=c(11),n=c(137),o="512px 512px";t.a=function(e,t){for(var c=Array(9).fill().map((function(e,t){return t+1})),r=c.map((function(e){return 1===e?[-280,-170]:[-(24+128*((e-2)%4)),-(298+128*Math.floor(e/6))]})),i=Object(a.a)(e,2),d=i[0],u=i[1],l=128*d,s=128*u,m=function(e){var t=Object(a.a)(r[e-1],2),c=t[0],n=t[1];return"".concat(c-l,"px ").concat(n+s,"px")},x=Object(a.a)(t,2),b=x[0],h=x[1],p=128*b,g=128*h,j=function(e){var t=Object(a.a)(r[e-1],2),c=t[0],n=t[1];return"".concat(c-p,"px ").concat(n+g-32,"px")},f={root:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gridGap:"0.5rem",margin:"0.5rem"},faceBox:{display:"flex",flexDirection:"column",cursor:"pointer"},eyeBox:{width:"".concat(64,"px"),height:"".concat(32,"px"),backgroundSize:o,borderRadius:"0.5rem 0.5rem 0 0"},mouthBox:{width:"".concat(64,"px"),height:"".concat(32,"px"),backgroundSize:o,borderRadius:"0 0 0.5rem 0.5rem"}},O=1;O<=9;O++)f["eye".concat(O)]={backgroundPosition:m(O)},f["mouth".concat(O)]={backgroundPosition:j(O)};return Object(n.a)(f)()}},441:function(e,t,c){"use strict";c.r(t);var a=c(32),n=c(208),o=c(514),r=c(142),i=c.n(r),d=c(38),u=c(43),l=c(10);t.default=function(e){var t=e.change,c=t.id,r=t.time,s=t.eyeIdx,m=t.mouthIdx,x=e.deleteFaceChange,b=e.handleChange,h=e.handleClick,p=Object(a.c)().model,g=p.eyeTexture,j=p.mouthTexture,f="".concat(d.b,"/fbx/").concat(g,"/").concat(g,".png"),O="".concat(d.b,"/fbx/").concat(j,"/").concat(j,".png"),y=u.a[g]||[0,0],k=u.a[j]||[0,0],v=Object(n.a)(y,k),C=s?Object(l.jsx)("div",{className:"".concat(v["eye".concat(s)]," ").concat(v.eyeBox),style:{backgroundImage:"url(".concat(f,")")}}):"Set",B=m?Object(l.jsx)("div",{className:"".concat(v["mouth".concat(m)]," ").concat(v.mouthBox),style:{backgroundImage:"url(".concat(O,")")}}):"Set";return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"ChainAniFace-delete",onClick:x,id:c,children:Object(l.jsx)(i.a,{})}),Object(l.jsx)(o.a,{onChange:b,inputProps:{type:"number",min:0,max:100,step:1,"data-name":"time","data-id":c},value:r}),Object(l.jsx)("div",{onClick:h,"data-target":"eye","data-id":c,children:C}),Object(l.jsx)("div",{onClick:h,"data-target":"mouth","data-id":c,children:B})]})}}}]);
//# sourceMappingURL=60.26ccc5ea.chunk.js.map