/*jshint expr: true*/
var chai = require('chai');
var Stock = require('../models/Stock');

var assert = chai.assert;
chai.should();

describe("StockExchange", function () {

    describe("Stock", function () {

        var stock;

        before(function () {
            stock = new Stock("ALE", 60, 23);
        });

        it("has an object created with data provided", function () {

            stock.should.exist;
        });

        it("has Stock as type", function () {

            stock.should.be.an.instanceOf(Stock);
        });
        it("has last dividend specified", function () {
            stock.lastDividend.should.equal(23);
        });

        it("has a Par Value", function () {

            stock.parValue.should.equal(60);
        });

        it("can caluculate PE Ratio", function () {

            var ratio = stock.PERatio(100);
            ratio.should.equal(4.3478260869565215);
        });
    });
});