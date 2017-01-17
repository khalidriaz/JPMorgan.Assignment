﻿/*jshint expr: true*/
var StockExchange = require('../StockExchange');
var StockCommon = require('../StockExchange/models/StockCommon');
var StockPreferred = require('../StockExchange/models/StockPreferred');

var chai = require('chai');

chai.should();

describe("Stock Exchange", function () {
    
    describe("Stock Exchange", function () {
        
        var stockExchange,
            stockList;
        beforeEach(function () {
            
            stockList = [
                new StockCommon("TEA", 100, 0),
                new StockCommon("POP", 100, 8),
                new StockCommon("ALE", 60, 23),
                new StockPreferred("GIN", 100, 8, 2),
                new StockCommon("JOE", 250, 13)
            ];
            stockExchange = new StockExchange();
        });
        
        it("has a StockExchange object created", function () {
            
            stockExchange.should.exit;
        });
        
        it("should add a stock", function () {
            
            stockExchange.AddStock(new StockCommon("TEA", 100, 0)).should.equal(1);
        });
        it("should add multiple stocks", function () {
            
            stockExchange.AddStocks(stockList).should.equal(5);
        });
        
        it("should get all share index", function () {
            
            stockExchange.AddStocks(stockList);
            var allShareIndex = stockExchange.GetAllShareIndex();
            allShareIndex.should.equal(108.44717711976989);
        });
        it("should get dividend yield for common stock", function () {
            stockExchange.AddStocks(stockList);
            
            var dividendYield = stockExchange.GetDividendYield("POP", 10);
            dividendYield.should.equal(0.8);
        });
        it("should get dividend yield for preferred stock", function () {
            
            stockExchange.AddStocks(stockList);
            
            var dividendYield = stockExchange.GetDividendYield("GIN", 10);
            dividendYield.should.equal(0.2);
        });
        it("should get PE Ratio", function () {
            stockExchange.AddStock(new StockCommon("POP", 100, 8));
            
            var dividendYield = stockExchange.GetPERatio("POP", 120);
            dividendYield.should.equal(15);
        });
    });
});