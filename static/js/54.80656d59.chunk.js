(this["webpackJsonpdl-model"]=this["webpackJsonpdl-model"]||[]).push([[54],{141:function(e,n,a){"use strict";var t=a(87),i=a(88);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var c=i(a(0)),r=(0,t(a(89)).default)(c.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");n.default=r},288:function(e,n,a){},520:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return b}));var t=a(27),i=a(0),c=a(32),r=a(141),s=a.n(r),l=a(94),d=a(18),o=a(49),u=(a(288),a(10)),j=Object(i.lazy)((function(){return a.e(43).then(a.bind(null,523))})),h={adv:"animation",dragon:"nonHumanAni",ani:"nonHumanAni"};var b=function(e){var n=e.openModal,a=Object(i.useContext)(c.b),r=a.chainMaker.chain,b=a.app.viewerType,f=Object(i.useContext)(c.a),v=function(e,n){f({type:"update",key:e,value:n})},O=function(e){return v("chainMaker",{chain:e})},p=function(e){v("animation",{code:e})};return Object(u.jsxs)("div",{className:"ChainMaker",children:[Object(u.jsxs)("div",{className:"ChainMaker-header",children:[Object(u.jsx)("div",{className:"ChainMaker-title",children:"Chain Maker"}),Object(u.jsx)("div",{className:"ChainMaker-close",onClick:function(){v("app",{sidebarContent:"settings"})},children:Object(u.jsx)(s.a,{})})]}),Object(u.jsxs)(i.Suspense,{fallback:Object(u.jsx)("div",{children:"Loading"}),children:[Object(u.jsxs)("div",{className:"ChainMaker-btns",children:[Object(u.jsx)(l.a,{onClick:function(){var e=Object(d.e)(r);p(e)},className:"ChainMaker-btn",children:"Play All"}),Object(u.jsx)(l.a,{onClick:function(){n(h[b],(function(e,n){var a=Object(o.k)(e,n),i=[].concat(Object(t.a)(r),Object(t.a)(a));O(i)}))},className:"ChainMaker-btn",children:"Add"})]}),Object(u.jsx)("div",{className:"ChainMaker-list",children:Object(u.jsx)(j,{openModal:n,playAni:function(e){var n=e.currentTarget.id,a=r.find((function(e){return e.id===n})),t=Object(d.e)([a]);p(t)},deleteAni:function(e){if(1!==r.length){var n=e.currentTarget.id,a=r.filter((function(e){return e.id!==n}));O(a)}},updateAni:function(e,n){var a=r.map((function(a){return a.id===e?n:a}));O(a)},chain:r})})]})]})}}}]);
//# sourceMappingURL=54.80656d59.chunk.js.map