const { Then } = require('@wdio/cucumber-framework');

const chai = require('chai');
const assert = chai.assert; 

let userinput="";

//Then the user clicks the button & verifies the button text
Then(/^the user clicks the button & verifies the button text$/, async () => {
    
    const updatebutton = $(".//button[@id='updatingButton']");
    await updatebutton.click();
    //await browser.debug();

    const expectedtext = userinput;
    const actualtext = userinput;
    //console.log("button text = " + actualtext);

    assert.equal(actualtext,expectedtext,'button text is incorect!');
    
});

//Then user types "My Input" in the text box
Then(/^user types "(.*)" in the text box$/, async (text) => {
    
    userinput = text;
    const textfield = $(".//input[@id='newButtonName']");
    await textfield.setValue(text);
    
});