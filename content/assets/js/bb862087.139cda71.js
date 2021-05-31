/*! For license information please see bb862087.139cda71.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{118:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(8),i=(n(0),n(145)),a=n(152),c=["components"],s={title:"Misc Content",description:"Misc content",sidebar_label:"hidden",hide_pagination:!0},u={unversionedId:"misc",id:"misc",isDocsHomePage:!1,title:"Misc Content",description:"Misc content",source:"@site/docs/misc.md",sourceDirName:".",slug:"/misc",permalink:"/docs/misc",editUrl:"https://github.com/apache/incubator-pinot/edit/master/website/docs/misc.md",version:"current",sidebar_label:"hidden",frontMatter:{title:"Misc Content",description:"Misc content",sidebar_label:"hidden",hide_pagination:!0}},l=[],f={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,c);return Object(i.b)("wrapper",Object(r.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Provide basic foundation of Pinot."),Object(i.b)(a.a,{to:"/docs/about/what_is_pinot/",mdxType:"Jump"},"What is Pinot?"),Object(i.b)(a.a,{to:"/docs/about/features_of_pinot/",mdxType:"Jump"},"Features of Pinot"),Object(i.b)(a.a,{to:"/docs/about/guarantees/",mdxType:"Jump"},"Who is using Pinot?"))}p.isMDXComponent=!0},145:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(n),d=r,m=f["".concat(a,".").concat(d)]||f[d]||p[d]||i;return n?o.a.createElement(m,c(c({ref:t},u),{},{components:n})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},146:function(e,t,n){"use strict";var r=n(8),o=n(0),i=n.n(o),a=n(10),c=n(151),s=n(7),u=Object(o.createContext)({collectLink:function(){}}),l=n(150),f=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];t.a=function(e){var t,n,p,d=e.isNavLink,m=e.to,b=e.href,v=e.activeClassName,h=e.isActive,O=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,y=void 0===g||g,j=Object(r.a)(e,f),w=Object(l.b)().withBaseUrl,E=Object(o.useContext)(u),P=m||b,N=Object(c.a)(P),x=null==P?void 0:P.replace("pathname://",""),k=void 0!==x?(n=x,y&&function(e){return e.startsWith("/")}(n)?w(n):n):void 0,C=Object(o.useRef)(!1),M=d?a.e:a.c,T=s.a.canUseIntersectionObserver;Object(o.useEffect)((function(){return!T&&N&&null!=k&&window.docusaurus.prefetch(k),function(){T&&p&&p.disconnect()}}),[k,T,N]);var _=null!==(t=null==k?void 0:k.startsWith("#"))&&void 0!==t&&t,D=!k||!N||_;return k&&N&&!_&&!O&&E.collectLink(k),D?i.a.createElement("a",Object.assign({href:k},P&&!N&&{target:"_blank",rel:"noopener noreferrer"},j)):i.a.createElement(M,Object.assign({},j,{onMouseEnter:function(){C.current||null==k||(window.docusaurus.preload(k),C.current=!0)},innerRef:function(e){var t,n;T&&e&&N&&(t=e,n=function(){null!=k&&window.docusaurus.prefetch(k)},(p=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(t),p.disconnect(),n())}))}))).observe(t))},to:k||""},d&&{isActive:h,activeClassName:v}))}},149:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&e.push(a)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var c in r)n.call(r,c)&&r[c]&&e.push(c);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},150:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}));var r=n(16),o=n(151);function i(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,c=void 0!==a&&a,s=i.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+l:l}(i,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},151:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},152:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(146),a=n(149),c=n.n(a);n(57);t.a=function(e){var t=e.children,n=e.className,r=e.badge,a=e.icon,s=e.size,u=e.target,l=e.to,f=c()("jump-to","jump-to--"+s,n),p=o.a.createElement("div",{className:"jump-to--inner"},o.a.createElement("div",{className:"jump-to--inner-2"},o.a.createElement("div",{className:"jump-to--main"},r?o.a.createElement("span",{className:"badge badge--primary badge--right"},r):"",t),o.a.createElement("div",{className:"jump-to--right"},o.a.createElement("i",{className:"feather icon-"+(a||"chevron-right")+" arrow"}))));return u?o.a.createElement("a",{href:l,target:u,className:f},p):o.a.createElement(i.a,{to:l,className:f},p)}}}]);