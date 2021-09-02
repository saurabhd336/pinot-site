"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6103,0],{3322:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var r=a(7294),n=a(4175),l=a(2896),o=a(8786),s=a(7130),i=a(2511);var c=function(e){var t=e.nextItem,a=e.prevItem;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},r.createElement("div",{className:"pagination-nav__item"},a&&r.createElement(i.Z,{className:"pagination-nav__link",to:a.permalink},r.createElement("div",{className:"pagination-nav__sublabel"},r.createElement(s.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),r.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&r.createElement(i.Z,{className:"pagination-nav__link",to:t.permalink},r.createElement("div",{className:"pagination-nav__sublabel"},r.createElement(s.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),r.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},m=a(5653);var p=function(e){var t,a=e.content,s=e.sidebar,i=a.frontMatter,p=a.assets,u=a.metadata,g=u.title,d=u.description,f=u.nextItem,v=u.prevItem,_=u.date,E=u.tags,b=u.authors,h=i.hide_table_of_contents,N=i.keywords,k=null!=(t=p.image)?t:i.image;return r.createElement(l.Z,{wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogPostPage,sidebar:s,toc:!h&&a.toc?a.toc:void 0},r.createElement(n.Z,{title:g,description:d,keywords:N,image:k},r.createElement("meta",{property:"og:type",content:"article"}),r.createElement("meta",{property:"article:published_time",content:_}),b.some((function(e){return e.url}))&&r.createElement("meta",{property:"article:author",content:b.map((function(e){return e.url})).filter(Boolean).join(",")}),E.length>0&&r.createElement("meta",{property:"article:tag",content:E.map((function(e){return e.label})).join(",")})),r.createElement(o.Z,{frontMatter:i,assets:p,metadata:u,isBlogPostPage:!0},r.createElement(a,null)),(f||v)&&r.createElement(c,{nextItem:f,prevItem:v}))}},283:function(e,t,a){a.d(t,{Z:function(){return v}});var r=a(7462),n=a(3366),l=a(7294),o=a(6010),s=a(2511),i=a(5653),c=a(9524),m="footerLogoLink_qW4Z",p="footerCopyright_2yvt",u=a(4087),g=["to","href","label","prependBaseUrlToHref"];function d(e){var t=e.to,a=e.href,o=e.label,i=e.prependBaseUrlToHref,m=(0,n.Z)(e,g),p=(0,c.Z)(t),u=(0,c.Z)(a,{forcePrependBaseUrl:!0});return l.createElement(s.Z,(0,r.Z)({className:"footer__link-item"},a?{href:i?u:a}:{to:p},m),o)}var f=function(e){var t=e.sources,a=e.alt;return l.createElement(u.Z,{className:"footer__logo",alt:a,sources:t})};var v=function(){var e=(0,i.LU)().footer,t=e||{},a=t.copyright,r=t.links,n=void 0===r?[]:r,u=t.logo,g=void 0===u?{}:u,v={light:(0,c.Z)(g.src),dark:(0,c.Z)(g.srcDark||g.src)};return e?l.createElement("footer",{className:(0,o.Z)("footer",{"footer--dark":"dark"===e.style})},l.createElement("div",{className:"container"},n&&n.length>0&&l.createElement("div",{className:"row footer__links"},n.map((function(e,t){return l.createElement("div",{key:t,className:"col footer__col"},null!=e.title?l.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?l.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):l.createElement("li",{key:e.href||e.to,className:"footer__item"},l.createElement(d,e))}))):null)}))),(g||a)&&l.createElement("div",{className:"footer__bottom text--center"},g&&(g.src||g.srcDark)&&l.createElement("div",{className:"margin-bottom--sm"},g.href?l.createElement(s.Z,{href:g.href,className:m},l.createElement(f,{alt:g.alt,sources:v})):l.createElement(f,{alt:g.alt,sources:v})),a?l.createElement("div",{className:p,dangerouslySetInnerHTML:{__html:a}}):null))):null}}}]);