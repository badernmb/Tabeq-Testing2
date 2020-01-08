'use strict';

var {Given,When, Then} = require('cucumber');
var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(220 * 1000);

const hooks = require('../support/hooks/hooks');
const {Builder, until} = require('selenium-webdriver');
const wd = require('wd');
const delay = require('delay');

let h1 = new hooks()

//const wd = require('wd');
//const delay = require('delay');
var assert= require ('assert')



var driver =''


Given('The App apk', async function () {
  // Write code here that turns the phrase above into concrete actions



  driver = await wd.promiseChainRemote('localhost',4724)


var desiredCaps = {
  deviceName: 'Aj',
  platformName: 'Android',
  platformVersion: '8.1.0',
  app:'/Users/baderalbulayhis/Desktop/apk/app-debug.apk',
  appPackage:'io.ionic.starter',
  autoGrantPermissions:true,
  unicodeKeyboard:true,
  resetKeyboard:true
};


await driver.init(desiredCaps);
await delay(8000);



});

When('I input the name as {string}', async function (name) {
  // Write code here that turns the phrase above into concrete actions

  await driver.elementById('android:id/content').click();

 // await driver.elementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View/android.view.View/android.view.View[2]/android.widget.EditText").type(name);
  await driver.elementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[1]/android.view.View/android.view.View/android.view.View[2]/android.widget.EditText").type(name);



});

When('I input the phone as {string}', async function (phone) {
  // Write code here that turns the phrase above into concrete actions

 // await driver.elementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[3]/android.view.View/android.view.View/android.view.View[2]/android.widget.EditText").type(phone);
  await driver.elementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View/android.view.View/android.view.View[2]/android.widget.EditText").type(phone);



});

When('I input the street as {string}', async function (street) {
  // Write code here that turns the phrase above into concrete actions

 // await driver.elementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[4]/android.view.View/android.view.View/android.view.View[2]/android.widget.EditText").type(street);
  await driver.elementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[3]/android.view.View/android.view.View/android.view.View[2]/android.widget.EditText").type(street);

});

When('I input the comment as {string}', async function (comment) {
  // Write code here that turns the phrase above into concrete actions

  //await driver.elementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[5]/android.view.View/android.view.View/android.widget.EditText").type(comment);
  await driver.elementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[4]/android.view.View/android.view.View/android.widget.EditText").type(comment);

});

When('I click to report', async function () {
  // Write code here that turns the phrase above into concrete actions

 // await driver.elementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.Button[2]").click()
  await driver.elementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.Button[2]").click()


});

Then('The message should be {string}', async function (text) {
  // Write code here that turns the phrase above into concrete actions

await delay(2000);
let el1 = await driver.elementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View");

//console.log(await el1.text());

//try{
assert.equal(await el1.text(), text);
//}
//catch(error){

//console.log("expected = " + text +" Actual = " +await el1.text());

//}

});


When('the contant should equal to {string}', async function (value) {
  // Write code here that turns the phrase above into concrete actions

 let driver = await wd.promiseChainRemote('localhost',4723)




//const wd = require('wd');
//const driver = wd.promiseChainRemote('localhost',4723)




var desiredCaps = {
  deviceName: 'Bader',
  platformName: 'Android',
  platformVersion: '5.0.2',
  app:'//Users//Shared//Jenkins//Home//workspace//Install_dependencies//platforms//android//app//build//outputs//apk//debug//app-debug.apk',
  appPackage:'io.ionic.starter',
  autoGrantPermissions:true,
  unicodeKeyboard:true,
  resetKeyboard:true
};


await driver.init(desiredCaps);
await delay(5000);


//await driver.setImplicitWaitTimeout(10000);

//let el1 = await driver.elementById('parid');
//let element = await driver.elements("id", "paridd");
//let elementsOne = await driver.elementsByName("elementpar");
//let el1 = await driver.findElements(By.id("io.ionic.starter:id/parid"))
let el1 = await driver.elementById("parid");
//let elementsOne = await driver.elementByXpath('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View');

console.log(await el1.text());
assert.equal(await el1.text(), value);



});

Given('the contant', async function () {

 let driver = await wd.promiseChainRemote('localhost',4722)

  // Write code here that turns the phrase above into concrete actions


var desiredCaps = {
  deviceName: 'Nokia 6.1',
  platformName: 'Android',
  platformVersion: '9',
  app:'//Users//Shared//Jenkins//Home//workspace//Install_dependencies//platforms//android//app//build//outputs//apk//debug//app-debug.apk',
  appPackage:'io.ionic.starter',
  autoGrantPermissions:true,
  unicodeKeyboard:true,
  resetKeyboard:true
};


await driver.init(desiredCaps);
await delay(10000);
//await driver.setImplicitWaitTimeout(10000);

//let el1 = await driver.elementById('parid');
//let element = await driver.elements("id", "paridd");
//let elementsOne = await driver.elementsByName("elementpar");
//let el1 = await driver.findElements(By.id("io.ionic.starter:id/parid"))
//let el1 = await driver.elementById("parid");
//let elementsOne = await driver.elementByXpath('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View');

//console.log(await el1.text());
//assert.equal(await el1.text(), value);



});


Given('the contant should equal II to {string}', async function (value) {
  // Write code here that turns the phrase above into concrete actions
  var assert= require ('assert')
  var x = "Hello CICDD";
  assert.equal(x, value);


});
