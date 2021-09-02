"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8660],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),k=r,d=m["".concat(s,".").concat(k)]||m[k]||p[k]||o;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8448:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},7358:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7294),r=n(2713);var o=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),l="tabItem_1uMI",s="tabItemActive_2DSg";var u=37,c=39;var p=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,p=e.values,m=e.groupId,k=e.className,d=o(),b=d.tabGroupChoices,f=d.setTabGroupChoices,h=(0,a.useState)(r),g=h[0],v=h[1],N=a.Children.toArray(e.children),y=[];if(null!=m){var P=b[m];null!=P&&P!==g&&p.some((function(e){return e.value===P}))&&v(P)}var w=function(e){var t=e.currentTarget,n=y.indexOf(t),a=p[n].value;v(a),null!=m&&(f(m,a),setTimeout((function(){var e,n,a,r,o,i,l,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,l=i.innerHeight,u=i.innerWidth,n>=0&&o<=u&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},O=function(e){var t,n;switch(e.keyCode){case c:var a=y.indexOf(e.target)+1;n=y[a]||y[0];break;case u:var r=y.indexOf(e.target)-1;n=y[r]||y[y.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},k)},p.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":g===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:O,onFocus:w,onClick:w},n)}))),t?(0,a.cloneElement)(N.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},2713:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},6591:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return m},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(4137)),i=n(7358),l=n(8448),s=["components"],u={title:"Running Pinot in Docker",sidebar_label:"Docker",description:"Using Pinot on Docker",source_url:"https://github.com/",draft:!0},c=void 0,p={unversionedId:"administration/installation/containers/docker",id:"administration/installation/containers/docker",isDocsHomePage:!1,title:"Running Pinot in Docker",description:"Using Pinot on Docker",source:"@site/docs/administration/installation/containers/docker.md",sourceDirName:"administration/installation/containers",slug:"/administration/installation/containers/docker",permalink:"/docs/administration/installation/containers/docker",editUrl:"https://github.com/apache/pinot/edit/master/website/docs/administration/installation/containers/docker.md",tags:[],version:"current",frontMatter:{title:"Running Pinot in Docker",sidebar_label:"Docker",description:"Using Pinot on Docker",source_url:"https://github.com/",draft:!0},sidebar:"docs",previous:{title:"Running Pinot locally",permalink:"/docs/administration/running_locally"},next:{title:"Kubernetes",permalink:"/docs/administration/installation/cloud/on-premise"}},m=[{value:"Running",id:"running",children:[]}],k={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Apache Pinot started maintaing the ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/apachepinot/pinot"},(0,o.kt)("inlineCode",{parentName:"a"},"apachepinot/pinot"))," Docker images\navailable on ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/apachepinot/pinot/tags"},"Docker Hub")),(0,o.kt)("blockquote",null,(0,o.kt)("b",null,"Prerequisites:")," ",(0,o.kt)("br",null)," ",(0,o.kt)("p",null,"\xa0 ",(0,o.kt)("a",{href:"https://hub.docker.com/editions/community/docker-ce-desktop-mac",target:"_blank"},"Install Docker"),(0,o.kt)("br",null)," \xa0Try ",(0,o.kt)("a",{href:"https://hub.docker.com/editions/community/docker-ce-desktop-mac",target:"_blank"},"Kubernetes Quickstart")," if you already have a minikube cluster or docker kubernetes setup.")),(0,o.kt)("h2",{id:"running"},"Running"),(0,o.kt)("p",null,"Create an isolated bridge network in docker"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker network create -d bridge pinot-demo\n")),(0,o.kt)("p",null,"We'll be running a docker image apachepinot/pinot:latest to run a quick start, which does the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sets up the Pinot cluster QuickStartCluster"),(0,o.kt)("li",{parentName:"ul"},"Creates a sample table and loads sample data")),(0,o.kt)("p",null,"There's 3 types of quick start"),(0,o.kt)(i.Z,{block:!0,defaultValue:"Batch",urlKey:"arch",values:[{label:"Batch",value:"Batch"},{label:"Streaming",value:"Streaming"},{label:"Hybrid",value:"Hybrid"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Batch",mdxType:"TabItem"},(0,o.kt)("p",null,"Batch"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Starts Pinot deployment by starting:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Apache Zookeeper"),(0,o.kt)("li",{parentName:"ul"},"Pinot Controller"),(0,o.kt)("li",{parentName:"ul"},"Pinot Broker"),(0,o.kt)("li",{parentName:"ul"},"Pinot Server"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Creates a demo table:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"baseballStats"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Launches a standalone data ingestion job:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"build one Pinot segment for a given csv data file for table baseballStats"),(0,o.kt)("li",{parentName:"ul"},"push built segment to Pinot controller"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Issues sample queries to Pinot"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run \\\n  --network=pinot-demo \\\n  --name pinot-quickstart \\\n  -p 9000:9000 \\\n  -d apachepinot/pinot:latest QuickStart \\\n  -type batch\n"))))),(0,o.kt)(l.Z,{value:"Streaming",mdxType:"TabItem"},(0,o.kt)("p",null,"Streaming:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Starts Pinot deployment by starting:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Apache Kafka"),(0,o.kt)("li",{parentName:"ul"},"Apache Zookeeper"),(0,o.kt)("li",{parentName:"ul"},"Pinot Controller"),(0,o.kt)("li",{parentName:"ul"},"Pinot Broker"),(0,o.kt)("li",{parentName:"ul"},"Pinot Server"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Creates a demo table: ",(0,o.kt)("strong",{parentName:"p"},"meetupRsvp"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Launches a ",(0,o.kt)("strong",{parentName:"p"},"meetup")," stream and publish data to a Kafka: ",(0,o.kt)("strong",{parentName:"p"},"meetupRSVPEvents")," to be subscribed by Pinot")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Issues sample queries to Pinot")))),(0,o.kt)(l.Z,{value:"Hybrid",mdxType:"TabItem"},(0,o.kt)("p",null,"Hybrid:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Starts Pinot deployment by starting:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Apache Kafka"),(0,o.kt)("li",{parentName:"ul"},"Apache Zookeeper"),(0,o.kt)("li",{parentName:"ul"},"Pinot Controller"),(0,o.kt)("li",{parentName:"ul"},"Pinot Broker"),(0,o.kt)("li",{parentName:"ul"},"Pinot Server"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Creates a demo table: ",(0,o.kt)("strong",{parentName:"p"},"airlineStats"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Launches a standalone data ingestion job:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"build Pinot segments under a given directory of Avro files for table airlineStats"),(0,o.kt)("li",{parentName:"ul"},"push built segments to Pinot controller"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Launches a stream of flights stats and publish data to a Kafka topic airlineStatsEvents to be subscribed by Pinot")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Issues sample queries to Pinot"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Stop previous container, if any, or use different network\ndocker run \\\n    --network=pinot-demo \\\n    --name pinot-quickstart \\\n    -p 9000:9000 \\\n    -d apachepinot/pinot:latest QuickStart \\\n    -type hybrid\n")))),(0,o.kt)("p",null,"That's it! We've spun up a Pinot cluster."),(0,o.kt)("p",null,"It may take a while for all Pinot components to start and for the sample data to be loaded. Use the below command to check the container logs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker logs pinot-quickstart -f\n")),(0,o.kt)("p",null,"You can head over to  Exploring Pinot to check out the data in the ",(0,o.kt)("inlineCode",{parentName:"p"},"baseballStats"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"meetupRSVP")," or the ",(0,o.kt)("inlineCode",{parentName:"p"},"airlineStats")," table."))}d.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);