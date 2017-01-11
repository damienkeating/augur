webpackJsonp([7,11],{1157:function(e,t,a){"use strict";var n=a(13),r=a.n(n),l=a(589),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o=function(e){return r.a.createElement("section",{id:"login_message_view"},r.a.createElement("div",{className:"page-content"},r.a.createElement("h1",null,"Welcome to the Augur beta test!"),r.a.createElement("p",null,"This is a beta test in advance of Augur's live release. There are bugs. There are features being\n\t\t\t\tadded, improved, and re-designed. There are a few hundred enhancements scheduled to be added in the next few\n\t\t\t\tmonths. Your thoughtful feedback now is essential. Please use the feedback button at the bottom left of\n\t\t\t\tevery page to submit your feedback, or feel free to send an email to ",r.a.createElement("a",{className:"link",href:"mailto:hugs@augur.net?subject=Beta Testing feedback"},"hugs@augur.net"),". From your submissions, the development team will coordinate fixes and new features. Changes and fixes will be\n\t\t\t\tdisplayed when you log in again."),r.a.createElement("h2",null,"Important information:"),r.a.createElement("ol",null,r.a.createElement("li",null,"Because Augur is a ",r.a.createElement("b",null,"completely decentralized")," system, if you lose your login credentials it is impossible to recover them. Please ",r.a.createElement("a",{className:"link",href:"http://blog.augur.net/faq/how-do-i-savebackup-my-wallet/",target:"_blank",rel:"noopener noreferrer"},"take appropriate measures")," to protect the safety of your password, and create a way to recover your credentials if you forget them."),r.a.createElement("li",null,"Do not send real Ether (ETH) to your Augur account while we are testing! Each account will be given 10,000 testnet ETH tokens for beta testing. Please note that testnet ETH has no value except for testing: it is merely an on-contract IOU (a token) for testnet Ether."),r.a.createElement("li",null,"Reputation (REP) is a unique and important part of the Augur trading platform. If you own REP tokens, you must visit\n\t\t\t\t\tthe site periodically to fulfill your reporting obligations. During beta testing, each new account will\n\t\t\t\t\treceive 47 testnet REP (they have no value except for testing). Each reporting cycle will last 2 days. Every\n\t\t\t\t\ttwo-day cycle will consist of a commit phase, a reveal phase, and a challenge phase. Because the test\n\t\t\t\t\tcycle is dramatically compressed (the main net cycle will be 60 days long) it is recommended that\n\t\t\t\t\tusers visit the site at least every 2 days to maintain your REP and simulate “real money” trading,\n\t\t\t\t\tresolution, and reporting conditions. Learn ",r.a.createElement("a",{className:"link",href:"https://www.youtube.com/watch?v=sCms-snzHk4",target:"_blank",rel:"noopener noreferrer"},"how Augur's Reputation tokens work"),"."),r.a.createElement("li",null,'A note on price/time priority on the blockchain.  The site is only as fast as Ethereum blocks are mined.  Augur\'s matching engine sorts order books by price, then by block number, then by transaction index. Within a single block, transactions are ordered by the miner who mines the block.  When constructing a block, miners typically order transactions first by gasprice (highest to lowest), and then by the order received (oldest to newest).  So, Augur\'s "price/blocknumber/transaction index priority" ordering is generally equivalent to price/time priority, if there are differing gasprices within the block, the transaction index is not guaranteed to be time-ordered.  (Presently, Augur does not attempt to adjust gasprices in response to other pending transactions, although, if desired, gasprice can be adjusted manually using the API, by changing the "gasPrice" field attached to every sendTransaction payload.)')),r.a.createElement("h2",null,"Technical updates:"),r.a.createElement("h3",null,"January 8, 2017"),r.a.createElement("ol",null,r.a.createElement("li",null,"The cash contract now fires a sentCash event when the send or sendFrom functions complete successfully.  Supporting code has been added to the front-end listeners, the filters event formatter, and the transaction relay to listen for, parse, and automatically show on the transactions page."),r.a.createElement("li",null,'In-progress transaction messaging for closing out complete sets, "send" funds transactions (ether, real ether, and reputation), and initial order book generation is now handled entirely by the transaction relayer.  (Note: initial order book generation is currently not exposed in the UI.)'),r.a.createElement("li",null,"Simplified the transactions module by removing two unnecessary methods (updateExistingTransaction and processTransactions).")),r.a.createElement("h3",null,"January 7, 2017"),r.a.createElement("ol",null,r.a.createElement("li",null,"Removed extraneous description fields from augur.js wrapper functions.  Descriptions are now handled by the relayer."),r.a.createElement("li",null,"Added isShortAsk parameter to on-contract sell function and its associated log_add_tx event.  The log_add_tx and log_short_fill_tx filters in augur.js autoconvert isShortAsk to a boolean value."),r.a.createElement("li",null,"Fixed final numMarketsToLoad value for descending loadMarkets."),r.a.createElement("li",null,"Added always-in-progress flag to relayed commitTrade transactions."),r.a.createElement("li",null,"Removed duplicate trading fees display in bid/ask/shortAsk transactions."),r.a.createElement("li",null,"Added isShortAsk field to relayed shortAsk transactions."),r.a.createElement("li",null,"Fixed short sell and short ask messaging.  Added log_short_fill_tx as a separate relayed transaction label."),r.a.createElement("li",null,'Simplified trade simulation setup by inlining the trade and short sell "transaction" objects.  Removed unused add-short-sell-transaction and add-trade-transaction files.')),r.a.createElement("h3",null,"January 6, 2017"),r.a.createElement("ol",null,r.a.createElement("li",null,"The Transaction component no longer has separate commit-to-buy/sell types.  These types now simply use the trade type the user is committing to."),r.a.createElement("li",null,"The transaction relayer now automatically fills in all fields for commit-trade, trade, and short-sell transactions by using the new, more detailed trade info fields attached to the tradeCommitment data store."),r.a.createElement("li",null,'Default "scaffolding" transaction updates have been removed from the relayer.'),r.a.createElement("li",null,"Fixed in-progress vs completed messages for log_fill_tx."),r.a.createElement("li",null,"Assignment to the gasFees field now works correctly for relayed and logged trading transactions."),r.a.createElement("li",null,"Removed unnecessary dispatches from placeTrade and its subroutines."),r.a.createElement("li",null,"Added trade arguments and orders to the tradeCommitment datastore."),r.a.createElement("li",null,"The initial funding transaction log is now loaded alongside the registration timestamp transaction log."),r.a.createElement("li",null,'Replaced the ugly monster header with a "regular" header in the transactions view.')),r.a.createElement("h3",null,"January 5, 2017"),r.a.createElement("ol",null,r.a.createElement("li",null,"The messaging for trade, short_sell, and commitTrade transactions is now handled by the transaction relayer.  Deprecated manual transsaction messaging for these functions have been removed."),r.a.createElement("li",null,"Refactored place-trade: removed dispatcher from placeAsk, placeBid, placeShortAsk, and parametrizeOrder functions, and moved these functions to trade/actions/make-order."),r.a.createElement("li",null,"Simplified the selectScalarMinimum function and moved it to market/selectors/market.")),r.a.createElement("h3",null,"January 4, 2017"),r.a.createElement("ol",null,r.a.createElement("li",null,"Replaced manual transaction processors for trades (buy/sell); refactored and simplified placeTrade."),r.a.createElement("li",null,"Simplified default message generator in registerTransactionRelay."),r.a.createElement("li",null,"Removed unused disableAutoMessage transaction property."),r.a.createElement("li",null,"Fixed bond object in constructMarketCreatedTransaction; fixed constructMarketTransaction parameters; moved marketCreated label out of constructMarketTransaction group."),r.a.createElement("li",null,"Consolidated create market actions into submitNewMarket; removed manual create market transaction updates."),r.a.createElement("li",null,"Fixed adjusted-maker-fee calculation in constructLogAddTxTransaction."),r.a.createElement("li",null,"Added gasFees field to trading transactions in constructRelayTransaction."),r.a.createElement("li",null,"Added missing arguments to cancel in contructRelayTransaction.")),e.marketsLink&&r.a.createElement(l.a,s({className:"lets-do-this-button"},e.marketsLink),"Let's do this!")))};o.propTypes={marketsLink:n.PropTypes.object},t.default=o}});