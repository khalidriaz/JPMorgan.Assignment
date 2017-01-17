var Stock = require('./Stock');

var StockPreferred = function (symbol, parValue, lastDividend, fixedDividend) {

    Stock.call(this, symbol, parValue, lastDividend);

    this.fixedDividend = fixedDividend;
};

StockPreferred.prototype = Object.create(Stock.prototype);
StockPreferred.prototype.constructor = StockPreferred;

StockPreferred.prototype.DividendYield = function (marketPrice) {

    if (marketPrice <= 0)
        throw {
            error: 'Divide by zero exception',
            message: 'Preferred stock has invalid value of ' + marketPrice + ' for market price (denominator)'
        };

    return ((this.fixedDividend / 100) * this.parValue) / marketPrice;
};

module.exports = StockPreferred;