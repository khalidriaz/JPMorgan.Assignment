var chai = require('chai');
chai.should();

describe("StockExchange", function () {

    before(function () {
        //setup
    });

    describe("Stock", function () {
        it("has an object created with data provided", function () {

        });

        it("has a stock type");
        it("has last dividend specified");
        it("has a Par Value");
        it("has an fixed dividend if type is Preferred");
        it("can accept market price");
        it("can calculate dividend for common stock based on market price");
        it("can calculate dividend for preferred stock based on market price");

        it("can record (add) a trade");
        it("can calculate volume weighted stock price" +
            " based on last 15 minutest trades");
    });
});