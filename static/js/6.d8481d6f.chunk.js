(this["webpackJsonpdl-model"]=this["webpackJsonpdl-model"]||[]).push([[6,67],{200:function(e,t,n){"use strict";function a(e,t){var n=URL.createObjectURL(e),a=document.createElement("a");a.style.display="none",a.href=n,a.download=t,document.body.appendChild(a),a.click(),window.URL.revokeObjectURL(n),document.body.removeChild(a)}n.d(t,"a",(function(){return a}))},237:function(e,t,n){"use strict";n.r(t);var a=n(11),r=n(63),i=n(28),o=n(8),c=n.n(o),s=n(15),u=n(0),d=n(2),l=n(4),p=n(5),m=n(1),f=n(3),h=n(239),v=n(13),b=n(18),g=n(49),x=n(238),A=n(38),w=n(10),M=function(e){Object(l.a)(o,e);var t=Object(p.a)(o);function o(){var e;Object(u.a)(this,o);for(var d=arguments.length,l=new Array(d),p=0;p<d;p++)l[p]=arguments[p];return(e=t.call.apply(t,[this].concat(l))).addFullScreenListener=function(){var t;if(x.a.fullscreenEnabled){var n=function(){x.a.fullscreenElement?x.a.exitFullscreen():x.a.requestFullscreen(e.mount)};null===(t=e.mount)||void 0===t||t.addEventListener("dblclick",(function(){return n()})),e.removeFullScreenListener=function(){var t;return null===(t=e.mount)||void 0===t?void 0:t.removeEventListener("dblclick",(function(){return n()}))}}},e.disableInput=function(t){return e.props.setLoadingMsg(t||"Loading...")},e.enableInput=function(){return e.props.setLoadingMsg("")},e.initialize=Object(s.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.disableInput(),e.initScene(),e.outlines={},e.models={},e.modelInfo={},t.next=7,e.loadMainModel();case 7:return t.next=9,e.afterMainModelLoad();case 9:e.enableInput();case 10:case"end":return t.stop()}}),t)}))),e.afterMainModelLoad=function(){},e.initScene=function(){var t,n;e.viewport=e.props.viewport||{width:window.innerWidth,height:window.innerHeight},e.clock=new f.Clock,e.scene=new f.Scene,e.background=e.props.background,e.camera=new f.PerspectiveCamera(v.a.angle,e.viewport.width/e.viewport.height,v.a.near,v.a.far),e.cameraPosition=e.props.cameraPosition||[2,0,10],(t=e.camera.position).set.apply(t,Object(i.a)(e.cameraPosition)),e.camera.updateProjectionMatrix();var a=e.props.lights;e.addAllLights(a);var r=e.props.pixelRatio;e.rendererAA=new f.WebGLRenderer({antialias:!0,alpha:!0}),e.rendererAA.outputEncoding=f.sRGBEncoding,e.rendererAA.setPixelRatio(r),e.rendererNoAA=new f.WebGLRenderer({antialias:!1,alpha:!0}),e.rendererNoAA.outputEncoding=f.sRGBEncoding,e.rendererNoAA.setPixelRatio(r);var o=e.props.antiAliasing;e._AA=o,e.renderer=o?e.rendererAA:e.rendererNoAA,e.finalRenderer=e.renderer;var c=e.props.viewport,s=c.width,u=c.height;e.finalRenderer.setSize(s,u);var d=e.finalRenderer.domElement;e.canvas=d,e.controls=new h.a(e.camera,e.mount),e.controlsPosition=e.props.controlsPosition||[0,0,0],(n=e.controls.target).set.apply(n,Object(i.a)(e.controlsPosition)),e.controls.update(),e.animate()},e.loadMainModel=Object(s.a)(c.a.mark((function t(){var n,a,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.props.model.id,e.modelInfo.main=n,a=Object(g.t)(n),t.next=5,Object(g.w)(a);case 5:return r=t.sent,e.models.main=r,t.next=9,e.basicMainProcessing();case 9:return t.abrupt("return");case 10:case"end":return t.stop()}}),t)}))),e.addLight=function(t){t.id;var n=t.enable,a=Object(r.a)(t,["id","enable"]);if(n){var i=Object(g.m)(a);e.scene.add(i),e.lights.push(i)}},e.addAllLights=function(t){e.lights=[],t.forEach(e.addLight)},e.removeLight=function(t){return e.scene.remove(t)},e.removeAllLights=function(){return e.lights.forEach(e.removeLight)},e.addToScene=function(t){return e.scene.add(t)},e.initTexture=Object(s.a)(c.a.mark((function t(){var n,r,i,o,s,u,d,l,p,m,f,h;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.props.model,r=n.id,(i=n.texture)&&">"!==i){t.next=3;break}return t.abrupt("return");case 3:return o=Object(b.g)(r),s=i.split(">"),u=Object(a.a)(s,2),d=u[0],l=u[1],p=d||r,m=l||Object(b.g)(p),f="".concat(A.b,"/fbx/").concat(p,"/").concat(m,".png"),h=e.models.main,t.next=11,Object(g.z)(h,{oldTexture:o,texturePath:f});case 11:case"end":return t.stop()}}),t)}))),e.applyModelMod=function(){var t=e.props.model.mod;t&&Object(g.e)(e.models.main,t)},e.basicMainProcessing=Object(s.a)(c.a.mark((function t(){var n,a,r,i,o,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.models.main,Object(g.y)(n),Object(g.o)(n),a=e.matType,r=e.props.model.id,Object(b.j)(r)?(i=Object(g.b)("".concat(r,"n")),o=i.texturePath,Object(g.l)(n,{materialType:a,texturePath:o})):Object(g.l)(n,{materialType:a,forced:!0}),t.next=8,e.initTexture();case 8:return e.applyModelMod(),e.applyNewModelMat(n),s=e.props.outline,t.next=13,Object(g.n)(n,s);case 13:e.outlines.main=t.sent,e.addToScene(n);case 15:case"end":return t.stop()}}),t)}))),e.updateViewer=function(){var t=Object(s.a)(c.a.mark((function t(n,a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.updateExport(n.export,a.export);case 2:e.updateCommon(n,a),e.updateModel(n,a),e.otherUpdate(n,a);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),e.otherUpdate=function(e,t){},e.updateCommon=function(t,n){e.updateViewport(t.viewport,n.viewport),e.updateOutline(t.outline,n.outline),e.updateMaterial(t.material,n.material),e.updateLights(t.lights,n.lights),e.updateAscii(t.ascii,n.ascii),e.updateCamera(t.cameraPosition,n.cameraPosition),e.updateControl(t.controlsPosition,n.controlsPosition),e.updatePixelRatio(t.pixelRatio,n.pixelRatio),t.background!==n.background&&(e.background=n.background),e.AA=n.antiAliasing},e.updateModel=function(t,n){e.updateMainModel(t.model,n.model)},e.updateViewport=function(t,n){var a=n.width,r=n.height;t.width===a&&t.height===r||(e.viewport.width=a,e.viewport.height=r,e.finalRenderer.setSize(a,r),e.camera.aspect=a/r,e.camera.updateProjectionMatrix(),"camera"===e.props.background&&e.setVideoBackgroundSize())},e.disposeMainModel=function(){var t=e.models.main;e.scene.remove(t),Object(g.p)(t)},e.replaceMainModel=Object(s.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.disableInput(),e.disposeMainModel(),t.next=4,e.loadMainModel();case 4:e.applyNewModelMat(e.models.main),e.enableInput();case 6:case"end":return t.stop()}}),t)}))),e.updateMainModel=function(){var t=Object(s.a)(c.a.mark((function t(n,a){var r,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=a.id,i=n.id!==r,n.mod!==a.mod&&e.applyModelMod(),i){t.next=6;break}return t.abrupt("return");case 6:return e.beforeMainModelUpdate(),t.next=9,e.replaceMainModel();case 9:e.afterMainModelUpdate();case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),e.beforeMainModelUpdate=function(){},e.afterMainModelUpdate=function(){},e.updateOutlineParams=function(t){Object.values(e.outlines).flat().forEach((function(e){Object(g.h)(e,t)}))},e.updateOutline=function(t,n){if(t!==n){var a=Object.keys(n).filter((function(e){return t[e]!==n[e]}));if(0!==a.length){var r=new Map(a.map((function(e){return[e,n[e]]})));e.updateOutlineParams(r)}}},e.applyNewModelMat=function(t){var n=e.matParams;Object(g.A)(t,{prevParams:{useTexture:!0},params:n})},e.updateMaterial=function(t,n){if(t!==n){var a=e.matType,r=e.models.main,i=t.type!==a;i&&Object(g.l)(e.models.main,{materialType:a});var o=i?{useTexture:t.useTexture}:t,c=e.matParams;Object(g.A)(r,{prevParams:o,params:c})}},e.updateLights=function(t,n){t!==n&&(e.removeAllLights(),e.addAllLights(n))},e.updateAscii=function(){var t=Object(s.a)(c.a.mark((function t(n,a){var r,i,o,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Object.keys(n).some((function(e){return n[e]!==a[e]}))){t.next=3;break}return t.abrupt("return");case 3:if(a.enable){t.next=11;break}return e.finalRenderer=e.renderer,r=e.viewport,i=r.width,o=r.height,e.renderer.setSize(i,o),s=e.renderer.domElement,e.canvas=s,t.abrupt("return");case 11:e.showAscii();case 12:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),e.showAscii=Object(s.a)(c.a.mark((function t(){var a,r,i,o,s,u,d,l,p,m,f;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.props.ascii,r=a.charSet,i=a.color,o=a.bgColor,s=a.invert,t.next=3,n.e(14).then(n.bind(null,241));case 3:u=t.sent,d=u.AsciiEffect,e.effect=new d(e.renderer,r,{invert:s}),l=e.viewport,p=l.width,m=l.height,e.effect.setSize(p,m),(f=e.effect.domElement).style.color=i,f.style.background=o,e.canvas=f,e.finalRenderer=e.effect;case 13:case"end":return t.stop()}}),t)}))),e.updateCamera=function(t,n){var a;t!==n&&((a=e.camera.position).set.apply(a,Object(i.a)(n)),e.camera.updateProjectionMatrix())},e.updateControl=function(t,n){var a;t!==n&&((a=e.controls.target).set.apply(a,Object(i.a)(n)),e.controls.update())},e.updatePixelRatio=function(t,n){t!==n&&(e.rendererAA.setPixelRatio(n),e.rendererNoAA.setPixelRatio(n))},e.updateExport=function(){var t=Object(s.a)(c.a.mark((function t(a,r){var i,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.enable&&!a.enable){t.next=2;break}return t.abrupt("return");case 2:return e.disableInput("Exporting"),t.next=5,n.e(21).then(n.bind(null,274));case 5:return i=t.sent,o=i.exportModel,t.next=9,o(e.models.main,r);case 9:e.props.onExportFinish(),e.enableInput();case 11:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),e.setVideoBackgroundSize=function(){if(e.cameraStream){var t=e.viewport,n=t.width,a=n/t.height,r=e.cameraStream.getVideoTracks()[0].getSettings(),i=r.width,o=r.aspectRatio,c=o>a?n:i,s=c/(o>a?a:o);e.video.width=c,e.video.height=s}},e.useCameraAsBackground=Object(s.a)(c.a.mark((function t(){var n,a,r,i,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null===(n=navigator.mediaDevices)||void 0===n?void 0:n.getUserMedia){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,null===(a=navigator.mediaDevices)||void 0===a?void 0:a.getUserMedia({audio:!1,video:{facingMode:"environment"}});case 4:if(i=t.sent,t.t0=i,t.t0){t.next=10;break}return t.next=9,null===(r=navigator.mediaDevices)||void 0===r?void 0:r.getUserMedia({audio:!1,video:{facingMode:"user"}});case 9:t.t0=t.sent;case 10:if(e.cameraStream=t.t0,e.cameraStream){t.next=13;break}return t.abrupt("return");case 13:e.video=document.createElement("video"),Object.assign(e.video,{srcObject:e.cameraStream,autoplay:!0,playsinline:!0}),(o=new f.VideoTexture(e.video)).minFilter=f.LinearFilter,e.scene.background=o;case 18:case"end":return t.stop()}}),t)}))),e.rotateModel=function(t){var n=e.props.rotateSpeed;if(n){var a=n*t*Math.PI/2;e.models.main.rotateY(a)}},e.updateScene=function(e){},e.animate=function(){e.frameId=requestAnimationFrame(e.animate);var t=e.clock.getDelta();"hidden"!==document.visibilityState&&(e.rotateModel(t),e.updateScene(t),e.finalRenderer.render(e.scene,e.camera))},e}return Object(d.a)(o,[{key:"componentDidMount",value:function(){var e=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.initialize();case 2:this.finishedInit=!0,this.addFullScreenListener();case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e){if(this.finishedInit){var t=this.props;console.log("Updated"),Object(g.x)(e,t),this.updateViewer(e,t)}}},{key:"componentWillUnmount",value:function(){var e,t,n,a;null===(e=this.cameraStream)||void 0===e||e.getVideoTracks()[0].stop(),null===(t=this.removeFullScreenListener)||void 0===t||t.call(this),cancelAnimationFrame(this.frameId),Object(g.p)(this.scene),this.renderer=null,null===(n=this.rendererAA.renderLists)||void 0===n||n.dispose(),this.rendererAA.dispose(),this.rendererAA=null,null===(a=this.rendererNoAA.renderLists)||void 0===a||a.dispose(),this.rendererNoAA.dispose(),this.rendererNoAA=null,this.mixer=null,this.clock=null,this.scene=null}},{key:"AA",set:function(e){if(e!==this._AA){this._AA=e,this.renderer=e?this.rendererAA:this.rendererNoAA;var t=this.viewport,n=t.width,a=t.height;if(this.renderer.setSize(n,a),!this.props.ascii.enable){this.finalRenderer=this.renderer;var r=this.renderer.domElement;this.canvas=r}}}},{key:"matParams",get:function(){var e=this.props.material,t=e.type,n=Object(r.a)(e,["type"]),a=Object(g.u)(t);return Object(b.d)(n,a)}},{key:"matType",get:function(){return this.props.material.type}},{key:"background",set:function(e){var t;switch(e){case"transparent":return void(this.scene.background=null);case"camera":return void this.useCameraAsBackground();default:null===(t=this.cameraStream)||void 0===t||t.getVideoTracks()[0].stop(),this.scene.background=new f.Color(e)}}},{key:"canvas",get:function(){return this._canvas},set:function(e){var t=this._canvas;t&&this.mount.removeChild(t),this.mount.appendChild(e),this._canvas=e}},{key:"render",value:function(){var e=this;return Object(w.jsx)("div",{ref:function(t){e.mount=t}})}}]),o}(m.PureComponent);t.default=M},240:function(e,t,n){"use strict";n.r(t),n.d(t,"AniViewer",(function(){return h}));var a=n(8),r=n.n(a),i=n(15),o=n(0),c=n(2),s=n(20),u=n(4),d=n(5),l=n(237),p=n(3),m=n(49),f=n(200),h=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),u=0;u<a;u++)c[u]=arguments[u];return(e=t.call.apply(t,[this].concat(c))).afterMainModelLoad=function(){e.saveMainModelInitState(),e.addAnimation()},e.afterMainModelUpdate=function(){e.saveMainModelInitState(),e.addAnimation()},e.updateModel=function(){var t=Object(i.a)(r.a.mark((function t(n,a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.updateMainModel(n.model,a.model);case 2:e.updateAnimation(n.animation,a.animation);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),e.otherUpdate=function(t,n){n.capture.enable&&!t.capture.enable&&e.captureAnimation()},e.saveMainModelInitState=function(){var t=e.models.main;t.userData.initPos=t.position.clone(),t.userData.initRot=t.rotation.clone()},e.resetFace=function(){var t=e.props.model,n=t.eyeIdx,a=t.mouthIdx;e.eyeIdx=n,e.mouthIdx=a},e.beforeAddAni=function(){e.resetFace()},e.addAnimation=Object(i.a)(r.a.mark((function t(){var n,a,i,o,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.beforeAddAni(),n=e.props.animation,a=n.code,i=n.timeScale,a){t.next=4;break}return t.abrupt("return");case 4:return e.disableInput(),o=e.models.main,c=Object(m.a)(a),e.nAni=c.length,o.mixer=new p.AnimationMixer(o),e.mixer=o.mixer,e._aniIdx=0,o.mixer.timeScale=i,o.mixer.addEventListener("finished",e.playNextAni),e.aniSettings=c,t.next=16,Object(m.v)(c);case 16:e.animations=t.sent,e.aniIdx=0,e.enableInput();case 19:case"end":return t.stop()}}),t)}))),e.removeAnimation=function(){var t,n,a=e.models.main;null===(t=a.mixer)||void 0===t||null===(n=t.stopAllAction)||void 0===n||n.call(t);var r=a.userData,i=r.initPos,o=r.initRot;a.position.copy(i),a.rotation.copy(o),e.mixer=null,e.animations=[],e.aniSettings=[]},e.playNextAni=function(){var t=Object(s.a)(e).nAni;e.props.capture.enable&&e._aniIdx===t-1&&(e.mediaRecorder.stop(),e.props.onCaptureFinish());var n=(e._aniIdx+1)%t;e.aniIdx=n},e.updateAnimation=function(t,n){var a=n.code,r=n.timeScale;if(t.code!==a)return e.removeAnimation(),void e.addAnimation();t.timeScale!==r&&(e.mixer.timeScale=r)},e.captureAnimation=function(){if(e.chunks=[],e.videoStream=e.canvas.captureStream(30),!e.mediaRecorder){var t=e.props.capture.codec;e.mediaRecorder=new MediaRecorder(e.videoStream,{mimeType:t}),e.mediaRecorder.ondataavailable=function(t){return e.chunks.push(t.data)},e.mediaRecorder.onstop=function(){e.enableInput();var t=e.props.capture.format,n=new Blob(e.chunks,{type:"video/".concat(t)}),a=new Date,r=a.toDateString().replace(/ /g,"_"),i=a.toLocaleTimeString().replace(/:/g,"-").replace(/ /g,""),o="ani_".concat(r,"_").concat(i,".").concat(t);Object(f.a)(n,o)}}e.disableInput("Recording"),e.beforeCaptureAnimation(),e.aniIdx=0,e.mediaRecorder.start()},e.beforeCaptureAnimation=function(){},e.updateScene=function(t){var n;if((null===(n=e.mixer)||void 0===n||n.update(t),e.faceChanges&&e.faceChanges.length)&&e.mixer.time>=e.faceChangeTime[0]){e.faceChangeTime.shift();var a=e.faceChanges.shift(),r=a.eyeIdx,i=a.mouthIdx;e.eyeIdx=r,e.mouthIdx=i}},e}return Object(c.a)(n,[{key:"aniIdx",set:function(e){this._aniIdx=e;var t=this.mixer;t.stopAllAction();var n=this.animations[e],a=t.clipAction(n),r=this.aniSettings[e],i=r.timeScale,o=r.repetitions,c=r.faceChanges,s=n.duration;a.setLoop(p.LoopRepeat,o),a.timeScale=i,a.time=0,this.faceChanges=Object(m.s)(c,o),this.faceChangeTime=this.faceChanges.map((function(e){return s*e.time/100})),t.setTime(0),a.play()}},{key:"eyeIdx",set:function(e){}},{key:"mouthIdx",set:function(e){}}]),n}(l.default);t.default=h}}]);
//# sourceMappingURL=6.d8481d6f.chunk.js.map