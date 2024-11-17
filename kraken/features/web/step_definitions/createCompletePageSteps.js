const { Given, When, Then } = require('@cucumber/cucumber');
const DashboardPage = require('../../pages/dashboardPage');
const PagesPage = require('../../pages/pagesPage');
const assert = require('assert');

// Given
Given('the user navigates to the pages page', async function () {
    await DashboardPage.navigateToPages(this);
});

// When
When('the user fills the content {kraken-string}', async function (content) {
    await PagesPage.fillContent(this, content);
});

When('the user adds an image', async function () {
    await PagesPage.addImage(this);
});


// Then

Then('the user should see the created page description {kraken-string}', async function (content) {
    const renderedContent = await this.driver.$(`p=${content}`).getText();
    return assert.equal(renderedContent, content);
});
