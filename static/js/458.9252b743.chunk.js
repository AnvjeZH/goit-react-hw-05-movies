"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[458],{458:function(e,r,t){t.r(r),t.d(r,{default:function(){return v}});var n=t(861),a=t(439),u=t(757),c=t.n(u),i=t(791),o=t(87),s=t(689),p=t(390),h=t(184),l=function(e){var r=e.movies,t=e.location;return(0,h.jsx)("ul",{children:r.map((function(e){var r=e.id,n=e.title;return(0,h.jsx)(o.rU,{to:"".concat(r),state:{from:t},children:(0,h.jsx)("li",{children:n})},r)}))})},f=function(e){var r=e.onSearch,t=e.onChange,n=e.query;return(0,h.jsxs)("form",{onSubmit:r,children:[(0,h.jsx)("input",{type:"text",name:"query",onChange:function(e){return t(e.target.value)},value:n}),(0,h.jsx)("button",{type:"submit",children:"Search"})]})},v=function(){var e,r=(0,i.useState)([]),t=(0,a.Z)(r,2),u=t[0],v=t[1],d=(0,i.useState)(!1),m=(0,a.Z)(d,2),x=m[0],y=m[1],Z=(0,i.useState)(!1),g=(0,a.Z)(Z,2),w=g[0],I=g[1],b=(0,o.lr)(),j=(0,a.Z)(b,2),M=j[0],J=j[1],k=null!==(e=M.get("query"))&&void 0!==e?e:"",Y=(0,s.TH)();(0,i.useEffect)((function(){function e(){return e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,y(!0),e.next=4,(0,p.gH)(r);case 4:t=e.sent,v(t),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),I(!0),console.error(e.t0);case 12:return e.prev=12,y(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])}))),e.apply(this,arguments)}""!==k&&function(r){e.apply(this,arguments)}(k)}),[k]);var N=u.filter((function(e){return e.title.toLowerCase().includes(k.toLowerCase())}));return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(f,{onSearch:function(e){e.preventDefault();var r=e.currentTarget.elements.query.value;""!==r.trim()?r!==k&&J({query:r}):alert("Please enter a search query.")},onChange:function(e){J(""!==e?{query:e}:{})},query:k}),w&&(0,h.jsx)("div",{children:"Sorry, but we have errors. Try again"}),x&&(0,h.jsx)("div",{children:"Wait..."}),k&&(0,h.jsx)(h.Fragment,{children:N.length>0?(0,h.jsx)(l,{movies:N,location:Y}):(0,h.jsx)("div",{children:"No movies found with the your request."})})]})}},390:function(e,r,t){t.d(r,{Df:function(){return s},Jh:function(){return d},TP:function(){return h},_r:function(){return x},gH:function(){return Z},yd:function(){return f}});var n=t(683),a=t(861),u=t(757),c=t.n(u),i=t(243),o={method:"GET",params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTU5YmY3MWFiYzM0NzBmNDVkMDdjOGI1ZDNhODM5YiIsInN1YiI6IjY0ZGJhZWI2MDAxYmJkMDQxYWYzNDRmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QPxM_-Q55UeA1hwkxgY0DaHePNMMzHQ6--rME54wr20"}};function s(){return p.apply(this,arguments)}function p(){return(p=(0,a.Z)(c().mark((function e(){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,n.Z)((0,n.Z)({},o),{},{url:"https://api.themoviedb.org/3/trending/movie/day"}),e.prev=1,e.next=4,(0,i.Z)(r);case 4:return t=e.sent,e.abrupt("return",t.data);case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function h(e){return l.apply(this,arguments)}function l(){return(l=(0,a.Z)(c().mark((function e(r){var t,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,n.Z)((0,n.Z)({},o),{},{url:"https://api.themoviedb.org/3/movie/".concat(r)}),e.prev=1,e.next=4,(0,i.Z)(t);case 4:return a=e.sent,e.abrupt("return",a.data);case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function f(){return v.apply(this,arguments)}function v(){return(v=(0,a.Z)(c().mark((function e(){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,n.Z)((0,n.Z)({},o),{},{url:"https://api.themoviedb.org/3/configuration"}),e.prev=1,e.next=4,(0,i.Z)(r);case 4:return t=e.sent,e.abrupt("return",t.data.images);case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function d(e){return m.apply(this,arguments)}function m(){return(m=(0,a.Z)(c().mark((function e(r){var t,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,n.Z)((0,n.Z)({},o),{},{url:"https://api.themoviedb.org/3/movie/".concat(r,"}/credits")}),e.prev=1,e.next=4,(0,i.Z)(t);case 4:return a=e.sent,e.abrupt("return",a.data.cast);case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function x(e){return y.apply(this,arguments)}function y(){return(y=(0,a.Z)(c().mark((function e(r){var t,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,n.Z)((0,n.Z)({},o),{},{url:"https://api.themoviedb.org/3/movie/".concat(r,"/reviews")}),e.prev=1,e.next=4,(0,i.Z)(t);case 4:return a=e.sent,e.abrupt("return",a.data.results);case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function Z(e){return g.apply(this,arguments)}function g(){return(g=(0,a.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",url:"https://api.themoviedb.org/3/search/movie",params:{query:r,include_adult:"false",language:"en-US",page:"1"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTU5YmY3MWFiYzM0NzBmNDVkMDdjOGI1ZDNhODM5YiIsInN1YiI6IjY0ZGJhZWI2MDAxYmJkMDQxYWYzNDRmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QPxM_-Q55UeA1hwkxgY0DaHePNMMzHQ6--rME54wr20"}},e.prev=1,e.next=4,(0,i.Z)(t);case 4:return n=e.sent,e.abrupt("return",n.data.results);case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=458.9252b743.chunk.js.map