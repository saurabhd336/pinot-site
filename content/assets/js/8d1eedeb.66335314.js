"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[984],{4137:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return g}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(r),g=a,d=m["".concat(c,".").concat(g)]||m[g]||u[g]||i;return r?n.createElement(d,o(o({ref:t},s),{},{components:r})):n.createElement(d,o({ref:t},s))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8685:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return s},toc:function(){return u},default:function(){return g}});var n=r(7462),a=r(3366),i=(r(7294),r(4137)),o=["components"],l={title:"Utilize UDFs to Supercharge Queries in Apache Pinot",author:"PinotDev",author_title:"Pinot Editorial Team",author_url:"https://medium.com/apache-pinot-developer-blog",author_image_url:"https://pbs.twimg.com/profile_images/1400521020973400069/5y2UMi4r_400x400.jpg",description:"Scalar Functions that allow users to write and add their functions as a plugin.",keywords:["Pinot","UDF","User-Facing Analytics","Scalar Functions","Real-time data platform"],tags:["Pinot","SLA","DevBlog","ThirdEye","real-time data platform","Realtime","Analytics","User-Facing Analytics"]},c=void 0,p={permalink:"/blog/2020/08/08/DevBlog-ScalarUDFs",editUrl:"https://github.com/apache/pinot-site/edit/dev/website/blog/2020-08-08-DevBlog-ScalarUDFs.md",source:"@site/blog/2020-08-08-DevBlog-ScalarUDFs.md",title:"Utilize UDFs to Supercharge Queries in Apache Pinot",description:"Scalar Functions that allow users to write and add their functions as a plugin.",date:"2020-08-08T00:00:00.000Z",formattedDate:"August 8, 2020",tags:[{label:"Pinot",permalink:"/blog/tags/pinot"},{label:"SLA",permalink:"/blog/tags/sla"},{label:"DevBlog",permalink:"/blog/tags/dev-blog"},{label:"ThirdEye",permalink:"/blog/tags/third-eye"},{label:"real-time data platform",permalink:"/blog/tags/real-time-data-platform"},{label:"Realtime",permalink:"/blog/tags/realtime"},{label:"Analytics",permalink:"/blog/tags/analytics"},{label:"User-Facing Analytics",permalink:"/blog/tags/user-facing-analytics"}],readingTime:.51,truncated:!1,authors:[{name:"PinotDev",title:"Pinot Editorial Team",url:"https://medium.com/apache-pinot-developer-blog",imageURL:"https://pbs.twimg.com/profile_images/1400521020973400069/5y2UMi4r_400x400.jpg"}],prevItem:{title:"Achieving 99th percentile latency SLA using Apache Pinot",permalink:"/blog/2020/08/08/DevBlog-SLAApps"},nextItem:{title:"Building a culture around metrics and anomaly detection",permalink:"/blog/2020/07/28/DevBlog-AnomalyDetection"}},s={authorsImageUrls:[void 0]},u=[],m={toc:u};function g(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Apache Pinot is a realtime distributed OLAP datastore that can answer hundreds of thousands of queries with millisecond latencies. You can head over to ",(0,i.kt)("a",{parentName:"p",href:"https://pinot.apache.org/"},"https://pinot.apache.org/")," to get started with Apache Pinot."),(0,i.kt)("p",null,"While using any database, we can come across a scenario where a function required for the query is not supported out of the box. In such time, we have to resort to raising a pull request for a new function or finding a tedious workaround."),(0,i.kt)("p",null,"Scalar Functions that allow users to write and add their functions as a plugin."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://medium.com/apache-pinot-developer-blog/utilize-udfs-to-supercharge-queries-in-apache-pinot-e488a0f164f1"},"Read more at https://medium.com/apache-pinot-developer-blog/utilize-udfs-to-supercharge-queries-in-apache-pinot-e488a0f164f1")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/10368/0*VtswFI-HcaXyyjhK",alt:"Utilize UDFs to Supercharge Queries in Apache Pinot"})))}g.isMDXComponent=!0}}]);