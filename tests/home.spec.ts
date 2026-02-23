import {expect, test} from '@playwright/test'

import { LoginPage } from '../pages/LoginPage'
import { HomePage } from '../pages/HomePage'
import { ENV } from '../configuration/env.config';
import { Gender, EmploymentStatus } from '../enums/enums';

let loginPage : LoginPage;
let homePage : HomePage;
test.beforeEach("Login setup",async({page})=>{
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    await loginPage.launchUrl();
    await loginPage.loginIntoApplication(ENV.username,ENV.password);
});

test("Fill the home form @home",async({page})=>{
    let user = {
        username: "Hello",
        email: "lokesh@gmail.com",
        password: "123123",
        check: true,
        gender: Gender.Male,
        employeeStatus: EmploymentStatus.Employed,
        dob: "2012-12-01"
    }

    let userTuple: [string,string,string,boolean,Gender,EmploymentStatus,string]
    = [user.username,user.email,user.password,user.check,user.gender,user.employeeStatus,user.dob];

    await homePage.navigateToHome();
    await expect(homePage.title).toHaveText("Protractor Tutorial")
    await homePage.fillForm(...userTuple);
    await homePage.submitForm();
    await expect(homePage.successMessage).toContainText('Success');
});