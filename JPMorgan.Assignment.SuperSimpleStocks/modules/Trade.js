var assert = require('assert');

module.exports = function (tradePrice, tradeQuantity, tradeType, tradeTimeStamp) {

    assert.ok(tradeQuantity, "quantity is required.");
    assert.ok(tradePrice, "price is required.");

    var self = this;

    self.price = tradePrice;
    self.quantity = tradeQuantity;
    self.timeStamp = tradeTimeStamp || new Date();
    self.tradeType = tradeType;

    return self;
};