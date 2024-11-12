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

When("I edit the tag name {string}", async function (name) {
    await TagPage.fillTagsToEdit(this, name);
})

When("I edit the tag description {string}", async function (name) {
    await TagPage.fillDescriptionTagEdit(this, name);
})