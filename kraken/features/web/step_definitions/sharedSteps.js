const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../../pages/loginPage');

const path = require('path');
const fs = require('fs');

// Given
Given('the user navigates to Ghost at {kraken-string}', async function (url) {
    await this.driver.url(url);
});

Given('I save device snapshot in sequential file {string} {string}', async function (DIR, counter) {
    const folderPath = path.resolve('screenshots/'+String(DIR));

    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }
    const filename = `${DIR}-${counter}.png`;
    const filepath = path.join(folderPath, filename);
    await this.driver.saveScreenshot(filepath);
    console.log(`Screenshot saved at: ${filepath}`);
});

Given('the user logs in using the credentials {kraken-string} and {kraken-string}', async function (username, password) {
    await LoginPage.enterUserName(this, username);
    await LoginPage.enterPassword(this, password);
    await LoginPage.clickOnSubmit(this);
});

When('the user clicks on the {string} link', async function (link) {
    await this.driver.$(`span=${link}`).click();
});

When('the user clicks on the {string} button', async function (button) {
    await this.driver.$(`button=${button}`).click();
});