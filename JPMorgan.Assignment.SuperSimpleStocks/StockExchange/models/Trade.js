module.exports = function (price, quantity, timeStamp, tradeType) {

    var timeStamp = timeStamp || new Date(),
        quantity = quantity,
        tradeType = tradeType,
        price = price;
    
    return {
        timeStamp: timeStamp,
        quantity: quantity,
        tradeType: tradeType,
        price: price
    };
};