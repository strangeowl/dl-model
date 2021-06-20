(this["webpackJsonpdl-model"]=this["webpackJsonpdl-model"]||[]).push([[50],{144:function(e,t,n){"use strict";n.d(t,"c",(function(){return v})),n.d(t,"b",(function(){return g})),n.d(t,"a",(function(){return x}));var a=n(12),c=n(63),r=n(29),o=n(163),i=n(164),s=n(165),l=n(148),u=n(159),d=n(141),b=n.n(d),j=n(145),h=n.n(j),O={dialogRoot:{margin:0,padding:0},closeButton:{position:"absolute",right:"0.25rem",top:"0.5rem",color:"rgba(0,0,0,0.8)"},dockButton:{position:"absolute",right:"2.3rem",top:"0.5rem",color:"rgba(0,0,0,0.8)","& svg":{animation:"$bounce 1600ms infinite cubic-bezier(0.445, 0.05, 0.55, 0.95)"}},titleRoot:{margin:0,padding:"1rem",paddingBottom:0,display:"flex",justifyContent:"center"},"@keyframes bounce":{"50%":{transform:"translateX(25%)"}}},m=n(10),f=["children","classes","onClose"],p=["children","classes","onClose","showDockBtn","onDock"],v=Object(r.a)(O)((function(e){var t=e.children,n=e.classes,r=(e.onClose,Object(c.a)(e,f));return Object(m.jsx)(o.a,Object(a.a)(Object(a.a)({disableTypography:!0,className:n.dialogRoot},r),{},{children:t}))})),g=Object(r.a)(O)((function(e){var t=e.children,n=e.classes,r=e.onClose,i=e.showDockBtn,s=void 0!==i&&i,d=e.onDock,j=Object(c.a)(e,p);return Object(m.jsxs)(o.a,Object(a.a)(Object(a.a)({disableTypography:!0,className:n.titleRoot},j),{},{children:[Object(m.jsx)(u.a,{variant:"h6",className:n.titleText,children:t}),s&&Object(m.jsx)(l.a,{"aria-label":"dock",className:n.dockButton,onClick:d,children:Object(m.jsx)(h.a,{})}),Object(m.jsx)(l.a,{"aria-label":"close",className:n.closeButton,onClick:r,children:Object(m.jsx)(b.a,{})})]}))})),x=Object(r.a)((function(e){return{root:{padding:e.spacing(2)}}}))(i.a);Object(r.a)((function(e){return{root:{margin:0,padding:e.spacing(1)}}}))(s.a)},229:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(1),c=n(37),r=n(285),o=n(10),i=Object(a.lazy)((function(){return n.e(16).then(n.bind(null,482))}));var s=function(e){var t=e.mode,n=e.closeModal,s=e.handleSelect,l=e.setDock,u=void 0===l?null:l;return t&&Object(c.createPortal)(Object(o.jsx)(r.a,{maxWidth:"lg",onClose:n,open:!!t,scroll:"paper",PaperProps:{classes:{root:"Modal"}},children:Object(o.jsx)(a.Suspense,{fallback:Object(o.jsx)("div",{children:"Loading"}),children:Object(o.jsx)(i,{mode:t,closeModal:n,handleSelect:s,setDock:u})})}),document.getElementById("modal-root"))}},303:function(e,t,n){},447:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var a=n(8),c=n.n(a),r=n(15),o=n(11),i=n(1),s=n(32),l=n(94),u=n(144),d=n(229),b=n(49),j=n(18),h=function(){var e=Object(r.a)(c.a.mark((function e(t){var a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.startsWith("h")&&!t.startsWith("c")){e.next=6;break}return e.next=3,n.e(9).then(n.bind(null,125));case 3:e.t0=e.sent,e.next=9;break;case 6:return e.next=8,n.e(8).then(n.bind(null,124));case 8:e.t0=e.sent;case 9:return a=e.t0,r=a.default,e.abrupt("return",r[t]);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=(n(303),n(10));var m=function(e){var t,n=e.close,a=e.handleSelect,m=e.docked,f=e.moveToDock,p=Object(s.b)(),v=Object(s.c)(),g=v.model.id,x=v.app.sidebarContent,k=Object(i.useState)(g),y=Object(o.a)(k,2),C=y[0],S=y[1],N=Object(i.useState)(""),w=Object(o.a)(N,2),B=w[0],D=w[1],A=Object(i.useState)(),M=Object(o.a)(A,2),T=M[0],P=M[1],R=Object(i.useState)(!0),W=Object(o.a)(R,2),E=W[0],z=W[1],H=Object(i.useRef)(g);Object(i.useEffect)((function(){var e=Object(j.j)(g);["dragon","ani"].includes(e)?g!==H.current&&(H.current=g,S(g)):n()}),[g,n]),Object(i.useEffect)((function(){var e=function(){var e=Object(r.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(C);case 2:t=e.sent,P(t),z(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();z(!0),e()}),[C]);var J=C.startsWith("h")||C.startsWith("c"),L=J?"enemyPortraits":"dragonPortraits",F=J||"smith"===C?C:null===(t=C.slice)||void 0===t?void 0:t.call(C,1),I="".concat("/dl-model","/img/").concat(L,"/").concat(F,".png"),X=Object(O.jsx)("img",{src:I,alt:"portrait"}),$="chainMaker"===x,q=function(e,t){p({type:"update",key:e,value:t})},G=a||function(e,t){q("animation",{code:e});var n=Object(b.k)(e,t);q("chainMaker",{chain:n})},K=function(e){var t=e.currentTarget.dataset.value,a=e.currentTarget.dataset.name;G(t,a),!m&&n()},Q=T?T.map((function(e){var t=e.name,n=e.code;return Object(O.jsx)(l.a,{"data-value":n,"data-name":t,variant:"contained",onClick:K,children:t},n)})):Object(O.jsx)("div",{children:"No Animation"});return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(u.c,{children:[Object(O.jsx)(u.b,{showDockBtn:!m&&!$,onDock:f,onClose:n,children:$?"Add Animation":"Select an Animation"}),Object(O.jsxs)("div",{className:"NonHumanAni-source",children:[X,Object(O.jsx)(l.a,{variant:"outlined",onClick:function(){return D("dragon")},children:"Change Source"})]})]}),Object(O.jsx)(u.a,{dividers:!0,className:"NonHumanAni-content",children:E?Object(O.jsx)("div",{children:"Loading..."}):Q}),Object(O.jsx)(d.a,{mode:B,closeModal:function(){return D("")},handleSelect:S})]})}}}]);
//# sourceMappingURL=50.89c78848.chunk.js.map