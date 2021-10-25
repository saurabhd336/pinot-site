"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6103,0],{3322:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var n=a(7294),l=a(4175),r=a(2896),o=a(8786),i=a(7130),s=a(2511);var c=function(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(s.Z,{className:"pagination-nav__link",to:a.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(i.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(s.Z,{className:"pagination-nav__link",to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(i.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),n.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},m=a(2613),u=a(6688);var v=function(e){var t,a=e.content,i=e.sidebar,s=a.frontMatter,v=a.assets,d=a.metadata,g=d.title,f=d.description,p=d.nextItem,_=d.prevItem,h=d.date,N=d.tags,E=d.authors,b=s.hide_table_of_contents,k=s.keywords,Z=s.toc_min_heading_level,C=s.toc_max_heading_level,y=null!=(t=v.image)?t:s.image;return n.createElement(r.Z,{wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogPostPage,sidebar:i,toc:!b&&a.toc&&a.toc.length>0?n.createElement(u.Z,{toc:a.toc,minHeadingLevel:Z,maxHeadingLevel:C}):void 0},n.createElement(l.Z,{title:g,description:f,keywords:k,image:y},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:h}),E.some((function(e){return e.url}))&&n.createElement("meta",{property:"article:author",content:E.map((function(e){return e.url})).filter(Boolean).join(",")}),N.length>0&&n.createElement("meta",{property:"article:tag",content:N.map((function(e){return e.label})).join(",")})),n.createElement(o.Z,{frontMatter:s,assets:v,metadata:d,isBlogPostPage:!0},n.createElement(a,null)),(p||_)&&n.createElement(c,{nextItem:p,prevItem:_}))}},6688:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7462),l=a(3366),r=a(7294),o=a(6010),i=a(4202),s="tableOfContents_35-E",c=["className"];var m=function(e){var t=e.className,a=(0,l.Z)(e,c);return r.createElement("div",{className:(0,o.Z)(s,"thin-scrollbar",t)},r.createElement(i.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},4202:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7462),l=a(3366),r=a(7294),o=a(2613),i=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function s(e){var t=e.toc,a=e.className,n=e.linkClassName,l=e.isChild;return t.length?r.createElement("ul",{className:l?void 0:a},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(s,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function c(e){var t=e.toc,a=e.className,c=void 0===a?"table-of-contents table-of-contents__left-border":a,m=e.linkClassName,u=void 0===m?"table-of-contents__link":m,v=e.linkActiveClassName,d=void 0===v?void 0:v,g=e.minHeadingLevel,f=e.maxHeadingLevel,p=(0,l.Z)(e,i),_=(0,o.LU)(),h=null!=g?g:_.tableOfContents.minHeadingLevel,N=null!=f?f:_.tableOfContents.maxHeadingLevel,E=(0,o.DA)({toc:t,minHeadingLevel:h,maxHeadingLevel:N}),b=(0,r.useMemo)((function(){if(u&&d)return{linkClassName:u,linkActiveClassName:d,minHeadingLevel:h,maxHeadingLevel:N}}),[u,d,h,N]);return(0,o.Si)(b),r.createElement(s,(0,n.Z)({toc:E,className:c,linkClassName:u},p))}},283:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(7462),l=a(3366),r=a(7294),o=a(6010),i=a(2511),s=a(2613),c=a(9524),m="footerLogoLink_qW4Z",u="footerCopyright_2yvt",v=a(4087),d=["to","href","label","prependBaseUrlToHref"];function g(e){var t=e.to,a=e.href,o=e.label,s=e.prependBaseUrlToHref,m=(0,l.Z)(e,d),u=(0,c.Z)(t),v=(0,c.Z)(a,{forcePrependBaseUrl:!0});return r.createElement(i.Z,(0,n.Z)({className:"footer__link-item"},a?{href:s?v:a}:{to:u},m),o)}var f=function(e){var t=e.sources,a=e.alt;return r.createElement(v.Z,{className:"footer__logo",alt:a,sources:t})};var p=function(){var e=(0,s.LU)().footer,t=e||{},a=t.copyright,n=t.links,l=void 0===n?[]:n,v=t.logo,d=void 0===v?{}:v,p={light:(0,c.Z)(d.src),dark:(0,c.Z)(d.srcDark||d.src)};return e?r.createElement("footer",{className:(0,o.Z)("footer",{"footer--dark":"dark"===e.style})},r.createElement("div",{className:"container"},l&&l.length>0&&r.createElement("div",{className:"row footer__links"},l.map((function(e,t){return r.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.createElement("li",{key:e.href||e.to,className:"footer__item"},r.createElement(g,e))}))):null)}))),(d||a)&&r.createElement("div",{className:"footer__bottom text--center"},d&&(d.src||d.srcDark)&&r.createElement("div",{className:"margin-bottom--sm"},d.href?r.createElement(i.Z,{href:d.href,className:m},r.createElement(f,{alt:d.alt,sources:p})):r.createElement(f,{alt:d.alt,sources:p})),a?r.createElement("div",{className:u,dangerouslySetInnerHTML:{__html:a}}):null))):null}}}]);