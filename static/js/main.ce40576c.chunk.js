(this["webpackJsonpdl-model"]=this["webpackJsonpdl-model"]||[]).push([[0],{41:function(e,a,t){e.exports=t.p+"static/media/Rose-Petals.1911e778.svg"},68:function(e,a,t){e.exports=t(88)},73:function(e,a,t){},79:function(e,a,t){},81:function(e,a,t){},82:function(e,a,t){},83:function(e,a,t){},84:function(e,a,t){},85:function(e,a,t){},88:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(9),o=t.n(i),l=(t(73),t(6)),c=t(17);var m=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=Object(n.useState)(e),t=Object(c.a)(a,2),r=t[0],i=t[1],o=function(){i(!r)};return[r,o]},d=t(130),s=t(131),u=t(129),p=t(118),w={rarity:["3","4","5"],element:["Flame","Water","Wind","Light","Shadow"],weapon:["Sword","Blade","Dagger","Axe","Lance","Bow","Wand","Staff"]},g=45,h=1e3,y=1,f={c:{x:0,y:.5,z:1.5},d:{x:3,y:.5,z:6},c100034_01:{x:0,y:.5,z:1.75},d210078_01:{x:3,y:3,z:20},d210114_01:{x:3,y:3,z:20},smith:{x:1,y:1,z:2}},_={c:{x:0,y:.5,z:0},d:{x:0,y:1,z:0},d210078_01:{x:0,y:3,z:0},d210114_01:{x:0,y:3,z:0},smith:{x:0,y:.5,z:0}},S={face1:{x:2,y:1},face2:{x:0,y:0},face3:{x:1,y:0},face4:{x:2,y:0},face5:{x:3,y:0},face6:{x:0,y:-1},face7:{x:1,y:-1},face8:{x:2,y:-1},face9:{x:3,y:-1}},b=t(41),v=t.n(b),W=Object(p.a)((function(e){return{root:{display:"block",width:"100vw",height:"100vh"},closeDrawerButton:{display:"flex",alignItems:"center",justifyContent:"center",width:"2rem",height:"2rem",borderRadius:"50%",position:"absolute",right:"0",top:"0",margin:"1rem",cursor:"pointer",backgroundColor:"rgba(255,255,255,0.5)","&:hover":{backgroundColor:"rgba(255,255,255,0.8)"}},drawer:{width:"15rem"},drawerPaper:{alignItems:"center",backgroundColor:"#330000",backgroundImage:"url(".concat(v.a,")"),backgroundSize:"cover",backgroundPosition:"center",width:"15rem","& button":{marginBottom:"0.2rem"}},drawerHeader:{height:"4rem",width:"100%",fontSize:"1.5rem",display:"flex",justifyContent:"center",alignItems:"center",filter:"drop-shadow(0px 20px 10px rgba(0, 0, 0, $shadow-opacity))",backgroundColor:"#330000",backgroundImage:"url(".concat(v.a,")"),backgroundSize:"auto 100vh",backgroundPosition:"center",color:"white",marginBottom:"0.5rem"},content:{height:"100vh",width:"100vw",padding:0},openDrawerButton:{position:"absolute",top:0,left:0,margin:"2rem",padding:"0.5rem 1rem",opacity:"0.5",borderRadius:"0.25rem",transition:"0.5s all ease-in-out","&:hover":{opacity:"1"},cursor:"pointer"}}})),x=t(21),L=t(12),k=function(e,a){switch(a.type){case"update":var t=a.key,n=a.value;return Object(L.a)(Object(L.a)({},e),{},Object(x.a)({},t,Object(L.a)(Object(L.a)({},e[t]),n)));default:return e}},B=Object(n.createContext)(),C=Object(n.createContext)(),E={model:{id:"c100001_01",face:2,texture:"c100001_01"},scene:{background:13421772,shadow:!1},animation:{name:"Butterfly Twirl"}};function A(e){var a=Object(n.useReducer)(k,E),t=Object(c.a)(a,2),i=t[0],o=t[1];return r.a.createElement(B.Provider,{value:i},r.a.createElement(C.Provider,{value:o},e.children))}var O=t(55),j=t(56),F=t(26),D=t(58),M=t(57),P=t(13),R=t(76)(P),N=t(77),T=function(e){var a=e.loaderCallback,t=e.model,n=e.texture,r=e.tag,i=e.handleLoad,o=e.handleError;t&&(new N).load(t,(function(e){a(e,n,r)}),(function(e){i(e)}),(function(e){o(e)}))},H=function(e){Object(D.a)(t,e);var a=Object(M.a)(t);function t(e){var n;return Object(O.a)(this,t),(n=a.call(this,e)).checkProps=function(){n.cameraPosition=n.props.cameraPosition||{x:2,y:0,z:10},n.controlsPosition=n.props.controlsPosition||{x:0,y:0,z:0},n.viewport=n.props.viewport||{width:window.innerWidth,height:window.innerHeight}},n.animate=function(){if(n.animation=requestAnimationFrame(n.animate),n.mixers.length>0)for(var e=n.clock.getDelta(),a=0;a<n.mixers.length;a++)n.mixers[a].update(e);n.renderer.render(n.scene,n.camera)},n.addAnimation=function(e,a){if(e.mixer=new P.AnimationMixer(e),e.mixer&&n.mixers.push(e.mixer),void 0!==a)if(a.includes("+")){var t=a.split("+");if(2===t.length){var r=t[0],i=t[1],o="".concat(fe,"/fbx/").concat(r,".fbx");(new N).load(o,(function(a){var t=a.animations.find((function(e){return e.name===i}));t&&e.mixer.clipAction(t).play()}))}}else if(e.animations&&e.animations[a]){e.mixer.clipAction(e.animations[a]).play()}},n.mainLoaderCallback=function(e,a){var t=null;if(null!==a){var r=(new P.TextureLoader).load(a);t=new P.MeshBasicMaterial({map:r,skinning:!0})}var i=n.props.faceOffset;e.traverse((function(e){var a,n;if(e.name.includes("Eff")&&(e.visible=!1),e.isMesh&&(e.material=null!==t?(a=e.material,n=t,Array.isArray(a)?a.map((function(){return n})):n):function(e){return Array.isArray(e)?e.map((function(e){return new P.MeshBasicMaterial({map:e.map,skinning:!0})})):new P.MeshBasicMaterial({map:e.map,skinning:!0})}(e.material),e.castShadow=!1,e.receiveShadow=!1),"mBodyAll"===e.name&&i&&3===e.geometry.groups.length){var r=e.geometry.groups.filter((function(e){return e.count<1e3}));if(2===r.length)for(var o=Math.min(r[0].start,r[1].start),l=Math.max(r[0].start+r[0].count,r[1].start+r[1].count),c=o;c<l;c+=1)e.geometry.attributes.uv.array[2*c]+=.25*i.x,e.geometry.attributes.uv.array[2*c+1]+=.25*i.y}})),n.props.rotation&&(e.rotation.x=n.props.rotation.x,e.rotation.y=n.props.rotation.y,e.rotation.z=n.props.rotation.z),n.models.main=e,n.addAnimation(e,n.props.animationIdx),n.scene.add(e)},n.handleLoad=function(e){n.props.onLoad&&n.props.onLoading(e)},n.handleError=function(e){n.props.onError&&n.props.onError(e)},n.init=function(){n.models={},n.mixers=[],n.clock=new P.Clock,n.scene=new P.Scene,n.scene.background=new P.Color(n.props.bgColor),n.scene.fog=new P.Fog(10526880,200,1e3),n.camera=new P.PerspectiveCamera(g,n.viewport.width/n.viewport.height,y,h),n.camera.position.set(n.cameraPosition.x,n.cameraPosition.y,n.cameraPosition.z),n.camera.updateProjectionMatrix(),n.controls=new R(n.camera,n.container),n.controls.target.set(n.controlsPosition.x,n.controlsPosition.y,n.controlsPosition.z),n.controls.update();var e=new P.HemisphereLight(16777215,4473924);e.position.set(0,200,0),n.scene.add(e),e=new P.DirectionalLight(16777215),n.scene.add(e),e=new P.AmbientLight(2236962),n.scene.add(e);var a={loaderCallback:n.mainLoaderCallback,model:n.props.model,texture:n.props.texture,tag:"main",handleLoad:n.handleLoad,handleError:n.handleError};T(a),n.renderer=new P.WebGLRenderer({antialias:!1,alpha:!0}),n.renderer.setClearColor(0,0),n.renderer.setSize(n.viewport.width,n.viewport.height),n.renderer.shadowMap.enabled=!0,n.container.appendChild(n.renderer.domElement),n.animate()},n.mainLoaderCallback=n.mainLoaderCallback.bind(Object(F.a)(n)),n.handleLoad=n.handleLoad.bind(Object(F.a)(n)),n.handleError=n.handleError.bind(Object(F.a)(n)),n.addAnimation=n.addAnimation.bind(Object(F.a)(n)),n}return Object(j.a)(t,[{key:"componentDidMount",value:function(){this.checkProps(),this.init()}},{key:"shouldComponentUpdate",value:function(e){if(e.viewport!==this.props.viewport){var a=e.viewport,t=a.width,n=a.height;this.renderer.setSize(t,n),this.camera.aspect=t/n,this.camera.updateProjectionMatrix()}if(e.model!==this.props.model){this.scene.remove(this.models.main),this.mixers=[];var r={loaderCallback:this.mainLoaderCallback,model:e.model,texture:e.texture,tag:"main",handleLoad:this.handleLoad,handleError:this.handleError};T(r)}return e.animationIdx!==this.props.animationIdx&&(this.mixers=[],this.addAnimation(this.models.main,e.animationIdx)),e.bgColor!==this.props.bgColor&&(this.scene.background=new P.Color(e.bgColor)),!1}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.animation),this.mixers=null,this.clock=null,this.camera=null,this.controls=null,this.scene=null,this.renderer=null}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{ref:function(a){e.container=a}})}}]),t}(n.Component),z=(t(79),{Bob:"cmn+CMN_MWM_03","Slide Step":"SlideStep+mixamo.com",Rumba:"Rumba+mixamo.com",Flair:"Flair+mixamo.com",Catwalk:"FemaleWalk+mixamo.com","Kip Up":"KipUp+mixamo.com","Butterfly Twirl":"ButterflyTwirl+mixamo.com",Backflip:"Backflip+mixamo.com","Forward Flip":"ForwardFlip+mixamo.com","Raise The Roof":"RaiseTheRoof+mixamo.com"});var G=function(e){var a=e.viewport,t=Object(n.useContext)(B),i=t.model,o=i.id,l=i.face,c=i.texture,m=t.scene.background,d=t.animation.name,s=z[d]||d,u="".concat(fe,"/fbx/").concat(o,"/").concat(o,".fbx"),p="".concat(fe,"/fbx/").concat(c,"/").concat(c,".png"),w=S["face".concat(l)],g=o[0],h=f[g];f[o]&&(h=f[o]);var y=_[g];return _[o]&&(y=_[o]),r.a.createElement("div",{className:"Display"},r.a.createElement(H,{model:u,texture:p,viewport:a,faceOffset:w,cameraPosition:h,controlsPosition:y,animationIdx:s,bgColor:m,rotation:{x:0,y:Math.PI/4,z:0}}))},I=t(120);var V=function(e){var a=e.openControl,t=function(e){a(e.currentTarget.value)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,{variant:"contained",value:"model",onClick:t},"Choose a model"),r.a.createElement(I.a,{variant:"contained",value:"animation",onClick:t},"Choose Animation"),r.a.createElement(I.a,{variant:"contained",value:"background",onClick:t},"Background Settings"))},K=t(128);var J=function(e){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t={};Object.keys(e).forEach((function(n){var r=e[n],i={};r.forEach((function(e){i=Object(L.a)(Object(L.a)({},i),{},Object(x.a)({},e,a))})),t=Object(L.a)(Object(L.a)({},t),{},Object(x.a)({},n,i))}));var r=Object(n.useState)(t),i=Object(c.a)(r,2),o=i[0],l=i[1],m=function(e,a){var t=o[e][a],n=Object(L.a)(Object(L.a)({},o[e]),{},Object(x.a)({},a,!t));Object.keys(n).every((function(e){return n[e]}))&&Object.keys(n).forEach((function(e){return n[e]=!1})),l(Object(L.a)(Object(L.a)({},o),{},Object(x.a)({},e,n)))},d=function(e){var a={};Object.keys(o).forEach((function(t){var n=o[t],r={};Object.keys(n).forEach((function(a){r=Object(L.a)(Object(L.a)({},r),{},Object(x.a)({},a,e))})),a=Object(L.a)(Object(L.a)({},a),{},Object(x.a)({},t,r))})),l(a)};return[o,m,d]},X=t(44),Y=t(5),Z=t(122),Q=t(124),U=t(125),q=t(123),$=t(89),ee={dialogRoot:{margin:0,padding:0},root:{margin:0,padding:"1rem"},closeButton:{position:"absolute",right:"0.5rem",top:"0.5rem",color:"rgba(0,0,0,0.8)"},titleRoot:{margin:0,padding:"1rem",paddingBottom:0,display:"flex",justifyContent:"center"},titleText:{}},ae=Object(Y.a)(ee)((function(e){var a=e.children,t=e.classes,n=(e.onClose,Object(X.a)(e,["children","classes","onClose"]));return r.a.createElement(Z.a,Object.assign({disableTypography:!0,className:t.dialogRoot},n),a)})),te=Object(Y.a)(ee)((function(e){var a=e.children,t=e.classes,n=e.onClose,i=Object(X.a)(e,["children","classes","onClose"]);return r.a.createElement(Z.a,Object.assign({disableTypography:!0,className:t.titleRoot},i),r.a.createElement($.a,{variant:"h6",className:t.titleText},a),r.a.createElement(q.a,{"aria-label":"close",className:t.closeButton,onClick:n},"\xd7"))})),ne=Object(Y.a)((function(e){return{root:{padding:e.spacing(2)}}}))(Q.a);Object(Y.a)((function(e){return{root:{margin:0,padding:e.spacing(1)}}}))(U.a),t(81);var re=function(e){var a=e.group,t=e.filterName,n=e.handleToggle,i=e.checked,o="".concat("/dl-model","/img/filter/").concat(a,"_").concat(t,".png");return r.a.createElement("div",{className:"GlowCheckbox","data-group":a,"data-name":t,onClick:n},r.a.createElement("img",{className:"GlowCheckbox-icon ".concat(i&&"checked"),src:o,alt:"".concat(a,"_").concat(t)}))};t(82);var ie=function(e){var a=e.groupName,t=e.filterNames,n=e.value,i=e.handleToggle,o=t.map((function(e){return r.a.createElement(re,{group:a,checked:n[e],filterName:e,handleToggle:i,key:"".concat(a,"_").concat(e)})}));return r.a.createElement("div",{className:"FilterGroup"},o)};t(83);var oe=function(e){var a=e.groupState,t=e.handleToggle,n=e.resetFilters,i=Object.keys(w).map((function(e){return r.a.createElement(ie,{groupName:e,filterNames:Object.keys(a[e]),value:a[e],handleToggle:t,key:e})}));return r.a.createElement("div",{className:"Filters"},i,r.a.createElement("button",{className:"Filters-reset",onClick:n},"Reset"))},le=t(126),ce=t(127),me=Object(p.a)({root:{width:"15rem",padding:0,textAlign:"center",margin:"0.3rem 0",border:"2px solid rgba(0,0,0,0.1)",boxSizing:"content-box","&:hover":{border:"2px solid black"}},title:{fontSize:14,margin:"5px auto"},icons:{display:"flex",justifyContent:"center","& img":{width:"1.5rem",height:"1.5rem",margin:"0.5rem 1rem"}},portrait:{width:"100%",margin:"0.5rem 0"}});var de=function(e){var a=e.cid,t=e.name,n=e.title,i=e.element,o=(e.rarity,e.weapon),l=e.handleSelect,c=me(),m="".concat("/dl-model","/img/filter/element_").concat(i,".png"),d="".concat("/dl-model","/img/filter/weapon_").concat(o,".png"),s="".concat("/dl-model","/img/full_body_300/").concat(a,".png");return r.a.createElement(le.a,{className:c.root,"data-value":"c".concat(a),variant:"outlined",onClick:l},r.a.createElement(ce.a,null,r.a.createElement($.a,{className:c.title,color:"textSecondary",gutterBottom:!0},n),r.a.createElement($.a,{variant:"h5",component:"h2"},t),r.a.createElement("div",{className:c.icons},r.a.createElement("img",{src:m,alt:i}),r.a.createElement("img",{src:d,alt:o})),r.a.createElement("img",{className:c.portrait,src:s,alt:t})))};t(84);var se=function(e){var a=e.list,t=e.handleSelect,n=a.map((function(e){return r.a.createElement(de,Object.assign({},e,{key:e.cid,handleSelect:t}))}));return r.a.createElement("div",{className:"CardGallery"},n)},ue=[{cid:"110050_02",name:"Hunter Berserker",title:"Rathalos Berserker",element:"Flame",weapon:"Sword",rarity:"5"},{cid:"110259_01",name:"Lea",title:"Sublime Swordsman",element:"Flame",weapon:"Sword",rarity:"5"},{cid:"110291_01",name:"Marth",title:"Altean Prince",element:"Flame",weapon:"Sword",rarity:"5"},{cid:"110266_01",name:"Naveed",title:"Suave Lithomancer",element:"Flame",weapon:"Sword",rarity:"5"},{cid:"110054_01",name:"Serena",title:"Purehearted Warrior",element:"Flame",weapon:"Sword",rarity:"4"},{cid:"110008_01",name:"Karl",title:"Hero of Justice",element:"Flame",weapon:"Sword",rarity:"4"},{cid:"100001_01",name:"The Prince",title:"Dragonblood Prince",element:"Flame",weapon:"Sword",rarity:"4"},{cid:"110052_03",name:"Valentine's Orion",title:"Valentine's Guardian",element:"Flame",weapon:"Sword",rarity:"3"},{cid:"110261_01",name:"Marty",title:"Top Ruin Explorer",element:"Flame",weapon:"Sword",rarity:"3"},{cid:"110346_01",name:"Nobunaga",title:"Leader of the Horse Clan",element:"Flame",weapon:"Blade",rarity:"5"},{cid:"110264_01",name:"Rena",title:"Mana Infuser",element:"Flame",weapon:"Blade",rarity:"5"},{cid:"110010_01",name:"Mikoto",title:"Nature's Avatar",element:"Flame",weapon:"Blade",rarity:"5"},{cid:"100032_01",name:"Laxi",title:"Dissonant Android",element:"Flame",weapon:"Blade",rarity:"4"},{cid:"110002_01",name:"Aoi",title:"Impassioned Ninja",element:"Flame",weapon:"Blade",rarity:"3"},{cid:"110011_01",name:"Ezelith",title:"Genius of the Century",element:"Flame",weapon:"Dagger",rarity:"5"},{cid:"110344_01",name:"Yuya",title:"Rebellious Rider",element:"Flame",weapon:"Dagger",rarity:"4"},{cid:"110270_01",name:"Melsa",title:"Resolute Friend",element:"Flame",weapon:"Dagger",rarity:"4"},{cid:"110005_01",name:"Renelle",title:"Honorable Treasure Hunter",element:"Flame",weapon:"Dagger",rarity:"3"},{cid:"100010_07",name:"Halloween Mym",title:"Dragon Temptress",element:"Flame",weapon:"Axe",rarity:"5"},{cid:"110263_01",name:"Ramona",title:"Impassioned Blacksmith",element:"Flame",weapon:"Axe",rarity:"5"},{cid:"110056_01",name:"Yue",title:"Hungry Hunter",element:"Flame",weapon:"Axe",rarity:"4"},{cid:"110007_01",name:"Vanessa",title:"Red-Haired Warrior",element:"Flame",weapon:"Axe",rarity:"4"},{cid:"100010_04",name:"Gala Mym",title:"Lovestruck Dragon",element:"Flame",weapon:"Lance",rarity:"5"},{cid:"110260_01",name:"Emma",title:"Encouraging Cheerleader",element:"Flame",weapon:"Lance",rarity:"4"},{cid:"110299_01",name:"Xuan Zang",title:"Erudite Sealer",element:"Flame",weapon:"Lance",rarity:"4"},{cid:"110001_01",name:"Alain",title:"Captain Craven",element:"Flame",weapon:"Lance",rarity:"3"},{cid:"110342_01",name:"Chelsea",title:"Obvious Admirer",element:"Flame",weapon:"Bow",rarity:"5"},{cid:"100029_02",name:"Gala Sarisse",title:"The Crimson Star",element:"Flame",weapon:"Bow",rarity:"5"},{cid:"110011_02",name:"Valentine's Ezelith",title:"Stunning Sweetheart",element:"Flame",weapon:"Bow",rarity:"4"},{cid:"110003_01",name:"Joe",title:"Fire's Fletcher",element:"Flame",weapon:"Bow",rarity:"3"},{cid:"110354_01",name:"Mega Man",title:"Kindly Android",element:"Flame",weapon:"Wand",rarity:"5"},{cid:"110032_02",name:"Student Maribelle",title:"Outgoing Student",element:"Flame",weapon:"Wand",rarity:"5"},{cid:"110009_01",name:"Sinoa",title:"Intrepid Scholar",element:"Flame",weapon:"Wand",rarity:"4"},{cid:"110004_01",name:"Xania",title:"Meandering Mage",element:"Flame",weapon:"Wand",rarity:"3"},{cid:"110043_02",name:"Valentine's Hildegarde",title:"Rosy Saint",element:"Flame",weapon:"Staff",rarity:"5"},{cid:"110257_02",name:"Halloween Lowen",title:"Halloween Prankster",element:"Flame",weapon:"Staff",rarity:"4"},{cid:"110269_01",name:"Verica",title:"Guiding Seer",element:"Flame",weapon:"Staff",rarity:"4"},{cid:"110006_01",name:"Aurien",title:"Elegant Gambler",element:"Flame",weapon:"Staff",rarity:"3"},{cid:"110255_02",name:"Summer Celliera",title:"Avid Armsmaster",element:"Water",weapon:"Sword",rarity:"5"},{cid:"110022_01",name:"Xander",title:"Born Ruler",element:"Water",weapon:"Sword",rarity:"5"},{cid:"110301_02",name:"Halloween Odetta",title:"Wandering Spider",element:"Water",weapon:"Sword",rarity:"4"},{cid:"110015_01",name:"Zardin",title:"Hopeless Narcissist",element:"Water",weapon:"Sword",rarity:"3"},{cid:"110295_01",name:"Valerio",title:"Dutiful Chef",element:"Water",weapon:"Blade",rarity:"5"},{cid:"100003_02",name:"Summer Ranzal",title:"Grillmaster",element:"Water",weapon:"Blade",rarity:"4"},{cid:"110255_01",name:"Celliera",title:"Hot-Blooded Instructor",element:"Water",weapon:"Blade",rarity:"4"},{cid:"110016_01",name:"Jurota",title:"Solemn Stalwart",element:"Water",weapon:"Blade",rarity:"3"},{cid:"110296_01",name:"Mitsuba",title:"Hinomotoan Chef",element:"Water",weapon:"Dagger",rarity:"5"},{cid:"100004_02",name:"Dragonyule Cleo",title:"Belle Bestower",element:"Water",weapon:"Dagger",rarity:"5"},{cid:"110265_01",name:"Renee",title:"Future Smithing Genius",element:"Water",weapon:"Dagger",rarity:"4"},{cid:"110253_01",name:"Orsem",title:"Dreamer on Ice",element:"Water",weapon:"Dagger",rarity:"4"},{cid:"110020_01",name:"Luther",title:"Passionate Dancer",element:"Water",weapon:"Dagger",rarity:"4"},{cid:"110355_01",name:"Lazry",title:"Mechanized Blacksmith",element:"Water",weapon:"Axe",rarity:"5"},{cid:"100002_13",name:"Gala Elisanne",title:"Godly Guide",element:"Water",weapon:"Axe",rarity:"5"},{cid:"110042_02",name:"Summer Julietta",title:"Paladyn in Paradise",element:"Water",weapon:"Axe",rarity:"5"},{cid:"110018_01",name:"Karina",title:"Free-Spirited Pirate",element:"Water",weapon:"Axe",rarity:"4"},{cid:"110258_01",name:"Pietro",title:"Visionary Adventurer",element:"Water",weapon:"Axe",rarity:"3"},{cid:"110012_01",name:"Rex",title:"Charitable Lumberjack",element:"Water",weapon:"Axe",rarity:"3"},{cid:"110328_01",name:"Fjorm",title:"Princess of Ice",element:"Water",weapon:"Lance",rarity:"5"},{cid:"110021_01",name:"Xainfried",title:"Dragon Guardian",element:"Water",weapon:"Lance",rarity:"5"},{cid:"110356_01",name:"Gauld",title:"Bloodfist",element:"Water",weapon:"Lance",rarity:"4"},{cid:"100002_01",name:"Elisanne",title:"Anointed Lance",element:"Water",weapon:"Lance",rarity:"4"},{cid:"110058_01",name:"Jakob",title:"Quiet Mercenary",element:"Water",weapon:"Lance",rarity:"3"},{cid:"110014_01",name:"Cibella",title:"Staunch Avenger",element:"Water",weapon:"Lance",rarity:"3"},{cid:"100029_03",name:"Hunter Sarisse",title:"Mizutsune Archer",element:"Water",weapon:"Bow",rarity:"5"},{cid:"110317_01",name:"Laranoa",title:"Lighthearted Leader",element:"Water",weapon:"Bow",rarity:"5"},{cid:"110053_02",name:"Dragonyule Nefaria",title:"Queen of Smiles",element:"Water",weapon:"Bow",rarity:"4"},{cid:"110013_01",name:"Waike",title:"Noble Thief",element:"Water",weapon:"Bow",rarity:"3"},{cid:"110252_01",name:"Lily",title:"Crystalian Princess",element:"Water",weapon:"Wand",rarity:"5"},{cid:"110300_01",name:"Pipple",title:"Sentient Vegetable",element:"Water",weapon:"Wand",rarity:"4"},{cid:"110063_02",name:"Summer Estelle",title:"Beachside Preacher",element:"Water",weapon:"Wand",rarity:"4"},{cid:"110022_02",name:"Dragonyule Xander",title:"King Starfall",element:"Water",weapon:"Wand",rarity:"4"},{cid:"110351_01",name:"Jiang Ziya",title:"Quirky Qilin",element:"Water",weapon:"Staff",rarity:"5"},{cid:"110029_02",name:"Nurse Aeleen",title:"Battle-Tested Nurse",element:"Water",weapon:"Staff",rarity:"4"},{cid:"110019_01",name:"Thaniel",title:"Shifty Sailor",element:"Water",weapon:"Staff",rarity:"4"},{cid:"110017_01",name:"Ricardt",title:"Kindly Coward",element:"Water",weapon:"Staff",rarity:"3"},{cid:"100002_06",name:"Wedding Elisanne",title:"Battling Bride",element:"Wind",weapon:"Sword",rarity:"5"},{cid:"100003_07",name:"Gala Ranzal",title:"Seasoned Tactician",element:"Wind",weapon:"Sword",rarity:"5"},{cid:"110038_02",name:"Templar Hope",title:"Budding Templar",element:"Wind",weapon:"Sword",rarity:"4"},{cid:"110315_01",name:"Ku Hai",title:"Rambling Blade",element:"Wind",weapon:"Sword",rarity:"4"},{cid:"110352_01",name:"Tobias",title:"Faithful Knight",element:"Wind",weapon:"Blade",rarity:"5"},{cid:"110307_01",name:"Victor",title:"Vengeful Commander",element:"Wind",weapon:"Blade",rarity:"5"},{cid:"110310_01",name:"Addis",title:"Noble Warrior",element:"Wind",weapon:"Blade",rarity:"4"},{cid:"110030_01",name:"Musashi",title:"Wandering Samurai",element:"Wind",weapon:"Blade",rarity:"4"},{cid:"110027_01",name:"Melody",title:"Menace of a Maid",element:"Wind",weapon:"Blade",rarity:"3"},{cid:"110002_02",name:"Wedding Aoi",title:"Ninja Bride",element:"Wind",weapon:"Dagger",rarity:"5"},{cid:"110314_01",name:"Su Fang",title:"Pyroblossom Artisan",element:"Wind",weapon:"Dagger",rarity:"4"},{cid:"110026_01",name:"Francesca",title:"Cheerful Merchant",element:"Wind",weapon:"Dagger",rarity:"3"},{cid:"110027_02",name:"Valentine's Melody",title:"Lovestruck Maid",element:"Wind",weapon:"Axe",rarity:"5"},{cid:"110268_01",name:"Lin You",title:"Kung-Fu Apprentice",element:"Wind",weapon:"Axe",rarity:"5"},{cid:"100003_01",name:"Ranzal",title:"Arc in the Storm",element:"Wind",weapon:"Axe",rarity:"4"},{cid:"110023_01",name:"Johanna",title:"Untamed Warrioress",element:"Wind",weapon:"Axe",rarity:"3"},{cid:"110353_01",name:"Kirsty",title:"Rebellious Commander",element:"Wind",weapon:"Lance",rarity:"5"},{cid:"110318_01",name:"Sylas",title:"Adept Aromatherapist",element:"Wind",weapon:"Lance",rarity:"5"},{cid:"110302_01",name:"Pia",title:"Budding Vocalist",element:"Wind",weapon:"Lance",rarity:"4"},{cid:"110029_01",name:"Aeleen",title:"Mercurial Lancer",element:"Wind",weapon:"Lance",rarity:"4"},{cid:"110267_01",name:"Hawk",title:"Twilight Hunter",element:"Wind",weapon:"Bow",rarity:"5"},{cid:"110256_01",name:"Louise",title:"Doting Sister",element:"Wind",weapon:"Bow",rarity:"5"},{cid:"110350_01",name:"Joachim",title:"Hidden Hunter",element:"Wind",weapon:"Bow",rarity:"4"},{cid:"110031_01",name:"Eleonora",title:"Curious Archer",element:"Wind",weapon:"Bow",rarity:"4"},{cid:"110028_01",name:"Philia",title:"Love Seeker",element:"Wind",weapon:"Bow",rarity:"3"},{cid:"110032_01",name:"Maribelle",title:"Child of the Forest",element:"Wind",weapon:"Wand",rarity:"5"},{cid:"110021_03",name:"Dragonyule Xainfried",title:"Saint's Aegis",element:"Wind",weapon:"Wand",rarity:"4"},{cid:"110340_01",name:"Noelle",title:"Meek Messenger",element:"Wind",weapon:"Wand",rarity:"4"},{cid:"110025_01",name:"Nicolas",title:"Walking Encyclopedia",element:"Wind",weapon:"Wand",rarity:"3"},{cid:"110341_01",name:"Akasha",title:"Pursuer of Knowledge",element:"Wind",weapon:"Staff",rarity:"5"},{cid:"110004_02",name:"Wedding Xania",title:"Magical Bride",element:"Wind",weapon:"Staff",rarity:"4"},{cid:"110257_01",name:"Lowen",title:"Dependable Brother",element:"Wind",weapon:"Staff",rarity:"4"},{cid:"110024_01",name:"Sophie",title:"Mana Observer",element:"Wind",weapon:"Staff",rarity:"3"},{cid:"100001_08",name:"Gala Prince",title:"Bearer of Dragonlight",element:"Light",weapon:"Sword",rarity:"5"},{cid:"110327_01",name:"Alfonse",title:"Prince of Askr",element:"Light",weapon:"Sword",rarity:"5"},{cid:"110274_01",name:"Albert",title:"Thunderswift Lord",element:"Light",weapon:"Sword",rarity:"5"},{cid:"110301_01",name:"Odetta",title:"Wanderlust Incarnate",element:"Light",weapon:"Sword",rarity:"4"},{cid:"110035_01",name:"Raemond",title:"Loyal Servant",element:"Light",weapon:"Sword",rarity:"3"},{cid:"100006_09",name:"Gala Luca",title:"Harmony Seeker",element:"Light",weapon:"Blade",rarity:"5"},{cid:"110015_02",name:"Beautician Zardin",title:"Brilliant Beautician",element:"Light",weapon:"Blade",rarity:"5"},{cid:"110348_01",name:"Hanabusa",title:"Hinomotoan Dancer",element:"Light",weapon:"Blade",rarity:"4"},{cid:"110064_01",name:"Yachiyo",title:"Peerless Duelist",element:"Light",weapon:"Blade",rarity:"4"},{cid:"110049_02",name:"Halloween Edward",title:"Bloodsucking Butler",element:"Light",weapon:"Blade",rarity:"3"},{cid:"110345_01",name:"Mitsuhide",title:"Leader of the Mouse Clan",element:"Light",weapon:"Dagger",rarity:"5"},{cid:"110319_01",name:"Fleur",title:"Budding Artist",element:"Light",weapon:"Dagger",rarity:"4"},{cid:"110276_01",name:"Fritz",title:"Dagger Magnificence",element:"Light",weapon:"Dagger",rarity:"4"},{cid:"110037_01",name:"Irfan",title:"Mammonist Mercenary",element:"Light",weapon:"Dagger",rarity:"3"},{cid:"110036_03",name:"Dragonyule Malora",title:"Lady Starfall",element:"Light",weapon:"Axe",rarity:"5"},{cid:"110042_01",name:"Julietta",title:"Timorous Paladyn",element:"Light",weapon:"Axe",rarity:"5"},{cid:"100006_03",name:"Summer Luca",title:"Prankster in Paradise",element:"Light",weapon:"Axe",rarity:"4"},{cid:"110033_01",name:"Linus",title:"Bantam Hero",element:"Light",weapon:"Axe",rarity:"3"},{cid:"110007_02",name:"Hunter Vanessa",title:"Kirin Amazon",element:"Light",weapon:"Lance",rarity:"5"},{cid:"100002_02",name:"Halloween Elisanne",title:"Vampaladyn",element:"Light",weapon:"Lance",rarity:"5"},{cid:"110275_01",name:"Annelie",title:"The Sugary Star",element:"Light",weapon:"Lance",rarity:"5"},{cid:"110039_01",name:"Ryozen",title:"Dormant Demon",element:"Light",weapon:"Lance",rarity:"4"},{cid:"110034_01",name:"Malka",title:"Golden Armorer",element:"Light",weapon:"Lance",rarity:"3"},{cid:"100004_04",name:"Summer Cleo",title:"Beach Belle",element:"Light",weapon:"Bow",rarity:"5"},{cid:"110303_01",name:"Elias",title:"Divine Voice",element:"Light",weapon:"Bow",rarity:"4"},{cid:"110040_01",name:"Rawn",title:"Wild Hunter",element:"Light",weapon:"Bow",rarity:"4"},{cid:"100006_01",name:"Luca",title:"Woodland Archer",element:"Light",weapon:"Bow",rarity:"4"},{cid:"110036_01",name:"Malora",title:"Alluring Sniper",element:"Light",weapon:"Bow",rarity:"3"},{cid:"110305_01",name:"Lucretia",title:"Songstress of the Century",element:"Light",weapon:"Wand",rarity:"5"},{cid:"110347_01",name:"Chitose",title:"Cuteness Incarnate",element:"Light",weapon:"Wand",rarity:"4"},{cid:"110041_01",name:"Amane",title:"Child of Miracles",element:"Light",weapon:"Wand",rarity:"4"},{cid:"110316_01",name:"Xiao Lei",title:"Boundless Arithmetician",element:"Light",weapon:"Wand",rarity:"3"},{cid:"110043_01",name:"Hildegarde",title:"Devout Oracle",element:"Light",weapon:"Staff",rarity:"5"},{cid:"110277_01",name:"Felicia",title:"Captivating Dancer",element:"Light",weapon:"Staff",rarity:"4"},{cid:"110304_01",name:"Vixel",title:"Musical Maestro",element:"Light",weapon:"Staff",rarity:"4"},{cid:"110047_02",name:"Halloween Althemia",title:"Diametric Vampire",element:"Light",weapon:"Staff",rarity:"4"},{cid:"110063_01",name:"Estelle",title:"Loving Preacher",element:"Light",weapon:"Staff",rarity:"3"},{cid:"110038_01",name:"Hope",title:"Knight at Heart",element:"Light",weapon:"Staff",rarity:"3"},{cid:"100005_02",name:"Gala Alex",title:"Liberated Assassin",element:"Shadow",weapon:"Sword",rarity:"5"},{cid:"110325_01",name:"Yaten",title:"Wandering Festival Planner",element:"Shadow",weapon:"Sword",rarity:"5"},{cid:"110334_01",name:"Audric",title:"Atoning King",element:"Shadow",weapon:"Sword",rarity:"4"},{cid:"110050_01",name:"Berserker",title:"Frenzied Warrior",element:"Shadow",weapon:"Sword",rarity:"4"},{cid:"110046_01",name:"Rodrigo",title:"Sincere Giver",element:"Shadow",weapon:"Sword",rarity:"3"},{cid:"110326_01",name:"Natalie",title:"Devoted Festival Prot&#x00e9g&#x00e9",element:"Shadow",weapon:"Blade",rarity:"5"},{cid:"110313_01",name:"Ieyasu",title:"Leader of the Boar Clan",element:"Shadow",weapon:"Blade",rarity:"5"},{cid:"110262_01",name:"Aldred",title:"Wyrmbound Warrior",element:"Shadow",weapon:"Blade",rarity:"4"},{cid:"110343_01",name:"Durant",title:"Blood-Covered Mad Dog",element:"Shadow",weapon:"Blade",rarity:"4"},{cid:"110044_01",name:"Taro",title:"Greenhorn Samurai",element:"Shadow",weapon:"Blade",rarity:"3"},{cid:"110306_01",name:"Bellina",title:"Renegade Spitfire",element:"Shadow",weapon:"Dagger",rarity:"5"},{cid:"110336_01",name:"Delphi",title:"Tutelary Successor",element:"Shadow",weapon:"Dagger",rarity:"5"},{cid:"100005_01",name:"Alex",title:"Shadow Assassin",element:"Shadow",weapon:"Dagger",rarity:"4"},{cid:"110052_01",name:"Orion",title:"Maiden Protector",element:"Shadow",weapon:"Dagger",rarity:"4"},{cid:"110067_01",name:"Vida",title:"Knife Fanatic",element:"Shadow",weapon:"Dagger",rarity:"3"},{cid:"110048_01",name:"Vice",title:"Eager Assassin",element:"Shadow",weapon:"Dagger",rarity:"3"},{cid:"110281_01",name:"Curran",title:"Dogged Inquisitor",element:"Shadow",weapon:"Axe",rarity:"5"},{cid:"110311_01",name:"Sazanka",title:"Cultured Flower",element:"Shadow",weapon:"Axe",rarity:"4"},{cid:"110045_01",name:"Erik",title:"Feral Noble",element:"Shadow",weapon:"Axe",rarity:"3"},{cid:"110349_01",name:"Lathna",title:"Chaos Child",element:"Shadow",weapon:"Lance",rarity:"5"},{cid:"110335_01",name:"Patia",title:"Spirited Swallow",element:"Shadow",weapon:"Lance",rarity:"4"},{cid:"110312_01",name:"Botan",title:"Naginata Cutie",element:"Shadow",weapon:"Lance",rarity:"4"},{cid:"110254_01",name:"Zace",title:"Bone Collector",element:"Shadow",weapon:"Lance",rarity:"3"},{cid:"110310_02",name:"Valentine's Addis",title:"Devoted Samurai",element:"Shadow",weapon:"Bow",rarity:"5"},{cid:"110053_01",name:"Nefaria",title:"Queen of the Sands",element:"Shadow",weapon:"Bow",rarity:"5"},{cid:"110066_01",name:"Norwin",title:"Anguished Author",element:"Shadow",weapon:"Bow",rarity:"4"},{cid:"110337_01",name:"Cassandra",title:"Sorrowful Royal Magician",element:"Shadow",weapon:"Wand",rarity:"5"},{cid:"100004_10",name:"Gala Cleo",title:"Supreme Sorcerer",element:"Shadow",weapon:"Wand",rarity:"5"},{cid:"110333_01",name:"Veronica",title:"Emblian Princess",element:"Shadow",weapon:"Wand",rarity:"5"},{cid:"110051_01",name:"Kleimann",title:"Mad Scientist",element:"Shadow",weapon:"Wand",rarity:"4"},{cid:"110047_01",name:"Althemia",title:"Timid Researcher",element:"Shadow",weapon:"Wand",rarity:"3"},{cid:"110059_01",name:"Grace",title:"Wistful Widow",element:"Shadow",weapon:"Staff",rarity:"5"},{cid:"110269_02",name:"Summer Verica",title:"Beach Beauty",element:"Shadow",weapon:"Staff",rarity:"5"},{cid:"110280_01",name:"Heinwald",title:"Seeker of Truth",element:"Shadow",weapon:"Staff",rarity:"5"},{cid:"100004_01",name:"Cleo",title:"Belle Healer",element:"Shadow",weapon:"Staff",rarity:"4"},{cid:"110049_01",name:"Edward",title:"Perfect Butler",element:"Shadow",weapon:"Staff",rarity:"3"},{cid:"110358_01",name:"Sharena",title:"Princess of Askr",element:"Light",weapon:"Lance",rarity:"5"},{cid:"110361_01",name:"Peony",title:"Sweet Dream",element:"Light",weapon:"Wand",rarity:"5"},{cid:"110359_01",name:"Chrom",title:"Prince of Ylisse",element:"Flame",weapon:"Sword",rarity:"5"},{cid:"110360_01",name:"Tiki",title:"Dragon Scion",element:"Water",weapon:"Dagger",rarity:"5"},{cid:"110272_01",name:"Forte",title:"Lord of the Skies",element:"Shadow",weapon:"Lance",rarity:"5"},{cid:"110362_01",name:"Yurius",title:"Ravenous Researcher",element:"Water",weapon:"Wand",rarity:"5"},{cid:"100018_02",name:"Gala Leif",title:"White Sparrow",element:"Wind",weapon:"Sword",rarity:"5"},{cid:"110324_01",name:"Wu Kong",title:"Rookie Sealer",element:"Light",weapon:"Dagger",rarity:"5"},{cid:"110299_02",name:"Radiant Xuan Zang",title:"Radiant Sealer",element:"Light",weapon:"Wand",rarity:"5"},{cid:"110322_01",name:"Zhu Bajie",title:"Indebted General",element:"Light",weapon:"Axe",rarity:"5"},{cid:"110323_01",name:"Sha Wujing",title:"Deadly Tactician",element:"Light",weapon:"Lance",rarity:"4"},{cid:"110357_01",name:"Nadine",title:"Selfie Addict",element:"Flame",weapon:"Lance",rarity:"5"},{cid:"110271_01",name:"Linnea",title:"Taciturn Warrior",element:"Shadow",weapon:"Blade",rarity:"5"},{cid:"100009_07",name:"Zena",title:"Otherworld Auspex",element:"Shadow",weapon:"Wand",rarity:"5"},{cid:"110010_02",name:"Summer Mikoto",title:"Wave-Riding Archer",element:"Light",weapon:"Bow",rarity:"5"},{cid:"110335_02",name:"Summer Patia",title:"Seaside Sparrow",element:"Shadow",weapon:"Axe",rarity:"5"},{cid:"110281_02",name:"Yukata Curran",title:"Festival Inquisitor",element:"Light",weapon:"Dagger",rarity:5},{cid:"110337_03",name:"Yukata Cassandra",title:"Summer Sorceress",element:"Flame",weapon:"Staff",rarity:5},{cid:"110365_01",name:"Nevin",title:"The Wing of Revelation",element:"Shadow",weapon:"Dagger",rarity:5},{cid:"110366_01",name:"Pinon",title:"The Wing of Purity",element:"Water",weapon:"Bow",rarity:5}];var pe=function(e){var a=e.toggleControlOpen,t=J(w),i=Object(c.a)(t,3),o=i[0],l=i[1],m=i[2],d=Object(n.useMemo)((function(){return function(e){var a={};return Object.keys(e).forEach((function(t){var n=[];Object.keys(e[t]).forEach((function(a){e[t][a]&&n.push(a)})),a[t]=n})),a}(o)}),[o]),s=Object(n.useMemo)((function(){return function(e,a){var t=Object.keys(a);return e.filter((function(e){return t.every((function(t){return!a[t].length||a[t].includes(e[t])}))}))}(ue,d)}),[d]),u=Object(n.useContext)(C);return r.a.createElement(r.a.Fragment,null,r.a.createElement(ae,null,r.a.createElement(te,{onClose:a},"Select a Character"),r.a.createElement(oe,{groupState:o,handleToggle:function(e){e.persist();var a=e.currentTarget.dataset,t=a.group,n=a.name;l(t,n)},resetFilters:function(){m(!1)}})),r.a.createElement(ne,{dividers:!0},r.a.createElement(se,{list:s,handleSelect:function(e){e.persist();var t=e.currentTarget.dataset.value;u({type:"update",key:"model",value:{id:t,texture:t}}),a()}})))};var we=function(e){var a=e.toggleControlOpen,t=Object(n.useContext)(C),i=function(e){e.persist();var n=e.currentTarget.dataset.value;t({type:"update",key:"animation",value:{name:n}}),a()},o=Object.keys(z).map((function(e){return r.a.createElement(I.a,{variant:"contained",key:e,"data-value":e,onClick:i},e)}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(ae,null,r.a.createElement(te,{onClose:a},"Select an Animation")),r.a.createElement(ne,{dividers:!0},r.a.createElement("div",null,o)))};var ge=function(e){var a=e.toggleControlOpen,t=Object(n.useContext)(C);return r.a.createElement(r.a.Fragment,null,r.a.createElement(ae,null,r.a.createElement(te,{onClose:a},"Background Settings")),r.a.createElement(ne,{dividers:!0},r.a.createElement(I.a,{onClick:function(){t({type:"update",key:"scene",value:{background:65280}}),a()},variant:"outlined",color:"primary"},"Green Screen")))};var he=function(e){var a,t=e.open,n=e.mode,i=e.toggleControlOpen;switch(n){case"model":case"texture":a=r.a.createElement(pe,{mode:n,toggleControlOpen:i});break;case"animation":a=r.a.createElement(we,{toggleControlOpen:i});break;case"background":a=r.a.createElement(ge,{toggleControlOpen:i});break;default:a=null}return r.a.createElement(K.a,{fullWidth:!0,maxWidth:"lg",onClose:i,"aria-labelledby":"customized-dialog-title",open:t,scroll:"paper"},a)};var ye=function(e){var a=W(),t=Object(n.useState)("model"),i=Object(c.a)(t,2),o=i[0],l=i[1],p=m(!0),w=Object(c.a)(p,2),g=w[0],h=w[1],y=m(!1),f=Object(c.a)(y,2),_=f[0],S=f[1],b=Object(n.useRef)(),v=Object(n.useState)({width:500,height:500}),x=Object(c.a)(v,2),L=x[0],k=x[1];Object(n.useEffect)((function(){return B(),window.addEventListener("resize",B),function(){window.removeEventListener("resize",B)}}),[]);var B=function(){var e=b.current.clientHeight,a=b.current.clientWidth;k({width:a,height:e-5})};return r.a.createElement(A,null,r.a.createElement("div",{className:a.root},r.a.createElement(u.a,null),r.a.createElement(he,{mode:o,open:_,toggleControlOpen:S}),r.a.createElement("button",{onClick:h,className:a.openDrawerButton},"Settings"),r.a.createElement(s.a,{className:a.drawer,variant:"persistent",anchor:"left",open:g,classes:{paper:a.drawerPaper}},r.a.createElement("div",{className:a.drawerHeader},r.a.createElement("span",null,"Settings")),r.a.createElement("div",{className:a.closeDrawerButton,onClick:h},"<"),r.a.createElement(d.a,null),r.a.createElement(V,{openControl:function(e){S(),l(e)}})),r.a.createElement("main",{ref:b,className:a.content},r.a.createElement(G,{viewport:L}))))};t(85);var fe="/dl-model",_e=function(){return r.a.createElement(l.d,null,r.a.createElement(l.b,{render:function(e){return r.a.createElement(ye,e)}}),r.a.createElement(l.a,{to:"/"}))},Se=t(40);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Se.a,null,r.a.createElement(_e,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[68,1,2]]]);
//# sourceMappingURL=main.ce40576c.chunk.js.map