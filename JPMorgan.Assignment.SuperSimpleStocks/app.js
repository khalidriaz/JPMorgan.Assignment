var StockExchange = require('./StockExchange')
var StockCommon = require('./StockExchange/models/StockCommon')
var StockPreferred = require('./StockExchange/models/StockPreferred')

var Trading = require('./Trading');
var Trade = require('./Trading/models/Trade');
var TradeType = require('./Trading/models/TradeTypeEnum.js');

//StockExchange
var stockExchange = new StockExchange();
var stockList = [
    new StockCommon("TEA", 100, 0),
    new StockCommon("POP", 100, 8),
    new StockCommon("ALE", 60, 23),
    new StockPreferred("GIN", 100, 8, 2),
    new StockCommon("JOE", 250, 13)
];

stockExchange.addStocks(stockList);
console.log('All share index: ' + stockExchange.getAllShareIndex());
console.log('Dividend yield: ' + stockExchange.getDividendYield("POP", 200));
console.log('PE Ratio: ' + stockExchange.getPERatio("TEA", 200));
console.log('\n');


//Trading
var trading = new Trading();
var MINUTE = 60 * 1000
var trades = [
    new Trade(10, 5, Date.now() - (MINUTE * 1), TradeType.BUY),
    new Trade(17, 2, Date.now() - (MINUTE * 2), TradeType.BUY),
    new Trade(30, 7, Date.now() - (MINUTE * 5), TradeType.SELL),
    new Trade(15, 4, Date.now() - (MINUTE * 8), TradeType.BUY),
    new Trade(28, 9, Date.now() - (MINUTE * 10), TradeType.SELL),
    new Trade(34, 4, Date.now() - (MINUTE * 12), TradeType.SELL),
    new Trade(43, 5, Date.now() - (MINUTE * 14), TradeType.BUY),
    new Trade(27, 7, Date.now() - (MINUTE * 16), TradeType.BUY),
    new Trade(12, 4, Date.now() - (MINUTE * 20), TradeType.SELL)
];
trading.addTrades(trades);
console.log('Volume weighted stock price: ' + trading.getVolumeWeightedStockPrice());
