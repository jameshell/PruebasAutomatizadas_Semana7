const { Given, When, Then } = require('@cucumber/cucumber');
const DashboardPage = require('../../pages/dashboardPage');
const MembersPage = require('../../pages/membersPage');
const assert = require('assert');
const TagPage = require('../../pages/tagPage');

async function generateRandomText(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

Given('the user navigates to the tags page', async function () {
    await DashboardPage.navigateToTags(this); 
});


When("the user cliks on the new tag", async function () {
    await TagPage.navigateToNewTags(this);
})

When("enter name tag {kraken-string}", async function (name) {
    await TagPage.fillNewTags(this, name);
})

When("enter description tag {kraken-string}", async function (text) {
    await TagPage.fillDescriptionTags(this, text);
})

When("click in save tag", async function () {
    await TagPage.saveTag(this);
})


When("enter invalid name tag", async function () {
    const randomText = await generateRandomText(30)
    await TagPage.fillNewTags(this, randomText);
})


When("enter invalid description tag", async function () {
    const randomText = await generateRandomText(501)
    await TagPage.fillInvalidDescriptionTags(this, randomText);
})

When("enter name tag to delete {string}", async function (name) {
    await TagPage.fillNewTagsToDelete(this, name);
})


When("click in tag to delete", async function () {
    await TagPage.navigateToTagDelete(this);
})


When("click delete", async function () {
    await TagPage.clickTagDelete(this);
})


Then("click confirm delete", async function () {
    await TagPage.confirmTagDelete(this);
})

Then("click again tags", async function () {
    await TagPage.clickInTags(this);
})