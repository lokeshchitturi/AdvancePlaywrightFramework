import { Page, expect, Locator } from '@playwright/test'

export class LoginPage {



    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly signInButton: Locator;
    readonly userRadioButton: Locator;
    readonly modalMessage: Locator;
    readonly modalOkayButton: Locator;
    readonly dropdown: Locator;
    readonly alertMessage: Locator;

    constructor(page: Page) {
        this.page = page;

        this.username = page.locator("#username");
        this.password = page.locator("#password");
        this.userRadioButton = page.locator("//*[text()=' User']");
        this.modalMessage = page.locator(".modal-body > p");
        this.modalOkayButton = page.getByRole("button", { name: "Okay" });
        this.dropdown = page.locator("select.form-control")
        this.signInButton = page.getByRole("button", { name: "Sign In" });
        this.alertMessage = page.locator("div.alert-danger");
    }

    async launchUrl() {
        await this.page.goto("/loginpagePractise/");
    }

    async loginIntoApplication(username: string, password: string) {
        // await this.page.goto("/loginpagePractise/");
        await this.username.fill(username);
        await this.password.fill(password);
        await Promise.all([
            this.page.waitForURL("**/angularpractice/*"),
            this.signInButton.click()
        ]);

        await this.page.waitForLoadState("networkidle");
        const url = this.page.url();
        console.log("Current URL is: " + url);
    }

    async handleRadioButtonDialog() {

        await this.userRadioButton.click();
        await this.modalMessage.waitFor({ state: 'visible' });
        await this.modalOkayButton.click();
    }

    async validateErrorMessageDisplayed() {
        await this.signInButton.click();
        await this.alertMessage.waitFor({state:'visible'});
        await expect(this.alertMessage).toHaveText('Empty username/password.')
        const errorMessage = await this.alertMessage.textContent();
        console.log(errorMessage)
        expect(errorMessage).toBe('Empty username/password.');
    }
}