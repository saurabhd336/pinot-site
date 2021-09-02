"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3298],{4137:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(t),u=i,g=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return t?r.createElement(g,a(a({ref:n},p),{},{components:t})):r.createElement(g,a({ref:n},p))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8819:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return p},toc:function(){return d},default:function(){return u}});var r=t(7462),i=t(3366),o=(t(7294),t(4137)),a=["components"],l={title:"A Brief History of Scaling LinkedIn",author:"LinkedIn",author_title:"LinkedIn Engineering Team",author_url:"https://engineering.linkedin.com/blog/topic/pinot",author_image_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/512px-Linkedin_icon.svg.png",description:"LinkedIn started in 2003 with the goal of connecting to your network for better job opportunities. It had only 2,700 members the first week. Fast forward many years, and LinkedIn\u2019s product portfolio, member base, and server load has grown tremendously.",keywords:["Pinot","LinkedIn","Data Scaling","User-Facing Analytics","Real-time data platform"],tags:["Pinot","LinkedIn","real-time data platform","Realtime","Analytics","User-Facing Analytics"]},c=void 0,s={permalink:"/blog/2015/05/16/LinkedIn-Scaling",editUrl:"https://github.com/apache/pinot-site/edit/dev/website/blog/2015-05-16-LinkedIn-Scaling.md",source:"@site/blog/2015-05-16-LinkedIn-Scaling.md",title:"A Brief History of Scaling LinkedIn",description:"LinkedIn started in 2003 with the goal of connecting to your network for better job opportunities. It had only 2,700 members the first week. Fast forward many years, and LinkedIn\u2019s product portfolio, member base, and server load has grown tremendously.",date:"2015-05-16T00:00:00.000Z",formattedDate:"May 16, 2015",tags:[{label:"Pinot",permalink:"/blog/tags/pinot"},{label:"LinkedIn",permalink:"/blog/tags/linked-in"},{label:"real-time data platform",permalink:"/blog/tags/real-time-data-platform"},{label:"Realtime",permalink:"/blog/tags/realtime"},{label:"Analytics",permalink:"/blog/tags/analytics"},{label:"User-Facing Analytics",permalink:"/blog/tags/user-facing-analytics"}],readingTime:.545,truncated:!1,authors:[{name:"LinkedIn",title:"LinkedIn Engineering Team",url:"https://engineering.linkedin.com/blog/topic/pinot",imageURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/512px-Linkedin_icon.svg.png"}],prevItem:{title:"Open Sourcing Pinot - Scaling the Wall of Real-Time Analytics",permalink:"/blog/2015/06/10/Open-Sourcing-Pinot"}},p={authorsImageUrls:[void 0]},d=[],m={toc:d};function u(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"LinkedIn started in 2003 with the goal of connecting to your network for better job opportunities. It had only 2,700 members the first week. Fast forward many years, and LinkedIn\u2019s product portfolio, member base, and server load has grown tremendously."),(0,o.kt)("p",null,"Today, LinkedIn operates globally with more than 350 million members. We serve tens of thousands of web pages every second of every day. We've hit our mobile moment where mobile accounts for more than 50 percent of all global traffic. All those requests are fetching data from our backend systems, which in turn handle millions of queries per second."),(0,o.kt)("p",null,"Read More at ",(0,o.kt)("a",{parentName:"p",href:"https://engineering.linkedin.com/architecture/brief-history-scaling-linkedin"},"https://engineering.linkedin.com/architecture/brief-history-scaling-linkedin")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://content.linkedin.com/content/dam/engineering/en-us/blog/migrated/data_centers_pops_0.png",alt:"A Brief History of Scaling LinkedIn"})))}u.isMDXComponent=!0}}]);