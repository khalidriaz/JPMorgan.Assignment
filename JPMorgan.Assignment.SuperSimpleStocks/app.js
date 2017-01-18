var StockExchange = require('./StockExchange'),
    StockCommon = require('./StockExchange/models/StockCommon'),
    StockPreferred = require('./StockExchange/models/StockPreferred'),
    Trade = require('./StockExchange/models/Trade'),
    TradeType = require('./StockExchange/models/TradeTypeEnum');

var stockList = [
    new StockCommon("TEA", 100, 0),
    new StockCommon("POP", 100, 8),
    new StockCommon("ALE", 60, 23),
    new StockPreferred("GIN", 100, 8, 2),
    new StockCommon("JOE", 250, 13)
];

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

var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var generateFakeTrades = function (number) {
    
    var trades = [];
    var length = number || 10;
    for (i = 0; i < length; i++) {
        var tradeType = getRandom(1, 10) % 2 == 0?TradeType.BUY:TradeType.SELL;
        trades.push(new Trade(getRandom(5, 50), getRandom(2, 15), Date.now() - (MINUTE * getRandom(1, 30)), tradeType));
    }
    return trades;
};
var randomTrades = generateFakeTrades(50);

var stockExchange = new StockExchange();
stockExchange.addStocks(stockList);
var singleTrade = new Trade(10, 5, Date.now() - (MINUTE * 1), TradeType.BUY);
stockExchange.addTrade("POP");
stockExchange.addTrades("POP", trades);

console.log('\n');
console.log('Dividend yield: ' + stockExchange.getDividendYield("POP", 200));
console.log('\n');
console.log('PE Ratio: ' + stockExchange.getPERatio("POP", 200));
console.log('\n');
console.log('All share index: ' + stockExchange.getAllShareIndex());
console.log('\n');
console.log('Volume weighted stock price: ' + stockExchange.getVolumeWeightedStockPrice("POP"));
