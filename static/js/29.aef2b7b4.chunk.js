(this["webpackJsonpdl-model"]=this["webpackJsonpdl-model"]||[]).push([[29],{272:function(e,t,c){},501:function(e,t,c){"use strict";c.r(t);var n=c(9),o=c(14),l=c(10),r=c(1),a=c(97),s=c(146),u=c(32),i=c(8),b=c(20),d=(c(272),Object(r.lazy)((function(){return c.e(9).then(c.t.bind(null,288,7)).then((function(e){return{default:e.ChromePicker}}))})));t.default=function(e){var t,c,j,k=e.toggleControlOpen,O=e.mode,h=Object(r.useContext)(b.a),p=Object(r.useContext)(b.b);switch(O){case"background":t=p.scene.background,j=i.n,c="Background Settings";break;case"outlineColor":t=p.outline.color,j={},c="Outline Color";break;default:var C=O.split("-"),g=Object(o.a)(C,2),v=g[0],x=g[1];t=p[v][x],j=i.n,c="Pick a Color"}var f=Object(r.useState)(t),m=Object(o.a)(f,2),y=m[0],S=m[1],w=function(e){var t=e.currentTarget.value;S(t)},N=Object.keys(j).map((function(e){return Object(l.jsx)(a.a,{onClick:w,style:{backgroundColor:i.n[e],color:Object(u.d)(i.n[e])},value:i.n[e],children:e},e)}));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(s.c,{children:Object(l.jsx)(s.b,{onClose:k,children:c})}),Object(l.jsxs)(s.a,{dividers:!0,className:"ColorSettings",children:[Object(l.jsxs)("div",{className:"ColorSettings-btn",children:[Object(l.jsx)(a.a,{onClick:function(e){var t=e.currentTarget.value,c="picker"===t?y:t,l={type:"update"};switch(O){case"background":l.key="scene",l.value={background:c};break;case"outlineColor":l.key="outline",l.value={color:c};break;default:var r=O.split("-"),a=Object(o.a)(r,2),s=a[0],u=a[1];l.key=s,l.value=Object(n.a)({},u,c)}h(l),k()},style:{backgroundColor:y,color:Object(u.d)(y),textShadow:"0px 0px 3px white"},value:"picker",children:"Apply"}),Object(l.jsx)("div",{className:"ColorSettings-common",children:N})]}),Object(l.jsx)(r.Suspense,{fallback:null,children:Object(l.jsx)(d,{color:y,onChangeComplete:function(e){S(e.hex)}})})]})]})}}}]);
//# sourceMappingURL=29.aef2b7b4.chunk.js.map