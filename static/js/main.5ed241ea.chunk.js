(this["webpackJsonpek-calculator"]=this["webpackJsonpek-calculator"]||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(4),o=c.n(a),u=(c(9),c(10),c(2));function s(e,t){var c=0;if(!(e.home<0||e.out<0||t.home<0||t.out<0))return e.home===t.home&&e.out===t.out?10:e.home===e.out&&t.home===t.out?7:((e.home>e.out&&t.home>t.out||e.home<e.out&&t.home<t.out)&&(c+=5),e.home===t.home&&(c+=2),e.out===t.out&&(c+=2),c)}var j=c(0);var i=function(){var e=Object(n.useState)(-1),t=Object(u.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(-1),o=Object(u.a)(a,2),i=o[0],l=o[1],h=Object(n.useState)(-1),b=Object(u.a)(h,2),m=b[0],O=b[1],d=Object(n.useState)(-1),v=Object(u.a)(d,2),x=v[0],p=v[1],f={home:c,out:i},g={home:m,out:x},N=function(e){return"0"===e||Number(e)>0?Number(e):-1};return Object(j.jsxs)("div",{className:"Calculator",children:[Object(j.jsx)("div",{children:"Score van team:"}),Object(j.jsxs)("div",{className:"match-score",children:[Object(j.jsx)("input",{type:"tel",value:-1===c?"":c,min:0,onChange:function(e){return r(N(e.target.value))}}),"-",Object(j.jsx)("input",{type:"tel",value:-1===i?"":i,min:0,onChange:function(e){return l(N(e.target.value))}})]}),Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{className:"user-score",children:[Object(j.jsx)("div",{children:"Score van speler:"}),Object(j.jsx)("input",{type:"tel",value:-1===m?"":m,min:0,onChange:function(e){return O(N(e.target.value))}}),"-",Object(j.jsx)("input",{type:"tel",value:-1===x?"":x,min:0,onChange:function(e){return p(N(e.target.value))}})]}),Object(j.jsx)("hr",{}),Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{className:"points",children:[Object(j.jsx)("div",{children:"Punten voor speler:"}),Object(j.jsx)("div",{className:"score",children:s(f,g)})]})]})};var l=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("header",{className:"App-header",children:[Object(j.jsx)("h1",{children:"Mol EK calculator"}),Object(j.jsx)(i,{})]})})};o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(l,{})}),document.getElementById("root"))},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.5ed241ea.chunk.js.map