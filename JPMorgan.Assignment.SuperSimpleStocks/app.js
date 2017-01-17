var StockExchange = require('./modules/StockExchange')
var StockCommon = require('./modules/StockCommon')
var StockPreferred = require('./modules/StockPreferred')

var stockExchange = new StockExchange();

var stockList = [
    new StockCommon("TEA", 100, 0),
    new StockCommon("POP", 100, 8),
    new StockCommon("ALE", 60, 23),
    new StockPreferred("GIN", 100, 8, 2),
    new StockCommon("JOE", 250, 13)
];

stockExchange.AddStocks(stockList);
console.log('All share index: ' + stockExchange.GetAllShareIndex());
console.log('Dividend yield: ' + stockExchange.GetDividendYield("POP", 200));
console.log('PE Ratio: ' + stockExchange.GetPERatio("TEA", 200));
console.log('\n');