var Stock = require('./Stock');

var StockCommon = function (symbol, parValue, lastDividend) {

    Stock.call(this, symbol, parValue, lastDividend);
};

StockCommon.prototype = Object.create(Stock.prototype);
StockCommon.prototype.constructor = StockCommon;

StockCommon.prototype.DividendYield = function (marketPrice) {

    if (marketPrice <= 0)
        throw {
            error: 'Divide by zero exception',
            message: 'Common stock has invalid value of ' + marketPrice + ' for market price (denominator)'
        };

    return this.lastDividend / marketPrice;
};

module.exports = StockCommon;