"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[523],{523:function(n,e,t){t.r(e),t.d(e,{default:function(){return C}});var r,a,c,s,o,i,u,l,p,f=t(861),h=t(885),d=t(687),x=t.n(d),g=t(689),v=t(791),b=t(682),m=t(168),w=t(931),k=t(87),Z=w.Z.div(r||(r=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  background: #012444;\n  width: 75%;\n  min-height: 100vh;\n"]))),j=w.Z.div(a||(a=(0,m.Z)(["\n  margin-top: 25px;\n  display: flex;\n  align-items: flex-end;\n"]))),y=w.Z.img(c||(c=(0,m.Z)(["\n  height: 540px;\n  margin-left: 20px;\n"]))),_=w.Z.div(s||(s=(0,m.Z)(["\n  margin-left: 20px;\n  color: white;\n  font-weight: 500;\n"]))),T=w.Z.span(o||(o=(0,m.Z)(["\n  color: orange;\n"]))),E=w.Z.h1(i||(i=(0,m.Z)(["\n  color: orange;\n"]))),z=(0,w.Z)(k.OL)(u||(u=(0,m.Z)(["\n  transform: scale(1);\n  transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  width: 60px;\n  margin-left: 20px;\n  margin-top: 10px;\n  text-decoration: none;\n  text-align: center;\n  font-weight: 500;\n  color: orange;\n  background: rgba(255, 255, 255, 0.45);\n  -webkit-backdrop-filter: blur(7px);\n  backdrop-filter: blur(7px);\n  border: 1px solid rgba(255, 255, 255, 0.225);\n  border-radius: 10px;\n  &:hover {\n    transform: scale(1.05);\n    transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  }\n"]))),B=w.Z.button(l||(l=(0,m.Z)(["\n  transform: scale(1);\n  transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  cursor: pointer;\n  padding: 10px;\n  text-decoration: none;\n  font-size: 20px;\n  font-weight: 500;\n  color: orange;\n  background: rgba(255, 255, 255, 0.45);\n  -webkit-backdrop-filter: blur(7px);\n  backdrop-filter: blur(7px);\n  border: 1px solid rgba(255, 255, 255, 0.225);\n  border-radius: 10px;\n  :hover {\n    transform: scale(1.05);\n    transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  }\n"]))),R=(0,w.Z)(k.rU)(p||(p=(0,m.Z)(["\n  margin-left: 20px;\n  cursor: default;\n"]))),U=t(184),C=function(){var n,e,t=null!==(n=null===(e=(0,g.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",r=(0,g.UO)().id,a=(0,v.useState)(""),c=(0,h.Z)(a,2),s=c[0],o=c[1];(0,v.useEffect)((function(){function n(){return n=(0,f.Z)(x().mark((function n(e){var t,r;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,b.eB)(e);case 3:t=n.sent,r=t.data,o(r),console.log(r),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])}))),n.apply(this,arguments)}!function(e){n.apply(this,arguments)}(r)}),[r]);var i=s.title,u=s.overview,l=s.genres,p=s.release_date,d=s.vote_average,m=s.poster_path;return(0,U.jsxs)(Z,{children:[(0,U.jsx)(z,{to:t,children:"Back"}),s&&(0,U.jsxs)("section",{children:[(0,U.jsxs)(j,{children:[(0,U.jsx)(y,{src:null===m?"https://i.postimg.cc/MTBLYYMP/poster-not-available.jpg":b.lh+m,alt:i}),(0,U.jsxs)(_,{children:[(0,U.jsx)(E,{children:i}),(0,U.jsx)("p",{children:u})]})]}),(0,U.jsxs)(_,{children:[(0,U.jsxs)("p",{children:[(0,U.jsx)(T,{children:"Genres: "}),l.map((function(n){return n.name})).join(", ")]}),(0,U.jsxs)("p",{children:[(0,U.jsx)(T,{children:"Release Date:"})," ",p]}),(0,U.jsxs)("p",{children:[(0,U.jsx)(T,{children:"Rating:"})," ",d.toFixed(1)]})]}),(0,U.jsx)(R,{to:"cast",state:{from:t},children:(0,U.jsx)(B,{children:"Cast"})}),(0,U.jsx)(R,{to:"reviews",state:{from:t},children:(0,U.jsx)(B,{children:"Reviews"})}),(0,U.jsx)(v.Suspense,{fallback:null,children:(0,U.jsx)(g.j3,{})})]})]})}},682:function(n,e,t){t.d(e,{Up:function(){return h},dQ:function(){return v},eB:function(){return x},lh:function(){return u},r1:function(){return m},v7:function(){return p}});var r=t(861),a=t(687),c=t.n(a),s=t(388),o="07f482c2b5e827c5b265fd8211004d21",i="uk",u="https://image.tmdb.org/t/p/w500",l=s.Z.create({baseURL:"https://api.themoviedb.org/3"});function p(){return f.apply(this,arguments)}function f(){return f=(0,r.Z)(c().mark((function n(){var e,t,r=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:1,n.prev=1,n.next=4,l.get("/trending/movie/week?api_key=".concat(o,"&page=").concat(e,"&language=uk"));case 4:if(200!==(t=n.sent).status){n.next=7;break}return n.abrupt("return",t);case 7:throw new Error(t.statusText);case 10:n.prev=10,n.t0=n.catch(1),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[1,10]])}))),f.apply(this,arguments)}function h(n){return d.apply(this,arguments)}function d(){return d=(0,r.Z)(c().mark((function n(e){var t,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:1,n.prev=1,n.next=4,l.get("/search/movie?api_key=".concat(o,"&query=").concat(e,"&page=").concat(t,"&language=").concat(i));case 4:if(200!==(r=n.sent).status){n.next=7;break}return n.abrupt("return",r);case 7:throw new Error(r.statusText);case 10:n.prev=10,n.t0=n.catch(1),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[1,10]])}))),d.apply(this,arguments)}function x(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,l.get("/movie/".concat(e,"?api_key=").concat(o,"&language=").concat(i));case 3:if(200!==(t=n.sent).status){n.next=6;break}return n.abrupt("return",t);case 6:throw new Error(t.statusText);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}function v(n){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,l.get("/movie/".concat(e,"/credits?api_key=").concat(o));case 3:if(200!==(t=n.sent).status){n.next=6;break}return n.abrupt("return",t);case 6:throw new Error(t.statusText);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}function m(n){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,l.get("/movie/".concat(e,"/reviews?api_key=").concat(o));case 3:if(200!==(t=n.sent).status){n.next=6;break}return n.abrupt("return",t);case 6:throw new Error(t.statusText);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=523.79573a52.chunk.js.map