
const delay = require('delay');
const wd = require('wd');

const driver = wd.promiseChainRemote('localhost',4724);

var desiredCaps = {
  deviceName: 'Aj',
  platformName: 'Android',
  platformVersion: '8.1.0',
  app:'/Users/baderalbulayhis/Desktop/apk/app-debug.apk',
  appPackage:'io.ionic.starter',
  autoGrantPermissions:true,
  unicodeKeyboard:true,
  resetKeyboard:true,
  automationName:'UiAutomator2'
};


async function test(){

await driver.init(desiredCaps);
await delay(7000);
//await driver.setImplicitWaitTimeout(10000);


//let element = await driver.elements("id", "paridd");
//let elementsOne = await driver.elementsByName("elementpar");
//let el1 = await driver.findElements(By.id("io.ionic.starter:id/parid"))
//let el1 = await driver.elementByXpath('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View/android.view.View/android.view.View[2]/android.widget.EditText');
//	await el1.type("Hello world!")
	//await driver.elementById('nameid').type("1234");;
	//driver.FindElement(By.XPath("//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View/android.view.View/android.view.View[2]/android.widget.EditText")).SendKeys("1234");

	//await driver.elementById('nameid').type("1234");;
	await driver.elementById('android:id/content').click();
	//	await driver.elementById('nameid').type('hi');

	await driver.elementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View/android.view.View/android.view.View[2]/android.widget.EditText").type("12346");
	await driver.elementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[3]/android.view.View/android.view.View/android.view.View[2]/android.widget.EditText").type("hello");
	await driver.elementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[4]/android.view.View/android.view.View/android.view.View[2]/android.widget.EditText").type("Omer");
	await driver.elementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[5]/android.view.View/android.view.View/android.widget.EditText").type("Test comments");

	await driver.elementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.Button[2]").click()


//	await driver.elementById('report').click();

//	await driver.findElement(By.id("io.ionic.starter:id/246eb713-4b74-4a2e-ae99-15edd7f98070")).sendKeys("abc");
//	await driver.elementByText("REPORT").click()


await delay(2000);
let el1 = await driver.elementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View");

//let el1 = await driver.elementById("messageid");



    //await driver.findElementByClassName("android.view.View").sendKeys("Hello");

   	//await driver.element("XPath/CSS", "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]").sendKeys("Hello");



//await driver.elementById('nameid').sendKeys("Hello");
//let el1 = await driver.elements("id", "demo");
//let title = await driver.title();


let screenshot = await driver.takeScreenshot();
//var decodedImage = new Buffer(png, 'base64').toString('binary');
  var fs = require("fs");

  fs.writeFile("error.jpg", new Buffer(await screenshot, "base64"), function(err) {});



console.log(await el1.text());

}

 test();


