var v=Object.defineProperty;var u=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var $=(t,o,n)=>o in t?v(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,f=(t,o)=>{for(var n in o||(o={}))p.call(o,n)&&$(t,n,o[n]);if(u)for(var n of u(o))M.call(o,n)&&$(t,n,o[n]);return t};var x=(t,o)=>{var n={};for(var e in t)p.call(t,e)&&o.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&u)for(var e of u(t))o.indexOf(e)<0&&M.call(t,e)&&(n[e]=t[e]);return n};import{ax as m}from"./vendor.dead0e45.js";import{w as P,F as B,x as l}from"./index.7a3f7ee4.js";const F=t=>`${B}/${t}/${t}.png`,T=[1,2,3,4,5,6,7,8,9],h=64,X=T.map(t=>{if(t===1)return[-280,-170];const o=(t-2)%4,n=Math.floor(t/6),e=-(24+o*128),s=-(298+n*128);return[e,s]}),d=(t,o)=>{const[n,e]=X[o-1],[s,r]=P(t),a=s*128,c=r*128,g=n-a,i=e+c;return{x:g,y:i}},Y=(t,o)=>{const{x:n,y:e}=d(t,o),s=e-h/2;return{x:n,y:s}};function E(s){var r=s,{texture:t,x:o,y:n}=r,e=x(r,["texture","x","y"]);const c={backgroundImage:`url(${F(t)})`,backgroundSize:"512px 512px",backgroundPosition:`${o}px ${n}px`,width:h,height:h/2};return m("div",f({style:c},e))}function j(e){var s=e,{texture:t,index:o}=s,n=x(s,["texture","index"]);const{x:r,y:a}=d(t,o);return m(E,f({texture:t,x:r,y:a,className:"EyeBox"},n))}function w(e){var s=e,{texture:t,index:o}=s,n=x(s,["texture","index"]);const{x:r,y:a}=Y(t,o);return m(E,f({texture:t,x:r,y:a,className:"EyeBox"},n))}const b=t=>{let o=t[0],n=t[0];return t.forEach(e=>{o=e<o?e:o,n=e>n?e:n}),[o,n]},C=t=>t.map(o=>{const n=o.geometry.attributes.uv.array,e=n.filter((i,y)=>y%2==0),s=n.filter((i,y)=>y%2==1),[r,a]=b(e),[c,g]=b(s);return{u:[r,a],v:[c,g]}}),D=t=>`${B}/${t}/${l(t)}.png`;export{j as E,w as M,D as a,C as g,T as i};
