const { Given, When, Then } = require('@cucumber/cucumber');
const DashboardPage = require('../../pages/dashboardPage');
const MembersPage = require('../../pages/membersPage');
const assert = require('assert');

// Given

Given('the user navigates to the members page', async function () {
    await DashboardPage.navigateToMembers(this);
});

Given('the user fills the form with the data Name: {kraken-string}, Email: {kraken-string}, Note: {kraken-string}', async function (name, email, note) {
    await MembersPage.fillName(this,name);
    await MembersPage.fillEmail(this,email);
    await MembersPage.fillNote(this,note);

});

// When

When('the user clicks on a member name {kraken-string}', async function (name) {
    await MembersPage.clickOnMemberName(this,name);
})

// Then

Then('the user should see the created member name {kraken-string}', async function (name) {
   const renderedName = await this.driver.$(`h3=${name}`).getText();
   return assert.equal(renderedName, name);
});

Then('the user should see the created member email {kraken-string}', async function (name) {
    const renderedEmail = await this.driver.$(`a=${name}`).getText();
    return assert.equal(renderedEmail, name);
 });
 

Then('the user should see the message {string}', async function (emailError) {
    const renderedEmail = await this.driver.$(`p.response=${emailError}`).getText();
    return assert.equal(renderedEmail, emailError);
});
