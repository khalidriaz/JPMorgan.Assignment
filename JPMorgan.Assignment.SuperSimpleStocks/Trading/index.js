module.exports = function () {
    
    var _tradeList = [],
    
        addTrade = function (trade) {
            if (trade !== 'undefined')
                return _tradeList.push(trade);
        },
        addTrades = function (trades) {
            try {
                
                Array.prototype.push.apply(_tradeList, trades);
                return _tradeList.length;
            } catch (e) {
                console.log(e.message);
            };
        },
        getVolumeWeightedStockPrice = function (milliseconds) {
            
            const MINUTES_15 = 15 * 60 * 1000;
            var duration = milliseconds || MINUTES_15,            
                endTime = Date.now(),
                startTime = endTime - duration,            
                volumeWeightedStockPrice = 0,
                totalTradePrice = 0,
                totalQuantity = 0;
            
            try {
                
                if (_tradeList != null) {
                    var filteredTrades = _tradeList.filter(function (x) {
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
                console.log(e.message);
            };
        };
    
    return {
        addTrade: addTrade,
        addTrades: addTrades,
        getVolumeWeightedStockPrice: getVolumeWeightedStockPrice
    };
};