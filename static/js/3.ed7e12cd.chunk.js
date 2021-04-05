(this["webpackJsonpdl-model"]=this["webpackJsonpdl-model"]||[]).push([[3],{230:function(e,t,n){"use strict";n.r(t);var r=n(11),a=n(63),o=n(27),i=n(8),c=n.n(i),s=n(13),u=n(2),l=n(5),d=n(3),p=n(4),m=n(0),h=n(1),f=function(e,t){void 0===t&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.enabled=!0,this.target=new h.Vector3,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:h.MOUSE.ROTATE,MIDDLE:h.MOUSE.DOLLY,RIGHT:h.MOUSE.PAN},this.touches={ONE:h.TOUCH.ROTATE,TWO:h.TOUCH.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return u.phi},this.getAzimuthalAngle=function(){return u.theta},this.listenToKeyEvents=function(e){e.addEventListener("keydown",X),this._domElementKeyEvents=e},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(r),n.update(),c=i.NONE},this.update=function(){var t=new h.Vector3,a=(new h.Quaternion).setFromUnitVectors(e.up,new h.Vector3(0,1,0)),o=a.clone().invert(),f=new h.Vector3,b=new h.Quaternion,v=2*Math.PI;return function(){var e=n.object.position;t.copy(e).sub(n.target),t.applyQuaternion(a),u.setFromVector3(t),n.autoRotate&&c===i.NONE&&j(2*Math.PI/60/60*n.autoRotateSpeed),n.enableDamping?(u.theta+=l.theta*n.dampingFactor,u.phi+=l.phi*n.dampingFactor):(u.theta+=l.theta,u.phi+=l.phi);var h=n.minAzimuthAngle,g=n.maxAzimuthAngle;return isFinite(h)&&isFinite(g)&&(h<-Math.PI?h+=v:h>Math.PI&&(h-=v),g<-Math.PI?g+=v:g>Math.PI&&(g-=v),u.theta=h<=g?Math.max(h,Math.min(g,u.theta)):u.theta>(h+g)/2?Math.max(h,u.theta):Math.min(g,u.theta)),u.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,u.phi)),u.makeSafe(),u.radius*=d,u.radius=Math.max(n.minDistance,Math.min(n.maxDistance,u.radius)),!0===n.enableDamping?n.target.addScaledVector(p,n.dampingFactor):n.target.add(p),t.setFromSpherical(u),t.applyQuaternion(o),e.copy(n.target).add(t),n.object.lookAt(n.target),!0===n.enableDamping?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,p.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),p.set(0,0,0)),d=1,!!(m||f.distanceToSquared(n.object.position)>s||8*(1-b.dot(n.object.quaternion))>s)&&(n.dispatchEvent(r),f.copy(n.object.position),b.copy(n.object.quaternion),m=!1,!0)}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",G),n.domElement.removeEventListener("pointerdown",I),n.domElement.removeEventListener("wheel",_),n.domElement.removeEventListener("touchstart",Z),n.domElement.removeEventListener("touchend",B),n.domElement.removeEventListener("touchmove",q),n.domElement.ownerDocument.removeEventListener("pointermove",V),n.domElement.ownerDocument.removeEventListener("pointerup",H),null!==n._domElementKeyEvents&&n._domElementKeyEvents.removeEventListener("keydown",X)};var n=this,r={type:"change"},a={type:"start"},o={type:"end"},i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},c=i.NONE,s=1e-6,u=new h.Spherical,l=new h.Spherical,d=1,p=new h.Vector3,m=!1,f=new h.Vector2,b=new h.Vector2,v=new h.Vector2,g=new h.Vector2,E=new h.Vector2,w=new h.Vector2,O=new h.Vector2,A=new h.Vector2,y=new h.Vector2;function M(){return Math.pow(.95,n.zoomSpeed)}function j(e){l.theta-=e}function x(e){l.phi-=e}var k=function(){var e=new h.Vector3;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),p.add(e)}}(),T=function(){var e=new h.Vector3;return function(t,r){!0===n.screenSpacePanning?e.setFromMatrixColumn(r,1):(e.setFromMatrixColumn(r,0),e.crossVectors(n.object.up,e)),e.multiplyScalar(t),p.add(e)}}(),P=function(){var e=new h.Vector3;return function(t,r){var a=n.domElement;if(n.object.isPerspectiveCamera){var o=n.object.position;e.copy(o).sub(n.target);var i=e.length();i*=Math.tan(n.object.fov/2*Math.PI/180),k(2*t*i/a.clientHeight,n.object.matrix),T(2*r*i/a.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(k(t*(n.object.right-n.object.left)/n.object.zoom/a.clientWidth,n.object.matrix),T(r*(n.object.top-n.object.bottom)/n.object.zoom/a.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function L(e){n.object.isPerspectiveCamera?d/=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*e)),n.object.updateProjectionMatrix(),m=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function S(e){n.object.isPerspectiveCamera?d*=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/e)),n.object.updateProjectionMatrix(),m=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function R(e){f.set(e.clientX,e.clientY)}function N(e){g.set(e.clientX,e.clientY)}function C(e){if(1==e.touches.length)f.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);f.set(t,n)}}function F(e){if(1==e.touches.length)g.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);g.set(t,n)}}function D(e){var t=e.touches[0].pageX-e.touches[1].pageX,n=e.touches[0].pageY-e.touches[1].pageY,r=Math.sqrt(t*t+n*n);O.set(0,r)}function U(e){if(1==e.touches.length)b.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),r=.5*(e.touches[0].pageY+e.touches[1].pageY);b.set(t,r)}v.subVectors(b,f).multiplyScalar(n.rotateSpeed);var a=n.domElement;j(2*Math.PI*v.x/a.clientHeight),x(2*Math.PI*v.y/a.clientHeight),f.copy(b)}function Y(e){if(1==e.touches.length)E.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),r=.5*(e.touches[0].pageY+e.touches[1].pageY);E.set(t,r)}w.subVectors(E,g).multiplyScalar(n.panSpeed),P(w.x,w.y),g.copy(E)}function z(e){var t=e.touches[0].pageX-e.touches[1].pageX,r=e.touches[0].pageY-e.touches[1].pageY,a=Math.sqrt(t*t+r*r);A.set(0,a),y.set(0,Math.pow(A.y/O.y,n.zoomSpeed)),L(y.y),O.copy(A)}function I(e){if(!1!==n.enabled)switch(e.pointerType){case"mouse":case"pen":!function(e){var t;switch(e.preventDefault(),n.domElement.focus?n.domElement.focus():window.focus(),e.button){case 0:t=n.mouseButtons.LEFT;break;case 1:t=n.mouseButtons.MIDDLE;break;case 2:t=n.mouseButtons.RIGHT;break;default:t=-1}switch(t){case h.MOUSE.DOLLY:if(!1===n.enableZoom)return;!function(e){O.set(e.clientX,e.clientY)}(e),c=i.DOLLY;break;case h.MOUSE.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enablePan)return;N(e),c=i.PAN}else{if(!1===n.enableRotate)return;R(e),c=i.ROTATE}break;case h.MOUSE.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enableRotate)return;R(e),c=i.ROTATE}else{if(!1===n.enablePan)return;N(e),c=i.PAN}break;default:c=i.NONE}c!==i.NONE&&(n.domElement.ownerDocument.addEventListener("pointermove",V),n.domElement.ownerDocument.addEventListener("pointerup",H),n.dispatchEvent(a))}(e)}}function V(e){if(!1!==n.enabled)switch(e.pointerType){case"mouse":case"pen":!function(e){if(!1===n.enabled)return;switch(e.preventDefault(),c){case i.ROTATE:if(!1===n.enableRotate)return;!function(e){b.set(e.clientX,e.clientY),v.subVectors(b,f).multiplyScalar(n.rotateSpeed);var t=n.domElement;j(2*Math.PI*v.x/t.clientHeight),x(2*Math.PI*v.y/t.clientHeight),f.copy(b),n.update()}(e);break;case i.DOLLY:if(!1===n.enableZoom)return;!function(e){A.set(e.clientX,e.clientY),y.subVectors(A,O),y.y>0?L(M()):y.y<0&&S(M()),O.copy(A),n.update()}(e);break;case i.PAN:if(!1===n.enablePan)return;!function(e){E.set(e.clientX,e.clientY),w.subVectors(E,g).multiplyScalar(n.panSpeed),P(w.x,w.y),g.copy(E),n.update()}(e)}}(e)}}function H(e){switch(e.pointerType){case"mouse":case"pen":!function(e){if(n.domElement.ownerDocument.removeEventListener("pointermove",V),n.domElement.ownerDocument.removeEventListener("pointerup",H),!1===n.enabled)return;n.dispatchEvent(o),c=i.NONE}()}}function _(e){!1===n.enabled||!1===n.enableZoom||c!==i.NONE&&c!==i.ROTATE||(e.preventDefault(),n.dispatchEvent(a),function(e){e.deltaY<0?S(M()):e.deltaY>0&&L(M()),n.update()}(e),n.dispatchEvent(o))}function X(e){!1!==n.enabled&&!1!==n.enablePan&&function(e){var t=!1;switch(e.code){case n.keys.UP:P(0,n.keyPanSpeed),t=!0;break;case n.keys.BOTTOM:P(0,-n.keyPanSpeed),t=!0;break;case n.keys.LEFT:P(n.keyPanSpeed,0),t=!0;break;case n.keys.RIGHT:P(-n.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),n.update())}(e)}function Z(e){if(!1!==n.enabled){switch(e.preventDefault(),e.touches.length){case 1:switch(n.touches.ONE){case h.TOUCH.ROTATE:if(!1===n.enableRotate)return;C(e),c=i.TOUCH_ROTATE;break;case h.TOUCH.PAN:if(!1===n.enablePan)return;F(e),c=i.TOUCH_PAN;break;default:c=i.NONE}break;case 2:switch(n.touches.TWO){case h.TOUCH.DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;!function(e){n.enableZoom&&D(e),n.enablePan&&F(e)}(e),c=i.TOUCH_DOLLY_PAN;break;case h.TOUCH.DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;!function(e){n.enableZoom&&D(e),n.enableRotate&&C(e)}(e),c=i.TOUCH_DOLLY_ROTATE;break;default:c=i.NONE}break;default:c=i.NONE}c!==i.NONE&&n.dispatchEvent(a)}}function q(e){if(!1!==n.enabled)switch(e.preventDefault(),c){case i.TOUCH_ROTATE:if(!1===n.enableRotate)return;U(e),n.update();break;case i.TOUCH_PAN:if(!1===n.enablePan)return;Y(e),n.update();break;case i.TOUCH_DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;!function(e){n.enableZoom&&z(e),n.enablePan&&Y(e)}(e),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;!function(e){n.enableZoom&&z(e),n.enableRotate&&U(e)}(e),n.update();break;default:c=i.NONE}}function B(e){!1!==n.enabled&&(n.dispatchEvent(o),c=i.NONE)}function G(e){!1!==n.enabled&&e.preventDefault()}n.domElement.addEventListener("contextmenu",G),n.domElement.addEventListener("pointerdown",I),n.domElement.addEventListener("wheel",_),n.domElement.addEventListener("touchstart",Z),n.domElement.addEventListener("touchend",B),n.domElement.addEventListener("touchmove",q),this.update()};(f.prototype=Object.create(h.EventDispatcher.prototype)).constructor=f;var b=function(e,t){f.call(this,e,t),this.screenSpacePanning=!1,this.mouseButtons.LEFT=h.MOUSE.PAN,this.mouseButtons.RIGHT=h.MOUSE.ROTATE,this.touches.ONE=h.TOUCH.PAN,this.touches.TWO=h.TOUCH.DOLLY_ROTATE};(b.prototype=Object.create(h.EventDispatcher.prototype)).constructor=b;var v=n(15),g=n(18),E=n(49),w={fullscreenEnabled:0,fullscreenElement:1,requestFullscreen:2,exitFullscreen:3,fullscreenchange:4,fullscreenerror:5,fullscreen:6},O=["webkitFullscreenEnabled","webkitFullscreenElement","webkitRequestFullscreen","webkitExitFullscreen","webkitfullscreenchange","webkitfullscreenerror","-webkit-full-screen"],A=["mozFullScreenEnabled","mozFullScreenElement","mozRequestFullScreen","mozCancelFullScreen","mozfullscreenchange","mozfullscreenerror","-moz-full-screen"],y=["msFullscreenEnabled","msFullscreenElement","msRequestFullscreen","msExitFullscreen","MSFullscreenChange","MSFullscreenError","-ms-fullscreen"],M="undefined"!==typeof window&&"undefined"!==typeof window.document?window.document:{},j="fullscreenEnabled"in M&&Object.keys(w)||O[0]in M&&O||A[0]in M&&A||y[0]in M&&y||[],x={requestFullscreen:function(e){return e[j[w.requestFullscreen]]()},requestFullscreenFunction:function(e){return e[j[w.requestFullscreen]]},get exitFullscreen(){return M[j[w.exitFullscreen]].bind(M)},get fullscreenPseudoClass(){return":"+j[w.fullscreen]},addEventListener:function(e,t,n){return M.addEventListener(j[w[e]],t,n)},removeEventListener:function(e,t,n){return M.removeEventListener(j[w[e]],t,n)},get fullscreenEnabled(){return Boolean(M[j[w.fullscreenEnabled]])},set fullscreenEnabled(e){},get fullscreenElement(){return M[j[w.fullscreenElement]]},set fullscreenElement(e){},get onfullscreenchange(){return M[("on"+j[w.fullscreenchange]).toLowerCase()]},set onfullscreenchange(e){return M[("on"+j[w.fullscreenchange]).toLowerCase()]=e},get onfullscreenerror(){return M[("on"+j[w.fullscreenerror]).toLowerCase()]},set onfullscreenerror(e){return M[("on"+j[w.fullscreenerror]).toLowerCase()]=e}},k=n(39),T=n(10),P=function(e){Object(d.a)(i,e);var t=Object(p.a)(i);function i(){var e;Object(u.a)(this,i);for(var l=arguments.length,d=new Array(l),p=0;p<l;p++)d[p]=arguments[p];return(e=t.call.apply(t,[this].concat(d))).addFullScreenListener=function(){var t;if(x.fullscreenEnabled){var n=function(){x.fullscreenElement?x.exitFullscreen():x.requestFullscreen(e.mount)};null===(t=e.mount)||void 0===t||t.addEventListener("dblclick",(function(){return n()})),e.removeFullScreenListener=function(){var t;return null===(t=e.mount)||void 0===t?void 0:t.removeEventListener("dblclick",(function(){return n()}))}}},e.disableInput=function(t){return e.props.setLoadingMsg(t||"Loading...")},e.enableInput=function(){return e.props.setLoadingMsg("")},e.initialize=Object(s.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.disableInput(),e.initScene(),e.outlines={},e.models={},e.modelInfo={},t.next=7,e.loadMainModel();case 7:return t.next=9,e.afterMainModelLoad();case 9:e.enableInput();case 10:case"end":return t.stop()}}),t)}))),e.afterMainModelLoad=function(){},e.initScene=function(){var t,n;e.viewport=e.props.viewport||{width:window.innerWidth,height:window.innerHeight},e.clock=new h.Clock,e.scene=new h.Scene,e.background=e.props.background,e.floor=Object(E.m)(),e.scene.add(e.floor),e.camera=new h.PerspectiveCamera(v.a.angle,e.viewport.width/e.viewport.height,v.a.near,v.a.far),e.cameraPosition=e.props.cameraPosition||[2,0,10],(t=e.camera.position).set.apply(t,Object(o.a)(e.cameraPosition)),e.camera.updateProjectionMatrix();var r=e.props.lights;e.addAllLights(r);var a=e.props.pixelRatio;e.rendererAA=new h.WebGLRenderer({antialias:!0,alpha:!0}),e.rendererAA.outputEncoding=h.sRGBEncoding,e.rendererAA.setPixelRatio(a),e.rendererNoAA=new h.WebGLRenderer({antialias:!1,alpha:!0}),e.rendererNoAA.outputEncoding=h.sRGBEncoding,e.rendererNoAA.setPixelRatio(a);var i=e.props.antiAliasing;e._AA=i,e.renderer=i?e.rendererAA:e.rendererNoAA,e.finalRenderer=e.renderer;var c=e.props.viewport,s=c.width,u=c.height;e.finalRenderer.setSize(s,u);var l=e.finalRenderer.domElement;e.canvas=l,e.controls=new f(e.camera,e.mount),e.controlsPosition=e.props.controlsPosition||[0,0,0],(n=e.controls.target).set.apply(n,Object(o.a)(e.controlsPosition)),e.controls.update(),e.animate()},e.loadMainModel=Object(s.a)(c.a.mark((function t(){var n,r,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.props.model.id,e.modelInfo.main=n,r=Object(E.u)(n),t.next=5,Object(E.x)(r);case 5:return a=t.sent,e.models.main=a,t.next=9,e.basicMainProcessing();case 9:return t.abrupt("return");case 10:case"end":return t.stop()}}),t)}))),e.addLight=function(t){t.id;var n=t.enable,r=Object(a.a)(t,["id","enable"]);if(n){var o=Object(E.n)(r);e.scene.add(o),e.lights.push(o)}},e.addAllLights=function(t){e.lights=[],t.forEach(e.addLight)},e.removeLight=function(t){return e.scene.remove(t)},e.removeAllLights=function(){return e.lights.forEach(e.removeLight)},e.addToScene=function(t){return e.floor.add(t)},e.initTexture=Object(s.a)(c.a.mark((function t(){var n,a,o,i,s,u,l,d,p,m,h,f;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.props.model,a=n.id,(o=n.texture)&&">"!==o){t.next=3;break}return t.abrupt("return");case 3:return i=Object(g.g)(a),s=o.split(">"),u=Object(r.a)(s,2),l=u[0],d=u[1],p=l||a,m=d||Object(g.g)(p),h="".concat(k.b,"/fbx/").concat(p,"/").concat(m,".png"),f=e.models.main,t.next=11,Object(E.A)(f,{oldTexture:i,texturePath:h});case 11:case"end":return t.stop()}}),t)}))),e.applyModelMod=function(){var t=e.props.model.mod;t&&Object(E.e)(e.models.main,t)},e.basicMainProcessing=Object(s.a)(c.a.mark((function t(){var n,r,a,o,i,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.models.main,Object(E.z)(n),Object(E.p)(n),r=e.matType,a=e.props.model.id,Object(g.j)(a)?(o=Object(E.b)("".concat(a,"n")),i=o.texturePath,Object(E.l)(n,{materialType:r,texturePath:i})):Object(E.l)(n,{materialType:r,forced:!0}),t.next=8,e.initTexture();case 8:e.applyModelMod(),e.applyNewModelMat(n),s=e.props.outline,e.outlines.main=Object(E.o)(n,s),e.addToScene(n);case 13:case"end":return t.stop()}}),t)}))),e.updateViewer=function(){var t=Object(s.a)(c.a.mark((function t(n,r){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.updateExport(n.export,r.export);case 2:e.updateCommon(n,r),e.updateModel(n,r),e.otherUpdate(n,r);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),e.otherUpdate=function(e,t){},e.updateCommon=function(t,n){e.updateViewport(t.viewport,n.viewport),e.updateOutline(t.outline,n.outline),e.updateMaterial(t.material,n.material),e.updateLights(t.lights,n.lights),e.updateAscii(t.ascii,n.ascii),e.updateCamera(t.cameraPosition,n.cameraPosition),e.updateControl(t.controlsPosition,n.controlsPosition),e.updatePixelRatio(t.pixelRatio,n.pixelRatio),t.background!==n.background&&(e.background=n.background),e.AA=n.antiAliasing},e.updateModel=function(t,n){e.updateMainModel(t.model,n.model)},e.updateViewport=function(t,n){var r=n.width,a=n.height;t.width===r&&t.height===a||(e.viewport.width=r,e.viewport.height=a,e.finalRenderer.setSize(r,a),e.camera.aspect=r/a,e.camera.updateProjectionMatrix(),"camera"===e.props.background&&e.setVideoBackgroundSize())},e.disposeMainModel=function(){var t=e.models.main;e.floor.remove(t),Object(E.q)(t)},e.replaceMainModel=Object(s.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.disableInput(),e.disposeMainModel(),t.next=4,e.loadMainModel();case 4:e.applyNewModelMat(e.models.main),e.enableInput();case 6:case"end":return t.stop()}}),t)}))),e.updateMainModel=function(){var t=Object(s.a)(c.a.mark((function t(n,r){var a,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=r.id,o=n.id!==a,n.mod!==r.mod&&e.applyModelMod(),o){t.next=6;break}return t.abrupt("return");case 6:return e.beforeMainModelUpdate(),t.next=9,e.replaceMainModel();case 9:e.afterMainModelUpdate();case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),e.beforeMainModelUpdate=function(){},e.afterMainModelUpdate=function(){},e.updateOutlineParams=function(t){Object.values(e.outlines).flat().forEach((function(e){Object(E.h)(e,t)}))},e.updateOutline=function(t,n){if(t!==n){var r=Object.keys(n).filter((function(e){return t[e]!==n[e]}));if(0!==r.length){var a=new Map(r.map((function(e){return[e,n[e]]})));e.updateOutlineParams(a)}}},e.applyNewModelMat=function(t){var n=e.matParams;Object(E.B)(t,{prevParams:{useTexture:!0},params:n})},e.updateMaterial=function(t,n){if(t!==n){var r=e.matType,a=e.models.main,o=t.type!==r;o&&Object(E.l)(e.models.main,{materialType:r});var i=o?{useTexture:t.useTexture}:t,c=e.matParams;Object(E.B)(a,{prevParams:i,params:c})}},e.updateLights=function(t,n){t!==n&&(e.removeAllLights(),e.addAllLights(n))},e.updateAscii=function(){var t=Object(s.a)(c.a.mark((function t(n,r){var a,o,i,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Object.keys(n).some((function(e){return n[e]!==r[e]}))){t.next=3;break}return t.abrupt("return");case 3:if(r.enable){t.next=11;break}return e.finalRenderer=e.renderer,a=e.viewport,o=a.width,i=a.height,e.renderer.setSize(o,i),s=e.renderer.domElement,e.canvas=s,t.abrupt("return");case 11:e.showAscii();case 12:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),e.showAscii=Object(s.a)(c.a.mark((function t(){var r,a,o,i,s,u,l,d,p,m,h;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.props.ascii,a=r.charSet,o=r.color,i=r.bgColor,s=r.invert,t.next=3,n.e(13).then(n.bind(null,480));case 3:u=t.sent,l=u.AsciiEffect,e.effect=new l(e.renderer,a,{invert:s}),d=e.viewport,p=d.width,m=d.height,e.effect.setSize(p,m),(h=e.effect.domElement).style.color=o,h.style.background=i,e.canvas=h,e.finalRenderer=e.effect;case 13:case"end":return t.stop()}}),t)}))),e.updateCamera=function(t,n){var r;t!==n&&((r=e.camera.position).set.apply(r,Object(o.a)(n)),e.camera.updateProjectionMatrix())},e.updateControl=function(t,n){var r;t!==n&&((r=e.controls.target).set.apply(r,Object(o.a)(n)),e.controls.update())},e.updatePixelRatio=function(t,n){t!==n&&(e.rendererAA.setPixelRatio(n),e.rendererNoAA.setPixelRatio(n))},e.updateExport=function(){var t=Object(s.a)(c.a.mark((function t(r,a){var o,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.enable&&!r.enable){t.next=2;break}return t.abrupt("return");case 2:return e.disableInput("Exporting"),t.next=5,n.e(20).then(n.bind(null,517));case 5:return o=t.sent,i=o.exportModel,t.next=9,i(e.models.main,a);case 9:e.props.toggleExport(),e.enableInput();case 11:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),e.setVideoBackgroundSize=function(){if(e.cameraStream){var t=e.viewport,n=t.width,r=n/t.height,a=e.cameraStream.getVideoTracks()[0].getSettings(),o=a.width,i=a.aspectRatio,c=i>r?n:o,s=c/(i>r?r:i);e.video.width=c,e.video.height=s}},e.useCameraAsBackground=Object(s.a)(c.a.mark((function t(){var n,r,a,o,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null===(n=navigator.mediaDevices)||void 0===n?void 0:n.getUserMedia){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,null===(r=navigator.mediaDevices)||void 0===r?void 0:r.getUserMedia({audio:!1,video:{facingMode:"environment"}});case 4:if(o=t.sent,t.t0=o,t.t0){t.next=10;break}return t.next=9,null===(a=navigator.mediaDevices)||void 0===a?void 0:a.getUserMedia({audio:!1,video:{facingMode:"user"}});case 9:t.t0=t.sent;case 10:if(e.cameraStream=t.t0,e.cameraStream){t.next=13;break}return t.abrupt("return");case 13:e.video=document.createElement("video"),Object.assign(e.video,{srcObject:e.cameraStream,autoplay:!0,playsinline:!0}),(i=new h.VideoTexture(e.video)).minFilter=h.LinearFilter,e.scene.background=i;case 18:case"end":return t.stop()}}),t)}))),e.rotateFloor=function(t){var n=e.props.rotateSpeed;if(n){var r=n*t*Math.PI/2;e.floor.rotateY(r)}},e.updateScene=function(e){},e.animate=function(){e.frameId=requestAnimationFrame(e.animate);var t=e.clock.getDelta();"hidden"!==document.visibilityState&&(e.rotateFloor(t),e.updateScene(t),e.finalRenderer.render(e.scene,e.camera))},e}return Object(l.a)(i,[{key:"componentDidMount",value:function(){var e=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.initialize();case 2:this.finishedInit=!0,this.addFullScreenListener();case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e){if(this.finishedInit){var t=this.props;console.log("Updated"),Object(E.y)(e,t),this.updateViewer(e,t)}}},{key:"componentWillUnmount",value:function(){var e,t,n,r;null===(e=this.cameraStream)||void 0===e||e.getVideoTracks()[0].stop(),null===(t=this.removeFullScreenListener)||void 0===t||t.call(this),cancelAnimationFrame(this.frameId),Object(E.q)(this.scene),this.renderer=null,null===(n=this.rendererAA.renderLists)||void 0===n||n.dispose(),this.rendererAA.dispose(),this.rendererAA=null,null===(r=this.rendererNoAA.renderLists)||void 0===r||r.dispose(),this.rendererNoAA.dispose(),this.rendererNoAA=null,this.mixer=null,this.clock=null,this.scene=null}},{key:"AA",set:function(e){if(e!==this._AA){this._AA=e,this.renderer=e?this.rendererAA:this.rendererNoAA;var t=this.viewport,n=t.width,r=t.height;if(this.renderer.setSize(n,r),!this.props.ascii.enable){this.finalRenderer=this.renderer;var a=this.renderer.domElement;this.canvas=a}}}},{key:"matParams",get:function(){var e=this.props.material,t=e.type,n=Object(a.a)(e,["type"]),r=Object(E.v)(t);return Object(g.d)(n,r)}},{key:"matType",get:function(){return this.props.material.type}},{key:"background",set:function(e){var t;switch(e){case"transparent":return void(this.scene.background=null);case"camera":return void this.useCameraAsBackground();default:null===(t=this.cameraStream)||void 0===t||t.getVideoTracks()[0].stop(),this.scene.background=new h.Color(e)}}},{key:"canvas",get:function(){return this._canvas},set:function(e){var t=this._canvas;t&&this.mount.removeChild(t),this.mount.appendChild(e),this._canvas=e}},{key:"render",value:function(){var e=this;return Object(T.jsx)("div",{ref:function(t){e.mount=t}})}}]),i}(m.PureComponent);t.default=P}}]);
//# sourceMappingURL=3.ed7e12cd.chunk.js.map