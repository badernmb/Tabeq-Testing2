
var hooks =  function (){

var {After, Before, Status} = require('cucumber');
var {AfterAll, BeforeAll} = require('cucumber');
const {Builder, By, until} = require('selenium-webdriver');
var {setDefaultTimeout} = require('cucumber');
const wd = require('wd');

Before(async function () {
//const wd = require('wd');
driver = wd.promiseChainRemote('localhost',4723)


});

Before({tags: "@test"}, function () {
  // This hook will be executed before scenarios tagged with @foo

});

// You can use the following shorthand when only specifying tags



After(async function (testCase) {
   // var world = this;

   //   let screenshot = await driver.saveScreenshot('image/png');

   //   world.attach(screenshot, 'image/png');
  

  });

}
  module.exports = hooks;
