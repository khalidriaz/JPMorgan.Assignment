var assert = require('assert');

module.exports = function (tradePrice, tradeQuantity, tradeType, tradeTimeStamp) {

    //Using args object as assignment to the constructor could be another option.

    assert.ok(tradeQuantity, "quantity is required.");
    assert.ok(tradeType, "trade type is required.");
    assert.ok(tradePrice, "price is required.");

    this.price = tradePrice;
    this.quantity = tradeQuantity;
    this.tradeType = tradeType;
    this.timeStamp = tradeTimeStamp;// || new Date();

    //return {
    //    timeStamp: timeStamp,
    //    quantity: quantity,
    //    tradeType: type,
    //    price: price
    //};
};