"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8610,0],{3866:function(e,t,a){a.r(t);var r=a(7294),l=a(2511),s=a(2896),n=a(8786),o=a(7130),c=a(5653);t.default=function(e){var t,a=e.metadata,m=e.items,i=e.sidebar,u=a.allTagsPath,g=a.name,f=a.count,d=(t=(0,c.c2)().selectMessage,function(e){return t(e,(0,o.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),p=(0,o.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:d(f),tagName:g});return r.createElement(s.Z,{title:p,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogTagPostListPage,searchMetadatas:{tag:"blog_tags_posts"},sidebar:i},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,p),r.createElement(l.Z,{href:u},r.createElement(o.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),m.map((function(e){var t=e.content;return r.createElement(n.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},r.createElement(t,null))})))}},283:function(e,t,a){a.d(t,{Z:function(){return h}});var r=a(7462),l=a(3366),s=a(7294),n=a(6010),o=a(2511),c=a(5653),m=a(9524),i="footerLogoLink_qW4Z",u="footerCopyright_2yvt",g=a(4087),f=["to","href","label","prependBaseUrlToHref"];function d(e){var t=e.to,a=e.href,n=e.label,c=e.prependBaseUrlToHref,i=(0,l.Z)(e,f),u=(0,m.Z)(t),g=(0,m.Z)(a,{forcePrependBaseUrl:!0});return s.createElement(o.Z,(0,r.Z)({className:"footer__link-item"},a?{href:c?g:a}:{to:u},i),n)}var p=function(e){var t=e.sources,a=e.alt;return s.createElement(g.Z,{className:"footer__logo",alt:a,sources:t})};var h=function(){var e=(0,c.LU)().footer,t=e||{},a=t.copyright,r=t.links,l=void 0===r?[]:r,g=t.logo,f=void 0===g?{}:g,h={light:(0,m.Z)(f.src),dark:(0,m.Z)(f.srcDark||f.src)};return e?s.createElement("footer",{className:(0,n.Z)("footer",{"footer--dark":"dark"===e.style})},s.createElement("div",{className:"container"},l&&l.length>0&&s.createElement("div",{className:"row footer__links"},l.map((function(e,t){return s.createElement("div",{key:t,className:"col footer__col"},null!=e.title?s.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?s.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?s.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):s.createElement("li",{key:e.href||e.to,className:"footer__item"},s.createElement(d,e))}))):null)}))),(f||a)&&s.createElement("div",{className:"footer__bottom text--center"},f&&(f.src||f.srcDark)&&s.createElement("div",{className:"margin-bottom--sm"},f.href?s.createElement(o.Z,{href:f.href,className:i},s.createElement(p,{alt:f.alt,sources:h})):s.createElement(p,{alt:f.alt,sources:h})),a?s.createElement("div",{className:u,dangerouslySetInnerHTML:{__html:a}}):null))):null}}}]);