"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[946],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),g=r,d=m["".concat(s,".").concat(g)]||m[g]||u[g]||i;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9811:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return c},toc:function(){return u},default:function(){return g}});var a=n(7462),r=n(3366),i=(n(7294),n(4137)),o=["components"],l={title:"Introduction to Geospatial Queries in Apache Pinot",author:"Kenny Bastani",author_title:"Kenny Bastani",author_url:"https://medium.com/apache-pinot-developer-blog",author_image_url:"https://pbs.twimg.com/profile_images/1400521020973400069/5y2UMi4r_400x400.jpg",description:"Discuss the challenges of analyzing geospatial at scale and propose the geospatial support in Pinot.",keywords:["Pinot","Geospatial","H3","Index","User-Facing Analytics","Real-time data platform"],tags:["Pinot","DevBlog","H3","real-time data platform","Realtime","Analytics","User-Facing Analytics"]},s=void 0,p={permalink:"/blog/2021/06/13/DevBlog-Geospatial",editUrl:"https://github.com/apache/pinot-site/edit/dev/website/blog/2021-06-13-DevBlog-Geospatial.md",source:"@site/blog/2021-06-13-DevBlog-Geospatial.md",title:"Introduction to Geospatial Queries in Apache Pinot",description:"Discuss the challenges of analyzing geospatial at scale and propose the geospatial support in Pinot.",date:"2021-06-13T00:00:00.000Z",formattedDate:"June 13, 2021",tags:[{label:"Pinot",permalink:"/blog/tags/pinot"},{label:"DevBlog",permalink:"/blog/tags/dev-blog"},{label:"H3",permalink:"/blog/tags/h-3"},{label:"real-time data platform",permalink:"/blog/tags/real-time-data-platform"},{label:"Realtime",permalink:"/blog/tags/realtime"},{label:"Analytics",permalink:"/blog/tags/analytics"},{label:"User-Facing Analytics",permalink:"/blog/tags/user-facing-analytics"}],readingTime:.42,truncated:!1,authors:[{name:"Kenny Bastani",title:"Kenny Bastani",url:"https://medium.com/apache-pinot-developer-blog",imageURL:"https://pbs.twimg.com/profile_images/1400521020973400069/5y2UMi4r_400x400.jpg"}],prevItem:{title:"Text analytics on LinkedIn Talent Insights using Apache Pinot",permalink:"/blog/2021/06/16/LinkedIn-TextAnalytics"},nextItem:{title:"Automating Merchant Live Monitoring with Real-Time Analytics - Charon",permalink:"/blog/2021/04/29/Uber-Charon"}},c={authorsImageUrls:[void 0]},u=[],m={toc:u};function g(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Geospatial data has been widely used across the industry, spanning multiple verticals, such as ride-sharing and delivery, transportation infrastructure, defense and intel, public health. Deriving insights from timely and accurate geospatial data could enable mission-critical use cases in the organizations and fuel a vibrant marketplace across the industry. In the design document for this new Pinot feature, we discuss the challenges of analyzing geospatial at scale and propose the geospatial support in Pinot."),(0,i.kt)("p",null,"Read More at ",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/apache-pinot-developer-blog/introduction-to-geospatial-queries-in-apache-pinot-b63e2362e2a9"},"https://medium.com/apache-pinot-developer-blog/introduction-to-geospatial-queries-in-apache-pinot-b63e2362e2a9")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/1400/0*1xrDSs9lLZ5dD3zK",alt:"Introduction to Geospatial Queries in Apache Pinot"})))}g.isMDXComponent=!0}}]);