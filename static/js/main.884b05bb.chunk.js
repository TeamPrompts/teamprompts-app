(this["webpackJsonpteamprompts-app"]=this["webpackJsonpteamprompts-app"]||[]).push([[0],{102:function(e,t,a){e.exports=a(255)},118:function(e,t,a){},21:function(e){e.exports=JSON.parse('{"a":"teamprompts-app","b":"0.14.0"}')},255:function(e,t,a){"use strict";a.r(t);var n=a(54),r=a(92),c=a.n(r),l=a(0),o=a.n(l),i=a(93),u=a.n(i),s=a(21),m=(a(118),a(6)),p=a(94),f=a(95),b="active",d="asc",g="Author",E="desc",v="Examples",h="FITB",_="FITBs",O="ID",x="Name",A="Prompts",P="Status",y="Tags";var k=function(e){var t=e.get(v)?JSON.parse(e.get(v)):void 0,a=e.get(A)?JSON.parse(e.get(A)):void 0;return{author:e.get(g),examples:t,id:e.id,prompts:a,source:e.get(h),tags:e.get(y)}},j=a(96),N=a.n(j),C=Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_AIRTABLE_API_KEY:"keybZUBuHX3GWW9EQ",REACT_APP_AIRTABLE_APP_ID:"apphnkOs93OSLlbQ2",REACT_APP_AMPLITUDE_KEY:"b010096b3fd732578935eb8bfd7b1082"}),w=C.REACT_APP_AIRTABLE_API_KEY,I=C.REACT_APP_AIRTABLE_APP_ID;var T=function(e){var t,a=e.callback,n=e.map,r=e.options,c=e.tableName;new N.a({apiKey:w}).base(I)(c).select(r).eachPage((function(e,a){t=e.map(n),a()}),(function(e){a(e,t)}))};var L=function(e){T({callback:e,map:k,options:{filterByFormula:"".concat(P,'="').concat(b,'"'),sort:[{field:O,direction:E}]},tableName:_})};var R=function(e){var t="\xe0\xe1\xe2\xe4\xe6\xe3\xe5\u0101\u0103\u0105\xe7\u0107\u010d\u0111\u010f\xe8\xe9\xea\xeb\u0113\u0117\u0119\u011b\u011f\u01f5\u1e27\xee\xef\xed\u012b\u012f\xec\u0142\u1e3f\xf1\u0144\u01f9\u0148\xf4\xf6\xf2\xf3\u0153\xf8\u014d\xf5\u0151\u1e55\u0155\u0159\xdf\u015b\u0161\u015f\u0219\u0165\u021b\xfb\xfc\xf9\xfa\u016b\u01d8\u016f\u0171\u0173\u1e83\u1e8d\xff\xfd\u017e\u017a\u017c\xb7/_,:;",a=new RegExp(t.split("").join("|"),"g");return e.toString().toLowerCase().replace(/\s+/g,"-").replace(a,(function(e){return"aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------".charAt(t.indexOf(e))})).replace(/&/g,"-and-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")};var B=function(e){var t=e.get(x);return{fitbs:e.get(_),id:e.id,name:t,slug:R(t)}};var S=function(e){T({callback:e,map:B,options:{sort:[{field:x,direction:d}]},tableName:y})},D="all",K={name:D,slug:D},U=a(15),W=a(33),J=a(14),Y=a.n(J);function F(e){var t=e.counter,a=e.filter,n=e.onClick,r=e.tag;return o.a.createElement("li",{className:"mx-1 my-1"},o.a.createElement(W.b,{to:r.slug},o.a.createElement("button",{className:Y()("focus:outline-none hover:bg-blue-700 px-4 rounded-full text-white",{"bg-blue-500":r.name!==a.name,"bg-blue-900":r.name===a.name}),"data-testid":r.name,onClick:function(){return n(r)},type:"button"},"".concat(r.name," (").concat(t,")"))))}var M=function(e){var t=e.filter,a=e.fitbs,n=e.onClick,r=e.tags,c=a.reduce((function(e,t){return t.tags.forEach((function(t){e[t]?e[t]+=1:e[t]=1})),e}),{});return o.a.createElement("ul",{className:"flex flex-wrap mb-4"},o.a.createElement(F,{counter:a.length,filter:t,onClick:n,tag:K}),r.map((function(e){return o.a.createElement(F,{counter:c[e.id],filter:t,key:e.id,onClick:n,tag:e})})))};var Q=function(e){var t=e.filter,a=e.fitbs,n=e.onClick,r=e.tags;function c(){var e=Object(U.f)().id,c=r.find((function(t){return t.slug===e}));return c&&t!==c&&n(c),o.a.createElement(M,{filter:t,fitbs:a,onClick:n,tags:r})}return o.a.createElement(W.a,null,o.a.createElement(U.c,null,o.a.createElement(U.a,{path:"/:id",children:o.a.createElement(c,null)}),o.a.createElement(U.a,{path:"/",children:o.a.createElement(c,null)})))},z=a(99),V={off:"off",on:"on"};var G=function(e){var t=e.id,a=e.onChange,n=e.value;return o.a.createElement("span",{className:"inline-block ml-3 relative"},o.a.createElement("input",{checked:n===V.on,className:"hidden","data-testid":t,id:t,onChange:function(){return a(n)},type:"checkbox"}),o.a.createElement("label",{className:"cursor-pointer",htmlFor:t},o.a.createElement("div",{className:"w-6 h-3 bg-gray-400 rounded-full shadow-inner"}),o.a.createElement("div",{className:Y()("toggle__dot absolute w-4 h-4 bg-gray-300 rounded-full shadow inset-y-0 left-0",{"toggle__dot--checked":n===V.on})})))},H="________________",X="__BLANK__",Z={blanks:"blanks",examples:"examples",input:"input",prompts:"prompts"},$=a(100),q=a.n($),ee=a(101);function te(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var ae="change";var ne=function(e,t){switch(t.type){case ae:var a=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?te(Object(a),!0).forEach((function(t){Object(ee.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):te(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e);return a[t.value.id]=t.value.value,a;default:return e}};var re=function(e){var t=e.dispatch,a=e.hint,n=e.id,r=e.value;return o.a.createElement("span",{className:"inline-flex flex-col leading-none"},o.a.createElement(q.a,{"data-testid":"input",inputClassName:Y()({"bg-purple-100":r.length>0}),onChange:function(e){var a=e.target.value;t({type:ae,value:{id:n,value:a}})},placeholder:H,placeholderIsMinWidth:!0,value:r}),a!==H&&o.a.createElement("label",{className:"self-center text-sm"},a))};var ce=function(e){return e.match(/__BLANK__/g).reduce((function(e,t,a){return e[a]="",e}),{})};function le(e,t){var a=t.examples,n=t.prompts,r=[],c=t.source.match(/__BLANK__/g).map((function(){return H}));switch(e){case Z.blanks:default:r=c;break;case Z.examples:r=a;break;case Z.input:r=n||c;break;case Z.prompts:r=n}return r}var oe=function(e){var t=e.callback,a=e.fitb,n=e.mode,r=Object(l.useReducer)((function(e,a){var n=ne(e,a);return t(n),n}),ce(a.source)),c=Object(m.a)(r,2),i=c[0],u=c[1],s=le(n,a);return function(e){var t=e.dispatch,a=e.mode,n=e.source,r=e.state,c=e.values,l=n.slice().split(X),i=[];return l.forEach((function(e,n){if(i.push(e),c[n]){var l;if(a===Z.input){var u=c[n];l=o.a.createElement(re,{dispatch:t,hint:u,id:n,key:n,value:r[n]})}else l=o.a.createElement("span",{className:Y()({"bg-yellow-200":a===Z.blanks,"bg-green-200":a===Z.examples,"bg-blue-200":a===Z.prompts}),key:n},c[n]);i.push(l)}})),i}({dispatch:u,mode:n,source:a.source,state:i,values:s})};var ie=function(e){var t=e.fitb,a=e.inputs,n=e.mode,r=e.onClick;return o.a.createElement("button",{className:"bg-blue-500 focus:outline-none font-bold font-mono hover:bg-blue-700 ml-3 px-4 rounded-full text-sm text-white","data-testid":"copy-button",onClick:function(){var e=t.examples,c=t.source,l=[],o=c.slice().split(X),i=le(n,t);o.forEach((function(t,r){l.push(t),i[r]&&(n===Z.input&&(a&&a[r]?l.push(a[r]):l.push(H)),n===Z.examples&&l.push(e[r]))})),r(l.join(""))},type:"button"},"Ctrl+C")};var ue=function(e){var t=e.fitb,a=Object(z.useClipboard)(),n=Object(l.useState)(),r=Object(m.a)(n,2),c=r[0],i=r[1],u=Object(l.useState)(Z.input),s=Object(m.a)(u,2),p=s[0],f=s[1];return o.a.createElement("div",{className:"border-b border-gray-500 leading-loose py-8 text-lg"},o.a.createElement(oe,{callback:i,fitb:t,mode:p}),t.examples&&o.a.createElement(G,{id:t.id,onChange:function(e){e===V.off&&f(Z.examples),e===V.on&&f(Z.input)},value:p===Z.examples?V.on:V.off}),o.a.createElement(ie,{fitb:t,inputs:c,mode:p,onClick:function(e){console.log(e),a.copy(e)}}))};var se=function(){var e=Object(l.useState)(),t=Object(m.a)(e,2),a=t[0],n=t[1],r=Object(l.useState)(K),c=Object(m.a)(r,2),i=c[0],u=c[1],b=Object(l.useState)([]),d=Object(m.a)(b,2),g=d[0],E=d[1],v=Object(l.useState)([]),h=Object(m.a)(v,2),_=h[0],O=h[1],x=Object(l.useState)(!0),A=Object(m.a)(x,2),P=A[0],y=A[1];return Object(l.useEffect)((function(){L((function(e,t){e?n(e):E(t)}))}),[]),Object(l.useEffect)((function(){S((function(e,t){e?n(e):O(t)}))}),[]),Object(l.useEffect)((function(){a&&y(!1),g.length>0&&_.length>0&&y(!1)}),[a,g.length,_.length]),o.a.createElement("div",{className:"flex flex-col font-serif items-center max-w-4xl mx-16 sm:mx-32 md:mx-32 lg:mx-32 xl:mx-auto"},o.a.createElement("h1",{className:"font-bold my-8 text-4xl text-gray-900"},"TeamPrompts"),P?o.a.createElement(f.a,{className:"text-4xl",icon:p.a,spin:!0}):a?o.a.createElement("pre",null,JSON.stringify(a,0,2)):o.a.createElement(o.a.Fragment,null,o.a.createElement(Q,{filter:i,fitbs:g,onClick:function(e){return u(e)},tags:_}),o.a.createElement("ul",null,g.filter((function(e){return i.name===D?e:i.fitbs.includes(e.id)?e:null})).map((function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(ue,{fitb:e}))})))),o.a.createElement("small",{className:"font-normal my-8 text-gray-700 text-sm"},"v",s.b))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var me=Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_AIRTABLE_API_KEY:"keybZUBuHX3GWW9EQ",REACT_APP_AIRTABLE_APP_ID:"apphnkOs93OSLlbQ2",REACT_APP_AMPLITUDE_KEY:"b010096b3fd732578935eb8bfd7b1082"}),pe=me.NODE_ENV,fe=me.REACT_APP_AMPLITUDE_KEY;u.a.render(o.a.createElement(n.AmplitudeProvider,{amplitudeInstance:c.a.getInstance(),apiKey:fe},o.a.createElement(n.Amplitude,null,(function(e){return(0,e.logEvent)("hello ".concat(s.a," v").concat(s.b," ").concat(pe)),o.a.createElement(se,null)}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[102,1,2]]]);
//# sourceMappingURL=main.884b05bb.chunk.js.map