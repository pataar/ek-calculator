(this["webpackJsonpek-calculator"]=this["webpackJsonpek-calculator"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),r=n(4),a=n.n(r),u=(n(9),n(10),n(2));function s(e,t){var n=0;if(!(e.home<0||e.out<0||t.home<0||t.out<0))return e.home===t.home&&e.out===t.out?10:e.home===e.out&&t.home===t.out?7:((e.home>e.out&&t.home>t.out||e.home<e.out&&t.home<t.out)&&(n+=5),e.home===t.home&&(n+=2),e.out===t.out&&(n+=2),n)}var i=n(0);var j=function(){var e=Object(c.useState)(-1),t=Object(u.a)(e,2),n=t[0],o=t[1],r=Object(c.useState)(-1),a=Object(u.a)(r,2),j=a[0],l=a[1],h=Object(c.useState)(-1),b=Object(u.a)(h,2),m=b[0],O=b[1],d=Object(c.useState)(-1),v=Object(u.a)(d,2),x=v[0],p=v[1],f={home:n,out:j},g={home:m,out:x},N=function(e){return"0"===e||Number(e)>0?Number(e):-1};return Object(i.jsxs)("div",{className:"Calculator",children:[Object(i.jsx)("div",{children:"Score van team:"}),Object(i.jsxs)("div",{className:"match-score",children:[Object(i.jsx)("input",{type:"tel",value:-1===n?"":n,min:0,onChange:function(e){return o(N(e.target.value))}}),"-",Object(i.jsx)("input",{type:"tel",value:-1===j?"":j,min:0,onChange:function(e){return l(N(e.target.value))}})]}),Object(i.jsx)("hr",{}),Object(i.jsxs)("div",{className:"user-score",children:[Object(i.jsx)("div",{children:"Score van speler:"}),Object(i.jsx)("input",{type:"tel",value:-1===m?"":m,min:0,onChange:function(e){return O(N(e.target.value))}}),"-",Object(i.jsx)("input",{type:"tel",value:-1===x?"":x,min:0,onChange:function(e){return p(N(e.target.value))}})]}),Object(i.jsx)("hr",{}),Object(i.jsx)("hr",{}),Object(i.jsxs)("div",{className:"points",children:[Object(i.jsx)("div",{children:"Punten voor speler:"}),Object(i.jsx)("div",{className:"score",children:s(f,g)})]})]})};var l=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)("header",{className:"App-header",children:[Object(i.jsx)("h1",{children:"Mol EK calculator"}),Object(i.jsx)(j,{})]})})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),r(e),a(e)}))};a.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(l,{})}),document.getElementById("root")),h()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.9b5ae16a.chunk.js.map