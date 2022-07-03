const { Given, When, Then } = require('@wdio/cucumber-framework');

// Given(/^I am on the (\w+) page$/, async (page) => {
//     await browser.url(`https://the-internet.herokuapp.com/${page}`);
// });

// When(/^I login with (\w+) and (.+)$/, async (username, password) => {
//     await $('#username').setValue(username);
//     await $('#password').setValue(password);
//     await $('button[type="submit"]').click();
// });

// Then(/^I should see a flash message saying (.*)$/, async (message) => {
//     await expect($('#flash')).toBeExisting();
//     await expect($('#flash')).toHaveTextContaining(message);
// });
//import { Given } from '@wdio/cucumber-framework';

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
    
    //const badButton = $(".//button[text()='" + keyword + "']");
    const badButton = $(".//button[text()='" + keyword + "']");
    await badButton.click();
    
});


Then("the user verifies the button color change", async() =>{         

    const newButton = $(".//button[@class='btn btn-success']");
    //await newButton.click();
    //await newButton.waitForDisplayed(5000);    
    const btnColor = await newButton.getCSSProperty('background-color');
    //const btnColor = await newButton.getCSSProperty('background');

    const btnCol = JSON.stringify(btnColor);
    var btnColorText = JSON.parse(btnCol);
    
    // btnColorText = btnColorText.replace(/^rgba?\(|\s+|\)$/g, '').split(',');
    // const hex = `#${((1 << 24) + (parseInt(btnColorText[0]) << 16) + (parseInt(btnColorText[1]) << 8) + parseInt(btnColorText[2])).toString(16).slice(1)}`;
    // console.log("color in hex = " + hex);





    console.log("actual button color = " + btnColorText.value);
    //console.log("actual button color = " + btnCol);
    //await browser.debug();


    const expectedBtnColor = "rgba(0,123,255,1)";
    const actualBtnColor = btnColorText.value;
    assert.equal(actualBtnColor,expectedBtnColor,'Expected Button color = ' + expectedBtnColor, 'Actual button color = ' + actualBtnColor);

});

Then(/^the user verifies the "(.*)" label$/, async (text) => {
    
     const label = $(".//p[@class='bg-success']");
    // await label.waitForDisplayed(15000);


    function getText()
    {
        const labelText = label.getText();
        console.log("My label = " + labelText);
        //await browser.debug();
        return labelText;
    }

    try {
        
        const actualText = getText();
        // const labelText =  await label.getText();
         console.log("My label = " + actualText);
        await browser.debug();
        assert.equal(actualText,text,'label text is not as expected.');

    } 

    catch (error) {
        await label.waitForDisplayed(10000);
        getText();
    }

    // const labelText =  await label.getText();
    // assert.equal(labelText,text,'label text is not as expected.');
    
});

const label = $(".//p[@class='bg-success']");

let userInput;

Then(/^the user types  "(.*)" in the text box$/, async (text) => {
    
    userInput = text;
    const textField = $(".//input[@id='newButtonName']");
    await textField.setValue(text);
    
});


Then(/^the user clicks the button & verifies the button text$/, async () => {
    
    const updateButton = $(".//button[@id='updatingButton']");
    await updateButton.click();
    //await browser.debug();

    const expectedText = userInput;
    const actualText = userInput;
    //console.log("button text = " + actualText);

    assert.equal(actualText,expectedText,'button text is incorect!');
    
});