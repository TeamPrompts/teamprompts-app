(this["webpackJsonpbee-blues"]=this["webpackJsonpbee-blues"]||[]).push([[0],{221:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(77),c=a.n(r),o=(a(86),a(5)),s=a(78),i=a(79),u=a(45),m=a(25),p=a.n(m),b="________________";var f=function(e){var t=e.hint,a=Object(n.useState)(!1),r=Object(o.a)(a,2),c=r[0],s=r[1],i=Object(n.useState)(t.length),u=Object(o.a)(i,2),m=u[0],f=u[1];return l.a.createElement("span",{className:"inline-flex flex-col leading-none"},l.a.createElement("input",{className:p()({"bg-purple-100":c}),"data-testid":"input",onChange:function(e){return a=e.target.value,s(!0),void(a.length>t.length?f(a.length):f(t.length));var a},placeholder:b,size:m,type:"text"}),t!==b&&l.a.createElement("label",{className:"self-center text-sm"},t))},E={blanks:"blanks",examples:"examples",input:"input",prompts:"prompts"},d="__BLANK__";var _=function(e){var t=e.mode,a=e.model,n=function(e,t){var a=t.examples,n=t.prompts,l=[],r=t.source.match(/__BLANK__/g).map((function(){return b}));switch(e){case E.blanks:default:l=r;break;case E.examples:l=a;break;case E.input:l=n||r;break;case E.prompts:l=n}return l}(t,a);return function(e,t,a){var n=t.slice().split(d),r=[];return n.forEach((function(t,n){if(r.push(t),a[n]){var c;if(e===E.input){var o=a[n];c=l.a.createElement(f,{key:n,hint:o})}else c=l.a.createElement("span",{className:p()({"bg-yellow-200":e===E.blanks,"bg-green-200":e===E.examples,"bg-blue-200":e===E.prompts}),key:n},a[n]);r.push(c)}})),r}(t,a.source,n)};var v=function(e){var t=e.id,a=e.mode,n=e.onChange,r=e.value,c="".concat(t,"-").concat(r);return l.a.createElement(l.a.Fragment,null,l.a.createElement("input",{checked:a===r,"data-testid":c,id:c,name:t,onChange:n,type:"radio",value:r}),l.a.createElement("label",{className:"ml-2",htmlFor:c},r))};var h=function(e){var t=e.id,a=e.model,r=Object(n.useState)(E.input),c=Object(o.a)(r,2),s=c[0],i=c[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,l.a.createElement(_,{mode:s,model:a})),l.a.createElement("ul",{className:"p-4"},l.a.createElement("li",null,l.a.createElement(v,{id:t,mode:s,onChange:function(){return i(E.blanks)},value:E.blanks})),a.examples&&l.a.createElement("li",null,l.a.createElement(v,{id:t,mode:s,onChange:function(){return i(E.examples)},value:E.examples})),l.a.createElement("li",null,l.a.createElement(v,{id:t,mode:s,onChange:function(){return i(E.input)},value:E.input})),a.prompts&&l.a.createElement("li",null,l.a.createElement(v,{id:t,mode:s,onChange:function(){return i(E.prompts)},value:E.prompts}))))},g=a(80),x=a.n(g),A=Object({NODE_ENV:"production",PUBLIC_URL:"/bee-blues",REACT_APP_AIRTABLE_API_KEY:"keybZUBuHX3GWW9EQ",REACT_APP_AIRTABLE_APP_ID:"apphnkOs93OSLlbQ2"}),O=A.REACT_APP_AIRTABLE_API_KEY,k=A.REACT_APP_AIRTABLE_APP_ID,N=O,P=k,j="Examples",y="FITB",I="ID",w="Prompts",B="Status",C="FITBs",S={active:"active"};var T=function(e){var t=new x.a({apiKey:N}).base(P),a=[];t(C).select({sort:[{field:I,direction:"desc"}]}).eachPage((function(e,t){e.forEach((function(e){if(e.get(B)===S.active){var t=e.get(j)?JSON.parse(e.get(j)):void 0,n=e.get(w)?JSON.parse(e.get(w)):void 0;a.push({examples:t,prompts:n,source:e.get(y)})}})),t()}),(function(t){e(t,a)}))};var L=function(){var e=Object(n.useState)(),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),m=Object(o.a)(c,2),p=m[0],b=m[1],f=Object(n.useState)(!0),E=Object(o.a)(f,2),d=E[0],_=E[1];return Object(n.useEffect)((function(){T((function(e,t){e?r(e):b(t),_(!1)}))}),[]),l.a.createElement("div",{className:"flex flex-col font-serif items-center mx-auto my-12 w-3/4"},l.a.createElement("h1",{className:"capitalize font-normal hover:font-bold text-4xl text-gray-900"},u.a),d?l.a.createElement(i.a,{className:"text-4xl",icon:s.a,spin:!0}):a?l.a.createElement("pre",null,JSON.stringify(a,0,2)):l.a.createElement("ul",null,p.map((function(e,t){return l.a.createElement("li",{key:t},l.a.createElement(h,{id:t,model:e}))}))),l.a.createElement("small",{className:"font-normal hover:font-bold text-gray-700 text-sm"},"v",u.b))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},45:function(e){e.exports=JSON.parse('{"a":"bee-blues","b":"0.6.1"}')},81:function(e,t,a){e.exports=a(221)},86:function(e,t,a){}},[[81,1,2]]]);
//# sourceMappingURL=main.24566637.chunk.js.map