const { Given, When, Then } = require('@wdio/cucumber-framework');

const chai = require('chai');
const assert = chai.assert; 

// Then the user verifies the button color change
Then("the user verifies the button color change", async() =>{         

    const newButton = $(".//button[@class='btn btn-success']");
    await newButton.waitForDisplayed(2000);    
    const btnColor = await newButton.getCSSProperty('background-color');

    const btnCol = JSON.stringify(btnColor);
    var btnColorText = JSON.parse(btnCol);

    console.log("actual button color = " + btnColorText.value);
    //console.log("actual button color = " + btnCol);

    const expectedBtnColor = "rgba(0,123,255,1)";
    const actualBtnColor = btnColorText.value;
    assert.equal(actualBtnColor,expectedBtnColor,'Expected Button color = ' + expectedBtnColor, 'Actual button color = ' + actualBtnColor);

});