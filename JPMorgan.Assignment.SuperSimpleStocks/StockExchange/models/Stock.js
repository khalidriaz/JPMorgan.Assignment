var Stock = function (symbol, parValue, lastDividend) {

    this.lastDividend = lastDividend;
    this.parValue = parValue;
    this.symbol = symbol;
};

Stock.prototype = function () {
    
    var PERatio = function (marketPrice) {
        if (this.lastDividend <= 0)
            throw {
                error: 'Divide by zero exception',
                message: this.symbol + ' stock has invalid value of ' + this.lastDividend + ' for last dividend (denominator)'
            };
        
        return marketPrice / this.lastDividend;
    };
    
    return { PERatio: PERatio };
}();

module.exports = Stock;
