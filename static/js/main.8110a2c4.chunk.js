(this["webpackJsonpbee-blues"]=this["webpackJsonpbee-blues"]||[]).push([[0],{114:function(e,t,a){},16:function(e){e.exports=JSON.parse('{"a":"bee-blues","b":"0.12.9"}')},249:function(e,t,a){"use strict";a.r(t);var n=a(51),r=a(89),c=a.n(r),l=a(0),o=a.n(l),i=a(90),u=a.n(i),s=a(16),m=(a(114),a(7)),f=a(91),p=a(92),b="active",d="asc",g="Author",E="desc",v="Examples",_="FITB",h="FITBs",O="ID",A="Name",P="Prompts",x="Status",y="Tags";var k=function(e){var t=e.get(v)?JSON.parse(e.get(v)):void 0,a=e.get(P)?JSON.parse(e.get(P)):void 0;return{author:e.get(g),examples:t,id:e.id,prompts:a,source:e.get(_),tags:e.get(y)}},N=a(93),j=a.n(N),w=Object({NODE_ENV:"production",PUBLIC_URL:"/bee-blues",REACT_APP_AIRTABLE_API_KEY:"keybZUBuHX3GWW9EQ",REACT_APP_AIRTABLE_APP_ID:"apphnkOs93OSLlbQ2",REACT_APP_AMPLITUDE_KEY:"b010096b3fd732578935eb8bfd7b1082"}),C=w.REACT_APP_AIRTABLE_API_KEY,I=w.REACT_APP_AIRTABLE_APP_ID;var T=function(e){var t,a=e.callback,n=e.map,r=e.options,c=e.tableName;new j.a({apiKey:C}).base(I)(c).select(r).eachPage((function(e,a){t=e.map(n),a()}),(function(e){a(e,t)}))};var L=function(e){T({callback:e,map:k,options:{filterByFormula:"".concat(x,'="').concat(b,'"'),sort:[{field:O,direction:E}]},tableName:h})};var R=function(e){var t="\xe0\xe1\xe2\xe4\xe6\xe3\xe5\u0101\u0103\u0105\xe7\u0107\u010d\u0111\u010f\xe8\xe9\xea\xeb\u0113\u0117\u0119\u011b\u011f\u01f5\u1e27\xee\xef\xed\u012b\u012f\xec\u0142\u1e3f\xf1\u0144\u01f9\u0148\xf4\xf6\xf2\xf3\u0153\xf8\u014d\xf5\u0151\u1e55\u0155\u0159\xdf\u015b\u0161\u015f\u0219\u0165\u021b\xfb\xfc\xf9\xfa\u016b\u01d8\u016f\u0171\u0173\u1e83\u1e8d\xff\xfd\u017e\u017a\u017c\xb7/_,:;",a=new RegExp(t.split("").join("|"),"g");return e.toString().toLowerCase().replace(/\s+/g,"-").replace(a,(function(e){return"aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------".charAt(t.indexOf(e))})).replace(/&/g,"-and-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")};var B=function(e){var t=e.get(A);return{fitbs:e.get(h),id:e.id,name:t,slug:R(t)}};var S=function(e){T({callback:e,map:B,options:{sort:[{field:A,direction:d}]},tableName:y})},D="all",K={name:D,slug:D},U=a(13),W=a(30),J=a(12),Y=a.n(J);function F(e){var t=e.counter,a=e.filter,n=e.onClick,r=e.tag;return o.a.createElement("li",{className:"mx-1 my-1"},o.a.createElement(W.b,{to:r.slug},o.a.createElement("button",{className:Y()("focus:outline-none hover:bg-blue-700 px-4 rounded-full text-white",{"bg-blue-500":r.name!==a.name,"bg-blue-900":r.name===a.name}),"data-testid":r.name,onClick:function(){return n(r)},type:"button"},"".concat(r.name," (").concat(t,")"))))}var z=function(e){var t=e.filter,a=e.fitbs,n=e.onClick,r=e.tags,c=a.reduce((function(e,t){return t.tags.forEach((function(t){e[t]?e[t]+=1:e[t]=1})),e}),{});return o.a.createElement("ul",{className:"flex flex-wrap"},o.a.createElement(F,{counter:a.length,filter:t,onClick:n,tag:K}),r.map((function(e){return o.a.createElement(F,{counter:c[e.id],filter:t,key:e.id,onClick:n,tag:e})})))};var M=function(e){var t=e.filter,a=e.fitbs,n=e.onClick,r=e.tags;function c(){var e=Object(U.f)().id,c=r.find((function(t){return t.slug===e}));return c&&t!==c&&n(c),o.a.createElement(z,{filter:t,fitbs:a,onClick:n,tags:r})}return o.a.createElement(W.a,null,o.a.createElement(U.c,null,o.a.createElement(U.a,{path:"/:id",children:o.a.createElement(c,null)}),o.a.createElement(U.a,{path:"/",children:o.a.createElement(c,null)})))},Q={off:"off",on:"on"};var V=function(e){var t=e.id,a=e.onChange,n=e.value;return o.a.createElement("span",{className:"inline-block ml-3 relative"},o.a.createElement("input",{checked:n===Q.on,className:"hidden","data-testid":t,id:t,onChange:function(){return a(n)},type:"checkbox"}),o.a.createElement("label",{className:"cursor-pointer",htmlFor:t},o.a.createElement("div",{className:"w-6 h-3 bg-gray-400 rounded-full shadow-inner"}),o.a.createElement("div",{className:Y()("toggle__dot absolute w-4 h-4 bg-gray-300 rounded-full shadow inset-y-0 left-0",{"toggle__dot--checked":n===Q.on})})))},G="________________",H="__BLANK__",X={blanks:"blanks",examples:"examples",input:"input",prompts:"prompts"},Z=a(96),$=a.n(Z),q=a(97);function ee(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var te="change";var ae=function(e,t){switch(t.type){case te:var a=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ee(a,!0).forEach((function(t){Object(q.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ee(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e);return a[t.value.id]=t.value.value,a;default:return e}};var ne=function(e){var t=e.dispatch,a=e.hint,n=e.id,r=e.value;return o.a.createElement("span",{className:"inline-flex flex-col leading-none"},o.a.createElement($.a,{"data-testid":"input",inputClassName:Y()({"bg-purple-100":r.length>0}),onChange:function(e){var a=e.target.value;t({type:te,value:{id:n,value:a}})},placeholder:G,placeholderIsMinWidth:!0,value:r}),a!==G&&o.a.createElement("label",{className:"self-center text-sm"},a))};var re=function(e){return e.match(/__BLANK__/g).reduce((function(e,t,a){return e[a]="",e}),{})};var ce=function(e){var t=e.fitb,a=e.mode,n=Object(l.useReducer)(ae,re(t.source)),r=Object(m.a)(n,2),c=r[0],i=r[1],u=function(e,t){var a=t.examples,n=t.prompts,r=[],c=t.source.match(/__BLANK__/g).map((function(){return G}));switch(e){case X.blanks:default:r=c;break;case X.examples:r=a;break;case X.input:r=n||c;break;case X.prompts:r=n}return r}(a,t);return function(e){var t=e.dispatch,a=e.mode,n=e.source,r=e.state,c=e.values,l=n.slice().split(H),i=[];return l.forEach((function(e,n){if(i.push(e),c[n]){var l;if(a===X.input){var u=c[n];l=o.a.createElement(ne,{dispatch:t,hint:u,id:n,key:n,value:r[n]})}else l=o.a.createElement("span",{className:Y()({"bg-yellow-200":a===X.blanks,"bg-green-200":a===X.examples,"bg-blue-200":a===X.prompts}),key:n},c[n]);i.push(l)}})),i}({dispatch:i,mode:a,source:t.source,state:c,values:u})};var le=function(e){var t=e.fitb,a=Object(l.useState)(X.input),n=Object(m.a)(a,2),r=n[0],c=n[1];return o.a.createElement("div",{className:"leading-loose text-lg my-5"},o.a.createElement(ce,{mode:r,fitb:t}),t.examples&&o.a.createElement(V,{id:t.id,onChange:function(e){e===Q.off&&c(X.examples),e===Q.on&&c(X.input)},value:r===X.examples?Q.on:Q.off}),o.a.createElement("hr",{className:"mt-3"}))};var oe=function(){var e=Object(l.useState)(),t=Object(m.a)(e,2),a=t[0],n=t[1],r=Object(l.useState)(K),c=Object(m.a)(r,2),i=c[0],u=c[1],b=Object(l.useState)([]),d=Object(m.a)(b,2),g=d[0],E=d[1],v=Object(l.useState)([]),_=Object(m.a)(v,2),h=_[0],O=_[1],A=Object(l.useState)(!0),P=Object(m.a)(A,2),x=P[0],y=P[1];return Object(l.useEffect)((function(){L((function(e,t){e?n(e):E(t)}))}),[]),Object(l.useEffect)((function(){S((function(e,t){e?n(e):O(t)}))}),[]),Object(l.useEffect)((function(){a&&y(!1),g.length>0&&h.length>0&&y(!1)}),[a,g.length,h.length]),o.a.createElement("div",{className:"flex flex-col font-serif items-center max-w-4xl mx-16 sm:mx-32 md:mx-32 lg:mx-32 xl:mx-auto"},o.a.createElement("h1",{className:"capitalize font-normal font-bold text-4xl text-gray-900"},s.a),x?o.a.createElement(p.a,{className:"text-4xl",icon:f.a,spin:!0}):a?o.a.createElement("pre",null,JSON.stringify(a,0,2)):o.a.createElement(o.a.Fragment,null,o.a.createElement(M,{filter:i,fitbs:g,onClick:function(e){return u(e)},tags:h}),o.a.createElement("ul",null,g.filter((function(e){return i.name===D?e:i.fitbs.includes(e.id)?e:null})).map((function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(le,{fitb:e}))})))),o.a.createElement("small",{className:"font-normal text-gray-700 text-sm"},"v",s.b))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ie=Object({NODE_ENV:"production",PUBLIC_URL:"/bee-blues",REACT_APP_AIRTABLE_API_KEY:"keybZUBuHX3GWW9EQ",REACT_APP_AIRTABLE_APP_ID:"apphnkOs93OSLlbQ2",REACT_APP_AMPLITUDE_KEY:"b010096b3fd732578935eb8bfd7b1082"}),ue=ie.NODE_ENV,se=ie.REACT_APP_AMPLITUDE_KEY;u.a.render(o.a.createElement(n.AmplitudeProvider,{amplitudeInstance:c.a.getInstance(),apiKey:se},o.a.createElement(n.Amplitude,null,(function(e){return(0,e.logEvent)("hello ".concat(s.a," v").concat(s.b," ").concat(ue)),o.a.createElement(oe,null)}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},98:function(e,t,a){e.exports=a(249)}},[[98,1,2]]]);
//# sourceMappingURL=main.8110a2c4.chunk.js.map