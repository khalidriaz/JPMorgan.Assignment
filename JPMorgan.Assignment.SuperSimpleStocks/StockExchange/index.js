var _ = require('underscore');

module.exports = function () {
    
    var _stockList = [],
    
        addStock = function (stock) {
            
            if (stock !== 'undefined')
                return _stockList.push(stock);
        },
        addStocks = function (stocks) {
            try {
                Array.prototype.push.apply(_stockList, stocks);
                return _stockList.length;
            } catch (e) {
                
            };
        },
        addTrade = function (symbol, trade) {
            var stock = findStock(symbol);
            return stock.addTrade(trade);
        },
        addTrades = function (symbol, trades) { 
            var stock = findStock(symbol);
            return stock.addTrades(trades);
        },
        getVolumeWeightedStockPrice = function (symbol, timeStamp) { 
            var stock = findStock(symbol);
            return stock.getVolumeWeightedStockPrice(timeStamp);//timeStamp is an optional parameter
        },
        getAllShareIndex = function () {
            try {
                var geometricMean = 0;
                if (_stockList.length > 0) {
                    var productOfStocks = 1;
                    _stockList.forEach(function (stock, idx) {
                        productOfStocks *= stock.parValue;
                    });
                    var power = 1 / _stockList.length;
                    geometricMean = Math.pow(productOfStocks, power);
                }
                
                return geometricMean;
            } catch (e) {
                console.log();
            };
        },
        getDividendYield = function (stockSymbol, marketPrice) {
            
            var stock = findStock(stockSymbol);
            return stock.DividendYield(marketPrice);
        },
        getPERatio = function (stockSymbol, marketPrice) {
            try {
                var stock = findStock(stockSymbol);
                return stock.getPERatio(marketPrice);
            } catch (exception) {
                console.log(exception.message + ' of type ' + exception.error);
            };
        },
        findStock = function (symbol) {
            
            return _.findWhere(_stockList, { symbol: symbol });
        };
    
    return {
        addStock: addStock,
        addStocks: addStocks,
        addTrade: addTrade,
        addTrades: addTrades,        
        getAllShareIndex: getAllShareIndex,
        getDividendYield: getDividendYield,
        getPERatio: getPERatio,
        getVolumeWeightedStockPrice: getVolumeWeightedStockPrice
    };
};