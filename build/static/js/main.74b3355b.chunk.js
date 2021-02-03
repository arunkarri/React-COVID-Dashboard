(this["webpackJsonpreact-routing"]=this["webpackJsonpreact-routing"]||[]).push([[0],{18:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),s=a.n(n),r=a(7),d=a.n(r),i=a(2),o=a(3),l=a.n(o),j=a(4),h="https://corona-api.com/",u=function(e){return Object(c.jsx)("div",{className:"col-6 p-1",children:Object(c.jsx)("div",{className:"card text-center bg-".concat(e.type," text-").concat(e.theme),children:Object(c.jsxs)("div",{className:"card-body",children:[Object(c.jsx)("h5",{children:Object(c.jsx)("span",{className:"card-title",children:e.label})}),Object(c.jsx)("p",{className:"card-text",children:e.value.toLocaleString()})]})})})},b=function(e){var t=[],a=[],s=[],r=Object(n.useContext)(f),d=(r.loader,r.showLoader),i=function(){var c=Object(j.a)(l.a.mark((function c(n){var r,i,o,j,u;return l.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return d(!0),c.next=3,fetch("".concat(h,"/countries/").concat(n));case 3:return j=c.sent,c.next=6,j.json();case 6:u=c.sent,console.log(u),null===(r=u.data)||void 0===r||r.timeline.forEach((function(e){t.push([new Date(e.date).getTime(),e.deaths])})),e.setcDeaths(t),null===(i=u.data)||void 0===i||i.timeline.forEach((function(e){a.push([new Date(e.date).getTime(),e.recovered])})),e.setcRec(a),null===(o=u.data)||void 0===o||o.timeline.forEach((function(e){s.push([new Date(e.date).getTime(),e.active])})),e.setcActive(s),e.setPopulation(u.data.population),e.setCountryName(u.data.name),d(!1);case 17:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}();return Object(c.jsx)("div",{className:"table-container",children:Object(c.jsxs)("table",{className:"table table-responsive table-bordered",children:[Object(c.jsx)("thead",{className:"text-dark",children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"col",children:"Country"}),Object(c.jsx)("th",{scope:"col",children:"Death Rate"}),Object(c.jsx)("th",{scope:"col",children:"Recovery Rate"}),Object(c.jsx)("th",{scope:"col",children:"Confirmed"}),Object(c.jsx)("th",{scope:"col",children:"Critical"}),Object(c.jsx)("th",{scope:"col",children:"Fatal"}),Object(c.jsx)("th",{scope:"col",children:"Today's Cases"}),Object(c.jsx)("th",{scope:"col",children:"Total Population"})]})}),Object(c.jsx)("tbody",{className:"text-dark",children:e.cases.map((function(e,t){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:Object(c.jsx)("a",{href:"",onClick:function(t){t.preventDefault(),i(e.code)},children:e.name})}),Object(c.jsxs)("td",{children:[Math.round(e.latest_data.calculated.death_rate),"%"]}),Object(c.jsxs)("td",{children:[Math.round(e.latest_data.calculated.recovery_rate),"%"]}),Object(c.jsx)("td",{children:e.latest_data.confirmed}),Object(c.jsx)("td",{children:e.latest_data.critical}),Object(c.jsx)("td",{className:"text-danger",children:e.latest_data.deaths}),Object(c.jsxs)("td",{children:[Object(c.jsx)("span",{className:"text-danger",children:"Deaths: "}),e.today.deaths,"\xa0\xa0",Object(c.jsx)("span",{className:"text-danger",children:"Confirmed: "}),e.today.confirmed]}),Object(c.jsx)("td",{children:e.population})]},t)}))})]})})},x=a(6),O=a.n(x),m=function(e){var t={chart:{id:"Country Data"},xaxis:{labels:{datetimeFormatter:{year:"yyyy",month:"MMM 'yy",day:"dd MMM",hour:"HH:mm"},formatter:function(e){return new Date(e).toLocaleDateString()}},tickAmount:5},tooltip:{x:{format:"dd MMM yyyy"}}},a=[{name:"Deaths",data:e.deathSeries}],n=[{name:"Active",data:e.activeSeries},{name:"Recovered",data:e.recoveredSeries}];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("b",{className:"text-danger",children:"Deaths"}),Object(c.jsx)(O.a,{options:t,series:a,type:"line",width:350,height:250}),Object(c.jsx)("b",{className:"text-primary",children:"Active & Recovered"}),Object(c.jsx)(O.a,{options:t,series:n,type:"line",width:350,height:250})]})},p=function(e){var t;return Object(c.jsx)("div",{className:"col-12 p-1",children:Object(c.jsx)("div",{className:"card text-center",children:Object(c.jsxs)("div",{className:"card-body",children:[Object(c.jsx)("h5",{children:Object(c.jsx)("span",{className:"card-title",children:e.name})}),Object(c.jsx)("hr",{}),Object(c.jsxs)("span",{className:"card-text",children:[Object(c.jsx)("b",{children:"Population: "}),Object(c.jsx)("small",{children:null===(t=e.population)||void 0===t?void 0:t.toLocaleString()})]}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("hr",{}),Object(c.jsx)(m,{deathSeries:e.deaths,activeSeries:e.active,recoveredSeries:e.recovered})]})})})},v=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],d=Object(n.useState)([]),o=Object(i.a)(d,2),x=o[0],O=o[1],m=Object(n.useState)([]),v=Object(i.a)(m,2),y=v[0],g=v[1],N=Object(n.useState)([]),w=Object(i.a)(N,2),S=w[0],D=w[1],_=Object(n.useState)(0),C=Object(i.a)(_,2),M=C[0],k=C[1],E=Object(n.useState)(""),L=Object(i.a)(E,2),R=L[0],T=L[1],A=Object(n.useState)(0),F=Object(i.a)(A,2),P=F[0],H=F[1],I=Object(n.useState)(0),J=Object(i.a)(I,2),B=J[0],V=J[1],q=Object(n.useState)(0),z=Object(i.a)(q,2),G=z[0],K=z[1],Q=Object(n.useState)(0),U=Object(i.a)(Q,2),W=U[0],X=U[1],Y=Object(n.useContext)(f),Z=Y.loader,$=Y.showLoader,ee=[],te=[],ae=[],ce=function(){var e=Object(j.a)(l.a.mark((function e(){var t,a,c,n,s,d,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(h,"countries"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,c=a.data.sort((function(e,t){return t.latest_data.confirmed-e.latest_data.confirmed})),r(c),$(!1),ne(c[0].code),n=a.data.reduce((function(e,t){return e+t.latest_data.confirmed}),0),H(n),s=a.data.reduce((function(e,t){return e+(t.latest_data.confirmed-t.latest_data.recovered-t.latest_data.deaths)}),0),V(s),d=a.data.reduce((function(e,t){return e+t.latest_data.recovered}),0),K(d),i=a.data.reduce((function(e,t){return e+t.latest_data.deaths}),0),X(i);case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ne=function(){var e=Object(j.a)(l.a.mark((function e(t){var a,c,n,s,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(h,"/countries/").concat(t));case 2:return s=e.sent,e.next=5,s.json();case 5:r=e.sent,null===(a=r.data)||void 0===a||a.timeline.forEach((function(e){ee.push([new Date(e.date).getTime(),e.deaths])})),O(ee),null===(c=r.data)||void 0===c||c.timeline.forEach((function(e){te.push([new Date(e.date).getTime(),e.recovered])})),g(te),null===(n=r.data)||void 0===n||n.timeline.forEach((function(e){ae.push([new Date(e.date).getTime(),e.active])})),D(ae),k(r.data.population),T(r.data.name);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return s.a.useEffect((function(){ce()}),[]),Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"container",children:!0===Z?Object(c.jsx)("div",{className:"spinner-border text-success",role:"status",children:Object(c.jsx)("span",{className:"visually-hidden",children:"Loading..."})}):Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("h5",{className:"text-danger text-center",children:"COVID 19 Dashboard"}),Object(c.jsx)("div",{className:"col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)(u,{label:"Confirmed",value:P,type:"warning",theme:"dark"}),Object(c.jsx)(u,{label:"Active",value:B,type:"primary",theme:"light"}),Object(c.jsx)(u,{label:"Recovered",value:G,type:"success",theme:"light"}),Object(c.jsx)(u,{label:"Deceased",value:W,type:"danger",theme:"light"}),Object(c.jsx)(p,{deaths:x,population:M,name:R,active:S,recovered:y})]})}),Object(c.jsx)("div",{className:"col-xl-8 col-lg-8 col-md-8 col-sm-6 col-xs-12",children:Object(c.jsx)(b,{cases:a,setcDeaths:O,setPopulation:k,setCountryName:T,setcActive:D,setcRec:g})})]})})})},f=s.a.createContext({loading:!0,showLoader:function(){}}),y=function(){var e=Object(n.useState)(!0),t=Object(i.a)(e,2),a={loader:t[0],showLoader:t[1]};return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(f.Provider,{value:a,children:Object(c.jsx)(v,{})})})};d.a.render(Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(y,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.74b3355b.chunk.js.map