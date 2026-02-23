import { expect, test } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { ENV } from '../configuration/env.config';



let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.launchUrl();
})

test('Login into application', async ({ page }) => {
    await loginPage.loginIntoApplication("rahulshettyacademy", "Learning@830$3mK2");
})

test('Login with test data from configuration', async ({ page }) => {
    await loginPage.loginIntoApplication(ENV.username, ENV.password);
})

test('Handle dialog box', async ({ page }) => {
    await loginPage.handleRadioButtonDialog();
});

test('Validate error message @loginError',async({page})=>{
   const erroMessage = await loginPage.validateErrorMessageDisplayed()
   expect(erroMessage).toBe('Empty username/password.');
})



