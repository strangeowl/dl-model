(this["webpackJsonpdl-model"]=this["webpackJsonpdl-model"]||[]).push([[33],{132:function(e,t,a){"use strict";a.d(t,"c",(function(){return h})),a.d(t,"b",(function(){return j})),a.d(t,"a",(function(){return f}));var n=a(10),c=a(56),o=a(9),r=a(26),l=a(162),i=a(163),s=a(164),d=a(136),u=a(154),b=a(128),m=a.n(b),p={dialogRoot:{margin:0,padding:0},closeButton:{position:"absolute",right:"0.5rem",top:"0.5rem",color:"rgba(0,0,0,0.8)"},titleRoot:{margin:0,padding:"1rem",paddingBottom:0,display:"flex",justifyContent:"center"}},h=Object(r.a)(p)((function(e){var t=e.children,a=e.classes,r=(e.onClose,Object(c.a)(e,["children","classes","onClose"]));return Object(o.jsx)(l.a,Object(n.a)(Object(n.a)({disableTypography:!0,className:a.dialogRoot},r),{},{children:t}))})),j=Object(r.a)(p)((function(e){var t=e.children,a=e.classes,r=e.onClose,i=Object(c.a)(e,["children","classes","onClose"]);return Object(o.jsxs)(l.a,Object(n.a)(Object(n.a)({disableTypography:!0,className:a.titleRoot},i),{},{children:[Object(o.jsx)(u.a,{variant:"h6",className:a.titleText,children:t}),Object(o.jsx)(d.a,{"aria-label":"close",className:a.closeButton,onClick:r,children:Object(o.jsx)(m.a,{})})]}))})),f=Object(r.a)((function(e){return{root:{padding:e.spacing(2)}}}))(i.a);Object(r.a)((function(e){return{root:{margin:0,padding:e.spacing(1)}}}))(s.a)},275:function(e,t,a){},276:function(e,t,a){"use strict";var n=a(79),c=a(80);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(a(0)),r=(0,n(a(81)).default)(o.createElement("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"}),"FileCopy");t.default=r},460:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return W}));var n=a(13),c=a(9),o=a(0),r=a(132),l=a(7),i=a(10),s=a(64),d=a(276),u=a.n(d),b=a(2),m=a(11),p=(a(16),a(18)),h=a(157),j=a(26),f=a(154),O=a(25),v=o.forwardRef((function(e,t){e.checked;var a=e.classes,n=e.className,c=e.control,r=e.disabled,l=(e.inputRef,e.label),i=e.labelPlacement,s=void 0===i?"end":i,d=(e.name,e.onChange,e.value,Object(m.a)(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","name","onChange","value"])),u=Object(h.a)(),j=r;"undefined"===typeof j&&"undefined"!==typeof c.props.disabled&&(j=c.props.disabled),"undefined"===typeof j&&u&&(j=u.disabled);var v={disabled:j};return["checked","name","onChange","value","inputRef"].forEach((function(t){"undefined"===typeof c.props[t]&&"undefined"!==typeof e[t]&&(v[t]=e[t])})),o.createElement("label",Object(b.a)({className:Object(p.a)(a.root,n,"end"!==s&&a["labelPlacement".concat(Object(O.a)(s))],j&&a.disabled),ref:t},d),o.cloneElement(c,v),o.createElement(f.a,{component:"span",className:Object(p.a)(a.label,j&&a.disabled)},l))})),g=Object(j.a)((function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}}),{name:"MuiFormControlLabel"})(v),x=a(136),k=a(62),y=a(69),C=o.forwardRef((function(e,t){var a=e.autoFocus,n=e.checked,c=e.checkedIcon,r=e.classes,l=e.className,i=e.defaultChecked,s=e.disabled,d=e.icon,u=e.id,j=e.inputProps,f=e.inputRef,O=e.name,v=e.onBlur,g=e.onChange,C=e.onFocus,S=e.readOnly,P=e.required,z=e.tabIndex,E=e.type,I=e.value,B=Object(m.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),F=Object(y.a)({controlled:n,default:Boolean(i),name:"SwitchBase",state:"checked"}),R=Object(k.a)(F,2),w=R[0],N=R[1],T=Object(h.a)(),L=s;T&&"undefined"===typeof L&&(L=T.disabled);var M="checkbox"===E||"radio"===E;return o.createElement(x.a,Object(b.a)({component:"span",className:Object(p.a)(r.root,l,w&&r.checked,L&&r.disabled),disabled:L,tabIndex:null,role:void 0,onFocus:function(e){C&&C(e),T&&T.onFocus&&T.onFocus(e)},onBlur:function(e){v&&v(e),T&&T.onBlur&&T.onBlur(e)},ref:t},B),o.createElement("input",Object(b.a)({autoFocus:a,checked:n,defaultChecked:i,className:r.input,disabled:L,id:M&&u,name:O,onChange:function(e){var t=e.target.checked;N(t),g&&g(e,t)},readOnly:S,ref:f,required:P,tabIndex:z,type:E,value:I},j)),w?c:d)})),S=Object(j.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(C),P=a(65),z=Object(P.a)(o.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),E=Object(P.a)(o.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),I=a(23),B=Object(P.a)(o.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),F=o.createElement(E,null),R=o.createElement(z,null),w=o.createElement(B,null),N=o.forwardRef((function(e,t){var a=e.checkedIcon,n=void 0===a?F:a,c=e.classes,r=e.color,l=void 0===r?"secondary":r,i=e.icon,s=void 0===i?R:i,d=e.indeterminate,u=void 0!==d&&d,h=e.indeterminateIcon,j=void 0===h?w:h,f=e.inputProps,v=e.size,g=void 0===v?"medium":v,x=Object(m.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),k=u?j:s,y=u?j:n;return o.createElement(S,Object(b.a)({type:"checkbox",classes:{root:Object(p.a)(c.root,c["color".concat(Object(O.a)(l))],u&&c.indeterminate),checked:c.checked,disabled:c.disabled},color:l,inputProps:Object(b.a)({"data-indeterminate":u},f),icon:o.cloneElement(k,{fontSize:void 0===k.props.fontSize&&"small"===g?g:k.props.fontSize}),checkedIcon:o.cloneElement(y,{fontSize:void 0===y.props.fontSize&&"small"===g?g:y.props.fontSize}),ref:t},x))})),T=Object(j.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(I.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(I.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(N),L=a(467),M=a(14),A=a(8),H=(a(275),Object(o.lazy)((function(){return a.e(20).then(a.t.bind(null,456,7))})));var V=function(e){var t,a=e.method,r=Object(o.useState)({AC:!0,Settings:!0}),d=Object(n.a)(r,2),b=d[0],m=d[1],p=Object(s.a)(!1),h=Object(n.a)(p,2),j=h[0],f=h[1],O=Object(s.a)(!1),v=Object(n.a)(O,2),k=v[0],y=v[1],C=Object(o.useState)([0,.5,1.5]),S=Object(n.a)(C,2),P=S[0],z=S[1],E=Object(o.useState)("Code"),I=Object(n.a)(E,2),B=I[0],F=I[1],R=Object(o.useContext)(M.b),w=R.app.viewerType,N=function(){return Object(c.jsx)(x.a,{onClick:$,children:Object(c.jsx)(u.a,{})})},V=function(e){var t=e.currentTarget.name;m((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(l.a)({},t,!e[t]))}))},q=function(e){var t=parseInt(e.currentTarget.getAttribute("index")),a=e.currentTarget.value,n=P.map((function(e,n){return n===t?a:e}));z(n)},$=function(){var e=document.getElementById("shareTextField");e.select(),e.setSelectionRange(0,99999),document.execCommand("copy"),F("Copied"),setTimeout((function(){F("Link")}),2e3)},D=function(){var e=A.z[w],t=[A.p];return e.forEach((function(e){var a=A.y[e],n=a.group,c=a.key,o=R[n][c],r=A.v[n][c];switch(e){case"bg":if(j){t.push("bg=transparent");break}o!==r&&t.push("".concat(e,"=").concat(o.replace("#","")));break;case"et":if(R.model.eyeTexture===R.model.id)break;t.push("".concat(e,"=").concat(o));break;case"mt":if(R.model.mouthTexture===R.model.id)break;t.push("".concat(e,"=").concat(o));break;case"cam":if(!k)break;var l=R.model.id,i=l[0],s=A.q[l]?A.q[l]:A.q[i];if(P.some((function(e,t){return e!==s[t]}))){var d=P.map((function(e,t){return e!==s[t]?e:""}));t.push("cam=".concat(d.join(",")))}break;default:o!==r&&t.push("".concat(e,"=").concat(o))}})),Object.keys(b).forEach((function(e){b[e]||t.push("show".concat(e,"=false"))})),t.join("/")}(),W='<iframe src="'.concat(D,'" frameborder="0" width="300" height="300" ').concat(j?"allowtransparency ":"","/></iframe>");switch(Object(o.useEffect)((function(){if(1===a){var e=document.getElementById("shareTextField");e&&(e.focus(),e.select())}}),[D,a]),a){case 0:t=Object(c.jsx)(L.a,{color:"secondary",variant:"filled",autoFocus:!0,fullWidth:!0,inputProps:{readOnly:!0},label:B,InputLabelProps:{color:"primary"},id:"shareTextField",margin:"dense",value:D,InputProps:{endAdornment:Object(c.jsx)(N,{})}});break;case 1:t=Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"ShareContent-QR",children:Object(c.jsx)(H,{includeMargin:!0,size:256,value:D})}),Object(c.jsx)("div",{children:"Right click to save or copy"})]});break;case 2:t=Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(L.a,{color:"secondary",variant:"filled",autoFocus:!0,fullWidth:!0,inputProps:{readOnly:!0},label:B,InputLabelProps:{color:"primary"},id:"shareTextField",margin:"dense",value:W,InputProps:{endAdornment:Object(c.jsx)(N,{})}}),Object(c.jsx)("div",{children:Object(c.jsx)(g,{control:Object(c.jsx)(T,{checked:j,onChange:f,color:"primary"}),label:"Transparent Background"})})]})}return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"ShareContent-main",children:Object(c.jsx)(o.Suspense,{fallback:Object(c.jsx)("div",{children:"Loading"}),children:t})}),Object(c.jsxs)("div",{className:"ShareContent-checkboxes",children:[Object(c.jsx)(g,{control:Object(c.jsx)(T,{checked:b.AC,onChange:V,name:"AC",color:"primary"}),label:"Show Animation Control"}),Object(c.jsx)(g,{control:Object(c.jsx)(T,{checked:b.Settings,onChange:V,name:"Settings",color:"primary"}),label:"Show Settings"})]}),Object(c.jsx)(g,{control:Object(c.jsx)(T,{checked:k,onChange:y,name:"Settings",color:"primary"}),label:"Custom Camera Position"}),k&&Object(c.jsx)("div",{className:"ShareContent-CamPos",children:["x","y","z"].map((function(e,t){return Object(c.jsx)(L.a,{onChange:q,label:e,size:"small",margin:"dense",variant:"outlined",inputProps:{type:"number",step:.5,index:t},value:P[t]},e)}))})]})},q=a(445),$=a(461),D=a(444);var W=function(e){var t=e.closeModal,a=Object(o.useState)(0),l=Object(n.a)(a,2),i=l[0],s=l[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(r.c,{children:[Object(c.jsx)(r.b,{onClose:t,children:"Share"}),Object(c.jsx)(q.a,{position:"static",children:Object(c.jsxs)($.a,{centered:!0,value:i,onChange:function(e,t){s(t)},children:[Object(c.jsx)(D.a,{label:"Link"}),Object(c.jsx)(D.a,{label:"QR"}),Object(c.jsx)(D.a,{label:"Embed"})]})})]}),Object(c.jsx)(r.a,{dividers:!0,className:"Share-content",children:Object(c.jsx)(V,{method:i})})]})}}}]);
//# sourceMappingURL=33.6fba2043.chunk.js.map