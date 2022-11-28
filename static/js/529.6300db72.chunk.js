"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[529],{529:function(e,t,n){n.r(t),n.d(t,{default:function(){return U}});var r,a,c,s,o,u,i,p=n(861),l=n(885),f=n(687),h=n.n(f),v=n(168),d=n(931),g=d.Z.li(r||(r=(0,v.Z)(["\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  border-radius: 5px;\n  padding: 10px;\n"]))),x=d.Z.p(a||(a=(0,v.Z)(["\n  color: white;\n"]))),w=d.Z.p(c||(c=(0,v.Z)(["\n  color: orange;\n"]))),k=d.Z.span(s||(s=(0,v.Z)(["\n  color: orange;\n"]))),Z=d.Z.p(o||(o=(0,v.Z)(["\n  color: orange;\n  font-weight: 500;\n"]))),b=n(184),y=function(e){var t=e.review,n=void 0===t?{}:t,r=n.author,a=n.content,c=n.rating,s=n.created_at;return(0,b.jsxs)(g,{children:[(0,b.jsxs)(w,{children:[" Author: ",r]}),(0,b.jsxs)(x,{children:[(0,b.jsx)(k,{children:"Review:"})," ",a]}),(0,b.jsxs)(Z,{children:["Rating: ",c||"N/A"]}),(0,b.jsxs)(Z,{children:["Date: ",new Date(s).toLocaleDateString("en-US")]})]})},m=n(791),_=n(689),j=n(682),E=d.Z.ul(u||(u=(0,v.Z)(["\n  padding-left: 25px;\n  display: flex;\n  gap: 20px;\n  flex-direction: column;\n  list-style: none;\n"]))),T=d.Z.h1(i||(i=(0,v.Z)(["\n  color: orange;\n"]))),U=function(){var e=(0,_.UO)().id,t=(0,m.useState)([]),n=(0,l.Z)(t,2),r=n[0],a=n[1];return(0,m.useEffect)((function(){function t(){return t=(0,p.Z)(h().mark((function e(t){var n,r;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,j.r1)(t);case 3:n=e.sent,r=n.data,a(r.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),t.apply(this,arguments)}!function(e){t.apply(this,arguments)}(e)}),[e]),(0,b.jsx)(b.Fragment,{children:!r.length>0?(0,b.jsx)(T,{children:"No reviews"}):(0,b.jsxs)(E,{children:[(0,b.jsx)(T,{children:"Users reviews"}),r.map((function(e){return(0,b.jsx)(y,{review:e},e.id)}))]})})}},682:function(e,t,n){n.d(t,{Up:function(){return h},dQ:function(){return x},eB:function(){return d},lh:function(){return i},r1:function(){return k},v7:function(){return l}});var r=n(861),a=n(687),c=n.n(a),s=n(388),o="07f482c2b5e827c5b265fd8211004d21",u="uk",i="https://image.tmdb.org/t/p/w500",p=s.Z.create({baseURL:"https://api.themoviedb.org/3"});function l(){return f.apply(this,arguments)}function f(){return f=(0,r.Z)(c().mark((function e(){var t,n,r=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:1,e.prev=1,e.next=4,p.get("/trending/movie/week?api_key=".concat(o,"&page=").concat(t,"&language=uk"));case 4:if(200!==(n=e.sent).status){e.next=7;break}return e.abrupt("return",n);case 7:throw new Error(n.statusText);case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])}))),f.apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return v=(0,r.Z)(c().mark((function e(t){var n,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:1,e.prev=1,e.next=4,p.get("/search/movie?api_key=".concat(o,"&query=").concat(t,"&page=").concat(n,"&language=").concat(u));case 4:if(200!==(r=e.sent).status){e.next=7;break}return e.abrupt("return",r);case 7:throw new Error(r.statusText);case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])}))),v.apply(this,arguments)}function d(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.get("/movie/".concat(t,"?api_key=").concat(o,"&language=").concat(u));case 3:if(200!==(n=e.sent).status){e.next=6;break}return e.abrupt("return",n);case 6:throw new Error(n.statusText);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function x(e){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.get("/movie/".concat(t,"/credits?api_key=").concat(o));case 3:if(200!==(n=e.sent).status){e.next=6;break}return e.abrupt("return",n);case 6:throw new Error(n.statusText);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function k(e){return Z.apply(this,arguments)}function Z(){return(Z=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.get("/movie/".concat(t,"/reviews?api_key=").concat(o));case 3:if(200!==(n=e.sent).status){e.next=6;break}return e.abrupt("return",n);case 6:throw new Error(n.statusText);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=529.6300db72.chunk.js.map