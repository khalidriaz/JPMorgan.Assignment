# Super Simple Stocks

Solution for this assignment is developed using Visual Studio 2015. 
Also ran this solution in [VS Code](https://code.visualstudio.com/) to see if solution is working in free ligtweight crossplatform version of Visual Studio.

ECMAScript5 is used as it is more complex to demonstrate Javascript concepts as compare to 
ECMAScript2015 which adds class like syntactical sugar on top of ES5 concepts.

Node.js is used as a server-side platform, only to demonstrate javascript language concepts and coding skills. 
Angularjs/Knockoutjs are not selected as platform, as they adds their own concepts.

In addition to using JavaScript, Following frameworks, libraries and tools are used.

* Nodejs
* Mocha: Unit test framework.
* Chai: Assertion library for unit tests.
* jsHint: Checking any lint in the file.
* Grunt: Running tasks like jshint.
* Underscore : Operatins on array types.
* Windows PowerShell: This external tool is used to run mocha tests.


### Solution structure

This solution contains one project `JPMorgan.Assignment.SuperSimpleStocks`. 
README file is in the *Solution Items* folder.

This project has `app.js` as entry point for the application and 
one module `StockExhchange` which contains implementation for domain requirenments, 
`Gruntfile.js` is where jsHint task is configured.

Following are the sub folder and files in this module folder.


* **StockExchange.models** <br />
Folder contains domain logic modules to implement the requirenments.
* **StockExchange.test** <br />
Folder contains unit tests for the modules. Powershell can be used to run these unit tests. 
**Mocha** and **Chai** Nodejs packages are required, please make sure these are installed when solution is loaded in the development environment. Following commands can be used to install reqruied node packages `npm install mocha --save` and `npm install mocha --save`.
* **StockExchange.index.js** <br />
This is the main API to run all the required methods.



### Design decisions.



Module structure is used as it offers cleaner organization of code in a large project.

###StockExchange  

* **StockExchange/models**:<br />
 Project folder contains modules for Stocks. 

**Stock** is a base module for StockPreferred and StockCommon, it contains functions which will be shared across `StockCommon` and `StockPreferred` which<br />
  implements thier own version of **DividendYield** by using object-oriented *overriding* concept with using respective dividend yield formula for preferred and common stock.<br />
Stock prototype implements common functionalities which will be loaded once for all the instances of StockCommon and StockPreferred.
Revealing prototype pattern is used as it offers cleaner view of public functions.

**Trade**
Trade module which contains properties to describe trade. This class contains no method as use cases didn't identified any.
   
**TradeTypeEnum**
This contains enum for TradeType.
 
* **StockExchange/tests**:<br />
Mocha and chai frameworks are used to emulate BDD and TDD style development. first defined all the requirenments and then one by one implementing requirenments in TDD fashion.

* **StockExchange.index** <br />
	This module has following public methods.
```
	addStock
    addStocks
	getDividendYield
	getPERatio
	getAllShareIndex
    addTrade
    addTrades
    getVolumeWeightedStockPrice (By default price is based on trades in past 15 minutes.)
```


