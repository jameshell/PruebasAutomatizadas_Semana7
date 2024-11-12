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

When("I enter name tag {kraken-string}", async function (name) {
    await TagPage.fillNewTags(this, name);
})

When("I enter description tag {kraken-string}", async function (text) {
    await TagPage.fillDescriptionTags(this, text);
})

When("I click in save tag", async function () {
    await TagPage.saveTag(this);
})


When("I click again tags", async function () {
    await TagPage.clickInTags(this);
})

When("I enter invalid name tag", async function () {
    const randomText = await generateRandomText(30)
    await TagPage.fillNewTags(this, randomText);
})


When("I enter invalid description tag", async function () {
    const randomText = await generateRandomText(501)
    await TagPage.fillInvalidDescriptionTags(this, randomText);
})

When("I enter name tag to delete {string}", async function (name) {
    await TagPage.fillNewTagsToDelete(this, name);
})


When("I click in tag to delete", async function () {
    await TagPage.navigateToTagDelete(this);
})


When("I click delete", async function () {
    await TagPage.clickTagDelete(this);
})


Then("I click confirm delete", async function () {
    await TagPage.confirmTagDelete(this);
})