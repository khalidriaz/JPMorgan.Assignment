﻿var chai = require('chai');
var Stock = require('../modules/Stock');

var assert = chai.assert;
chai.should();

describe("StockExchange", function () {

    var stock;

    before(function () {
        stock = new Stock("ALE", 60, 23);    
    });

    describe("Stock", function () {

        it("has an object created with data provided", function () {

            stock.should.exist;
        });

        it("has Stock as type", function () {

            stock.should.be.an.instanceOf(Stock);
        });
        it("has last dividend specified", function () {
            stock = new Stock("ALE", 60, 23);
            stock.lastDividend.should.equal(23);
        });

        it("has a Par Value", function () {

            stock.parValue.should.equal(60);
        });

        it("has an fixed dividend if type is Preferred");
        it("can accept market price");
        it("can caluculate PE Ratio", function () {

            stock = new Stock("ALE", 60, 23);
            var ratio = stock.PERatio(100);
            ratio.should.equal(4.3478260869565215);
        });
        it("can calculate dividend for common stock based on market price");
        it("can calculate dividend for preferred stock based on market price");

        it("can record (add) a trade");
        it("can calculate volume weighted stock price" +
            " based on last 15 minutest trades");
    });
});