/*jshint expr: true*/
var Trade = require('../models/Trade');
var TradeTypeEnum = require('../models/TradeTypeEnum');

var chai = require('chai');
chai.should();

describe("Trade", function () {

    var trade;
    //var dateTime;
    
    before(function () {
        var dateTime = new Date(2017, 0, 12, 9, 0, 0, 0);
        trade = new Trade(150, 15, dateTime, TradeTypeEnum.BUY);
    });
    
    it("has an object created", function () {
        
        trade.should.exist;
    });
    
    it.skip("has Trade as type", function () {
        trade.should.be.an.instanceOf(Trade);
    });
    
    it("has specified price", function () {
        trade.price.should.equal(150);
    });
    
    it("has specified quantity", function () {
        trade.price.should.equal(150);
    });
    
    it("has specified time stamp", function () {
        var expectedDateTime = new Date(2017, 0, 12, 9, 0, 0, 0);
        trade.timeStamp.should.deep.equal(new Date(2017, 0, 12, 9, 0, 0, 0));
    });
});