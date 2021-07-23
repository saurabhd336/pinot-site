/*! For license information please see 9caa1f24.5069a66d.js.LICENSE.txt */
(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1400],{4137:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return g}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(t),g=o,d=m["".concat(s,".").concat(g)]||m[g]||p[g]||a;return t?r.createElement(d,l(l({ref:n},c),{},{components:t})):r.createElement(d,l({ref:n},c))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6261:function(e,n,t){"use strict";var r=t(7294),o=t(4184),a=t.n(o);n.Z=function(e){var n=e.children,t=e.classNames,o=e.fill,l=e.icon,i=e.type,s=null;switch(i){case"danger":s="alert-triangle";break;case"success":s="check-circle";break;case"warning":s="alert-triangle";break;default:s="info"}return r.createElement("div",{className:a()(t,"alert","alert--"+i,{"alert--fill":o,"alert--icon":!1!==l}),role:"alert"},!1!==l&&r.createElement("i",{className:a()("feather","icon-"+(l||s))}),n)}},2226:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=t(2122),o=t(9756),a=(t(7294),t(4137)),l=(t(6261),["components"]),i={title:"GoLang",sidebar_label:"golang",description:"Pinot Client for Golang",draft:!0},s=void 0,u={unversionedId:"user-guide/clients/golang",id:"user-guide/clients/golang",isDocsHomePage:!1,title:"GoLang",description:"Pinot Client for Golang",source:"@site/docs/user-guide/clients/golang.md",sourceDirName:"user-guide/clients",slug:"/user-guide/clients/golang",permalink:"/docs/user-guide/clients/golang",editUrl:"https://github.com/apache/pinot/edit/master/website/docs/user-guide/clients/golang.md",version:"current",frontMatter:{title:"GoLang",sidebar_label:"golang",description:"Pinot Client for Golang",draft:!0}},c=[{value:"Examples",id:"examples",children:[]},{value:"Usage",id:"usage",children:[{value:"Create a Pinot Connection",id:"create-a-pinot-connection",children:[]}]},{value:"Query Pinot",id:"query-pinot",children:[]}],p={toc:c};function m(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Applications can use this golang client library to query Apache Pinot."),(0,a.kt)("p",null,"Source Code Repo: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fx19880617/pinot-client-go"},"https://github.com/fx19880617/pinot-client-go")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Please follow this Pinot Quickstart link to install and start Pinot batch QuickStart locally."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"bin/quick-start-batch.sh\n")),(0,a.kt)("p",null,"Check out Client library Github Repo"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:fx19880617/pinot-client-go.git\ncd pinot-client-go\n")),(0,a.kt)("p",null,"Build and run the example application to query from Pinot Batch Quickstart"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go build ./examples/batch-quickstart\n./batch-quickstart\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"create-a-pinot-connection"},"Create a Pinot Connection"),(0,a.kt)("p",null,"Pinot client could be initialized through:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Zookeeper Path")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'pinotClient := pinot.NewFromZookeeper([]string{"localhost:2123"}, "", "QuickStartCluster")\n')),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A list of broker addresses.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'pinotClient := pinot.NewFromBrokerList([]string{"localhost:8000"})\n')),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"ClientConfig")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'pinotClient := pinot.NewWithConfig(&pinot.ClientConfig{\n    ZkConfig: &pinot.ZookeeperConfig{\n        ZookeeperPath:     zkPath,\n        PathPrefix:        strings.Join([]string{zkPathPrefix, pinotCluster}, "/"),\n        SessionTimeoutSec: defaultZkSessionTimeoutSec,\n    },\n    ExtraHTTPHeader: map[string]string{\n        "extra-header":"value",\n    },\n})\n')),(0,a.kt)("h2",{id:"query-pinot"},"Query Pinot"),(0,a.kt)("p",null,"Please see this ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fx19880617/pinot-client-go/blob/master/examples/batch-quickstart/main.go"},"example")," for your reference."),(0,a.kt)("p",null,"Code snippet:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'pinotClient, err := pinot.NewFromZookeeper([]string{"localhost:2123"}, "", "QuickStartCluster")\nif err != nil {\n    log.Error(err)\n}\nbrokerResp, err := pinotClient.ExecuteSQL("baseballStats", "select count(*) as cnt, sum(homeRuns) as sum_homeRuns from baseballStats group by teamID limit 10")\nif err != nil {\n    log.Error(err)\n}\nlog.Infof("Query Stats: response time - %d ms, scanned docs - %d, total docs - %d", brokerResp.TimeUsedMs, brokerResp.NumDocsScanned, brokerResp.TotalDocs)\n')),(0,a.kt)("p",null,"Response Format"),(0,a.kt)("p",null,"Query Response is defined as the struct of following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'type BrokerResponse struct {\n    AggregationResults          []*AggregationResult `json:"aggregationResults,omitempty"`\n    SelectionResults            *SelectionResults    `json:"SelectionResults,omitempty"`\n    ResultTable                 *ResultTable         `json:"resultTable,omitempty"`\n    Exceptions                  []Exception          `json:"exceptions"`\n    TraceInfo                   map[string]string    `json:"traceInfo,omitempty"`\n    NumServersQueried           int                  `json:"numServersQueried"`\n    NumServersResponded         int                  `json:"numServersResponded"`\n    NumSegmentsQueried          int                  `json:"numSegmentsQueried"`\n    NumSegmentsProcessed        int                  `json:"numSegmentsProcessed"`\n    NumSegmentsMatched          int                  `json:"numSegmentsMatched"`\n    NumConsumingSegmentsQueried int                  `json:"numConsumingSegmentsQueried"`\n    NumDocsScanned              int64                `json:"numDocsScanned"`\n    NumEntriesScannedInFilter   int64                `json:"numEntriesScannedInFilter"`\n    NumEntriesScannedPostFilter int64                `json:"numEntriesScannedPostFilter"`\n    NumGroupsLimitReached       bool                 `json:"numGroupsLimitReached"`\n    TotalDocs                   int64                `json:"totalDocs"`\n    TimeUsedMs                  int                  `json:"timeUsedMs"`\n    MinConsumingFreshnessTimeMs int64                `json:"minConsumingFreshnessTimeMs"`\n}\n')),(0,a.kt)("p",null,"Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"AggregationResults")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"SelectionResults")," are holders for PQL queries."),(0,a.kt)("p",null,"Meanwhile ",(0,a.kt)("inlineCode",{parentName:"p"},"ResultTable")," is the holder for SQL queries. ",(0,a.kt)("inlineCode",{parentName:"p"},"ResultTable")," is defined as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// ResultTable is a ResultTable\ntype ResultTable struct {\n    DataSchema RespSchema      `json:"dataSchema"`\n    Rows       [][]interface{} `json:"rows"`\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"RespSchema")," is defined as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// RespSchema is response schema\ntype RespSchema struct {\n    ColumnDataTypes []string `json:"columnDataTypes"`\n    ColumnNames     []string `json:"columnNames"`\n}\n')),(0,a.kt)("p",null,"There are multiple functions defined for ",(0,a.kt)("inlineCode",{parentName:"p"},"ResultTable"),", like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func (r ResultTable) GetRowCount() int\nfunc (r ResultTable) GetColumnCount() int\nfunc (r ResultTable) GetColumnName(columnIndex int) string\nfunc (r ResultTable) GetColumnDataType(columnIndex int) string\nfunc (r ResultTable) Get(rowIndex int, columnIndex int) interface{}\nfunc (r ResultTable) GetString(rowIndex int, columnIndex int) string\nfunc (r ResultTable) GetInt(rowIndex int, columnIndex int) int\nfunc (r ResultTable) GetLong(rowIndex int, columnIndex int) int64\nfunc (r ResultTable) GetFloat(rowIndex int, columnIndex int) float32\nfunc (r ResultTable) GetDouble(rowIndex int, columnIndex int) float64\n")),(0,a.kt)("p",null,"Sample Usage is ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fx19880617/pinot-client-go/blob/master/examples/batch-quickstart/main.go#L58"},"here")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// Print Response Schema\nfor c := 0; c < brokerResp.ResultTable.GetColumnCount(); c++ {\n  fmt.Printf("%s(%s)\\t", brokerResp.ResultTable.GetColumnName(c), brokerResp.ResultTable.GetColumnDataType(c))\n}\nfmt.Println()\n\n// Print Row Table\nfor r := 0; r < brokerResp.ResultTable.GetRowCount(); r++ {\n  for c := 0; c < brokerResp.ResultTable.GetColumnCount(); c++ {\n    fmt.Printf("%v\\t", brokerResp.ResultTable.Get(r, c))\n  }\n  fmt.Println()\n}\n')))}m.isMDXComponent=!0},4184:function(e,n){var t;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var a=typeof t;if("string"===a||"number"===a)e.push(t);else if(Array.isArray(t)){if(t.length){var l=o.apply(null,t);l&&e.push(l)}}else if("object"===a)if(t.toString===Object.prototype.toString)for(var i in t)r.call(t,i)&&t[i]&&e.push(i);else e.push(t.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(t=function(){return o}.apply(n,[]))||(e.exports=t)}()}}]);