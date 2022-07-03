const { Given, When, Then } = require('@wdio/cucumber-framework');

const chai = require('chai');
const assert = chai.assert; 


const clickPageText = $(".//h3");
const homePageTitle = $(".//h1");


Given("the user navigates to the home page", async() =>{         
    
    await browser.url("/");
    await browser.maximizeWindow();

    var actualHeader = await homePageTitle.getText();
    var actualHeader = await actualHeader.replace(/(\r\n|\n|\r)/gm, " ");

    assert.equal(actualHeader,"UI Test Automation Playground",'Page header is incorrect');    

});

Then(/^the user clicks the "(.*)" link$/, async (keyword) => {

    const clickLink = $(".//a[text()='" + keyword + "']");
    await clickLink.click();

    const actualHeader = await clickPageText.getText();
    assert.equal(actualHeader,keyword,'Page header is incorrect');

});

Then(/^the user clicks the "(.*)" Button$/, async (keyword) => {
    
    const badButton = $(".//button[text()='" + keyword + "']");
    await badButton.click();
    
});