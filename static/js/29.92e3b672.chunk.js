(this["webpackJsonpdl-model"]=this["webpackJsonpdl-model"]||[]).push([[29],{272:function(e,t,n){},501:function(e,t,n){"use strict";n.r(t);var c=n(14),o=n(10),r=n(1),l=n(97),a=n(146),s=n(31),u=n(9),i=n(19),b=(n(272),Object(r.lazy)((function(){return n.e(9).then(n.t.bind(null,288,7)).then((function(e){return{default:e.ChromePicker}}))})));t.default=function(e){var t,n,d,j=e.toggleControlOpen,h=e.mode,k=Object(r.useContext)(i.a),O=Object(r.useContext)(i.b);switch(h){case"background":t=O.scene.background,d=u.n,n="Background Settings";break;case"outlineColor":t=O.outline.color,d={},n="Outline Color"}var p=Object(r.useState)(t),g=Object(c.a)(p,2),x=g[0],C=g[1],v=function(e){var t=e.currentTarget.value;C(t)},f=Object.keys(d).map((function(e){return Object(o.jsx)(l.a,{onClick:v,style:{backgroundColor:u.n[e],color:Object(s.d)(u.n[e])},value:u.n[e],children:e},e)}));return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(a.c,{children:Object(o.jsx)(a.b,{onClose:j,children:n})}),Object(o.jsxs)(a.a,{dividers:!0,className:"ColorSettings",children:[Object(o.jsxs)("div",{className:"ColorSettings-btn",children:[Object(o.jsx)(l.a,{onClick:function(e){var t=e.currentTarget.value,n="picker"===t?x:t,c={type:"update"};switch(h){case"background":c.key="scene",c.value={background:n};break;case"outlineColor":c.key="outline",c.value={color:n}}k(c),j()},style:{backgroundColor:x,color:Object(s.d)(x),textShadow:"0px 0px 3px white"},value:"picker",children:"Apply"}),Object(o.jsx)("div",{className:"ColorSettings-common",children:f})]}),Object(o.jsx)(r.Suspense,{fallback:null,children:Object(o.jsx)(b,{color:x,onChangeComplete:function(e){C(e.hex)}})})]})]})}}}]);
//# sourceMappingURL=29.92e3b672.chunk.js.map