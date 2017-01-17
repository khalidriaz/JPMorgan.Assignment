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
                return stock.PERatio(marketPrice);
            } catch (exception) {
                console.log(exception.message + ' of type ' + exception.error);
            };
        },
        findStock = function (symbol) {
            
            return _.findWhere(_stockList, { symbol: symbol });
        };
    
    return {
        AddStock: addStock,
        AddStocks: addStocks,
        GetAllShareIndex: getAllShareIndex,
        GetDividendYield: getDividendYield,
        GetPERatio: getPERatio
    };
};