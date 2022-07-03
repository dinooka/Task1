Feature: UI Testing Playground

Background: Navigate to home page
Given the user navigates to the home page

# @TC1
# Scenario: Test case 1
# Then the user clicks the "Click" link
# Then the user clicks the "Button That Ignores DOM Click Event" Button
# Then the user verifies the button color change

# @TC2
# Scenario: Test case 1
# Then the user clicks the "Client Side Delay" link
# Then the user clicks the "Button Triggering Client Side Logic" Button
# # And the user wait for the spinner to disapear
# Then the user verifies the "Data calculated on the client side." label 


@TC3
Scenario: Test case 1
Then the user clicks the "Text Input" link
Then the user types  "My Input" in the text box
And the user clicks the button & verifies the button text

