webpackJsonp([2,11],{1168:function(e,t,a){"use strict";var n=a(13),r=a.n(n),o=a(1220),l=a(1221),s=a(1182),i=function(e){return r.a.createElement("section",{id:"markets_view"},!!e.loginAccount.rep&&!!e.loginAccount.rep.value&&r.a.createElement(s.a,e.branch),r.a.createElement(o.a,{createMarketLink:e.createMarketLink,loginAccount:e.loginAccount,marketsHeader:e.marketsHeader,filterSort:e.filterSort,keywords:e.keywords}),r.a.createElement(l.a,{loginAccount:e.loginAccount,markets:e.markets,pagination:e.pagination,scalarShareDenomination:e.scalarShareDenomination}))};i.propTypes={className:n.PropTypes.string,filterSort:n.PropTypes.object,marketsHeader:n.PropTypes.object,markets:n.PropTypes.array,pagination:n.PropTypes.object,keywords:n.PropTypes.object,branch:n.PropTypes.object},t.default=i},1171:function(e,t,a){"use strict";function n(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=a(13),i=a.n(s),c=a(115),p=a.n(c),u=a(58),m=a.n(u),d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},f=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),v=function(e){function t(e){r(this,t);var a=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleOnChange=function(e){var t=e.target.value;a.finalDebounceMS?(clearTimeout(a.state.timeoutID),t!==a.props.value&&a.setState({timeoutID:setTimeout(function(){return a.props.onChange(t)},a.finalDebounceMS)})):t!==a.props.value&&a.props.onChange(t),a.setState({value:t})},a.handleOnBlur=function(){a.finalDebounceMS&&(clearTimeout(a.state.timeoutID),a.state.value!==a.props.value&&a.props.onChange(a.state.value)),a.props.onBlur&&a.props.onBlur()},a.handleClear=function(){a.setState({value:""}),a.props.onChange("")},a.finalDebounceMS=a.props.debounceMS>0||0===a.props.debounceMS?a.props.debounceMS:500,a.state={value:a.props.value||"",timeoutID:""},a.handleOnChange=a.handleOnChange.bind(a),a.handleOnBlur=a.handleOnBlur.bind(a),a.handleClear=a.handleClear.bind(a),a}return l(t,e),f(t,[{key:"componentWillReceiveProps",value:function(e){this.props.value!==e.value&&this.setState({value:e.value})}},{key:"render",value:function(){var e=this.props,t=e.isClearable,a=e.isIncrementable,r=e.incrementAmount,o=e.updateValue,l=n(e,["isClearable","isIncrementable","incrementAmount","updateValue"]),s=this.state;return i.a.createElement("div",{className:p()("input",l.className,{"is-incrementable":a})},!l.isMultiline&&i.a.createElement("input",d({},l,{className:"box",value:s.value,onChange:this.handleOnChange,onBlur:this.handleOnBlur})),l.isMultiline&&i.a.createElement("textarea",d({},l,{className:"box",value:s.value,onChange:this.handleOnChange,onBlur:this.handleOnBlur})),t&&!l.isMultiline&&!!s.value&&i.a.createElement("button",{type:"button",className:"button-text-only",onClick:this.handleClear},i.a.createElement("i",null,"")),a&&i.a.createElement("div",{className:"value-incrementers"},i.a.createElement("button",{className:"increment-value unstyled",onClick:function(){if(!isNaN(parseFloat(s.value))&&isFinite(s.value)||!s.value){var e=new m.a(s.value||0);e>l.max?e=new m.a(l.max):e<l.min?e=new m.a(l.min).plus(new m.a(r)).toString():(e=e.plus(new m.a(r)).toString(),e>l.max&&(e=new m.a(l.max))),o(e)}}},i.a.createElement("i",null,"")),i.a.createElement("button",{className:"decrement-value unstyled",onClick:function(){if(!isNaN(parseFloat(s.value))&&isFinite(s.value)||!s.value){var e=new m.a(s.value||0);e>l.max?e=new m.a(l.max).minus(new m.a(r)):e<l.min?e=new m.a(l.min):(e=e.minus(new m.a(r)),e<l.min&&(e=new m.a(l.min))),o(e)}}},i.a.createElement("i",null,""))))}}]),t}(s.Component);v.propTypes={value:s.PropTypes.any,isClearable:s.PropTypes.bool,debounceMS:s.PropTypes.number,onChange:s.PropTypes.func,onBlur:s.PropTypes.func,isIncrementable:s.PropTypes.bool,incrementAmount:s.PropTypes.number,updateValue:s.PropTypes.func},t.a=v},1172:function(e,t,a){"use strict";function n(e,t){if(null==e)return e;switch(t){case l.a:return r(e,4);case l.b:return r(e,1);default:case l.c:return e}}function r(e,t){var n=e.split(""),r=n.indexOf("."),l=t;r!==-1?n.splice(r,1):l+=2;var i=-1;return n.some(function(e,t){return!!parseInt(e,10)&&(i=t,!0)}),i===-1?e:(n.splice(0,i),n.forEach(function(e,t){","===e&&n.splice(t,1)}),n=o(n,l),a.i(s.a)(n.join("")))}function o(e,t){var a=t<4,n="> 1T".split(""),r=e;switch(e[r.length-1]){case"K":return r[r.length-1]=a?"M":"B",r;case"M":return a?r[r.length-1]="B":r=n,r;case"B":case"T":return r=n;default:for(var o=0;o<t;o++)r.push("0");return r.length>=13?r=n:r.length>=11?(r.splice(r.length-9),r.push("B")):r.length>=8?(r.splice(r.length-6),r.push("M")):r.length>=5&&(r.splice(r.length-3),r.push("K")),r}}var l=a(599),s=a(603);t.a=n},1173:function(e,t,a){"use strict";var n=a(13),r=a.n(n),o=a(115),l=a.n(o),s=function(e){return r.a.createElement("span",{className:l()("value-date",e.className)},e.formatted)};s.propTypes={className:n.PropTypes.string,value:n.PropTypes.object,formatted:n.PropTypes.string},t.a=s},1174:function(e,t,a){"use strict";var n=a(13),r=a.n(n),o=a(329),l=a.n(o),s=a(1173),i=a(598),c=a(328),p=a(1172),u=a(1175),m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},d=function(e){var t=a.i(p.a)(a.i(c.a)(e,"volume.rounded"),e.selectedShareDenomination),n=a.i(c.a)(e,"volume.formatted"),o=a.i(u.a)(e.selectedShareDenomination,e.shareDenominations);return r.a.createElement("ul",{className:"market-properties"},e.endDate&&r.a.createElement("li",{className:"property end-date"},r.a.createElement("a",{"data-tip":!0,"data-for":e.id+"-end-date-tooltip","data-event":"click focus"},r.a.createElement("span",{className:"property-label"},e.isOpen&&!e.isPendingReport?e.endDateLabel||"End Date":"Ended",":"),r.a.createElement(s.a,m({className:"property-value"},e.endDate))),r.a.createElement(l.a,{id:e.id+"-end-date-tooltip",type:"light",effect:"solid",place:"top",globalEventOff:"click"},r.a.createElement("span",{className:"tooltip-text"},"The outcome of this event will be known on or before ",e.endDate.full,"."))),r.a.createElement("li",{className:"property fee"},r.a.createElement("a",{"data-tip":!0,"data-for":e.id+"-maker-fee-tooltip","data-event":"click focus"},r.a.createElement("span",{className:"property-label"},"Maker Fee:"),r.a.createElement(i.a,m({className:"property-value"},e.makerFeePercent))),r.a.createElement(l.a,{id:e.id+"-maker-fee-tooltip",type:"light",effect:"solid",place:"top",globalEventOff:"click"},r.a.createElement("span",{className:"tooltip-text"},e.makerFeePercent.full," discounted fee for placing bids or asks on the books"))),r.a.createElement("li",{className:"property fee"},r.a.createElement("a",{"data-tip":!0,"data-for":e.id+"-taker-fee-tooltip","data-event":"click focus"},r.a.createElement("span",{className:"property-label"},"Taker Fee:"),r.a.createElement(i.a,m({className:"property-value"},e.takerFeePercent))),r.a.createElement(l.a,{id:e.id+"-taker-fee-tooltip",type:"light",effect:"solid",place:"top",globalEventOff:"click"},r.a.createElement("span",{className:"tooltip-text"},e.takerFeePercent.full," fee for taking bids or asks from the books"))),t&&r.a.createElement("li",{className:"property volume"},r.a.createElement("a",{"data-tip":!0,"data-for":e.id+"-volume-tooltip","data-event":"click focus"},r.a.createElement("span",{className:"property-label"},"Volume:"),r.a.createElement(i.a,{className:"property-value",formatted:t,denomination:o})),r.a.createElement(l.a,{id:e.id+"-volume-tooltip",type:"light",effect:"solid",place:"top",globalEventOff:"click"},r.a.createElement("span",{className:"tooltip-text"},n," total ",e.volume.denomination," traded"))),e.numPendingReports&&e.isPendingReport&&r.a.createElement("li",{className:"property pending-reports"},r.a.createElement("a",{"data-tip":!0,"data-for":e.id+"-pending-reports-tooltip","data-event":"click focus"},r.a.createElement("span",{className:"property-label"},"Pending Reports:"),r.a.createElement("span",null," ",r.a.createElement("strong",null,e.numPendingReports))),r.a.createElement(l.a,{id:e.id+"-pending-reports-tooltip",type:"light",effect:"solid",place:"top",globalEventOff:"click"},r.a.createElement("span",{className:"tooltip-text"},e.numPendingReports," reports submitted on this market thus far"))))};t.a=d},1175:function(e,t,a){"use strict";var n=a(599);t.a=function(e,t){switch(e){case n.a:var a=t&&t.find(function(e){return e.value===n.a});return a&&a.label||"μShares";case n.b:var r=t&&t.find(function(e){return e.value===n.b});return r&&r.label||"mShares";default:case n.c:var o=t&&t.find(function(e){return e.value===n.c});return o&&o.label||"Shares"}}},1176:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(13);t.default={propTypes:{prefixCls:n.PropTypes.string,strokeWidth:n.PropTypes.oneOfType([n.PropTypes.number,n.PropTypes.string]),strokeColor:n.PropTypes.string,trailWidth:n.PropTypes.oneOfType([n.PropTypes.number,n.PropTypes.string]),trailColor:n.PropTypes.string,strokeLinecap:n.PropTypes.oneOf(["round","square"]),style:n.PropTypes.object,className:n.PropTypes.string},getDefaultProps:function(){return{prefixCls:"rc-progress",strokeWidth:1,strokeColor:"#2db7f5",trailWidth:1,trailColor:"#D9D9D9",strokeLinecap:"round",className:""}},componentDidUpdate:function(){var e=Date.now();this.refs.path.style.transitionDuration="0.3s, 0.3s",this.prevTimeStamp&&e-this.prevTimeStamp<100&&(this.refs.path.style.transitionDuration="0s, 0s"),this.prevTimeStamp=Date.now()}},e.exports=t.default},1177:function(e,t,a){"use strict";var n=a(13),r=a.n(n),o=a(115),l=a.n(o),s=a(1174),i=a(597),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},p=function(e){return r.a.createElement("article",{className:"market-basics"},r.a.createElement("div",{className:"market-basics-header"},r.a.createElement("div",{className:"market-basics-header-group-1"},!!e.tags&&!!e.tags.length&&r.a.createElement("ul",{className:"tags"},e.tags.map(function(e,t){return r.a.createElement("li",{key:t,className:l()("tag","pointer",{link:!!e.name})},r.a.createElement("button",{className:"unstyled",onClick:e.onClick&&e.onClick},e.name?e.name:e))}))),r.a.createElement("div",{className:"market-basics-header-group-2"},e.loginAccount&&e.loginAccount.address&&e.onClickToggleFavorite&&r.a.createElement("button",{className:l()("button unstyled favorite-button",{on:e.isFavorite}),onClick:e.onClickToggleFavorite},e.isFavorite?r.a.createElement("i",null,""):r.a.createElement("i",null,"")))),e.marketLink?r.a.createElement(i.a,c({},e.marketLink,{onClick:e.marketLink.onClick,className:"market-description"}),e.description):r.a.createElement("span",{className:"market-description"},e.description),r.a.createElement(s.a,e))};t.a=p},1179:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l=a(13),s=n(l),i=a(1176),c=n(i);t.default=s.default.createClass({displayName:"Circle",mixins:[c.default],render:function(){var e=this.props,t=e.prefixCls,a=e.strokeWidth,n=e.trailWidth,l=e.strokeColor,i=e.trailColor,c=e.strokeLinecap,p=e.percent,u=e.style,m=e.className,d=r(e,["prefixCls","strokeWidth","trailWidth","strokeColor","trailColor","strokeLinecap","percent","style","className"]),f=50-a/2,v="M 50,50 m 0,-"+f+"\n     a "+f+","+f+" 0 1 1 0,"+2*f+"\n     a "+f+","+f+" 0 1 1 0,-"+2*f,h=2*Math.PI*f,g={strokeDasharray:h+"px "+h+"px",strokeDashoffset:(100-p)/100*h+"px",transition:"stroke-dashoffset 0.3s ease 0s, stroke 0.3s ease"};return s.default.createElement("svg",o({className:t+"-circle "+m,viewBox:"0 0 100 100",style:u},d),s.default.createElement("path",{className:t+"-circle-trail",d:v,stroke:i,strokeWidth:n||a,fillOpacity:"0"}),s.default.createElement("path",{className:t+"-circle-path",d:v,strokeLinecap:c,stroke:l,strokeWidth:a,fillOpacity:"0",ref:"path",style:g}))}}),e.exports=t.default},1180:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l=a(13),s=n(l),i=a(1176),c=n(i);t.default=s.default.createClass({displayName:"Line",mixins:[c.default],render:function(){var e=this.props,t=e.prefixCls,a=e.strokeWidth,n=e.trailWidth,l=e.strokeColor,i=e.trailColor,c=e.strokeLinecap,p=e.percent,u=e.style,m=e.className,d=r(e,["prefixCls","strokeWidth","trailWidth","strokeColor","trailColor","strokeLinecap","percent","style","className"]),f={strokeDasharray:"100px, 100px",strokeDashoffset:100-p+"px",transition:"stroke-dashoffset 0.3s ease 0s, stroke 0.3s linear"},v=a/2,h=100-a/2,g="M "+v+","+v+" L "+h+","+v,y="0 0 100 "+a;return s.default.createElement("svg",o({className:t+"-line "+m,viewBox:y,preserveAspectRatio:"none",style:u},d),s.default.createElement("path",{className:t+"-line-trail",d:g,strokeLinecap:c,stroke:i,strokeWidth:n||a,fillOpacity:"0"}),s.default.createElement("path",{className:t+"-line-path",d:g,strokeLinecap:c,stroke:l,strokeWidth:a,fillOpacity:"0",ref:"path",style:f}))}}),e.exports=t.default},1181:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(1180),o=n(r),l=a(1179),s=n(l);t.default={Line:o.default,Circle:s.default},e.exports=t.default},1182:function(e,t,a){"use strict";var n=a(13),r=a.n(n),o=a(329),l=a.n(o),s=a(1181),i=(a.n(s),a(1183)),c=function(e){return r.a.createElement("article",{className:"branch-info"},r.a.createElement(s.Line,{percent:e.currentPeriodProgress,strokeWidth:"1",strokeColor:"#5c2634"}),r.a.createElement("span",{className:"reporting-cycle-info"},"Reporting Cycle ",e.reportPeriod," ",r.a.createElement(i.a,null)," ",Math.round(e.currentPeriodProgress),"% complete ",r.a.createElement(i.a,null)," ",e.phaseLabel," phase ends ",e.phaseTimeRemaining),r.a.createElement("span",{"data-tip":!0,"data-for":"branch-id-tooltip","data-event":"click focus",className:"branch-description pointer"},e.description," ",r.a.createElement(i.a,null)," ",e.periodLength/3600," hours per cycle"),r.a.createElement(l.a,{id:"branch-id-tooltip",type:"light",effect:"float",place:"top",globalEventOff:"click"},r.a.createElement("span",{className:"tooltip-text"},"Branch ID: ",e.id)))};c.propTypes={className:n.PropTypes.string,description:n.PropTypes.string,id:n.PropTypes.string,periodLength:n.PropTypes.number,phaseLabel:n.PropTypes.string,phaseTimeRemaining:n.PropTypes.string,currentPeriodProgress:n.PropTypes.number},t.a=c},1183:function(e,t,a){"use strict";var n=a(13),r=a.n(n),o=function(){return r.a.createElement("span",null,"·")};t.a=o},1185:function(e,t,a){"use strict";var n=a(13),r=a.n(n),o=function(e){return r.a.createElement("div",{className:"dropdown"},r.a.createElement("select",{onChange:function(t){e.onChange(t.target.value)},defaultValue:e.default},e.options.map(function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.label)})),r.a.createElement("i",{className:"fa"},""))};t.a=o},1186:function(e,t,a){"use strict";var n=a(13),r=a.n(n),o=a(598),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s=function(e){return r.a.createElement("div",{className:"market-preview-outcomes"},e.outcomes.map(function(e,t){return r.a.createElement("div",{key:e.id,className:"outcome"},!!e.lastPricePercent&&r.a.createElement(o.a,l({className:"outcome-price"},e.lastPricePercent,{formatted:e.lastPricePercent.rounded,formattedValue:e.lastPricePercent.roundedValue})),r.a.createElement("span",{className:"outcome-name"},e.name))}))};t.a=s},1187:function(e,t,a){"use strict";var n=a(13),r=a.n(n),o=a(115),l=a.n(o),s=a(1177),i=a(1186),c=a(597),p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},u=function(e){return r.a.createElement("article",{className:"market-preview "+e.className},r.a.createElement("div",{className:"market-preview-group-1"},r.a.createElement(s.a,e),!!e.marketLink&&r.a.createElement("div",{className:"market-link"},r.a.createElement(c.a,p({},e.marketLink,{className:l()("button",e.marketLink.className)}),e.marketLink.text))),e.outcomes&&r.a.createElement("div",{className:"market-preview-group-2"},r.a.createElement(i.a,{outcomes:e.outcomes})))};u.propTypes={className:n.PropTypes.string,description:n.PropTypes.string,outcomes:n.PropTypes.array,isOpen:n.PropTypes.bool,isFavorite:n.PropTypes.bool,isPendingReport:n.PropTypes.bool,endDate:n.PropTypes.object,tradingFeePercent:n.PropTypes.object,volume:n.PropTypes.object,tags:n.PropTypes.array,marketLink:n.PropTypes.object,onClickToggleFavorite:n.PropTypes.func},t.a=u},1219:function(e,t,a){"use strict";var n=a(13),r=a.n(n),o=a(1185),l=a(1223),s=function(e){return r.a.createElement("article",{className:"markets-filter-sort view-header"},r.a.createElement("div",{className:"view-header-group"},r.a.createElement(o.a,{default:e.selectedFilterSort.type,options:e.types,onChange:function(t){e.onChange(t,null,null)}}),r.a.createElement("div",{className:"companion-fields"},r.a.createElement(o.a,{className:"companion-field",default:e.selectedFilterSort.sort,options:e.sorts,onChange:function(t){e.onChange(null,t,null)}}),r.a.createElement("button",{className:"unstyled",onClick:function(){e.onChange(null,null,!e.selectedFilterSort.isDesc)}},r.a.createElement("i",null,e.selectedFilterSort.isDesc?"":"")))),r.a.createElement("div",{className:"view-header-group"},r.a.createElement(l.a,{keywords:e.keywords})))};t.a=s},1220:function(e,t,a){"use strict";var n=a(13),r=a.n(n),o=a(1219),l=a(597),s=a(602),i=a(134),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},p=function(e){return r.a.createElement("article",null,r.a.createElement("div",{className:"view-header"},r.a.createElement("div",{className:"view-header-group"},r.a.createElement("h2",null,"Markets",e.marketsHeader.selectedMarketsHeader===i.a&&r.a.createElement("span",null," ",r.a.createElement(s.a,null)," Favorites"),e.marketsHeader.selectedMarketsHeader===i.b&&r.a.createElement("span",null," ",r.a.createElement(s.a,null)," Pending Reports"))),r.a.createElement("div",{className:"view-header-group"},e.loginAccount&&e.loginAccount.address&&r.a.createElement(l.a,c({className:"button imperative navigational",disabled:!e.loginAccount.address},e.createMarketLink),"+ Create New Market"))),r.a.createElement(o.a,c({keywords:e.keywords},e.filterSort)))};p.propTypes={className:n.PropTypes.string,createMarketLink:n.PropTypes.object,loginAccount:n.PropTypes.object,marketsHeader:n.PropTypes.object,filterSort:n.PropTypes.object,keywords:n.PropTypes.object},t.a=p},1221:function(e,t,a){"use strict";var n=a(13),r=a.n(n),o=a(1187),l=a(1222),s=a(600),i=a(328),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},p=function(e){var t="No Markets Available";return r.a.createElement("article",{className:"markets-list"},e.markets.length?e.markets.map(function(t){var n=a.i(i.a)(e,"scalarShareDenomination.markets."+t.id),l=a.i(i.a)(e,"scalarShareDenomination.denominations");return r.a.createElement(o.a,c({key:t.id,loginAccount:e.loginAccount},t,{selectedShareDenomination:n,shareDenominations:l}))}):r.a.createElement(s.a,{message:t}),!!e.pagination&&!!e.pagination.numUnpaginated&&r.a.createElement(l.a,{pagination:e.pagination}))};t.a=p},1222:function(e,t,a){"use strict";var n=a(13),r=a.n(n),o=a(597),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s=function(e){return r.a.createElement("div",{className:"markets-pagination"},r.a.createElement("div",{className:"markets-pagination-group-1"},!!e.pagination&&!!e.pagination.previousPageNum&&r.a.createElement(o.a,l({},e.pagination.previousPageLink,{className:"button"}),r.a.createElement("i",null,""))),r.a.createElement("div",{className:"markets-pagination-group-2"},r.a.createElement("span",{className:"pagination-count"},e.pagination.startItemNum+" - "+e.pagination.endItemNum," ",r.a.createElement("strong",null,"of")," ",e.pagination.numUnpaginated)),r.a.createElement("div",{className:"markets-pagination-group-3"},!!e.pagination&&!!e.pagination.nextPageNum&&r.a.createElement(o.a,l({},e.pagination.nextPageLink,{className:"button"}),r.a.createElement("i",null,""))))};t.a=s},1223:function(e,t,a){"use strict";var n=a(13),r=a.n(n),o=a(1171),l=function(e){return r.a.createElement("article",{className:"search-input "+e.className},r.a.createElement("i",null,""),r.a.createElement(o.a,{placeholder:"Search Markets",isClearable:!0,value:e.keywords&&e.keywords.value,onChange:e.keywords&&e.keywords.onChangeKeywords}))};l.propTypes={className:n.PropTypes.string,keywords:n.PropTypes.object},t.a=l}});