"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[983],{906:function(e,t,n){n.d(t,{e:function(){return u}});var r=n(87),a=n(184),u=function(e){var t=e.movies;return(0,a.jsx)("ul",{children:t.map((function(e){return(0,a.jsx)("li",{children:(0,a.jsx)(r.rU,{to:"/movies/".concat(e.id),children:e.title})},e.id)}))})}},256:function(e,t,n){n.d(t,{D_:function(){return h},Fn:function(){return s},Hs:function(){return f},Pl:function(){return o},ic:function(){return p}});var r=n(861),a=n(757),u=n.n(a),c=n(340),i={headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGI2NDgwNDc5YzAzZTc3NWUzMjVjYjYwMzE0ZWQzNyIsInN1YiI6IjY1NWQwZjMyZmQ0YTk2MDExZDdjZWQ0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h0NSH3GJLeS6PsHBeS_cxj_EQCA2z07_Csj8ebrIqNI"}},s=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/trending/movie/day?language=en-US",i);case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?language=en-US"),i);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&include_adult=true&language=en-US&page=1"),i);case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("  https://api.themoviedb.org/3/movie/".concat(t,"/credits?language=en-US"),i);case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("  https://api.themoviedb.org/3/movie/".concat(t,"/reviews?language=en-US&page=1"),i);case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},983:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(861),a=n(439),u=n(757),c=n.n(u),i=n(791),s=n(256),o=n(686),p=n.n(o),f=n(906),h=n(184);function d(){var e=(0,i.useState)([]),t=(0,a.Z)(e,2),n=t[0],u=t[1];return(0,i.useEffect)((function(){function e(){return(e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.Fn)();case 3:t=e.sent,u(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),p().Notify.failure(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{children:"Trending today"}),(0,h.jsx)(f.e,{movies:n})]})}}}]);
//# sourceMappingURL=983.975df3f2.chunk.js.map