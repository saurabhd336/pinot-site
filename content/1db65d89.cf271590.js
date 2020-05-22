/*! For license information please see 1db65d89.cf271590.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{151:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return c})),r.d(e,"metadata",(function(){return u})),r.d(e,"rightToc",(function(){return s})),r.d(e,"default",(function(){return p}));var n=r(2),o=r(9),i=(r(0),r(190)),a=r(209),c={title:"User Guide",description:"User Guide",sidebar_label:"hidden",hide_pagination:!0},u={id:"user-guide",title:"User Guide",description:"User Guide",source:"@site/docs/user-guide.md",permalink:"/docs/user-guide",editUrl:"https://github.com/apache/incubator-pinot/edit/master/website/docs/user-guide.md",sidebar_label:"hidden"},s=[],f={rightToc:s};function p(t){var e=t.components,r=Object(o.a)(t,["components"]);return Object(i.b)("wrapper",Object(n.a)({},f,r,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Provide basic foundation of Pinot."),Object(i.b)(a.a,{to:"/docs/about/what_is_pinot/",mdxType:"Jump"},"What is Pinot?"),Object(i.b)(a.a,{to:"/docs/about/features_of_pinot/",mdxType:"Jump"},"Features of Pinot"),Object(i.b)(a.a,{to:"/docs/about/guarantees/",mdxType:"Jump"},"Who is using Pinot?"))}p.isMDXComponent=!0},190:function(t,e,r){"use strict";r.d(e,"a",(function(){return p})),r.d(e,"b",(function(){return y}));var n=r(0),o=r.n(n);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var s=o.a.createContext({}),f=function(t){var e=o.a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},p=function(t){var e=f(t.components);return o.a.createElement(s.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},b=o.a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,a=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),p=f(r),b=n,y=p["".concat(a,".").concat(b)]||p[b]||l[b]||i;return r?o.a.createElement(y,c(c({ref:e},s),{},{components:r})):o.a.createElement(y,c({ref:e},s))}));function y(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,a=new Array(i);a[0]=b;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c.mdxType="string"==typeof t?t:n,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},191:function(t,e,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var i=typeof n;if("string"===i||"number"===i)t.push(n);else if(Array.isArray(n)&&n.length){var a=o.apply(null,n);a&&t.push(a)}else if("object"===i)for(var c in n)r.call(n,c)&&n[c]&&t.push(c)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(n=function(){return o}.apply(e,[]))||(t.exports=n)}()},192:function(t,e){e.f=Object.getOwnPropertySymbols},193:function(t,e,r){var n=r(76),o=r(53).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},194:function(t,e,r){e.f=r(3)},195:function(t,e,r){"use strict";r(198),r(197),r(204);var n=r(0),o=r.n(n),i=r(39),a=r(196),c=r(27),u=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r};e.a=function(t){var e,r=t.isNavLink,s=u(t,["isNavLink"]),f=s.to,p=s.href,l=f||p,b=Object(a.a)(l),y=Object(n.useRef)(!1),m=r?i.c:i.b,d=c.a.canUseIntersectionObserver;return Object(n.useEffect)((function(){return!d&&b&&window.docusaurus.prefetch(l),function(){d&&e&&e.disconnect()}}),[l,d,b]),l&&b&&!l.startsWith("#")?o.a.createElement(m,Object.assign({},s,{onMouseEnter:function(){y.current||(window.docusaurus.preload(l),y.current=!0)},innerRef:function(t){var r,n;d&&t&&b&&(r=t,n=function(){window.docusaurus.prefetch(l)},(e=new window.IntersectionObserver((function(t){t.forEach((function(t){r===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(e.unobserve(r),e.disconnect(),n())}))}))).observe(r))},to:l})):o.a.createElement("a",Object.assign({},s,{href:l}))}},196:function(t,e,r){"use strict";function n(t){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(t)}r.d(e,"a",(function(){return n}))},197:function(t,e,r){"use strict";var n=r(17),o=r(38),i=r(199),a="".startsWith;n(n.P+n.F*r(200)("startsWith"),"String",{startsWith:function(t){var e=i(this,t,"startsWith"),r=o(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),n=String(t);return a?a.call(e,n,r):e.slice(r,r+n.length)===n}})},198:function(t,e,r){var n=r(17);n(n.S+n.F,"Object",{assign:r(203)})},199:function(t,e,r){var n=r(72),o=r(28);t.exports=function(t,e,r){if(n(e))throw TypeError("String#"+r+" doesn't accept regex!");return String(o(t))}},200:function(t,e,r){var n=r(3)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[n]=!1,!"/./"[t](e)}catch(o){}}return!0}},201:function(t,e,r){var n=r(70),o=r(52),i=r(25),a=r(71),c=r(24),u=r(74),s=Object.getOwnPropertyDescriptor;e.f=r(11)?s:function(t,e){if(t=i(t),e=a(e,!0),u)try{return s(t,e)}catch(r){}if(c(t,e))return o(!n.f.call(t,e),t[e])}},202:function(t,e,r){var n=r(19);t.exports=Array.isArray||function(t){return"Array"==n(t)}},203:function(t,e,r){"use strict";var n=r(11),o=r(26),i=r(192),a=r(70),c=r(51),u=r(73),s=Object.assign;t.exports=!s||r(18)((function(){var t={},e={},r=Symbol(),n="abcdefghijklmnopqrst";return t[r]=7,n.split("").forEach((function(t){e[t]=t})),7!=s({},t)[r]||Object.keys(s({},e)).join("")!=n}))?function(t,e){for(var r=c(t),s=arguments.length,f=1,p=i.f,l=a.f;s>f;)for(var b,y=u(arguments[f++]),m=p?o(y).concat(p(y)):o(y),d=m.length,h=0;d>h;)b=m[h++],n&&!l.call(y,b)||(r[b]=y[b]);return r}:s},204:function(t,e,r){"use strict";var n=r(6),o=r(24),i=r(11),a=r(17),c=r(13),u=r(205).KEY,s=r(18),f=r(40),p=r(41),l=r(37),b=r(3),y=r(194),m=r(206),d=r(207),h=r(202),v=r(8),g=r(12),O=r(51),j=r(25),w=r(71),E=r(52),S=r(75),P=r(208),x=r(201),N=r(192),T=r(23),k=r(26),F=x.f,D=T.f,_=P.f,W=n.Symbol,J=n.JSON,I=J&&J.stringify,M=b("_hidden"),A=b("toPrimitive"),C={}.propertyIsEnumerable,U=f("symbol-registry"),G=f("symbols"),R=f("op-symbols"),K=Object.prototype,L="function"==typeof W&&!!N.f,X=n.QObject,z=!X||!X.prototype||!X.prototype.findChild,Y=i&&s((function(){return 7!=S(D({},"a",{get:function(){return D(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=F(K,e);n&&delete K[e],D(t,e,r),n&&t!==K&&D(K,e,n)}:D,q=function(t){var e=G[t]=S(W.prototype);return e._k=t,e},Q=L&&"symbol"==typeof W.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof W},B=function(t,e,r){return t===K&&B(R,e,r),v(t),e=w(e,!0),v(r),o(G,e)?(r.enumerable?(o(t,M)&&t[M][e]&&(t[M][e]=!1),r=S(r,{enumerable:E(0,!1)})):(o(t,M)||D(t,M,E(1,{})),t[M][e]=!0),Y(t,e,r)):D(t,e,r)},H=function(t,e){v(t);for(var r,n=d(e=j(e)),o=0,i=n.length;i>o;)B(t,r=n[o++],e[r]);return t},V=function(t){var e=C.call(this,t=w(t,!0));return!(this===K&&o(G,t)&&!o(R,t))&&(!(e||!o(this,t)||!o(G,t)||o(this,M)&&this[M][t])||e)},Z=function(t,e){if(t=j(t),e=w(e,!0),t!==K||!o(G,e)||o(R,e)){var r=F(t,e);return!r||!o(G,e)||o(t,M)&&t[M][e]||(r.enumerable=!0),r}},$=function(t){for(var e,r=_(j(t)),n=[],i=0;r.length>i;)o(G,e=r[i++])||e==M||e==u||n.push(e);return n},tt=function(t){for(var e,r=t===K,n=_(r?R:j(t)),i=[],a=0;n.length>a;)!o(G,e=n[a++])||r&&!o(K,e)||i.push(G[e]);return i};L||(c((W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor!");var t=l(arguments.length>0?arguments[0]:void 0),e=function(r){this===K&&e.call(R,r),o(this,M)&&o(this[M],t)&&(this[M][t]=!1),Y(this,t,E(1,r))};return i&&z&&Y(K,t,{configurable:!0,set:e}),q(t)}).prototype,"toString",(function(){return this._k})),x.f=Z,T.f=B,r(193).f=P.f=$,r(70).f=V,N.f=tt,i&&!r(36)&&c(K,"propertyIsEnumerable",V,!0),y.f=function(t){return q(b(t))}),a(a.G+a.W+a.F*!L,{Symbol:W});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),rt=0;et.length>rt;)b(et[rt++]);for(var nt=k(b.store),ot=0;nt.length>ot;)m(nt[ot++]);a(a.S+a.F*!L,"Symbol",{for:function(t){return o(U,t+="")?U[t]:U[t]=W(t)},keyFor:function(t){if(!Q(t))throw TypeError(t+" is not a symbol!");for(var e in U)if(U[e]===t)return e},useSetter:function(){z=!0},useSimple:function(){z=!1}}),a(a.S+a.F*!L,"Object",{create:function(t,e){return void 0===e?S(t):H(S(t),e)},defineProperty:B,defineProperties:H,getOwnPropertyDescriptor:Z,getOwnPropertyNames:$,getOwnPropertySymbols:tt});var it=s((function(){N.f(1)}));a(a.S+a.F*it,"Object",{getOwnPropertySymbols:function(t){return N.f(O(t))}}),J&&a(a.S+a.F*(!L||s((function(){var t=W();return"[null]"!=I([t])||"{}"!=I({a:t})||"{}"!=I(Object(t))}))),"JSON",{stringify:function(t){for(var e,r,n=[t],o=1;arguments.length>o;)n.push(arguments[o++]);if(r=e=n[1],(g(e)||void 0!==t)&&!Q(t))return h(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!Q(e))return e}),n[1]=e,I.apply(J,n)}}),W.prototype[A]||r(10)(W.prototype,A,W.prototype.valueOf),p(W,"Symbol"),p(Math,"Math",!0),p(n.JSON,"JSON",!0)},205:function(t,e,r){var n=r(37)("meta"),o=r(12),i=r(24),a=r(23).f,c=0,u=Object.isExtensible||function(){return!0},s=!r(18)((function(){return u(Object.preventExtensions({}))})),f=function(t){a(t,n,{value:{i:"O"+ ++c,w:{}}})},p=t.exports={KEY:n,NEED:!1,fastKey:function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,n)){if(!u(t))return"F";if(!e)return"E";f(t)}return t[n].i},getWeak:function(t,e){if(!i(t,n)){if(!u(t))return!0;if(!e)return!1;f(t)}return t[n].w},onFreeze:function(t){return s&&p.NEED&&u(t)&&!i(t,n)&&f(t),t}}},206:function(t,e,r){var n=r(6),o=r(14),i=r(36),a=r(194),c=r(23).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:n.Symbol||{});"_"==t.charAt(0)||t in e||c(e,t,{value:a.f(t)})}},207:function(t,e,r){var n=r(26),o=r(192),i=r(70);t.exports=function(t){var e=n(t),r=o.f;if(r)for(var a,c=r(t),u=i.f,s=0;c.length>s;)u.call(t,a=c[s++])&&e.push(a);return e}},208:function(t,e,r){var n=r(25),o=r(193).f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(e){return a.slice()}}(t):o(n(t))}},209:function(t,e,r){"use strict";var n=r(0),o=r.n(n),i=r(195),a=r(191),c=r.n(a);r(127);e.a=function(t){var e=t.children,r=t.className,n=t.badge,a=t.icon,u=t.size,s=t.target,f=t.to,p=c()("jump-to","jump-to--"+u,r),l=o.a.createElement("div",{className:"jump-to--inner"},o.a.createElement("div",{className:"jump-to--inner-2"},o.a.createElement("div",{className:"jump-to--main"},n?o.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",e),o.a.createElement("div",{className:"jump-to--right"},o.a.createElement("i",{className:"feather icon-"+(a||"chevron-right")+" arrow"}))));return s?o.a.createElement("a",{href:f,target:s,className:p},l):o.a.createElement(i.a,{to:f,className:p},l)}}}]);