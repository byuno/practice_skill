# practice_skill

# Framework Selection

Playwright was chosen because it is the defacto automation tool at AD. It's well documented therefore you can find the answer to cover a variety of test scanrios. It can also handle a variety of types of tests from E2E and API test. 

I find it less flaky compared to Cypress. I find myself not battling elements not beign detected because of invisible layers. 

Mobile testing, it seems, is still not given the same level of credibilty as appium, however, it's getting easier to convince its adoption.

# Test Case Design

Preconditons: 

Each test case will begin at the homepage, https://automationexercise.com/

As the test case begins a random number generator, getRandNumber(), is used to create a random number to used within the test as the number products selected. It is also used to assert the number of items in the cart.

Test Steps:

The test case goes through the following test steps:

0. As previously mentioned, the test navigates to https://automationexercise.com/
1. A random number is generated via getRandNumber()
2. Product link is clicked
3. Third item is selected
4. A random quantity is entered
5. The item is added to the cart
6. Navigate to cart and verify quatity
7. Concludes test by checking the Register/Login modal*

* Added to signify the end of test (pre step 7)

Expected Results:

The test will pass if the number that was entered on the product page is the same as the number on the cart page. 

The same results can be expected on Chrome, Firefox, Safari, Android (Mobile Chrome), and iPhone 14 (Mobile Safari).

# Analysis and Test Report

