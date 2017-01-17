/*jshint expr: true*/
var Trading = require('../index');
var Trade = require('../models/Trade');
var TradeType = require('../models/TradeTypeEnum');

var chai = require('chai');
chai.should();

describe("Trading Tests", function () {
    
    const MINUTE = 60 * 1000;
    var trading,
        tradeList;
    beforeEach(function () {
        tradeList = [
            new Trade(10, 5, Date.now() - (MINUTE * 1), TradeType.BUY),
            new Trade(17, 2, Date.now() - (MINUTE * 2), TradeType.BUY),
            new Trade(30, 7, Date.now() - (MINUTE * 5), TradeType.SELL),
            new Trade(15, 4, Date.now() - (MINUTE * 8), TradeType.BUY),
            new Trade(28, 9, Date.now() - (MINUTE * 10), TradeType.SELL),
            new Trade(34, 4, Date.now() - (MINUTE * 12), TradeType.SELL),
            new Trade(43, 5, Date.now() - (MINUTE * 14), TradeType.BUY),
            new Trade(27, 7, Date.now() - (MINUTE * 16), TradeType.BUY),
            new Trade(12, 4, Date.now() - (MINUTE * 20), TradeType.SELL)];
        trading = new Trading();
    });
    
    describe("Trade", function () {
        it("has a Trading object created", function () {
            trading.should.exit;
        });
        it("can record (add) a trade", function () {
            trading.AddTrade().should.equal(1);
        });
        it("can record (add) multiple trades", function () {
            var tradeCount = trading.AddTrades([
                new Trade(10, 5, Date.now() - (MINUTE * 1), TradeType.BUY),
                new Trade(17, 2, Date.now() - (MINUTE * 2), TradeType.BUY),
                new Trade(30, 7, Date.now() - (MINUTE * 5), TradeType.SELL)]);

            tradeCount.should.equal(3);
        });
        it("can calculate volume weighted stock price" +
            " based on last 15 minutest trades", function () { 
        
            trading.AddTrades(tradeList);
            trading.GetVolumeWeightedStockPrice().should.equal(26.5833333333333332);
        });
    });
});