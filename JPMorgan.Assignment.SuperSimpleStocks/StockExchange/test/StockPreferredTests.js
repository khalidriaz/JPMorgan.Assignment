﻿/*jshint expr: true*/
var chai = require('chai');
var StockPreferred = require('../models/StockPreferred');

var assert = chai.assert;
chai.should();



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
        
        var ratio = stockPreferred.getPERatio(120);
        ratio.should.equal(15);
    });
    
    it("has a fixed dividend if stock type is Preferred", function () {
        stockPreferred.fixedDividend.should.equal(2);
    });
    
    it("can calculate dividend for preferred stock based on market price", function () {
        
        var dividend = stockPreferred.DividendYield(120);
        dividend.should.equal(0.016666666666666666);
    });
});
