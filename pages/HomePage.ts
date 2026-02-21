import { expect, Locator, Page } from '@playwright/test'
import { Gender, EmploymentStatus } from '../enums/enums';
export class HomePage {

    readonly page: Page;
    readonly homeLink: Locator
    readonly title: Locator
    readonly name: Locator;
    readonly email: Locator;
    readonly password: Locator;
    readonly checkbox: Locator;
    readonly gender: Locator;
    readonly employeeStatus: Locator;
    readonly dob: Locator;
    readonly submit: Locator;
    readonly successMessage: Locator;
    constructor(page: Page) {
        this.page = page;
        this.homeLink = page.getByRole('link', { name: 'Home', exact: true })
        this.title = page.locator("h1");
        this.name = page.locator("input[name='name'][required]");
        this.email = page.locator("input[name='email'][required]")
        this.password = page.getByPlaceholder("Password");
        this.checkbox = page.locator("input[type='checkbox']");
        this.gender = page.locator("select");
        this.employeeStatus = page.locator("div.form-group .form-check-label")
        this.dob = page.locator("input[name='bday']")
        this.submit = page.getByRole('button', { name: 'Submit' })
        this.successMessage = page.locator('.alert-success');
    }

    async navigateToHome() {
        await this.homeLink.waitFor({ state: "visible" });
        await Promise.all([
            this.homeLink.click(),
            this.page.waitForURL("**/angularpractice/*")
        ])
    }

    async fillForm(username: string, email: string, password: string, check: boolean, gender: Gender, employeeStatus: EmploymentStatus, dob: string) {
        await this.name.fill(username);
        await this.email.fill(email);
        await this.password.fill(password);
        check ? await this.checkbox.check() : await this.checkbox.uncheck()
        await this.gender.selectOption({ label: gender });
        await this.employeeStatus.filter({ hasText: employeeStatus }).click();
        // await this.employeeStatus.getByLabel(employeeStatus).click();
        await this.dob.fill(dob);
    }

    async submitForm() {
        await this.submit.click()
    }

}