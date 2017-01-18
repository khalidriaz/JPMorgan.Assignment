module.exports = function (price, quantity, timeStamp, tradeType) {

    var _timeStamp = timeStamp || new Date(),
        _quantity = quantity,
        _tradeType = tradeType,
        _price = price;
    
    return {
        timeStamp: _timeStamp,
        quantity: _quantity,
        tradeType: _tradeType,
        price: _price
    };
};