const { Given, When, Then } = require('@cucumber/cucumber');
const DashboardPage = require('../../pages/dashboardPage');
const PagesPage = require('../../pages/pagesPage');
const assert = require('assert');
const postPage = require("../../pages/postPage");



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

Then('the confirmation pages page message should appear', async function () {
    const isMessageVisible = await PagesPage.isConfirmationMessageVisible(this);
    assert.equal(isMessageVisible, true, "The confirmation message did not appear.")
});
