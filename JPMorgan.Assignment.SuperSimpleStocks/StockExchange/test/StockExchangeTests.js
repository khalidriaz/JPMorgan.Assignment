/*jshint expr: true*/
var StockExchange = require('../index');
var StockCommon = require('../models/StockCommon');
var StockPreferred = require('../models/StockPreferred');
var Trade = require('../models/Trade');
var TradeType = require('../models/TradeTypeEnum');

var chai = require('chai');

chai.should();

describe("Stock Exchange", function () {
    
    describe("Stock Exchange", function () {
        
        const MINUTE = 60 * 1000;
        var stockExchange,
            stockList,
            tradeList;

        beforeEach(function () {
            
            stockList = [
                new StockCommon("TEA", 100, 0),
                new StockCommon("POP", 100, 8),
                new StockCommon("ALE", 60, 23),
                new StockPreferred("GIN", 100, 8, 2),
                new StockCommon("JOE", 250, 13)
            ];
            
            tradeList = [
                new Trade(10, 5, Date.now() - (MINUTE * 1), TradeType.BUY),
                new Trade(17, 2, Date.now() - (MINUTE * 2), TradeType.BUY),
                new Trade(30, 7, Date.now() - (MINUTE * 5), TradeType.SELL),
                new Trade(15, 4, Date.now() - (MINUTE * 8), TradeType.BUY),
                new Trade(28, 9, Date.now() - (MINUTE * 10), TradeType.SELL),
                new Trade(34, 4, Date.now() - (MINUTE * 12), TradeType.SELL),
                new Trade(43, 5, Date.now() - (MINUTE * 14), TradeType.BUY),
                new Trade(27, 7, Date.now() - (MINUTE * 16), TradeType.BUY),
                new Trade(12, 4, Date.now() - (MINUTE * 20), TradeType.SELL)
            ];

            stockExchange = new StockExchange();
        });
        
        it("has a StockExchange object created", function () {
            
            stockExchange.should.exit;
        });
        
        it("should add a stock", function () {
            
            stockExchange.addStock(new StockCommon("TEA", 100, 0)).should.equal(1);
        });
        it("should add multiple stocks", function () {
            
            stockExchange.addStocks(stockList).should.equal(5);
        });
        
        it("should get all share index", function () {
            
            stockExchange.addStocks(stockList);
            var allShareIndex = stockExchange.getAllShareIndex();
            allShareIndex.should.equal(108.44717711976989);
        });
        it("should get dividend yield for common stock", function () {
            stockExchange.addStocks(stockList);
            
            var dividendYield = stockExchange.getDividendYield("POP", 10);
            dividendYield.should.equal(0.8);
        });
        it("should get dividend yield for preferred stock", function () {
            
            stockExchange.addStocks(stockList);
            
            var dividendYield = stockExchange.getDividendYield("GIN", 10);
            dividendYield.should.equal(0.2);
        });
        it("should get PE Ratio", function () {
            stockExchange.addStock(new StockCommon("POP", 100, 8));
            
            var dividendYield = stockExchange.getPERatio("POP", 120);
            dividendYield.should.equal(15);
        });
        it("can record (add) a trade", function () {
            stockExchange.addStocks(stockList);
            var trade = new Trade(10, 5, Date.now() - (MINUTE * 1), TradeType.BUY);
            stockExchange.addTrade('GIN', trade).should.equal(1);
        });
        it("can record (add) multiple trades", function () {
            stockExchange.addStocks(stockList);
            var tradeCount = stockExchange.addTrades('JOE',[
                new Trade(10, 5, Date.now() - (MINUTE * 1), TradeType.BUY),
                new Trade(17, 2, Date.now() - (MINUTE * 2), TradeType.BUY),
                new Trade(30, 7, Date.now() - (MINUTE * 5), TradeType.SELL)]);
            
            tradeCount.should.equal(3);
        });
        
        it("can calculate volume weighted stock price" +
            " based on last 15 minutest trades", function () {
            
            stockExchange.addStocks(stockList);
            stockExchange.addTrades("POP",tradeList);
            stockExchange.getVolumeWeightedStockPrice('POP').should.equal(26.5833333333333332);
        });
    });
});