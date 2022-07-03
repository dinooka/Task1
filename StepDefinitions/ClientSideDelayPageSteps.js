const { Then } = require('@wdio/cucumber-framework');

const chai = require('chai');
const assert = chai.assert; 

//Then the user verifies the "Data calculated on the client side." label
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
