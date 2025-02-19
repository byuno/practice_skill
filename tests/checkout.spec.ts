import { test, expect } from '@playwright/test';
import { getRandomNumber } from '../helper_funcs/randomNum.ts'

test.describe('navigation', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('/');
  });

  test('Check that correct amount of items were added to cart', async ({ page }) => {
    
    //Get random number for test (1 - 20)
    let randomNumber = getRandomNumber();

    //Convert to string to use in test as string. Helps with assertion.
    const randomNumberString = randomNumber.toString(); 

    //Verify the addition of random amount of product to cart
    await expect(page).toHaveURL('https://automationexercise.com/');
    await page.getByRole('link', { name: ' Products' }).click();
    await page.locator('div:nth-child(5) > .product-image-wrapper > .choose > .nav > li > a').click();
    await page.locator('#quantity').click();
    await page.locator('#quantity').fill(randomNumberString);
    await page.locator('#quantity').press('Enter'); 
    await page.getByRole('button', { name: ' Add to cart' }).click();
    await page.getByRole('link', { name: 'View Cart' }).click();
    await expect(page.locator('#product-3')).toContainText('21');
    await page.getByText('Proceed To Checkout').click();

    //Added below to mark the end of mandatory user flow steps
    await expect(page.getByText('Register / Login account to')).toBeVisible();
    });
});