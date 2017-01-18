var Stock = function (symbol, parValue, lastDividend) {
    
    this.lastDividend = lastDividend;
    this.parValue = parValue;
    this.symbol = symbol;
    this.tradeList = [];
};

Stock.prototype = function () {
    
    var getPERatio = function (marketPrice) {
        if (this.lastDividend <= 0)
            throw {
                error: 'Divide by zero exception',
                message: this.symbol + ' stock has invalid value of ' + this.lastDividend + ' for last dividend (denominator)'
            };
        
        return marketPrice / this.lastDividend;
    },
        addTrade = function (trade) {
            if (trade !== undefined)
                return this.tradeList.push(trade);
        },
        addTrades = function (trades) {
            try {
                
                Array.prototype.push.apply(this.tradeList, trades);
                return this.tradeList.length;
            } catch (e) {
                throw (e);
            }
        },
        getVolumeWeightedStockPrice = function (milliseconds) {
            
            var MINUTES_15 = 15 * 60 * 1000,
                duration = milliseconds || MINUTES_15,            
                endTime = Date.now(),
                startTime = endTime - duration,            
                volumeWeightedStockPrice = 0,
                totalTradePrice = 0,
                totalQuantity = 0;
            
            try {
                
                if (this.tradeList !== null) {
                    var filteredTrades = this.tradeList.filter(function (x) {
                        return x.timeStamp >= startTime && x.timeStamp <= endTime;
                    });
                    
                    filteredTrades.forEach(function (trade) {
                        totalTradePrice += (trade.price * trade.quantity);
                        totalQuantity += trade.quantity;
                    });
                    
                    if (totalQuantity > 0)
                        volumeWeightedStockPrice = totalTradePrice / totalQuantity;
                }
                
                return volumeWeightedStockPrice;
            } catch (e) {
                throw (e);
            }
        };
    
    return {
        getPERatio: getPERatio,
        addTrade: addTrade,
        addTrades: addTrades,
        getVolumeWeightedStockPrice: getVolumeWeightedStockPrice
    };
}();

module.exports = Stock;
