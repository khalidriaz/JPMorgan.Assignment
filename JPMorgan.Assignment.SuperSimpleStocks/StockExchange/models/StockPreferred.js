var Stock = require('./Stock');

var StockPreferred = function (symbol, parValue, lastDividend, fixedDividend) {

    Stock.call(this, symbol, parValue, lastDividend);

    this.fixedDividend = fixedDividend;
};

StockPreferred.prototype = Object.create(Stock.prototype);
StockPreferred.prototype.constructor = StockPreferred;

StockPreferred.prototype.DividendYield = function (marketPrice) {

    if (marketPrice <= 0)
        throw Error("Divide by zero error.");

    return ((this.fixedDividend / 100) * this.parValue) / marketPrice;
};

module.exports = StockPreferred;