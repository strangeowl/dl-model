(this["webpackJsonpdl-model"]=this["webpackJsonpdl-model"]||[]).push([[48],{190:function(e,t,a){"use strict";var n=a(57),i=a.n(n),o=a(69),r=a(3),c=a(6),u=a(29),d=a(4),s=a(5),p=a(264),l=a(1),m=a(43),f=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),d=0;d<n;d++)c[d]=arguments[d];return(e=t.call.apply(t,[this].concat(c))).afterMainModelLoad=function(){e.saveMainModelInitState(),e.addAnimation()},e.afterMainModelUpdate=function(){e.saveMainModelInitState(),e.addAnimation()},e.updateModel=function(){var t=Object(o.a)(i.a.mark((function t(a,n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.updateMainModel(a.model,n.model);case 2:e.updateAnimation(a.animation,n.animation);case 3:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.otherUpdate=function(t,a){a.capture.enable&&!t.capture.enable&&e.captureAnimation()},e.saveMainModelInitState=function(){var t=e.models.main;t.initPos=t.position.clone(),t.initRot=t.rotation.clone()},e.resetFace=function(){var t=e.props.model,a=t.eyeIdx,n=t.mouthIdx;e.eyeIdx=a,e.mouthIdx=n},e.beforeAddAni=function(){e.resetFace()},e.addAnimation=Object(o.a)(i.a.mark((function t(){var a,n,o,r,c,u,d;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null===(a=(n=e).beforeAddAni)||void 0===a||a.call(n),o=e.props.animation,r=o.code,c=o.timeScale,r){t.next=4;break}return t.abrupt("return");case 4:return e.disableInput(),u=e.models.main,d=Object(m.a)(r),e.nAni=d.length,u.mixer=new l.AnimationMixer(u),e.mixer=u.mixer,e._aniIdx=0,u.mixer.timeScale=c,u.mixer.addEventListener("finished",e.playNextAni),e.aniSettings=d,t.next=16,Object(m.v)(d);case 16:e.animations=t.sent,e.aniIdx=0,e.enableInput();case 19:case"end":return t.stop()}}),t)}))),e.removeAnimation=function(){var t,a,n=e.models.main;null===(t=n.mixer)||void 0===t||null===(a=t.stopAllAction)||void 0===a||a.call(t);var i=n.initPos,o=n.initRot;n.position.copy(i),n.rotation.copy(o),e.mixer=null,e.animations=[],e.aniSettings=[]},e.playNextAni=function(){var t=Object(u.a)(e).nAni;e.props.capture.enable&&e._aniIdx===t-1&&(e.mediaRecorder.stop(),e.props.toggleCapture());var a=(e._aniIdx+1)%t;e.aniIdx=a},e.updateAnimation=function(t,a){var n=a.code,i=a.timeScale;if(t.code!==n)return e.removeAnimation(),void e.addAnimation();t.timeScale!==i&&(e.mixer.timeScale=i)},e.captureAnimation=function(){var t,a;if(e.chunks=[],e.videoStream=e.canvas.captureStream(30),!e.mediaRecorder){var n=e.props.capture.codec;e.mediaRecorder=new MediaRecorder(e.videoStream,{mimeType:n}),e.mediaRecorder.ondataavailable=function(t){return e.chunks.push(t.data)},e.mediaRecorder.onstop=function(){e.enableInput();var t=new Blob(e.chunks,{type:"video/webm"}),a=URL.createObjectURL(t),n=document.createElement("a");n.style="display: none",n.href=a,n.download="animation.webm",document.body.appendChild(n),n.click(),window.URL.revokeObjectURL(a),document.body.removeChild(n)}}e.disableInput("Recording"),null===(t=(a=e).beforeCaptureAnimation)||void 0===t||t.call(a),e.aniIdx=0,e.mediaRecorder.start()},e.everyAnimate=function(){var t,a=e.clock.getDelta();if((e.rotateFloor(a),null===(t=e.mixer)||void 0===t||t.update(a),e.faceChanges&&e.faceChanges.length)&&e.mixer.time>=e.faceChangeTime[0]){e.faceChangeTime.shift();var n=e.faceChanges.shift(),i=n.eyeIdx,o=n.mouthIdx;e.eyeIdx=i,e.mouthIdx=o}},e}return Object(c.a)(a,[{key:"aniIdx",set:function(e){var t=this;this._aniIdx=e;var a=this.mixer;a.stopAllAction();var n=this.animations[e],i=a.clipAction(n),o=this.aniSettings[e],r=o.timeScale,c=o.repetitions,u=o.faceChanges;i.setLoop(l.LoopRepeat,c),i.clampWhenFinished=!0,i.timeScale=r,i.time=0,this.faceChanges=Object(m.r)(u,c),this.faceChangeTime=this.faceChanges.map((function(e){return t.currentClipDuration*e.time/100})),a.setTime(0),this.currentClipDuration=n.duration,i.play()}}]),a}(p.default);t.a=f},455:function(e,t,a){"use strict";a.r(t),a.d(t,"AdvViewer",(function(){return h}));var n=a(13),i=a(57),o=a.n(i),r=a(69),c=a(3),u=a(6),d=a(4),s=a(5),p=a(190),l=a(9),m=a(43),f=["Right","Left"],h=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).afterMainModelLoad=function(){e.saveMainModelInitState(),e.initFace(),e.addWeapons(),e.addAnimation()},e.beforeMainModelUpdate=function(){e.detachAllWeapons()},e.afterMainModelUpdate=function(){e.saveMainModelInitState(),e.initFace(),e.attachAllWeapons(),e.addAnimation()},e.updateModel=function(){var t=Object(r.a)(o.a.mark((function t(a,n){var i,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a!==n){t.next=2;break}return t.abrupt("return");case 2:if(i=a.model,r=n.model,i.id===r.id){t.next=9;break}return t.next=7,e.updateMainModel(i,r);case 7:t.next=10;break;case 9:e.updateFace(i,r);case 10:e.updateWeapons(i,r),e.updateAnimation(a.animation,n.animation);case 12:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.initFace=function(){var t=e.props.model.id,a={mouthTexture:t,mouthIdx:l.d,eyeTexture:t,eyeIdx:l.d};e.updateFace(a,e.props.model)},e.addWeapons=Object(r.a)(o.a.mark((function t(){var a,i,r,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.getWeaponInfo(),t.next=3,e.initWeaponLoad();case 3:return a=t.sent,i=Object(n.a)(a,2),r=i[0],c=i[1],e.models=Object.assign(e.models,{weaponRight:r,weaponLeft:c}),t.next=10,e.initAllWeapons();case 10:e.attachAllWeapons();case 11:case"end":return t.stop()}}),t)}))),e.getWeaponInfo=function(){var t=e.props.model,a=t.weaponRight,n=t.weaponLeft,i={weaponRight:Object(m.b)(a),weaponLeft:Object(m.b)(n)};e.modelInfo=Object.assign(e.modelInfo,i)},e.initWeaponLoad=function(){var t,a,n=null===(t=e.modelInfo.weaponRight)||void 0===t?void 0:t.modelPath,i=Object(m.w)(n),o=null===(a=e.modelInfo.weaponLeft)||void 0===a?void 0:a.modelPath,r=Object(m.w)(o);return Promise.all([i,r])},e.initAllWeapons=Object(r.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=e.matType,f.forEach((function(t){var n="weapon".concat(t),i=e.models[n];if(i){var o=e.modelInfo[n],r=o.texturePath,c=o.flipped;Object(m.k)(i,{materialType:a,texturePath:r}),c&&(i.rotation.y+=Math.PI);var u=e.props.outline;e.outlines[n]=Object(m.n)(i,u)}}));case 2:case"end":return t.stop()}}),t)}))),e.attachWeapon=function(t,a){var n="jWeapon".concat(a[0]);e.models.main.traverse((function(e){e.name.includes(n)&&0===e.children.length&&e.add(t)}))},e.attachAllWeapons=function(){f.forEach((function(t){var a="weapon".concat(t),n=e.models[a];n&&e.attachWeapon(n,t)}))},e.detachWeapon=function(t){var a="weapon".concat(t),n=e.models[a];n&&n.parent.remove(n)},e.detachAllWeapons=function(){return f.forEach((function(t){return e.detachWeapon(t)}))},e.updateEyeTexture=function(t,a){var n=a.eyeTexture,i=t.eyeTexture;if(n===i)return!1;var o=e.matType;Object(m.d)(e.models.main,{materialType:o,textureId:n});var r=Object(m.i)(n,i);return Object(m.c)(e.models.main,r),!0},e.updateMouthTexture=function(t,a){var n=a.mouthTexture,i=t.mouthTexture;if(n===i)return!1;var o=e.matType;Object(m.f)(e.models.main,{materialType:o,textureId:n});var r=Object(m.i)(n,i);return Object(m.e)(e.models.main,r),!0},e.updateFaceTexture=function(t,a){var n=e.updateEyeTexture(t,a),i=e.updateMouthTexture(t,a);if(n||i){var o=e.models.main;e.applyNewModelMat(o)}},e.updateFaceOffset=function(t){var a=t.eyeIdx,n=t.mouthIdx;e.eyeIdx=a,e.mouthIdx=n},e.updateFace=function(t,a){e.updateFaceTexture(t,a),e.updateFaceOffset(a)},e.updateWeapons=function(){var t=Object(r.a)(o.a.mark((function t(a,n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.disableInput(),f.forEach(function(){var t=Object(r.a)(o.a.mark((function t(i){var r,c,u,d,s,p,l,f;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r="weapon".concat(i),a[r]!==n[r]){t.next=3;break}return t.abrupt("return");case 3:if(e.detachWeapon(i),Object(m.o)(e.models[r]),n[r]){t.next=10;break}return e.models[r]=null,e.modelInfo[r]="",e.outlines[r]=null,t.abrupt("return");case 10:return e.modelInfo[r]=Object(m.b)(n[r]),c=e.modelInfo[r],u=c.modelPath,d=c.texturePath,s=c.flipped,t.next=14,Object(m.w)(u);case 14:p=t.sent,e.models[r]=p,l=e.matType,Object(m.k)(p,{materialType:l,texturePath:d}),e.applyNewModelMat(p),s&&(p.rotation.y+=Math.PI),f=e.props.outline,e.outlines[r]=Object(m.n)(p,f),e.attachWeapon(p,i);case 23:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),e.enableInput();case 3:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e._eyeIdx=e._mouthIdx=l.d,e}return Object(u.a)(a,[{key:"eyeIdx",set:function(e){if(e){var t=this._eyeIdx;if(e!==t){var a=Object(m.h)(e,t);Object(m.c)(this.models.main,a),this._eyeIdx=e}}}},{key:"mouthIdx",set:function(e){if(e){var t=this._mouthIdx;if(e!==t){var a=Object(m.h)(e,t);Object(m.e)(this.models.main,a),this._mouthIdx=e}}}}]),a}(p.a);t.default=h}}]);
//# sourceMappingURL=48.5adba034.chunk.js.map