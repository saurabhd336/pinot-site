"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9932],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,f=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2598:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(4137)),i=["components"],s={id:"what_is_pinot",title:"What is Pinot",sidebar_label:"What is Pinot",draft:!0},l=void 0,c={unversionedId:"about/what_is_pinot",id:"about/what_is_pinot",isDocsHomePage:!1,title:"What is Pinot",description:"Apache Pinot is a realtime distributed OLAP datastore, which is used to deliver scalable real time analytics with low latency. It can ingest data from batch data sources (such as HDFS, S3, Azure Data Lake, Google Cloud Storage) as well as streaming sources (such as Kafka). Pinot is designed to scale horizontally, so that it can scale to larger data sets and higher query rates as needed.",source:"@site/docs/about/what_is_pinot.md",sourceDirName:"about",slug:"/about/what_is_pinot",permalink:"/docs/about/what_is_pinot",editUrl:"https://github.com/apache/pinot/edit/master/website/docs/about/what_is_pinot.md",tags:[],version:"current",frontMatter:{id:"what_is_pinot",title:"What is Pinot",sidebar_label:"What is Pinot",draft:!0},sidebar:"docs",next:{title:"Features of Pinot",permalink:"/docs/about/features_of_pinot"}},u=[{value:"When should I use it?",id:"when-should-i-use-it",children:[],level:2},{value:"When should I not use it?",id:"when-should-i-not-use-it",children:[],level:2},{value:"Quick example",id:"quick-example",children:[],level:2},{value:"Who uses Pinot?",id:"who-uses-pinot",children:[],level:2}],p={toc:u};function d(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Apache Pinot is a realtime distributed OLAP datastore, which is used to deliver scalable real time analytics with low latency. It can ingest data from batch data sources (such as HDFS, S3, Azure Data Lake, Google Cloud Storage) as well as streaming sources (such as Kafka). Pinot is designed to scale horizontally, so that it can scale to larger data sets and higher query rates as needed."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Pinot",src:n(5913).Z})),(0,o.kt)("h2",{id:"when-should-i-use-it"},"When should I use it?"),(0,o.kt)("p",null,"Pinot is designed to answer OLAP queries with low latency. It is suited in contexts where fast analytics, such as aggregations, are needed on immutable data, possibly, with real-time data ingestion."),(0,o.kt)("h2",{id:"when-should-i-not-use-it"},"When should I not use it?"),(0,o.kt)("p",null,"Pinot is not a replacement for your database, nor a search engine. It addresses fast analytics on immutable data and it is not thought by design, to handle data updates or deletions. Joins are currently not supported, but this problem can be overcome by using ",(0,o.kt)("a",{parentName:"p",href:"(https://trino.io/)"},"Trino")," or ",(0,o.kt)("a",{parentName:"p",href:"(https://prestodb.io/)"},"PrestoDB")," for querying Pinot."),(0,o.kt)("p",null,"For more information about ",(0,o.kt)("a",{parentName:"p",href:"https://trino.io/docs/current/connector/pinot.html"},"Trino Pinot Connector"),", see ",(0,o.kt)("a",{parentName:"p",href:"https://docs.pinot.apache.org/integrations/trino"},"Trino Pinot Integration"),"."),(0,o.kt)("p",null,"For more information about ",(0,o.kt)("a",{parentName:"p",href:"https://prestodb.io/docs/current/connector/pinot.html"},"Presto Pinot Connector"),", see ",(0,o.kt)("a",{parentName:"p",href:"https://docs.pinot.apache.org/integrations/presto"},"Presto Pinot Integration"),"."),(0,o.kt)("h2",{id:"quick-example"},"Quick example"),(0,o.kt)("p",null,"Pinot works very well for querying time series data with lots of Dimensions and Metrics.\nFilters and aggregations are easy and fast."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-SQL"},"SELECT sum(clicks), sum(impressions) FROM AdAnalyticsTable\n  WHERE ((daysSinceEpoch >= 17849 AND daysSinceEpoch <= 17856)) AND accountId IN (123456789)\n  GROUP BY daysSinceEpoch TOP 100\n")),(0,o.kt)("h2",{id:"who-uses-pinot"},"Who uses Pinot?"),(0,o.kt)("p",null,"Pinot powers several big players, including LinkedIn, Uber, Factual, Weibo, Slack and more.."))}d.isMDXComponent=!0},5913:function(e,t,n){t.Z=n.p+"assets/images/pinot-overview-f1b5a17c2e53228461f1510ea2fe0e9b.png"}}]);