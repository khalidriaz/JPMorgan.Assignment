/*jshint expr: true*/

var chai = require('chai');
var StockCommon = require('../modules/StockCommon');

var assert = chai.assert;
chai.should();

describe("StockExchange", function () {

    describe("StockCommon", function () {

        var stockCommon;

        before(function () {
            stockCommon = new StockCommon("ALE", 60, 23);
        });

        it("has an object created with data provided", function () {

            stockCommon.should.exist;
        });

        it("has StockCommon as type", function () {

            stockCommon.should.be.an.instanceOf(StockCommon);
        });
        it("has last dividend specified", function () {
            stockCommon.lastDividend.should.equal(23);
        });

        it("has a Par Value", function () {

            stockCommon.parValue.should.equal(60);
        });

        it("can caluculate PE Ratio", function () {

            var ratio = stockCommon.PERatio(100);
            ratio.should.equal(4.3478260869565215);
        });

        it("can calculate dividend for common stock based on market price", function () {

            var dividend = stockCommon.DividendYield(100);
            dividend.should.equal(0.23);
        });
        it("has an fixed dividend if type is Preferred");
        it("can calculate dividend for preferred stock based on market price");

        it("can record (add) a trade");
        it("can calculate volume weighted stock price" +
            " based on last 15 minutest trades");
    });
});