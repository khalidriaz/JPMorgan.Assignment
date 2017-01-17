module.exports = function () {
    
    var _tradeList = [],
    
        addTrade = function (trade) {
            
            return _tradeList.push(trade);
        },
        addTrades = function (trades) {
            
            Array.prototype.push.apply(_tradeList, trades);
            return _tradeList.length;
        },
        getVolumeWeightedStockPrice = function (milliseconds) {
            
            const MINUTES_15 = 15 * 60 * 1000;
            var duration = milliseconds || MINUTES_15,            
                endTime = Date.now(),
                startTime = endTime - duration,            
                volumeWeightedStockPrice = 0,
                totalTradePrice = 0,
                totalQuantity = 0;
            
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
        };
    
    return {
        AddTrade: addTrade,
        AddTrades: addTrades,
        GetVolumeWeightedStockPrice: getVolumeWeightedStockPrice
    };
};