(this["webpackJsonpbee-blues"]=this["webpackJsonpbee-blues"]||[]).push([[0],{223:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(77),c=a.n(l),o=(a(88),a(8)),s=a(78),i=a(79),u=a(45),m={off:"off",on:"on"};var p=function(e){var t=e.id,a=e.onChange,n=e.value;return r.a.createElement("label",{className:"cursor-pointer",htmlFor:t},r.a.createElement("div",{className:"relative"},r.a.createElement("input",{checked:n===m.on,className:"hidden","data-testid":t,id:t,onChange:function(){return a(n)},type:"checkbox"}),r.a.createElement("div",{className:"toggle__line w-6 h-3 bg-gray-400 rounded-full shadow-inner"}),r.a.createElement("div",{className:"toggle__dot absolute w-4 h-4 bg-gray-300 rounded-full shadow inset-y-0 left-0"})))},f="________________",d="__BLANK__",b={blanks:"blanks",examples:"examples",input:"input",prompts:"prompts"},v=a(25),h=a.n(v),_=a(80),g=a.n(_),E=a(81);function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var x="change";var y=function(e,t){switch(t.type){case x:var a=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(a,!0).forEach((function(t){Object(E.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e);return a[t.value.id]=t.value.value,a;default:return e}};var N=function(e){var t=e.dispatch,a=e.hint,n=e.id,l=e.value;return r.a.createElement("span",{className:"inline-flex flex-col leading-none"},r.a.createElement(g.a,{"data-testid":"input",inputClassName:h()({"bg-purple-100":l.length>0}),onChange:function(e){var a=e.target.value;t({type:x,value:{id:n,value:a}})},placeholder:f,placeholderIsMinWidth:!0,value:l}),a!==f&&r.a.createElement("label",{className:"self-center text-sm"},a))};var P=function(e){return e.match(/__BLANK__/g).reduce((function(e,t,a){return e[a]="",e}),{})};var A=function(e){var t=e.mode,a=e.model,l=Object(n.useReducer)(y,P(a.source)),c=Object(o.a)(l,2),s=c[0],i=c[1],u=function(e,t){var a=t.examples,n=t.prompts,r=[],l=t.source.match(/__BLANK__/g).map((function(){return f}));switch(e){case b.blanks:default:r=l;break;case b.examples:r=a;break;case b.input:r=n||l;break;case b.prompts:r=n}return r}(t,a);return function(e){var t=e.dispatch,a=e.mode,n=e.source,l=e.state,c=e.values,o=n.slice().split(d),s=[];return o.forEach((function(e,n){if(s.push(e),c[n]){var o;if(a===b.input){var i=c[n];o=r.a.createElement(N,{dispatch:t,hint:i,id:n,key:n,value:l[n]})}else o=r.a.createElement("span",{className:h()({"bg-yellow-200":a===b.blanks,"bg-green-200":a===b.examples,"bg-blue-200":a===b.prompts}),key:n},c[n]);s.push(o)}})),s}({dispatch:i,mode:t,source:a.source,state:s,values:u})};var w=function(e){var t=e.id,a=e.model,l=Object(n.useState)(b.input),c=Object(o.a)(l,2),s=c[0],i=c[1];return r.a.createElement("div",{className:"leading-loose text-lg my-5"},r.a.createElement(A,{mode:s,model:a}),r.a.createElement("div",{className:"inline-block pl-3"},a.examples&&r.a.createElement(p,{id:t,onChange:function(e){console.log("value:",e),e===m.off&&i(b.examples),e===m.on&&i(b.input)},value:s===b.examples?m.on:m.off})),r.a.createElement("hr",{className:"mt-3"}))},j=a(82),k=a.n(j),B="Author",I="Examples",S="FITB",C="ID",L="Prompts";var R=function(e){var t=e.get(I)?JSON.parse(e.get(I)):void 0,a=e.get(L)?JSON.parse(e.get(L)):void 0;return{author:e.get(B),examples:t,id:e.get(C),prompts:a,source:e.get(S)}},T=Object({NODE_ENV:"production",PUBLIC_URL:"/bee-blues",REACT_APP_AIRTABLE_API_KEY:"keybZUBuHX3GWW9EQ",REACT_APP_AIRTABLE_APP_ID:"apphnkOs93OSLlbQ2"}),D=T.REACT_APP_AIRTABLE_API_KEY,J=T.REACT_APP_AIRTABLE_APP_ID,K="active",W=D,F=J,U="desc",Q="Status",Y="FITBs";var z=function(e){var t;new k.a({apiKey:W}).base(F)(Y).select({filterByFormula:"".concat(Q,'="').concat(K,'"'),sort:[{field:C,direction:U}]}).eachPage((function(e,a){t=e.map(R),a()}),(function(a){e(a,t)}))};var G=function(){var e=Object(n.useState)(),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)([]),m=Object(o.a)(c,2),p=m[0],f=m[1],d=Object(n.useState)(!0),b=Object(o.a)(d,2),v=b[0],h=b[1];return Object(n.useEffect)((function(){z((function(e,t){e?l(e):f(t),h(!1)}))}),[]),r.a.createElement("div",{className:"flex flex-col font-serif items-center max-w-4xl mx-16 sm:mx-32 md:mx-32 lg:mx-32 xl:mx-auto"},r.a.createElement("h1",{className:"capitalize font-normal hover:font-bold text-4xl text-gray-900"},u.a),v?r.a.createElement(i.a,{className:"text-4xl",icon:s.a,spin:!0}):a?r.a.createElement("pre",null,JSON.stringify(a,0,2)):r.a.createElement("ul",null,p.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(w,{id:t,model:e}))}))),r.a.createElement("small",{className:"font-normal hover:font-bold text-gray-700 text-sm"},"v",u.b))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},45:function(e){e.exports=JSON.parse('{"a":"bee-blues","b":"0.9.2"}')},83:function(e,t,a){e.exports=a(223)},88:function(e,t,a){}},[[83,1,2]]]);
//# sourceMappingURL=main.bbbb8be7.chunk.js.map