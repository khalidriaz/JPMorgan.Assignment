/*jshint expr: true*/

var chai = require('chai');
var StockPreferred = require('../modules/StockPreferred');

var assert = chai.assert;
chai.should();

describe("StockExchange", function () {

    describe("StockPreferred", function () {

        var stockPreferred;

        before(function () {
            stockPreferred = new StockPreferred("GIN", 100, 8, 2);
        });

        it("has an object created with data provided", function () {

            stockPreferred.should.exist;
        });

        it("has StockPreferred as type", function () {

            stockPreferred.should.be.an.instanceOf(StockPreferred);
        });
        it("has last dividend specified", function () {
            stockPreferred.lastDividend.should.equal(8);
        });

        it("has a Par Value", function () {

            stockPreferred.parValue.should.equal(100);
        });

        it("can caluculate PE Ratio", function () {

            var ratio = stockPreferred.PERatio(120);
            ratio.should.equal(15);
        });

        it("has a fixed dividend if stock type is Preferred", function () {
            stockPreferred.fixedDividend.should.equal(2);
        });

        it("can calculate dividend for preferred stock based on market price", function () {

            var dividend = stockPreferred.DividendYield(120);
            dividend.should.equal(0.016666666666666666);
        });

        it("can record (add) a trade");
        it("can calculate volume weighted stock price" +
            " based on last 15 minutest trades");
    });
});