const { Given, When, Then } = require('@cucumber/cucumber');
const DashboardPage = require('../../pages/dashboardPage');
const PagesPage = require('../../pages/pagesPage');
const assert = require('assert');



// When


When('the user updates the title to {kraken-string}', async function (newTitle) {
    await PagesPage.updateTitle(this, newTitle);
});

When('the user updates the content to {kraken-string}', async function (newContent) {
    await PagesPage.updateContent(this, newContent);
});

When('the user clicks Go to Editor', async function () {
    await PagesPage.ClickPageBtnEdit(this);
});



// Then
Then('the user should see the updated page title {kraken-string}', async function (newTitle) {
    const renderedTitle = await this.driver.$(`textarea`).getValue();
    return assert.equal(renderedTitle, newTitle);
});

Then('the user should see the updated page content {kraken-string}', async function (newContent) {
    const renderedContent = await this.driver.$(`span=${newContent}`).getText();
    return assert.equal(renderedContent, newContent);
});
