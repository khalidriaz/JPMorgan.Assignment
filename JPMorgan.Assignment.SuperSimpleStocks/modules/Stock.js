var Stock = function (symbol, parValue, lastDividend) {

    this.lastDividend = lastDividend;
    this.parValue = parValue;
    this.symbol = symbol;

    //console.log('Cannot create instance of Stock as it meant to be Abstract');
};

Stock.prototype.PERatio = function (marketPrice) {

    if (this.lastDividend <= 0)
        console.log(this.symbol + " have some invalid value last dividend.");

    return marketPrice / this.lastDividend;
};

module.exports = Stock;
