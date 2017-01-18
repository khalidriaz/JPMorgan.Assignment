# Super Simple Stocks

Solution is developed in the Visual Studio 2015. 
Node.js is used as a platform to demonstrate coding skill. ECMAScript 5 is used as it is more complex to demonstrate as compare to 
ECMAScript2015 which mostly adds class like syntactical sugar on top of ES5 language concepts.
Nodejs is only used as server-side platform for javascript, purpose of nodejs is not to
claim any experience in Nodejs.

Angularjs not used as it injects it has its own concepts.

In addition to using Javascript, Following frameworks, libraries and tools are used.

* Nodejs
* Mocha: Unit test framework.
* Chai: Assertion library for unit tests.
* jsHint: Checking any lint in the file.
* Grunt: Running tasks like jshint.
* Underscore : Operatins on array types.


### Solution structure

This solution contains `1 project`. README file is in the *Solution Items* folder.

* **SuperSimpleStocks** <br />
Prject contains StockExchange and Trading modules, app.js as main file.

* **Module.models** <br />
Folder contains domain logic classes to implement the requirenments.
* **Module.test** <br />
Folder contains unit tests for the modules. Powershell can be used to run these unit tests **Mocha** and **Chai** nodejs package is required, please make sure these are installed by download using comman `npm install mocha --save` and `npm install mocha --save`.
* **Module.index.js** <br />
This is a basic api for providing interface to run all the required methods. You can use web browser or any application like postman to call methods in this webapi. Postman can be [downloaded](https://www.getpostman.com/) or [added](http://bit.ly/1K5ZGHG) as chrome extension.



### Design decisions.


* **StockExchange/models/*.js**:<br />
	Project folder contains modules for Stocks. **Stock** is like Abstract class which implements `IStock` interface, it contains **PERatio** method. Classes `StockCommon` and `StockPreferred` are derived from this abstract class.<br />
 These derived classes then implements **DividendYield** abstract method by *overriding* the base class abstract method with using respective dividend yield formula for preferred and common stock.
    
* **Trading/models/*.js**<br />
	Project folder contains ITrade interface and its implementation Trade class which contains properties to describe trade. This class contains no method as use cases didn't identified any. <br />Method `VolumeWeightedStockPrice` seems more suitable to put outside in a service class called `Trading`.
    
* **StockExchange.index** <br />
	This class is more like a `service class` which have following public methods.
```
	addStock
    addStocks
	getDividendYield
	getPERatio
	getAllShareIndex
```
* **Trading**<br />
	This class is also more like a `service class` which have following public methods.
```
addTrade
addTrades
getVolumeWeightedStockPrice (By default price is based on trades in past 15 minutes.)
```

* **TradeTypeEnum**
This contains enum for TradeType.


