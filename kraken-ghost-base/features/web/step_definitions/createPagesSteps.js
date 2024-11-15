const { Given, When, Then } = require('@cucumber/cucumber');
const DashboardPage = require('../../pages/dashboardPage');
const PagesPage = require('../../pages/pagesPage');
const assert = require('assert');



// When


When('the user fills the title {kraken-string}', async function (title) {
    await PagesPage.fillTitle(this, title);
});

When("User clicks on the publish now button on Page", async function () {
    await PagesPage.ClickPagePublishRightNow(this);
});


When("The user clicks on the button continue publishing Page", async function () {
    await PagesPage.ClickPageBtnContinuePublish(this);
});

// Then
Then('the user should see the created page title {kraken-string}', async function (title) {
    const renderedTitle = await this.driver.$(`h2=${title}`).getText();
    return assert.equal(renderedTitle, title);
});
