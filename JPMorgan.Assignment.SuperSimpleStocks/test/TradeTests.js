/*jshint expr: true*/
var Trade = require('../modules/Trade');
var TradeTypeEnum = require('../modules/TradeTypeEnum');
var chai = require('chai');

chai.should();

describe("Trade", function () {

    describe("Trade", function () {

        var trade;

        before(function () {
            var dateTime = new Date(2017, 0, 12, 9, 0, 0, 0);
            trade = new Trade(150, 15, dateTime, TradeTypeEnum.BUY, dateTime);
        });

        it("has an object created", function () {

            trade.should.exist;
        });

        it("has Trade as type", function () {
            trade.should.be.an.instanceOf(Trade);
        });

        it("has specified price", function () {
            trade.price.should.equal(150);
        });

        it("has specified quantity", function () {
            trade.price.should.equal(150);
        });

        it("can record (add) a trade");
        it("can calculate volume weighted stock price" +
            " based on last 15 minutest trades");

    });
});