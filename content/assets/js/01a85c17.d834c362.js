"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4013,0],{2896:function(e,t,a){a.d(t,{Z:function(){return h}});var r=a(3366),l=a(7294),n=a(6010),s=a(6726),c=a(2511),i="sidebar_2ahu",m="sidebarItemTitle_2hhb",o="sidebarItemList_2xAf",u="sidebarItem_2UVv",f="sidebarItemLink_1RT6",d="sidebarItemLinkActive_12pM",g=a(7130);function E(e){var t=e.sidebar;return 0===t.items.length?null:l.createElement("nav",{className:(0,n.Z)(i,"thin-scrollbar"),"aria-label":(0,g.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(m,"margin-bottom--md")},t.title),l.createElement("ul",{className:o},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:u},l.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:f,activeClassName:d},e.title))}))))}var v=["sidebar","toc","children"];var h=function(e){var t=e.sidebar,a=e.toc,c=e.children,i=(0,r.Z)(e,v),m=t&&t.items.length>0;return l.createElement(s.Z,i,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},m&&l.createElement("aside",{className:"col col--3"},l.createElement(E,{sidebar:t})),l.createElement("main",{className:(0,n.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},c),a&&l.createElement("div",{className:"col col--2"},a))))}},9018:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var r=a(7294),l=a(2896),n=a(2724),s=a(2613),c="tag_21yA";function i(e){var t=e.letterEntry;return r.createElement("article",null,r.createElement("h2",null,t.letter),r.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return r.createElement("li",{key:e.permalink,className:c},r.createElement(n.Z,e))}))),r.createElement("hr",null))}var m=function(e){var t=e.tags,a=(0,s.PZ)(t);return r.createElement("section",{className:"margin-vert--lg"},a.map((function(e){return r.createElement(i,{key:e.letter,letterEntry:e})})))};var o=function(e){var t=e.tags,a=e.sidebar,n=(0,s.MA)();return r.createElement(l.Z,{title:n,wrapperClassName:s.kM.wrapper.blogPages,pageClassName:s.kM.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"},sidebar:a},r.createElement("h1",null,n),r.createElement(m,{tags:Object.values(t)}))}},2724:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(7294),l=a(6010),n=a(2511),s="tag_1Okp",c="tagRegular_3MiF",i="tagWithCount_1HU1";var m=function(e){var t,a=e.permalink,m=e.name,o=e.count;return r.createElement(n.Z,{href:a,className:(0,l.Z)(s,(t={},t[c]=!o,t[i]=o,t))},m,o&&r.createElement("span",null,o))}},283:function(e,t,a){a.d(t,{Z:function(){return v}});var r=a(7462),l=a(3366),n=a(7294),s=a(6010),c=a(2511),i=a(2613),m=a(9524),o="footerLogoLink_qW4Z",u="footerCopyright_2yvt",f=a(4087),d=["to","href","label","prependBaseUrlToHref"];function g(e){var t=e.to,a=e.href,s=e.label,i=e.prependBaseUrlToHref,o=(0,l.Z)(e,d),u=(0,m.Z)(t),f=(0,m.Z)(a,{forcePrependBaseUrl:!0});return n.createElement(c.Z,(0,r.Z)({className:"footer__link-item"},a?{href:i?f:a}:{to:u},o),s)}var E=function(e){var t=e.sources,a=e.alt;return n.createElement(f.Z,{className:"footer__logo",alt:a,sources:t})};var v=function(){var e=(0,i.LU)().footer,t=e||{},a=t.copyright,r=t.links,l=void 0===r?[]:r,f=t.logo,d=void 0===f?{}:f,v={light:(0,m.Z)(d.src),dark:(0,m.Z)(d.srcDark||d.src)};return e?n.createElement("footer",{className:(0,s.Z)("footer",{"footer--dark":"dark"===e.style})},n.createElement("div",{className:"container"},l&&l.length>0&&n.createElement("div",{className:"row footer__links"},l.map((function(e,t){return n.createElement("div",{key:t,className:"col footer__col"},null!=e.title?n.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?n.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?n.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):n.createElement("li",{key:e.href||e.to,className:"footer__item"},n.createElement(g,e))}))):null)}))),(d||a)&&n.createElement("div",{className:"footer__bottom text--center"},d&&(d.src||d.srcDark)&&n.createElement("div",{className:"margin-bottom--sm"},d.href?n.createElement(c.Z,{href:d.href,className:o},n.createElement(E,{alt:d.alt,sources:v})):n.createElement(E,{alt:d.alt,sources:v})),a?n.createElement("div",{className:u,dangerouslySetInnerHTML:{__html:a}}):null))):null}}}]);