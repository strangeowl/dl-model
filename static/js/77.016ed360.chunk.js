(this["webpackJsonpdl-model"]=this["webpackJsonpdl-model"]||[]).push([[77],{495:function(n,t,e){"use strict";e.r(t),e.d(t,"USDZExporter",(function(){return u}));var a=e(8),o=e.n(a),r=e(13),c=e(0),i=e(2),s=e(67),u=function(){function n(){Object(c.a)(this,n)}return Object(i.a)(n,[{key:"parse",value:function(){var n=Object(r.a)(o.a.mark((function n(t){var e,a,r,c,i,u,d,h,g,M,x,_;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:"model.usda",(e={})["model.usda"]=null,a='#usda 1.0\n(\n    customLayerData = {\n        string creator = "Three.js USDZExporter"\n    }\n    metersPerUnit = 1\n    upAxis = "Y"\n)\n\n',r={},c={},t.traverseVisible((function(n){if(n.isMesh&&n.material.isMeshStandardMaterial){var t=n.geometry,o=n.material,c="geometries/Geometry_"+t.id+".usd";if(!(c in e)){var i=m(t);e[c]=f(i)}o.uuid in r||(r[o.uuid]=o),a+=p(n,t,o)}})),a+=v(r,c),e["model.usda"]=s.strToU8(a),a=null,i=o.a.mark((function n(t){var a,r,i,s,u;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=c[t],r=t.split("_")[1],i=1023===a.format,s=l(a.image,r),n.next=6,new Promise((function(n){return s.toBlob(n,i?"image/png":"image/jpeg",1)}));case 6:return u=n.sent,n.t0=Uint8Array,n.next=10,u.arrayBuffer();case 10:n.t1=n.sent,e["textures/Texture_".concat(t,".").concat(i?"png":"jpg")]=new n.t0(n.t1);case 12:case"end":return n.stop()}}),n)})),n.t0=o.a.keys(c);case 12:if((n.t1=n.t0()).done){n.next=17;break}return u=n.t1.value,n.delegateYield(i(u),"t2",15);case 15:n.next=12;break;case 17:for(h in d=0,e)g=e[h],M=34+h.length,4!==(x=63&(d+=M))&&(_=new Uint8Array(64-x),e[h]=[g,{extra:{12345:_}}]),d=g.length;return n.abrupt("return",s.zipSync(e,{level:0}));case 20:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}]),n}();function l(n,t){if("undefined"!==typeof HTMLImageElement&&n instanceof HTMLImageElement||"undefined"!==typeof HTMLCanvasElement&&n instanceof HTMLCanvasElement||"undefined"!==typeof OffscreenCanvas&&n instanceof OffscreenCanvas||"undefined"!==typeof ImageBitmap&&n instanceof ImageBitmap){var e=1024/Math.max(n.width,n.height),a=document.createElement("canvas");a.width=n.width*Math.min(1,e),a.height=n.height*Math.min(1,e);var o=a.getContext("2d");if(o.drawImage(n,0,0,a.width,a.height),void 0!==t){for(var r=parseInt(t,16),c=(r>>16&255)/255,i=(r>>8&255)/255,s=(255&r)/255,u=o.getImageData(0,0,a.width,a.height),l=u.data,f=0;f<l.length;f+=4)l[f+0]=l[f+0]*c,l[f+1]=l[f+1]*i,l[f+2]=l[f+2]*s;o.putImageData(u,0,0)}return a}}function f(n){var t='#usda 1.0\n(\n    customLayerData = {\n        string creator = "Three.js USDZExporter"\n    }\n    metersPerUnit = 1\n    upAxis = "Y"\n)\n\n';return t+=n,s.strToU8(t)}function p(n,t,e){var a="Object_"+n.id,o=function(n){var t=n.elements;return"( ".concat(d(t,0),", ").concat(d(t,4),", ").concat(d(t,8),", ").concat(d(t,12)," )")}(n.matrixWorld);return n.matrixWorld.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",n),'def Xform "'.concat(a,'" (\n    prepend references = @./geometries/Geometry_').concat(t.id,".usd@</Geometry>\n)\n{\n    matrix4d xformOp:transform = ").concat(o,'\n    uniform token[] xformOpOrder = ["xformOp:transform"]\n\n    rel material:binding = </Materials/Material_').concat(e.id,">\n}\n\n")}function d(n,t){return"(".concat(n[t+0],", ").concat(n[t+1],", ").concat(n[t+2],", ").concat(n[t+3],")")}function m(n){var t=function(n){var t="Geometry",e=n.attributes,a=e.position.count;return'\n    def Mesh "'.concat(t,'"\n    {\n        int[] faceVertexCounts = [').concat(function(n){var t=null!==n.index?n.index.array.length:n.attributes.position.count;return Array(t/3).fill(3).join(", ")}(n),"]\n        int[] faceVertexIndices = [").concat(function(n){if(null!==n.index)return n.index.array.join(", ");for(var t=[],e=n.attributes.position.count,a=0;a<e;a++)t.push(a);return t.join(", ")}(n),"]\n        normal3f[] normals = [").concat(h(e.normal,a),'] (\n            interpolation = "vertex"\n        )\n        point3f[] points = [').concat(h(e.position,a),"]\n        float2[] primvars:st = [").concat(function(n,t){if(void 0===n)return console.warn("USDZExporter: UVs missing."),Array(t).fill("(0, 0)").join(", ");for(var e=[],a=n.array,o=0;o<a.length;o+=2)e.push("(".concat(a[o+0].toPrecision(7),", ").concat(1-a[o+1].toPrecision(7),")"));return e.join(", ")}(e.uv,a),'] (\n            interpolation = "vertex"\n        )\n        uniform token subdivisionScheme = "none"\n    }\n')}(n);return'\ndef "Geometry"\n{\n  '.concat(t,"\n}\n")}function h(n,t){if(void 0===n)return console.warn("USDZExporter: Normals missing."),Array(t).fill("(0, 0, 0)").join(", ");for(var e=[],a=n.array,o=0;o<a.length;o+=3)e.push("(".concat(a[o+0].toPrecision(7),", ").concat(a[o+1].toPrecision(7),", ").concat(a[o+2].toPrecision(7),")"));return e.join(", ")}function v(n,t){var e=[];for(var a in n){var o=n[a];e.push(g(o,t))}return'def "Materials"\n{\n'.concat(e.join(""),"\n}\n\n")}function g(n,t){var e="            ",a=[],o=[];function r(e,a,o){var r=e.id+(o?"_"+o.getHexString():""),c=1023===e.format;return t[r]=e,'\n        def Shader "Transform2d_'.concat(a,'" (\n            sdrMetadata = {\n                string role = "math"\n            }\n        )\n        {\n            uniform token info:id = "UsdTransform2d"\n            float2 inputs:in.connect = </Materials/Material_').concat(n.id,"/uvReader_st.outputs:result>\n            float2 inputs:scale = ").concat(x(e.repeat),"\n            float2 inputs:translation = ").concat(x(e.offset),'\n            float2 outputs:result\n        }\n\n        def Shader "Texture_').concat(e.id,"_").concat(a,'"\n        {\n            uniform token info:id = "UsdUVTexture"\n            asset inputs:file = @textures/Texture_').concat(r,".").concat(c?"png":"jpg","@\n            float2 inputs:st.connect = </Materials/Material_").concat(n.id,"/Transform2d_").concat(a,'.outputs:result>\n            token inputs:wrapS = "repeat"\n            token inputs:wrapT = "repeat"\n            float outputs:r\n            float outputs:g\n            float outputs:b\n            float3 outputs:rgb\n        }')}return null!==n.map?(a.push("".concat(e,"color3f inputs:diffuseColor.connect = </Materials/Material_").concat(n.id,"/Texture_").concat(n.map.id,"_diffuse.outputs:rgb>")),o.push(r(n.map,"diffuse",n.color))):a.push("".concat(e,"color3f inputs:diffuseColor = ").concat(M(n.color))),null!==n.emissiveMap?(a.push("".concat(e,"color3f inputs:emissiveColor.connect = </Materials/Material_").concat(n.id,"/Texture_").concat(n.emissiveMap.id,"_emissive.outputs:rgb>")),o.push(r(n.emissiveMap,"emissive"))):n.emissive.getHex()>0&&a.push("".concat(e,"color3f inputs:emissiveColor = ").concat(M(n.emissive))),null!==n.normalMap&&(a.push("".concat(e,"normal3f inputs:normal.connect = </Materials/Material_").concat(n.id,"/Texture_").concat(n.normalMap.id,"_normal.outputs:rgb>")),o.push(r(n.normalMap,"normal"))),null!==n.aoMap&&(a.push("".concat(e,"float inputs:occlusion.connect = </Materials/Material_").concat(n.id,"/Texture_").concat(n.aoMap.id,"_occlusion.outputs:r>")),o.push(r(n.aoMap,"occlusion"))),null!==n.roughnessMap?(a.push("".concat(e,"float inputs:roughness.connect = </Materials/Material_").concat(n.id,"/Texture_").concat(n.roughnessMap.id,"_roughness.outputs:g>")),o.push(r(n.roughnessMap,"roughness"))):a.push("".concat(e,"float inputs:roughness = ").concat(n.roughness)),null!==n.metalnessMap?(a.push("".concat(e,"float inputs:metallic.connect = </Materials/Material_").concat(n.id,"/Texture_").concat(n.metalnessMap.id,"_metallic.outputs:b>")),o.push(r(n.metalnessMap,"metallic"))):a.push("".concat(e,"float inputs:metallic = ").concat(n.metalness)),a.push("".concat(e,"float inputs:opacity = ").concat(n.opacity)),n.isMeshPhysicalMaterial&&(a.push("".concat(e,"float inputs:clearcoat = ").concat(n.clearcoat)),a.push("".concat(e,"float inputs:clearcoatRoughness = ").concat(n.clearcoatRoughness)),a.push("".concat(e,"float inputs:ior = ").concat(n.ior))),'\n    def Material "Material_'.concat(n.id,'"\n    {\n        def Shader "PreviewSurface"\n        {\n            uniform token info:id = "UsdPreviewSurface"\n').concat(a.join("\n"),"\n            int inputs:useSpecularWorkflow = 0\n            token outputs:surface\n        }\n\n        token outputs:surface.connect = </Materials/Material_").concat(n.id,'/PreviewSurface.outputs:surface>\n        token inputs:frame:stPrimvarName = "st"\n\n        def Shader "uvReader_st"\n        {\n            uniform token info:id = "UsdPrimvarReader_float2"\n            token inputs:varname.connect = </Materials/Material_').concat(n.id,".inputs:frame:stPrimvarName>\n            float2 inputs:fallback = (0.0, 0.0)\n            float2 outputs:result\n        }\n\n").concat(o.join("\n"),"\n\n    }\n")}function M(n){return"(".concat(n.r,", ").concat(n.g,", ").concat(n.b,")")}function x(n){return"(".concat(n.x,", ").concat(n.y,")")}}}]);
//# sourceMappingURL=77.016ed360.chunk.js.map