(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{150:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.default=function(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];return function(d){return args.reduce(function(m,f){return f(m)},d)}}},182:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),__webpack_require__(607),__webpack_require__(896),__webpack_require__(902),exports.mapboxAccessToken="pk.eyJ1IjoiaWx5YWJvLXRlcmFseXRpY3MiLCJhIjoiY2ppaW9wYzJ1MW8weTN2bnJkOHdsbTQ3dSJ9.VP2-bMLHPnmvqxkia-rM3g"},230:function(module,exports,__webpack_require__){"use strict";var extendStatics,__extends=this&&this.__extends||(extendStatics=function(d,b){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)b.hasOwnProperty(p)&&(d[p]=b[p])})(d,b)},function(d,b){function __(){this.constructor=d}extendStatics(d,b),d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var d3_dsv_1=__webpack_require__(894),react_1=__importDefault(__webpack_require__(8));exports.Message=function(_a){var children=_a.children;return react_1.default.createElement("div",{style:{padding:"1em"}},children)};var withFetch=function(mode,propName,url){return function(Comp){return function(props){var Fetcher=function(_super){function Fetcher(){var _this=null!==_super&&_super.apply(this,arguments)||this;return _this.state={error:null,data:null},_this}return __extends(Fetcher,_super),Fetcher.prototype.componentDidMount=function(){var _this=this;fetch(url).then(function(response){if(!response.ok)throw new Error(response.statusText);switch(mode){case"json":return response.json();case"csv":return response.text()}}).catch(function(reason){console.log(reason),_this.setState({error:!0})}).then(function(data){return _this.setState({data:"csv"===mode?d3_dsv_1.csvParse(data):data})})},Fetcher.prototype.render=function(){var _a,_b=this.state,data=_b.data;return _b.error?react_1.default.createElement(exports.Message,null,"Oops… Data fetching failed."):data?react_1.default.createElement(Comp,__assign({},__assign({},props,((_a={})[propName]=this.state.data,_a)))):react_1.default.createElement(exports.Message,null,"Fetching data…")},Fetcher}(react_1.default.Component);return react_1.default.createElement(Fetcher,null)}}};exports.withFetchCsv=function(propName,url){return withFetch("csv",propName,url)},exports.withFetchJson=function(propName,url){return withFetch("json",propName,url)}},231:function(module,exports,__webpack_require__){"use strict";var extendStatics,__extends=this&&this.__extends||(extendStatics=function(d,b){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)b.hasOwnProperty(p)&&(d[p]=b[p])})(d,b)},function(d,b){function __(){this.constructor=d}extendStatics(d,b),d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)},__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var React=__importStar(__webpack_require__(8)),stats_js_1=__importDefault(__webpack_require__(895));exports.default=function(Comp){return function(props){var WithStats=function(_super){function WithStats(){var _this=null!==_super&&_super.apply(this,arguments)||this;return _this.stats=new stats_js_1.default,_this.statsContainer=React.createRef(),_this.animateRef=0,_this}return __extends(WithStats,_super),WithStats.prototype.componentDidMount=function(){var _this=this;this.statsContainer.current&&(this.stats.showPanel(0),this.statsContainer.current.appendChild(this.stats.dom));var calcFPS=function(){_this.stats.begin(),_this.stats.end(),_this.animateRef=window.requestAnimationFrame(calcFPS)};this.animateRef=window.requestAnimationFrame(calcFPS)},WithStats.prototype.componentWillUnmount=function(){window.cancelAnimationFrame(this.animateRef)},WithStats.prototype.render=function(){return React.createElement(React.Fragment,null,React.createElement(Comp,__assign({},props)),React.createElement("div",{ref:this.statsContainer}))},WithStats}(React.Component);return React.createElement(WithStats,null)}}},366:function(module,exports){},367:function(module,exports){},398:function(module,exports,__webpack_require__){"use strict";var extendStatics,__extends=this&&this.__extends||(extendStatics=function(d,b){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)b.hasOwnProperty(p)&&(d[p]=b[p])})(d,b)},function(d,b){function __(){this.constructor=d}extendStatics(d,b),d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)},__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__importStar(__webpack_require__(282)),react_2=__importDefault(__webpack_require__(8)),index_1=__webpack_require__(182),tooltipStyle={position:"absolute",pointerEvents:"none",zIndex:1,background:"#125",color:"#fff",fontSize:9,borderRadius:4,padding:5,maxWidth:300,maxHeight:300,overflow:"hidden",boxShadow:"2px 2px 4px #ccc"},Example=function(_super){function Example(props){var _this=_super.call(this,props)||this;_this.state={tooltip:void 0},_this.handleViewStateChange=function(viewState){var onViewStateChange=_this.props.onViewStateChange;onViewStateChange&&onViewStateChange(viewState),_this.state.tooltip&&_this.setState({tooltip:void 0})},_this.handleHighlight=function(highlight,info){info||_this.setState({tooltip:void 0}),_this.setState({tooltip:info})};var locations=props.locations,getLocationCentroid=props.getLocationCentroid;return _this.initialViewState=react_1.getViewStateForLocations(locations,getLocationCentroid,[window.innerWidth,window.innerHeight]),_this}return __extends(Example,_super),Example.prototype.renderTooltip=function(){var tooltip=this.state.tooltip;if(!tooltip)return null;var object=tooltip.object,x=tooltip.x,y=tooltip.y;return object?react_2.default.createElement("pre",{style:__assign({},tooltipStyle,{left:x,top:y})},JSON.stringify(object,null,2)):null},Example.prototype.render=function(){var _a=this.props,flows=_a.flows,locations=_a.locations,getLocationId=_a.getLocationId,getLocationCentroid=_a.getLocationCentroid,getFlowMagnitude=_a.getFlowMagnitude;return react_2.default.createElement(react_2.default.Fragment,null,react_2.default.createElement(react_1.default,{initialViewState:this.initialViewState,showTotals:!0,showLocationAreas:!1,showOnlyTopFlows:1e4,flows:flows,locations:locations,mapboxAccessToken:index_1.mapboxAccessToken,getLocationId:getLocationId,getLocationCentroid:getLocationCentroid,getFlowMagnitude:getFlowMagnitude,onViewStateChange:this.handleViewStateChange,onHighlighted:this.handleHighlight}),react_2.default.createElement(react_1.LegendBox,{bottom:35,left:10},react_2.default.createElement(react_1.LocationTotalsLegend,null)),react_2.default.createElement(react_1.LegendBox,{bottom:35,right:10},"Showing "+(flows.length>1e4?"top 10000 of":"")+" "+flows.length+" flows. "),this.renderTooltip())},Example}(react_2.default.Component);exports.default=Example},399:function(module,exports,__webpack_require__){"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)},__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var React=__importStar(__webpack_require__(8)),pipe_1=__importDefault(__webpack_require__(150)),withFetch_1=__webpack_require__(230);exports.default=function(sheetKey){return function(Comp){return function(props){var Fetcher=pipe_1.default(withFetch_1.withFetchCsv("locations","https://docs.google.com/spreadsheets/d/"+sheetKey+"/gviz/tq?tqx=out:csv&sheet=locations"),withFetch_1.withFetchCsv("flows","https://docs.google.com/spreadsheets/d/"+sheetKey+"/gviz/tq?tqx=out:csv&sheet=flows"))(function(_a){var locations=_a.locations,flows=_a.flows;return React.createElement(Comp,__assign({locations:locations,flows:flows,sheetKey:sheetKey},props))});return React.createElement(Fetcher,null)}}}},401:function(module,exports,__webpack_require__){__webpack_require__(402),__webpack_require__(480),module.exports=__webpack_require__(481)},481:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(118),_storybook_addon_options__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(400);__webpack_require__(483),Object(_storybook_addon_options__WEBPACK_IMPORTED_MODULE_1__.withOptions)({name:"flowmap.gl",url:"https://github.com/teralytics/flowmap.gl"}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(function(){__webpack_require__(182)},module)}.call(this,__webpack_require__(482)(module))},607:function(module,exports,__webpack_require__){"use strict";(function(module){var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__importStar(__webpack_require__(282)),react_2=__webpack_require__(118),d3scaleChromatic=__importStar(__webpack_require__(892)),react_3=__importDefault(__webpack_require__(8)),NonInteractiveExample_1=__importDefault(__webpack_require__(893)),index_1=__webpack_require__(182),pipe_1=__importDefault(__webpack_require__(150)),withFetch_1=__webpack_require__(230),withStats_1=__importDefault(__webpack_require__(231)),getLocationId=function(loc){return loc.properties.abbr};react_2.storiesOf("Basic",module).add("basic",pipe_1.default(withStats_1.default,withFetch_1.withFetchJson("locations","./data/locations.json"),withFetch_1.withFetchJson("flows","./data/flows-2016.json"))(function(_a){var locations=_a.locations,flows=_a.flows;return react_3.default.createElement(react_3.default.Fragment,null,react_3.default.createElement(react_1.default,{getLocationId:getLocationId,flows:flows,locations:locations,initialViewState:react_1.getViewStateForFeatures(locations,[window.innerWidth,window.innerHeight]),mapboxAccessToken:index_1.mapboxAccessToken}),react_3.default.createElement(react_1.LegendBox,{bottom:35,left:10},react_3.default.createElement(react_1.LocationTotalsLegend,null)))})).add("custom flow color scheme",pipe_1.default(withStats_1.default,withFetch_1.withFetchJson("locations","./data/locations.json"),withFetch_1.withFetchJson("flows","./data/flows-2016.json"))(function(_a){var locations=_a.locations,flows=_a.flows,colors={flows:{scheme:d3scaleChromatic.schemeGnBu[d3scaleChromatic.schemeGnBu.length-1]}};return react_3.default.createElement(react_3.default.Fragment,null,react_3.default.createElement(react_1.default,{colors:colors,getLocationId:getLocationId,flows:flows,locations:locations,initialViewState:react_1.getViewStateForFeatures(locations,[window.innerWidth,window.innerHeight]),mapboxAccessToken:index_1.mapboxAccessToken}),react_3.default.createElement(react_1.LegendBox,{bottom:35,left:10},react_3.default.createElement(react_1.LocationTotalsLegend,{colors:colors})))})).add("custom dark mode color scheme",pipe_1.default(withStats_1.default,withFetch_1.withFetchJson("locations","./data/locations.json"),withFetch_1.withFetchJson("flows","./data/flows-2016.json"))(function(_a){var locations=_a.locations,flows=_a.flows,colors={darkMode:!0,flows:{scheme:d3scaleChromatic.schemeGnBu[d3scaleChromatic.schemeGnBu.length-1].slice().reverse()},locationAreas:{normal:"#334"},outlineColor:"#000"};return react_3.default.createElement(react_3.default.Fragment,null,react_3.default.createElement(react_1.default,{colors:colors,mapStyle:"mapbox://styles/mapbox/dark-v10",mixBlendMode:"screen",getLocationId:getLocationId,flows:flows,locations:locations,initialViewState:react_1.getViewStateForFeatures(locations,[window.innerWidth,window.innerHeight]),mapboxAccessToken:index_1.mapboxAccessToken}),react_3.default.createElement(react_1.LegendBox,{bottom:35,left:10,style:{backgroundColor:"#000",color:"#fff"}},react_3.default.createElement(react_1.LocationTotalsLegend,{colors:colors})))})).add("animated",pipe_1.default(withStats_1.default,withFetch_1.withFetchJson("locations","./data/locations.json"),withFetch_1.withFetchJson("flows","./data/flows-2016.json"))(function(_a){var locations=_a.locations,flows=_a.flows;return react_3.default.createElement(react_1.default,{animate:!0,getLocationId:getLocationId,flows:flows,locations:locations,initialViewState:react_1.getViewStateForFeatures(locations,[window.innerWidth,window.innerHeight]),mapboxAccessToken:index_1.mapboxAccessToken})})).add("only top 100 flows",pipe_1.default(withStats_1.default,withFetch_1.withFetchJson("locations","./data/locations.json"),withFetch_1.withFetchJson("flows","./data/flows-2016.json"))(function(_a){var locations=_a.locations,flows=_a.flows;return react_3.default.createElement(react_1.default,{getLocationId:getLocationId,showTotals:!0,showOnlyTopFlows:100,showLocationAreas:!0,flows:flows,locations:locations,initialViewState:react_1.getViewStateForFeatures(locations,[window.innerWidth,window.innerHeight]),mapboxAccessToken:index_1.mapboxAccessToken})})).add("no location areas",pipe_1.default(withStats_1.default,withFetch_1.withFetchJson("locations","./data/locations.json"),withFetch_1.withFetchJson("flows","./data/flows-2016.json"))(function(_a){var locations=_a.locations,flows=_a.flows;return react_3.default.createElement(react_1.default,{colors:{outlineColor:"#fff"},getLocationId:getLocationId,showTotals:!0,showLocationAreas:!1,flows:flows,locations:locations,initialViewState:react_1.getViewStateForFeatures(locations,[window.innerWidth,window.innerHeight]),mapboxAccessToken:index_1.mapboxAccessToken})})).add("no location totals",pipe_1.default(withStats_1.default,withFetch_1.withFetchJson("locations","./data/locations.json"),withFetch_1.withFetchJson("flows","./data/flows-2016.json"))(function(_a){var locations=_a.locations,flows=_a.flows;return react_3.default.createElement(react_1.default,{getLocationId:getLocationId,showTotals:!1,showLocationAreas:!0,flows:flows,locations:locations,initialViewState:react_1.getViewStateForFeatures(locations,[window.innerWidth,window.innerHeight]),mapboxAccessToken:index_1.mapboxAccessToken})})).add("custom zone totals",pipe_1.default(withStats_1.default,withFetch_1.withFetchJson("locations","./data/locations.json"),withFetch_1.withFetchJson("flows","./data/flows-2016.json"))(function(_a){var locations=_a.locations,getTotal=(_a.flows,locations.features.map(getLocationId).reverse(),function(location){return 0});return react_3.default.createElement(react_3.default.Fragment,null,react_3.default.createElement(react_1.default,{getLocationId:getLocationId,flows:[],locations:locations,getLocationTotalIn:getTotal,getLocationTotalOut:getTotal,getLocationTotalWithin:getTotal,initialViewState:react_1.getViewStateForFeatures(locations,[window.innerWidth,window.innerHeight]),mapboxAccessToken:index_1.mapboxAccessToken}),react_3.default.createElement(react_1.LegendBox,{bottom:35,left:10},react_3.default.createElement(react_1.LocationTotalsLegend,null)))})).add("flow color override",pipe_1.default(withStats_1.default,withFetch_1.withFetchJson("locations","./data/locations.json"),withFetch_1.withFetchJson("flows","./data/flows-2016.json"))(function(_a){var locations=_a.locations,flows=_a.flows;return react_3.default.createElement(react_1.default,{getLocationId:getLocationId,flows:flows,locations:locations,initialViewState:react_1.getViewStateForFeatures(locations,[window.innerWidth,window.innerHeight]),mapboxAccessToken:index_1.mapboxAccessToken,getFlowColor:function(f){if("ZH"===f.origin&&"AG"===f.dest)return"orange"}})})).add("custom outlines",pipe_1.default(withStats_1.default,withFetch_1.withFetchJson("locations","./data/locations.json"),withFetch_1.withFetchJson("flows","./data/flows-2016.json"))(function(_a){var locations=_a.locations,flows=_a.flows;return react_3.default.createElement(react_1.default,{colors:{outlineColor:"#64e9f9"},getLocationId:getLocationId,showTotals:!0,showLocationAreas:!0,flows:flows,locations:locations,initialViewState:react_1.getViewStateForFeatures(locations,[window.innerWidth,window.innerHeight]),outlineThickness:5,mapboxAccessToken:index_1.mapboxAccessToken})})).add("multiselect",pipe_1.default(withStats_1.default,withFetch_1.withFetchJson("locations","./data/locations.json"),withFetch_1.withFetchJson("flows","./data/flows-2016.json"))(function(_a){var locations=_a.locations,flows=_a.flows;return react_3.default.createElement(react_1.default,{getLocationId:getLocationId,flows:flows,locations:locations,multiselect:!0,initialViewState:react_1.getViewStateForFeatures(locations,[window.innerWidth,window.innerHeight]),mapboxAccessToken:index_1.mapboxAccessToken})})).add("non-interactive",pipe_1.default(withStats_1.default,withFetch_1.withFetchJson("locations","./data/locations.json"),withFetch_1.withFetchJson("flows","./data/flows-2016.json"))(function(_a){var locations=_a.locations,flows=_a.flows;return react_3.default.createElement(NonInteractiveExample_1.default,{flows:flows,locations:locations,initialViewState:react_1.getViewStateForFeatures(locations,[window.innerWidth,window.innerHeight]),mapboxAccessToken:index_1.mapboxAccessToken})})).add("difference mode",pipe_1.default(withStats_1.default,withFetch_1.withFetchJson("locations","./data/locations.json"),withFetch_1.withFetchJson("flows","./data/flows-diff-2015-2016.json"))(function(_a){var locations=_a.locations,flows=_a.flows;return react_3.default.createElement(react_3.default.Fragment,null,react_3.default.createElement(react_1.default,{diffMode:!0,getLocationId:getLocationId,showTotals:!0,showLocationAreas:!0,flows:flows,locations:locations,initialViewState:react_1.getViewStateForFeatures(locations,[window.innerWidth,window.innerHeight]),mapboxAccessToken:index_1.mapboxAccessToken}),react_3.default.createElement(react_1.LegendBox,{bottom:35,left:10},react_3.default.createElement(react_1.DiffColorsLegend,null),react_3.default.createElement("hr",null),react_3.default.createElement(react_1.LocationTotalsLegend,{diff:!0})))})).add("custom legend",function(){return react_3.default.createElement(react_3.default.Fragment,null,react_3.default.createElement(react_1.LegendBox,{bottom:35,left:10},react_3.default.createElement(react_1.DiffColorsLegend,{positiveText:"+ diff",negativeText:"- diff"}),react_3.default.createElement("hr",null),react_3.default.createElement(react_1.LocationTotalsLegend,{diff:!0,aboutEqualText:"equal",moreOutgoingText:"> outgoing",moreIncomingText:"> incoming"})))})}).call(this,__webpack_require__(125)(module))},618:function(module,exports){},633:function(module,exports){},634:function(module,exports){},782:function(module,exports){},783:function(module,exports){},790:function(module,exports){},791:function(module,exports){},809:function(module,exports){},810:function(module,exports){},893:function(module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}},__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__webpack_require__(388),core_1=__importDefault(__webpack_require__(84)),React=__importStar(__webpack_require__(8)),react_map_gl_1=__webpack_require__(391);exports.default=function(_a){var locations=_a.locations,flows=_a.flows,initialViewState=_a.initialViewState,mapboxAccessToken=_a.mapboxAccessToken,outlineThickness=_a.outlineThickness,flowMapLayer=new core_1.default({id:"flow-map-layer",locations:locations,flows:flows,getLocationId:function(loc){return loc.properties.abbr},showLocationAreas:!0,getFlowMagnitude:function(f){return f.count},showTotals:!0,outlineThickness:outlineThickness});return React.createElement(react_1.DeckGL,{style:{mixBlendMode:"multiply"},controller:!0,initialViewState:initialViewState,layers:[flowMapLayer],children:function(_a){var width=_a.width,height=_a.height,viewState=_a.viewState;return React.createElement(react_map_gl_1.StaticMap,{mapboxApiAccessToken:mapboxAccessToken,width:width,height:height,viewState:viewState})}})}},896:function(module,exports,__webpack_require__){"use strict";(function(module){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__webpack_require__(118),react_2=__importDefault(__webpack_require__(8)),ClusteringExample_1=__importDefault(__webpack_require__(897)),pipe_1=__importDefault(__webpack_require__(150)),withFetch_1=__webpack_require__(230),withSheetsFetch_1=__importDefault(__webpack_require__(399)),withStats_1=__importDefault(__webpack_require__(231));react_1.storiesOf("Cluster on zoom",module).add("basic",pipe_1.default(withStats_1.default,withFetch_1.withFetchJson("locations","./data/locations.json"),withFetch_1.withFetchJson("flows","./data/flows-2016.json"))(function(_a){var locations=_a.locations,flows=_a.flows;return react_2.default.createElement(ClusteringExample_1.default,{locations:locations,flows:flows,getLocationId:function(loc){return loc.properties.abbr},getLocationCentroid:function(loc){return loc.properties.centroid},getFlowOriginId:function(flow){return flow.origin},getFlowDestId:function(flow){return flow.dest},getFlowMagnitude:function(flow){return+flow.count}})})).add("NL commuters",pipe_1.default(withStats_1.default,withSheetsFetch_1.default("1Oe3zM219uSfJ3sjdRT90SAK2kU3xIvzdcCW6cwTsAuc"))(function(_a){var locations=_a.locations,flows=_a.flows;return react_2.default.createElement(ClusteringExample_1.default,{locations:locations,flows:flows,getLocationId:function(loc){return loc.id},getLocationCentroid:function(loc){return[+loc.lon,+loc.lat]},getFlowOriginId:function(flow){return flow.origin},getFlowDestId:function(flow){return flow.dest},getFlowMagnitude:function(flow){return+flow.count}})}))}).call(this,__webpack_require__(125)(module))},897:function(module,exports,__webpack_require__){"use strict";var extendStatics,__extends=this&&this.__extends||(extendStatics=function(d,b){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)b.hasOwnProperty(p)&&(d[p]=b[p])})(d,b)},function(d,b){function __(){this.constructor=d}extendStatics(d,b),d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}),__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var Cluster=__importStar(__webpack_require__(898)),core_1=__webpack_require__(84),react_1=__importDefault(__webpack_require__(8)),Example_1=__importDefault(__webpack_require__(398)),ClusteringExample=function(_super){function ClusteringExample(props){var _this=_super.call(this,props)||this;_this.handleViewStateChange=function(viewState){var availableZoomLevels=_this.clusterIndex.availableZoomLevels,zoom=viewState.zoom,clusterZoom=Cluster.findAppropriateZoomLevel(availableZoomLevels,zoom);_this.setState({clusteredLocations:_this.clusterIndex.getClusterNodesFor(clusterZoom),aggregateFlows:_this.aggregateFlowsByZoom.get(clusterZoom)})};var clusterLevels,_a=_this.props,flows=_a.flows,getLocationId=_a.getLocationId,getLocationCentroid=_a.getLocationCentroid,getFlowOriginId=_a.getFlowOriginId,getFlowDestId=_a.getFlowDestId,getFlowMagnitude=_a.getFlowMagnitude,locations=core_1.isFeatureCollection(_this.props.locations)?_this.props.locations.features:_this.props.locations;if(_this.props.clusterLevels)clusterLevels=_this.props.clusterLevels;else{var getLocationWeight=Cluster.makeLocationWeightGetter(flows,{getFlowOriginId:getFlowOriginId,getFlowDestId:getFlowDestId,getFlowMagnitude:getFlowMagnitude});clusterLevels=Cluster.clusterLocations(locations,{getLocationId:getLocationId,getLocationCentroid:getLocationCentroid},getLocationWeight,{makeClusterName:function(id,numPoints){return"Cluster #"+id+" of "+numPoints+" locations"}})}for(var clusterIndex=Cluster.buildIndex(clusterLevels),aggregateFlowsByZoom=new Map,_i=0,_b=clusterIndex.availableZoomLevels;_i<_b.length;_i++){var zoom=_b[_i];aggregateFlowsByZoom.set(zoom,clusterIndex.aggregateFlows(flows,zoom,{getFlowOriginId:getFlowOriginId,getFlowDestId:getFlowDestId,getFlowMagnitude:getFlowMagnitude}))}var maxZoom=Math.max.apply(null,clusterIndex.availableZoomLevels);return _this.clusterIndex=clusterIndex,_this.aggregateFlowsByZoom=aggregateFlowsByZoom,_this.state={clusteredLocations:_this.clusterIndex.getClusterNodesFor(maxZoom),aggregateFlows:_this.aggregateFlowsByZoom.get(maxZoom)},_this}return __extends(ClusteringExample,_super),ClusteringExample.prototype.render=function(){var _a=this.props,getFlowOriginId=_a.getFlowOriginId,getFlowDestId=_a.getFlowDestId,getFlowMagnitude=_a.getFlowMagnitude,_b=this.state,clusteredLocations=_b.clusteredLocations,aggregateFlows=_b.aggregateFlows;return clusteredLocations&&aggregateFlows?react_1.default.createElement(Example_1.default,{locations:clusteredLocations,flows:aggregateFlows,getLocationId:function(loc){return loc.id},getLocationCentroid:function(loc){return loc.centroid},getFlowOriginId:function(flow){return Cluster.isAggregateFlow(flow)?flow.origin:getFlowOriginId(flow)},getFlowDestId:function(flow){return Cluster.isAggregateFlow(flow)?flow.dest:getFlowDestId(flow)},getFlowMagnitude:function(flow){return Cluster.isAggregateFlow(flow)?flow.count:getFlowMagnitude(flow)},onViewStateChange:this.handleViewStateChange}):null},ClusteringExample}(react_1.default.Component);exports.default=ClusteringExample},902:function(module,exports,__webpack_require__){"use strict";(function(module){var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__webpack_require__(118),React=__importStar(__webpack_require__(8)),Example_1=__importDefault(__webpack_require__(398)),pipe_1=__importDefault(__webpack_require__(150)),withSheetsFetch_1=__importDefault(__webpack_require__(399)),withStats_1=__importDefault(__webpack_require__(231));react_1.storiesOf("Other datasets",module).add("London bicycle hire",pipe_1.default(withStats_1.default,withSheetsFetch_1.default("1Z6dVVFFrdooHIs8xnJ_O7eM5bhS5KscCi7G_k0jUNDI"))(function(_a){var locations=_a.locations,flows=_a.flows;return React.createElement(Example_1.default,{flows:flows,locations:locations,getLocationId:function(loc){return loc.id},getLocationCentroid:function(location){return[+location.lon,+location.lat]},getFlowOriginId:function(flow){return flow.origin},getFlowDestId:function(flow){return flow.dest},getFlowMagnitude:function(flow){return+flow.count}})})).add("NYC citibike",pipe_1.default(withStats_1.default,withSheetsFetch_1.default("1Aum0anWxPx6bHyfcFXWCCTE8u0xtfenIls_kPAJEDIA"))(function(_a){var locations=_a.locations,flows=_a.flows;return React.createElement(Example_1.default,{flows:flows,locations:locations,getLocationId:function(loc){return loc.id},getLocationCentroid:function(location){return[+location.lon,+location.lat]},getFlowOriginId:function(flow){return flow.origin},getFlowDestId:function(flow){return flow.dest},getFlowMagnitude:function(flow){return+flow.count}})})).add("Chicago taxis",pipe_1.default(withStats_1.default,withSheetsFetch_1.default("1fhX98NFv5gAkkjB2YFCm50-fplFpmWVAZby3dmm9cgQ"))(function(_a){var locations=_a.locations,flows=_a.flows;return React.createElement(Example_1.default,{flows:flows,locations:locations,getLocationId:function(loc){return loc.id},getLocationCentroid:function(location){return[+location.lon,+location.lat]},getFlowOriginId:function(flow){return flow.origin},getFlowDestId:function(flow){return flow.dest},getFlowMagnitude:function(flow){return+flow.count}})})).add("NL commuters",pipe_1.default(withStats_1.default,withSheetsFetch_1.default("1Oe3zM219uSfJ3sjdRT90SAK2kU3xIvzdcCW6cwTsAuc"))(function(_a){var locations=_a.locations,flows=_a.flows;return React.createElement(Example_1.default,{flows:flows,locations:locations,getLocationId:function(loc){return loc.id},getLocationCentroid:function(location){return[+location.lon,+location.lat]},getFlowOriginId:function(flow){return flow.origin},getFlowDestId:function(flow){return flow.dest},getFlowMagnitude:function(flow){return+flow.count}})}))}).call(this,__webpack_require__(125)(module))}},[[401,1,2]]]);
//# sourceMappingURL=main.51d833075dee4e959609.bundle.js.map