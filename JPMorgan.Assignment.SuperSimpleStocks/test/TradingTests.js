/*jshint expr: true*/
var Trade = require('../modules/Trade');
var TradeTypeEnum = require('../modules/TradeTypeEnum');

var chai = require('chai');
chai.should();

describe("Trading Tests", function () {

    describe("Trade", function () {
        it("has a StockExchange object created");
        it("has object of type StockExchange");
        it("can record (add) a trade");
        it("can record (add) multiple trades");        
        it("can calculate volume weighted stock price" +
            " based on last 15 minutest trades");
    });
});

