webpackJsonp([4,11],{1161:function(e,a,t){"use strict";var r=t(13),s=t.n(r),n=t(1234),c=t(1173),l=function(e){return s.a.createElement("section",{id:"transactions_view"},!!e.loginAccount.rep&&!!e.loginAccount.rep.value&&s.a.createElement(c.a,e.branch),s.a.createElement("div",{className:"view-header"},s.a.createElement("h2",null,"Transactions")),s.a.createElement("div",{className:"page-content"},s.a.createElement(n.a,{className:"transactions-content",transactions:e.transactions})))};l.propTypes={branch:s.a.PropTypes.object,className:s.a.PropTypes.string,loginAccount:s.a.PropTypes.object,transactions:s.a.PropTypes.array},a.default=l},1167:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=t(13);a.default={propTypes:{prefixCls:r.PropTypes.string,strokeWidth:r.PropTypes.oneOfType([r.PropTypes.number,r.PropTypes.string]),strokeColor:r.PropTypes.string,trailWidth:r.PropTypes.oneOfType([r.PropTypes.number,r.PropTypes.string]),trailColor:r.PropTypes.string,strokeLinecap:r.PropTypes.oneOf(["round","square"]),style:r.PropTypes.object,className:r.PropTypes.string},getDefaultProps:function(){return{prefixCls:"rc-progress",strokeWidth:1,strokeColor:"#2db7f5",trailWidth:1,trailColor:"#D9D9D9",strokeLinecap:"round",className:""}},componentDidUpdate:function(){var e=Date.now();this.refs.path.style.transitionDuration="0.3s, 0.3s",this.prevTimeStamp&&e-this.prevTimeStamp<100&&(this.refs.path.style.transitionDuration="0s, 0s"),this.prevTimeStamp=Date.now()}},e.exports=a.default},1170:function(e,a,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function s(e,a){var t={};for(var r in e)a.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}Object.defineProperty(a,"__esModule",{value:!0});var n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},c=t(13),l=r(c),o=t(1167),i=r(o);a.default=l.default.createClass({displayName:"Circle",mixins:[i.default],render:function(){var e=this.props,a=e.prefixCls,t=e.strokeWidth,r=e.trailWidth,c=e.strokeColor,o=e.trailColor,i=e.strokeLinecap,p=e.percent,m=e.style,u=e.className,d=s(e,["prefixCls","strokeWidth","trailWidth","strokeColor","trailColor","strokeLinecap","percent","style","className"]),f=50-t/2,E="M 50,50 m 0,-"+f+"\n     a "+f+","+f+" 0 1 1 0,"+2*f+"\n     a "+f+","+f+" 0 1 1 0,-"+2*f,y=2*Math.PI*f,g={strokeDasharray:y+"px "+y+"px",strokeDashoffset:(100-p)/100*y+"px",transition:"stroke-dashoffset 0.3s ease 0s, stroke 0.3s ease"};return l.default.createElement("svg",n({className:a+"-circle "+u,viewBox:"0 0 100 100",style:m},d),l.default.createElement("path",{className:a+"-circle-trail",d:E,stroke:o,strokeWidth:r||t,fillOpacity:"0"}),l.default.createElement("path",{className:a+"-circle-path",d:E,strokeLinecap:i,stroke:c,strokeWidth:t,fillOpacity:"0",ref:"path",style:g}))}}),e.exports=a.default},1171:function(e,a,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function s(e,a){var t={};for(var r in e)a.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}Object.defineProperty(a,"__esModule",{value:!0});var n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},c=t(13),l=r(c),o=t(1167),i=r(o);a.default=l.default.createClass({displayName:"Line",mixins:[i.default],render:function(){var e=this.props,a=e.prefixCls,t=e.strokeWidth,r=e.trailWidth,c=e.strokeColor,o=e.trailColor,i=e.strokeLinecap,p=e.percent,m=e.style,u=e.className,d=s(e,["prefixCls","strokeWidth","trailWidth","strokeColor","trailColor","strokeLinecap","percent","style","className"]),f={strokeDasharray:"100px, 100px",strokeDashoffset:100-p+"px",transition:"stroke-dashoffset 0.3s ease 0s, stroke 0.3s linear"},E=t/2,y=100-t/2,g="M "+E+","+E+" L "+y+","+E,b="0 0 100 "+t;return l.default.createElement("svg",n({className:a+"-line "+u,viewBox:b,preserveAspectRatio:"none",style:m},d),l.default.createElement("path",{className:a+"-line-trail",d:g,strokeLinecap:i,stroke:o,strokeWidth:r||t,fillOpacity:"0"}),l.default.createElement("path",{className:a+"-line-path",d:g,strokeLinecap:i,stroke:c,strokeWidth:t,fillOpacity:"0",ref:"path",style:f}))}}),e.exports=a.default},1172:function(e,a,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(a,"__esModule",{value:!0});var s=t(1171),n=r(s),c=t(1170),l=r(c);a.default={Line:n.default,Circle:l.default},e.exports=a.default},1173:function(e,a,t){"use strict";var r=t(13),s=t.n(r),n=t(323),c=t.n(n),l=t(1172),o=(t.n(l),t(1174)),i=function(e){return s.a.createElement("article",{className:"branch-info"},s.a.createElement(l.Line,{percent:e.currentPeriodProgress,strokeWidth:"1",strokeColor:"#5c2634"}),s.a.createElement("span",{className:"reporting-cycle-info"},"Reporting Cycle ",e.reportPeriod," ",s.a.createElement(o.a,null)," ",Math.round(e.currentPeriodProgress),"% complete ",s.a.createElement(o.a,null)," ",e.phaseLabel," phase ends ",e.phaseTimeRemaining),s.a.createElement("span",{"data-tip":!0,"data-for":"branch-id-tooltip","data-event":"click focus",className:"branch-description pointer"},e.description," ",s.a.createElement(o.a,null)," ",e.periodLength/3600," hours per cycle"),s.a.createElement(c.a,{id:"branch-id-tooltip",type:"light",effect:"float",place:"top",globalEventOff:"click"},s.a.createElement("span",{className:"tooltip-text"},"Branch ID: ",e.id)))};i.propTypes={className:r.PropTypes.string,description:r.PropTypes.string,id:r.PropTypes.string,periodLength:r.PropTypes.number,phaseLabel:r.PropTypes.string,phaseTimeRemaining:r.PropTypes.string,currentPeriodProgress:r.PropTypes.number},a.a=i},1174:function(e,a,t){"use strict";var r=t(13),s=t.n(r),n=function(){return s.a.createElement("span",null,"·")};a.a=n},1179:function(e,a,t){"use strict";var r=t(13),s=t.n(r),n=function(e){return s.a.createElement("span",{className:e.className},!!e.isUnethical&&s.a.createElement("span",{className:"fa report-unethical","data-tip":"You reported that this market is unethical"},""))};n.propTypes={className:s.a.PropTypes.string,isUnethical:s.a.PropTypes.bool},a.a=n},1231:function(e,a,t){"use strict";var r=t(13),s=t.n(r),n=t(589),c=function(e){if(!e.description)return s.a.createElement("span",null);var a=void 0;e.description.indexOf("\n")>-1?(a=e.description.split("\n").map(function(e){return s.a.createElement("li",{key:e},e)}),a=s.a.createElement("ul",null,a)):a=e.description.substring(0,100)+(e.description.length>100&&"..."||"");var t=function(t){return t?s.a.createElement("span",{className:"market-description","data-tip":e.description},a):s.a.createElement("span",{className:"market-description"},a)},r=a!==e.description;return a&&e.marketLink?s.a.createElement(n.a,{href:e.marketLink.href,onClick:e.marketLink.onClick},t(r)):s.a.createElement("span",null,t(r))};c.propTypes={className:s.a.PropTypes.string,description:s.a.PropTypes.string,marketLink:s.a.PropTypes.object},a.a=c},1232:function(e,a,t){"use strict";function r(e){return{__html:e}}var s=t(13),n=t.n(s),c=t(590),l=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o=function(e){return n.a.createElement("div",{className:"status-and-message"},!!e.message&&n.a.createElement("span",{className:"message",dangerouslySetInnerHTML:r(e.message)}),n.a.createElement("br",null),!!e.tradingFees&&null!==e.tradingFees.value&&void 0!==e.tradingFees.value&&n.a.createElement("span",null,n.a.createElement(c.a,l({className:"tradingFees-message"},e.tradingFees,{prefix:"trading fees:"})),n.a.createElement("br",null)),n.a.createElement("ul",null,(e.data.balances||[]).map(function(a){return n.a.createElement("li",{key:e.id+"-"+(a.change&&a.change.full)+"-"+(a.balance&&a.balance.full)},!!a.change&&n.a.createElement(c.a,l({className:"balance-message balance-change"},a.change)),!!a.balance&&n.a.createElement(c.a,l({className:"balance-message"},a.balance,{prefix:" [ balance:",postfix:"]"})))})),!!e.freeze&&n.a.createElement("span",{className:"freeze-message"},e.freeze.noFeeCost&&n.a.createElement(c.a,l({className:"freeze-noFeeCost-message"},e.freeze.noFeeCost,{prefix:e.freeze.verb,postfix:"+ "})),n.a.createElement(c.a,l({className:"freeze-tradingFees-message"},e.freeze.tradingFees,{hidePrefix:!!e.freeze.noFeeCost,prefix:e.freeze.verb,postfix:"in potential trading fees"})),n.a.createElement("br",null)),!!e.totalCost&&null!==e.totalCost.value&&void 0!==e.totalCost.value&&n.a.createElement("span",null,n.a.createElement(c.a,l({className:"totalCost-message"},e.totalCost,{prefix:"total cost:"})),n.a.createElement("br",null)),!!e.totalReturn&&null!==e.totalReturn.value&&void 0!==e.totalReturn.value&&n.a.createElement("span",null,n.a.createElement(c.a,l({className:"totalReturn-message"},e.totalReturn,{prefix:"total return:"})),n.a.createElement("br",null)),!!e.marketCreationFee&&null!==e.marketCreationFee.value&&void 0!==e.marketCreationFee&&n.a.createElement("span",null,n.a.createElement(c.a,l({className:"marketCreationFee-message"},e.marketCreationFee,{prefix:"market creation fee:"})),n.a.createElement("br",null)),!!e.bond&&!!e.bond.value&&n.a.createElement("span",null,n.a.createElement(c.a,l({className:"bond-message"},e.bond.value,{prefix:e.bond.label+" bond:"})),n.a.createElement("br",null)),!!e.gasFees&&null!==e.gasFees.value&&void 0!==e.gasFees.value&&n.a.createElement("span",null,n.a.createElement(c.a,l({className:"gasFees-message"},e.gasFees,{prefix:"gas cost:"})),n.a.createElement("br",null)),n.a.createElement("span",{className:"status"},e.status))};o.propTypes={className:n.a.PropTypes.string,index:n.a.PropTypes.number,type:n.a.PropTypes.string,status:n.a.PropTypes.string,data:n.a.PropTypes.object,description:n.a.PropTypes.string,shares:n.a.PropTypes.object,gas:n.a.PropTypes.object,hash:n.a.PropTypes.string,freeze:n.a.PropTypes.object,gasFees:n.a.PropTypes.object,tradingFees:n.a.PropTypes.object,marketCreationFee:n.a.PropTypes.object,bond:n.a.PropTypes.object,totalCost:n.a.PropTypes.object,totalReturn:n.a.PropTypes.object,timestamp:n.a.PropTypes.object},a.a=o},1233:function(e,a,t){"use strict";var r=t(13),s=t.n(r),n=t(112),c=t.n(n),l=t(589),o=t(593),i=t(128),p=t(29),m=t(590),u=t(603),d=t(1232),f=t(1231),E=t(1179),y=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},g=function(e){var a={};switch(e.type){case o.BUY:case o.BID:case o.SELL:case o.ASK:case o.SHORT_SELL:case o.SHORT_ASK:case o.MATCH_BID:case o.MATCH_ASK:switch(e.type){case o.BUY:a.action="Buy";break;case o.BID:a.action="Bid";break;case o.SELL:a.action="Sell";break;case o.ASK:a.action="Ask";break;case o.SHORT_SELL:a.action="Short Sell";break;case o.SHORT_ASK:a.action="Short Ask";break;case o.MATCH_BID:a.action="Bid Filled";break;case o.MATCH_ASK:a.action="Ask Filled"}a.description=s.a.createElement("span",{className:"description"},s.a.createElement("span",{className:"action"},a.action),s.a.createElement(m.a,y({className:"shares"},e.numShares)),e.data.marketType===p.a&&s.a.createElement("span",null,s.a.createElement("span",{className:"of"},"of")," ",s.a.createElement("span",{className:"outcome-name"},e.data.outcomeName&&e.data.outcomeName.toString().substring(0,35)+(e.data.outcomeName.toString().length>35&&"..."||""))),s.a.createElement("span",{className:"at"},"@"),s.a.createElement(m.a,y({className:"noFeePrice"},e.noFeePrice)),s.a.createElement("br",{className:"hide-in-tx-display"}),s.a.createElement(m.a,y({className:"avgPrice"},e.avgPrice,{prefix:"estimated total (including trading fees):",postfix:"/ share"})),s.a.createElement("br",null),s.a.createElement(f.a,{description:e.description,marketLink:e.data.marketLink}),s.a.createElement("br",{className:"hide-in-trade-summary-display"}),e.timestamp&&s.a.createElement(u.a,y({className:"property-value"},e.timestamp)));break;case o.SELL_COMPLETE_SETS:a.action="Redeem "+e.numShares.formatted+" Complete Sets",a.description=s.a.createElement("span",{className:"description"},s.a.createElement("span",{className:"action"},a.action),s.a.createElement("br",null),s.a.createElement(f.a,{description:e.description,marketLink:e.data.marketLink}),s.a.createElement("br",null),e.timestamp&&s.a.createElement(u.a,y({className:"property-value"},e.timestamp)));break;case i.f:a.action="Fund Account",a.description=s.a.createElement("span",{className:"description"},s.a.createElement("span",{className:"action"},a.action),s.a.createElement("br",null),s.a.createElement("span",{className:"market-description"},"Request testnet Ether and Reputation"),s.a.createElement("br",null),e.timestamp&&s.a.createElement(u.a,y({className:"property-value"},e.timestamp)));break;case o.CREATE_MARKET:a.action="Create Market",a.description=s.a.createElement("span",{className:"description"},s.a.createElement("span",{className:"action"},a.action),s.a.createElement("br",null),s.a.createElement(f.a,{description:e.description,marketLink:e.data.marketLink}),s.a.createElement("br",null),e.timestamp&&s.a.createElement(u.a,y({className:"property-value"},e.timestamp)));break;case o.COMMIT_REPORT:case o.REVEAL_REPORT:a.action=e.type===o.COMMIT_REPORT?"Commit Report":"Reveal Report";var t=e.data.isScalar||e.data.market&&e.data.market.type===p.b?e.data.reportedOutcomeID:e.data.outcome&&e.data.outcome.name&&e.data.outcome.name.substring(0,35)+(e.data.outcome.name.length>35&&"..."||"");a.description=s.a.createElement("span",{className:"description"},s.a.createElement("span",{className:"action"},a.action),s.a.createElement("strong",null,t),s.a.createElement(E.a,{isUnethical:e.data.isUnethical}),s.a.createElement("br",null),s.a.createElement(f.a,{description:e.description,marketLink:e.data.marketLink}),s.a.createElement("br",null),e.timestamp&&s.a.createElement(u.a,y({className:"property-value"},e.timestamp)));break;case o.GENERATE_ORDER_BOOK:a.action="Generate order book",a.description=s.a.createElement("span",{className:"description"},s.a.createElement("span",{className:"action"},a.action),s.a.createElement("br",null),s.a.createElement(f.a,{description:e.description,marketLink:e.data.marketLink}),s.a.createElement("br",null),e.timestamp&&s.a.createElement(u.a,y({className:"property-value"},e.timestamp)));break;case o.CANCEL_ORDER:a.description=s.a.createElement("span",{className:"description"},s.a.createElement("span",{className:"action"},"Cancel order"),s.a.createElement("span",{className:"at"},"to ",e.data.order.type),s.a.createElement(m.a,y({className:"shares"},e.data.order.shares)),s.a.createElement("span",{className:"of"},"of"),s.a.createElement("span",{className:"outcome-name"},e.data.outcome.name&&e.data.outcome.name.substring(0,35)+(e.data.outcome.name.length>35&&"..."||"")),s.a.createElement("br",null),s.a.createElement(f.a,{description:e.description,marketLink:e.data.marketLink}),s.a.createElement("br",null),e.timestamp&&s.a.createElement(u.a,y({className:"property-value"},e.timestamp)));break;default:a.description=s.a.createElement("span",{className:"description"},s.a.createElement("span",{className:"action"},e.type),s.a.createElement("br",null),s.a.createElement(f.a,{description:e.description,marketLink:e.data.marketLink}),s.a.createElement("br",null),e.timestamp&&s.a.createElement(u.a,y({className:"property-value"},e.timestamp)))}return s.a.createElement("article",{className:c()("transaction-item",e.className,e.status)},e.index&&s.a.createElement("span",{className:"index"},e.index+"."),a.description,s.a.createElement("span",{className:"value-changes"},!!e.tradingFees&&null!==e.tradingFees.value&&void 0!==e.tradingFees.value&&s.a.createElement(m.a,y({className:"value-change tradingFees"},e.tradingFees,{prefix:"trading fees:"})),s.a.createElement("span",{className:"spacer"}," "),!!e.feePercent&&null!==e.feePercent.value&&void 0!==e.feePercent&&s.a.createElement(m.a,y({className:"value-change feePercent"},e.feePercent,{prefix:"[",postfix:"]"})),s.a.createElement("br",null),!!e.gasFees&&!!e.gasFees.value&&s.a.createElement(m.a,y({className:"value-change gasFees"},e.gasFees,{prefix:"estimated gas cost:"}))),e.status&&e.hash?s.a.createElement(l.a,{href:"https://testnet.etherscan.io/tx/"+e.hash,target:"_blank"},s.a.createElement(d.a,e)):s.a.createElement(d.a,e))};g.propTypes={className:s.a.PropTypes.string,index:s.a.PropTypes.number,type:s.a.PropTypes.string,status:s.a.PropTypes.string,data:s.a.PropTypes.object,description:s.a.PropTypes.string,shares:s.a.PropTypes.object,gas:s.a.PropTypes.object,hash:s.a.PropTypes.string,freeze:s.a.PropTypes.object,gasFees:s.a.PropTypes.object,tradingFees:s.a.PropTypes.object,marketCreationFee:s.a.PropTypes.object,bond:s.a.PropTypes.object,totalCost:s.a.PropTypes.object,totalReturn:s.a.PropTypes.object,timestamp:s.a.PropTypes.object},a.a=g},1234:function(e,a,t){"use strict";var r=t(13),s=t.n(r),n=t(1233),c=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},l=function(e){return s.a.createElement("article",{className:e.className},s.a.createElement("div",{className:"transactions-container"},(e.transactions||[]).map(function(a,t){return s.a.createElement(n.a,c({key:a.id},a,{index:e.transactions.length-t}))})),!!e.transactions.length&&s.a.createElement("span",{className:"feel-free"},"continue trading while transactions are running, just don't close the browser before they're done!"))};a.a=l}});