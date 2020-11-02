(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{121:function(n,e,t){"use strict";t.r(e);var r=t(2),c=t(1),a=t.n(c),i=t(58),o=t.n(i),u=(t(72),t(3)),l=t(12),s=t(65),d=t(5),j=t(4);function f(){var n=Object(u.a)(["\n        @media (max-width: ","px) {\n            ",";\n        }\n    "]);return f=function(){return n},n}function b(){var n=Object(u.a)(["\n        @media (max-height: ","px) {\n            ",";\n        }\n    "]);return b=function(){return n},n}var O={xxs:360,xs:480,s:768,m:1024,l:1200},v=Object.keys(O).reduce((function(n,e){return n[e]=function(){return Object(j.a)(b(),O[e],j.a.apply(void 0,arguments))},n}),{}),h=Object.keys(O).reduce((function(n,e){return n[e]=function(){return Object(j.a)(f(),O[e],j.a.apply(void 0,arguments))},n}),{});function m(){var n=Object(u.a)(["\n        min-height: 3.25rem;\n        "]);return m=function(){return n},n}function x(){var n=Object(u.a)(["\n    border: 1px solid #ddd;\n    background-color: #f2f2f2;\n    height: 100%;\n    min-height: 6rem;\n    ","\n    grid-column: auto / span ",";\n    font-family: Montserrat, sans-serif;\n    font-size: 1.6rem;\n    cursor: pointer;\n"]);return x=function(){return n},n}var g=j.b.button(x(),v.xs(m()),(function(n){return n.width})),p=function(n){var e=n.children,t=n.width,c=void 0===t?1:t,a=n.clickHandler;return Object(r.jsx)(g,{onClick:a,width:c,children:e})},E=t(7),A={ADD_VALUE:"ADD_VALUE",REMOVE_VALUE:"REMOVE_VALUE",CLEAR_VALUE:"CLEAR_VALUE",ADD_DECIMAL:"ADD_DECIMAL",ADD_OPERATOR:"ADD_OPERATOR",EQUALS_OPERATOR:"EQUALS_OPERATOR",MAKE_NEGATIVE:"MAKE_NEGATIVE"},V={PLUS_SIGN:"+",MINUS_SIGN:"-",TIMES_SIGN:"\xd7",DIVIDE_SIGN:"\xf7"},D=function(n,e){var t=n.value,r=n.savedValue,c=n.decimal,a=n.operator,i=n.negative,o=n.log;switch(e.type){case A.ADD_VALUE:var u=e.payload;return"0"===t?"0"===u?n:Object(E.a)(Object(E.a)({},n),{},{error:!1,errorMessage:null,value:""+u}):Object(E.a)(Object(E.a)({},n),{},{error:!1,errorMessage:null,value:t+u});case A.REMOVE_VALUE:if("0"===t)return{log:o,value:"0"};var l=t.slice(-1);return Object(E.a)(Object(E.a)({},n),{},{error:!1,errorMessage:null,decimal:"."!==l&&c,value:t.length<=1?"0":t.slice(0,t.length-1)});case A.CLEAR_VALUE:return{value:"0",log:o};case A.ADD_DECIMAL:return n.decimal?n:Object(E.a)(Object(E.a)({},n),{},{error:!1,errorMessage:null,value:t+".",decimal:!0});case A.ADD_OPERATOR:if(a&&r){if(a===V.DIVIDE_SIGN&&"0"===t)return{error:!0,errorMessage:"Divide by zero not allowed!",value:"0",log:o};var s=I(_(parseFloat(r),parseFloat(t),a)),d=s.value,j=s.negative;return{error:!1,errorMessage:null,operator:e.payload,savedValue:(j?"-":"")+d,value:"0",decimal:!1,negative:!1,log:{operator:a,savedValue:r,prevValue:t,calculatedValue:d}}}return{error:!1,errorMessage:null,operator:e.payload,savedValue:i?"-"+t:t,value:"0",decimal:!1,negative:!1,log:o};case A.MAKE_NEGATIVE:return"0"===t?n:Object(E.a)(Object(E.a)({},n),{},{negative:!i});case A.EQUALS_OPERATOR:if(r&&a){if(a===V.DIVIDE_SIGN&&"0"===t)return{error:!0,errorMessage:"Divide by zero not allowed!",value:"0",log:o};var f=I(_(parseFloat(r),parseFloat(t),a));return Object(E.a)(Object(E.a)({},f),{},{log:{operator:a,savedValue:r,prevValue:t,calculatedValue:(f.negative?"-":"")+f.value}})}return n;default:return n}},_=function(n,e,t){switch(t){case V.PLUS_SIGN:return n+e;case V.MINUS_SIGN:return n-e;case V.TIMES_SIGN:return n*e;case V.DIVIDE_SIGN:return n/e;default:return 0}},I=function(n){var e=n;e%1!==0&&(e=e.toFixed(2));var t=e+"";return"-"===t[0]&&(t=t.slice(1,t.length)),{value:t,decimal:e%1!==0,negative:e<0}},k=Object(c.createContext)(null),y=function(n){var e=n.children,t=Object(c.useReducer)(D,{value:"0"}),a=Object(l.a)(t,2),i=a[0],o=a[1];return Object(r.jsx)(k.Provider,{value:{calculator:i,dispatch:o},children:e})};function M(){var n=Object(u.a)(["\n        font-size: 1.4rem;\n        min-height: 1.8rem;\n        "]);return M=function(){return n},n}function S(){var n=Object(u.a)(["\n    font-family: Montserrat, sans-serif;\n    color: #f2f2f2;\n    font-size: 1.7rem;\n    min-height: 2.5rem;\n    ","\n    text-align: right;\n    word-wrap: break-word;\n"]);return S=function(){return n},n}var w=j.b.div(S(),v.xs(M())),C=function(){var n=Object(c.useContext)(k).calculator,e=n.savedValue,t=n.operator,a=n.error;return Object(r.jsx)(w,{children:a?Object(r.jsx)("span",{children:"Error!"}):e&&t&&Object(r.jsxs)("span",{children:[e," ",t]})})};function L(){var n=Object(u.a)(["\n        font-size: 2.2rem;\n        padding: .75rem;\n        "]);return L=function(){return n},n}function R(){var n=Object(u.a)(["\n    background: #666;\n    color: white;\n    font-family: Montserrat, sans-serif;\n    font-size: 2.8rem;\n    padding: 1.25rem;\n    ","\n    text-align: right;\n    word-wrap: break-word;\n"]);return R=function(){return n},n}var N=j.b.div(R(),v.xs(L())),H=function(){var n=Object(c.useContext)(k).calculator,e=n.value,t=n.negative;return Object(r.jsxs)(N,{children:[Object(r.jsx)(C,{}),Object(r.jsxs)("span",{children:[t?"-":"",e]})]})};function U(){var n=Object(u.a)(["\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n"]);return U=function(){return n},n}function z(){var n=Object(u.a)(["\n    position: relative;\n    width: 95%;\n    max-width: 30rem;\n    border: 1px solid #999;\n    box-shadow: 5px 6px 12px -7px rgba(204, 204, 204, 1);\n"]);return z=function(){return n},n}var G=j.b.div(z()),T=j.b.div(U()),P=function(n){var e=n.children,t=Object(c.useContext)(k).dispatch,a=function(n){t({type:A.ADD_VALUE,payload:n})},i=function(n){t({type:A.ADD_OPERATOR,payload:n})};return Object(r.jsxs)(G,{children:[Object(r.jsx)(H,{}),Object(r.jsxs)(T,{children:[Object(r.jsx)(p,{clickHandler:function(){return t({type:A.CLEAR_VALUE})},children:"AC"}),Object(r.jsx)(p,{clickHandler:function(){return t({type:A.REMOVE_VALUE})},children:"DEL"}),Object(r.jsx)(p,{clickHandler:function(){return t({type:A.MAKE_NEGATIVE})},children:"\xb1"}),Object(r.jsx)(p,{clickHandler:function(){return i(V.DIVIDE_SIGN)},children:"\xf7"}),Object(r.jsx)(p,{clickHandler:function(){return a(1)},children:"1"}),Object(r.jsx)(p,{clickHandler:function(){return a(2)},children:"2"}),Object(r.jsx)(p,{clickHandler:function(){return a(3)},children:"3"}),Object(r.jsx)(p,{clickHandler:function(){return i(V.TIMES_SIGN)},children:"\xd7"}),Object(r.jsx)(p,{clickHandler:function(){return a(4)},children:"4"}),Object(r.jsx)(p,{clickHandler:function(){return a(5)},children:"5"}),Object(r.jsx)(p,{clickHandler:function(){return a(6)},children:"6"}),Object(r.jsx)(p,{clickHandler:function(){return i(V.MINUS_SIGN)},children:"-"}),Object(r.jsx)(p,{clickHandler:function(){return a(7)},children:"7"}),Object(r.jsx)(p,{clickHandler:function(){return a(8)},children:"8"}),Object(r.jsx)(p,{clickHandler:function(){return a(9)},children:"9"}),Object(r.jsx)(p,{clickHandler:function(){return i(V.PLUS_SIGN)},children:"+"}),Object(r.jsx)(p,{clickHandler:function(){return t({type:A.ADD_DECIMAL})},children:"."}),Object(r.jsx)(p,{clickHandler:function(){return a(0)},children:"0"}),Object(r.jsx)(p,{width:"2",clickHandler:function(){return t({type:A.EQUALS_OPERATOR})},children:"="})]}),e]})},F=t(35),K=t(123),Q=t(62),B=t.n(Q),J=t(63),q=t.n(J),W=B()("http://localhost:4000"),X=Object(c.createContext)(null),Y=function(n){var e=n.children,t=Object(c.useState)([]),a=Object(l.a)(t,2),i=a[0],o=a[1],u=Object(c.useState)(""),s=Object(l.a)(u,2),d=s[0],j=s[1],f=Object(c.useState)(null),b=Object(l.a)(f,2),O=b[0],v=b[1];Object(c.useEffect)((function(){q.a.get("/api",{withCredentials:!0}).then((function(n){200!==n.status||n.data.color||window.location.reload()})).catch((function(n){console.log(n)})),W.on("connected",(function(n){o(n.logs),j(n.name),v(n.color)}))}),[]),Object(c.useEffect)((function(){W.on("receive",(function(n){var e=[].concat(Object(F.a)(i.slice(i.length>=10?1:0,i.length)),[n]);o(e),W.emit("received",e)}))}),[i]);return Object(r.jsx)(X.Provider,{value:{logs:i,setLogs:o,name:d,color:O,changeName:function(n){j(n),W.emit("changeinfo",{name:n,color:O})},generateRandomColor:function(){var n="#"+(16777216+16777215*Math.random()).toString(16).substr(1,6);v(n),W.emit("changeinfo",{name:d,color:n})},addLog:function(n){var e=Object(E.a)(Object(E.a)({},n),{},{name:d,color:O,id:Object(K.a)()}),t=[].concat(Object(F.a)(i.slice(i.length>=10?1:0,i.length)),[e]);o(t),W.emit("submit",t)}},children:e})};function Z(){var n=Object(u.a)(["\n  width: 92.5%;\n  "]);return Z=function(){return n},n}function $(){var n=Object(u.a)(["\n  padding: 0;\n  width: 90%;\n  "]);return $=function(){return n},n}function nn(){var n=Object(u.a)(["\n    margin: 0 auto;\n    padding: 0 2rem;\n    max-width: 105rem;\n    ","\n    ","\n"]);return nn=function(){return n},n}var en=j.b.div(nn(),h.s($()),h.xs(Z()));function tn(){var n=Object(u.a)(["\n    font-weight: 600;\n    color: ",";\n"]);return tn=function(){return n},n}var rn=j.b.span(tn(),(function(n){return n.color?n.color:"black"}));function cn(){var n=Object(u.a)(["\n    opacity: 0;\n    pointer-events: none;\n    "]);return cn=function(){return n},n}function an(){var n=Object(u.a)(["\n    position: absolute;\n    margin-top: 1rem;\n    top: 100%;\n    left: 0.5rem;\n    p {\n        font-size: 1.8rem;\n    }\n    font-family: Montserrat, sans-serif;\n    ","\n"]);return an=function(){return n},n}var on=j.b.div(an(),h.s(cn())),un=function(){var n,e,t=Object(c.useContext)(k).calculator,a=Object(c.useContext)(X),i=a.logs,o=a.addLog,u=t.log,l=Object(c.useRef)(),s=l.current,d=!!(n=s)!==!(e=u)&&(!n||!e||n.operator===e.operator&&n.savedValue===e.savedValue&&n.prevValue===e.prevValue&&n.calculatedValue===e.calculatedValue);return Object(c.useEffect)((function(){d||(l.current=u,o(u))})),Object(r.jsx)(on,{children:i.map((function(n){return Object(r.jsxs)("p",{children:[Object(r.jsxs)(rn,{color:n.color,children:[""===n.name?"Anonymous":n.name,": "]}),n.savedValue," ",n.operator," ",n.prevValue," = ",n.calculatedValue]},n.id)}))})};function ln(){var n=Object(u.a)(["\n    padding: 0.25rem 0.5rem;\n    font-family: Montserrat, sans-serif;\n    max-width: 15rem;\n"]);return ln=function(){return n},n}function sn(){var n=Object(u.a)(["\n    padding: 0.25rem;\n    font-size: 1.3rem;\n    font-family: Montserrat, sans-serif;\n"]);return sn=function(){return n},n}function dn(){var n=Object(u.a)(["\n    font-size: 1.4rem;\n    margin-right: 0.5rem;\n    font-weight: 600;\n    color: ",";\n    text-shadow: 1px 1px rgba(0, 0, 0, 0.2);\n"]);return dn=function(){return n},n}function jn(){var n=Object(u.a)(["\n    font-size: 1.4rem;\n    margin-right: 0.5rem;\n"]);return jn=function(){return n},n}function fn(){var n=Object(u.a)(["\n    margin-bottom: 0.75rem;\n"]);return fn=function(){return n},n}function bn(){var n=Object(u.a)(["\n    margin-bottom: 0.33rem;\n"]);return bn=function(){return n},n}var On=function(){var n=Object(c.useContext)(X),e=n.name,t=n.color,a=n.changeName,i=n.generateRandomColor;return Object(r.jsxs)(vn,{children:[Object(r.jsxs)(hn,{children:[Object(r.jsx)(mn,{htmlFor:"name",children:"Name:"}),Object(r.jsx)(pn,{type:"text",id:"name","aria-label":"Name",name:"name",value:e,onChange:function(n){return a(n.target.value)}})]}),Object(r.jsxs)(hn,{children:[Object(r.jsx)(mn,{htmlFor:"Color",children:"Color:"}),Object(r.jsx)(xn,{color:t,children:t}),Object(r.jsx)(gn,{onClick:function(n){return function(n){n.preventDefault(),i()}(n)},children:"Randomize!"})]})]})},vn=j.b.form(bn()),hn=j.b.div(fn()),mn=j.b.label(jn()),xn=j.b.span(dn(),(function(n){return n.color?n.color:"black"})),gn=j.b.button(sn()),pn=j.b.input(ln()),En=t(64);function An(){var n=Object(u.a)(["\n    font-size: 2rem;\n"]);return An=function(){return n},n}function Vn(){var n=Object(u.a)(["\n    margin-top: 2rem;\n    font-size: 4rem;\n"]);return Vn=function(){return n},n}function Dn(){var n=Object(u.a)(["\n    text-align: center;\n"]);return Dn=function(){return n},n}function _n(){var n=Object(u.a)(["\n    position: fixed;\n    font-size: 4rem;\n    color: black;\n    top: 1rem;\n    right: 1rem;\n"]);return _n=function(){return n},n}function In(){var n=Object(u.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    padding: 0.75rem;\n    z-index: 100;\n    background: rgba(255, 255, 255, 1);\n    background: linear-gradient(162deg, rgba(255, 255, 255, 1) 65%, rgba(220, 220, 220, 1) 100%);\n    opacity: 0;\n\n    pointer-events: none;\n    &.test {\n        opacity: 1;\n        pointer-events: auto;\n    }\n"]);return In=function(){return n},n}var kn=j.b.div(In()),yn=j.b.div(_n()),Mn=j.b.div(Dn()),Sn=j.b.h1(Vn()),wn=j.b.p(An()),Cn=function(n){var e=n.mobileMenuOn,t=n.timesHandler,a=Object(c.useContext)(X).logs;return Object(r.jsxs)(kn,{className:e?"test":"",children:[Object(r.jsx)(yn,{onClick:t,children:Object(r.jsx)(En.a,{})}),Object(r.jsxs)(Mn,{children:[Object(r.jsx)(Sn,{children:"Chat"}),a.map((function(n){return Object(r.jsxs)(wn,{children:[Object(r.jsxs)(rn,{color:n.color,children:[""===n.name?"Anonymous":n.name,": "]}),n.savedValue," ",n.operator," ",n.prevValue," = ",n.calculatedValue]},n.id)}))]})]})},Ln=t(66);function Rn(){var n=Object(u.a)(["\n        opacity: 1;\n        pointer-events: auto;\n    "]);return Rn=function(){return n},n}function Nn(){var n=Object(u.a)(["\n    position: fixed;\n    bottom: 1.25rem;\n    right: 1.25rem;\n    font-size: 4rem;\n    opacity: 0;\n    pointer-events: none;\n    ","\n"]);return Nn=function(){return n},n}function Hn(){var n=Object(u.a)(["\n        height: 97.5vh;\n        "]);return Hn=function(){return n},n}function Un(){var n=Object(u.a)(["\n    position: relative;\n    height: 86.5vh;\n    ","\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"]);return Un=function(){return n},n}function zn(){var n=Object(u.a)(["\n    font-size: 2.75rem;\n    "]);return zn=function(){return n},n}function Gn(){var n=Object(u.a)(["\n    margin-bottom: 1rem;\n    font-size: 3.2rem;\n    ","\n    color: #333;\n"]);return Gn=function(){return n},n}var Tn=j.b.h1(Gn(),h.s(zn())),Pn=Object(j.b)(en)(Un(),v.xs(Hn())),Fn=j.b.div(Nn(),h.s(Rn())),Kn=function(){var n=Object(c.useState)(!1),e=Object(l.a)(n,2),t=e[0],a=e[1];return Object(r.jsx)(s.a,{children:Object(r.jsx)(y,{children:Object(r.jsx)(Pn,{children:Object(r.jsx)(Y,{children:Object(r.jsxs)(d.a,{path:"/",children:[Object(r.jsx)(Tn,{children:"Sezzle Calculator \ud83d\udd22"}),Object(r.jsx)(On,{}),Object(r.jsx)(P,{children:Object(r.jsx)(un,{})}),Object(r.jsx)(Cn,{mobileMenuOn:t,timesHandler:function(){a(!1)}}),Object(r.jsx)(Fn,{onClick:function(){return a((function(n){return console.log(n),!n}))},children:Object(r.jsx)(Ln.a,{})})]})})})})})},Qn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,124)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,i=e.getTTFB;t(n),r(n),c(n),a(n),i(n)}))};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(Kn,{})}),document.getElementById("root")),Qn()},72:function(n,e,t){},99:function(n,e){}},[[121,1,2]]]);
//# sourceMappingURL=main.274f8658.chunk.js.map