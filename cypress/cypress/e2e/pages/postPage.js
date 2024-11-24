import {faker} from "@faker-js/faker";

const buttonPublish='[data-test-button="publish-flow"]'

class postPage {

    get newPostButton() {
        return cy.get('[data-test-new-post-button]').first();
    }

    get postTitleInput() {
        return cy.get('textarea.gh-editor-title');
    }

    get postContent() {
        return cy.get('[data-secondary-instance="false"] > .koenig-lexical > [data-kg="editor"] > .kg-prose > p')
    }

    get postPublish() {
        return cy.get('[data-test-button="publish-flow"]').first();
    }
    get postContinuePublish() {
        return cy.get('[data-test-button="continue"]').first();
    }

    get postPublishRightNow() {
        return cy.get('[data-test-button="confirm-publish"]').first();
    }

    get postShould() {
        return cy.get('[data-test-complete-title]').first();
    }

    get selectPost(){
        return cy.get('.gh-posts-list-item').first();
    }

    get postUpdate() {
        return cy.get('[data-test-task-button-state="idle"]').first();
    }
    
    get postUpdateShould(){
        return cy.get('.gh-notifications').first();
    }
    
    get addImagePostButton() {
        return cy.get('svg[viewBox="0 0 122.43 122.41"]');
    }

    get FirstPic() {
        return cy.get('#unsplash-selector-wormhole > div.absolute.top-8.right-8.bottom-8.left-8.br4.overflow-hidden.bg-white.z-9999 > div.flex.flex-column.h-100 > div > div > section > div:nth-child(1) > a:nth-child(1) > div > div > div.gh-unsplash-photo-footer > a');
    }

    get BgModal(){
        return cy.get('div.epm-modal-container background-blur');
    }


    get settingsPost(){
        return cy.get('button.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon').first();
    }

    get excerpPost(){
        return cy.get('textarea#custom-excerpt.post-setting-custom-excerpt')
    }

    get alertExcerpt(){
        return cy.get("div.gh-alert-content")
    }

    get postEvents(){
        return cy.get('button.group.relative.flex.size-7.cursor-pointer.items-center.justify-center.rounded-full.border.border-grey');
    }
    get clickOther(){
        return cy.contains('button', 'Other...')
    }

    get inputDate(){
        return cy.get('.gh-date-time-picker-date > input');
    }

    get clickTime(){
        return  cy.get('.gh-date-time-picker-time > input')
    }

    get metaDataBtn(){
        return cy.get(':nth-child(4) > button')
    }

    get titleMetaData(){
        return cy.get('#meta-title');
    }

    get descriptionMetaData(){
        return cy.get('#meta-description');
    }

    get facebookCardBtn(){
        return cy.get(':nth-child(6) > button');
    }

    get titleFacebookCard(){
        return cy.get('#og-title');
    }

    get descriptionFacebookCard(){
        return cy.get('#og-description');
    }

    get xcardBtn(){
        return cy.get(':nth-child(5) > button > span');
    }
    get xCardTitle(){
        return cy.get('#twitter-title');
    }

    get xCardDescription(){
        return cy.get('#twitter-description');
    }

    get validationError(){
        return cy.get('.error')
    }

    get notificationAlert(){
        return cy.get('.gh-alert-content')
    }

    clickNewPost() {
        cy.wait(1000);
        this.newPostButton.click();
    }
    
    clickPostTitle() {
        cy.wait(1000);
        this.postTitleInput.click();
    }

    clickBGModal(){
        cy.wait(1000);
        cy.get('button.close').click()
    }

    clickPostContent() {
        cy.wait(1000);
        this.postContent.click();
    }

    clickContinuePublish(screenshotName) {
        cy.wait(1000);
        this.postContinuePublish.click();

    }

    clickPostPublishRightNow() {
        cy.wait(2000);
        this.postPublishRightNow.click();
        cy.wait(1000);
    }

    fillPostTitle(Title) {
        this.postTitleInput.type(Title);
    }

    fillPostContent(Description) {
        this.postContent.clear().type(Description);
    }

    clickPostPublish() {
        cy.wait(1000);
        this.postPublish.click();
    }

    verifyPost(){
      this.postShould.should('contain', "Boom! It's out there.");
    }
    
    clickListPost(){
        cy.wait(1000);
        this.selectPost.click();
    }

    editPostTitle(Title){
        this.postTitleInput.type(Title);
    }

    editPostContent(Description){
      this.postContent.type(Description);
      cy.wait(1000);
    }
    
    updatePost(){
        cy.wait(1000);
        this.postUpdate.click(); 
    }

    ShouldUpdatePost(){
        this.postUpdateShould.should('be.visible')
    }
    
    shouldNoExist(){
        cy.get(buttonPublish).should('not.exist');
    }

    clickAddImagePostButton(){
        cy.wait(1000);
        this.addImagePostButton.click(); 
    }

    addImageClick() {
        cy.wait(1000);
        cy.get('div.gh-unsplash-photo-footer').first().scrollIntoView().trigger('mouseover');
        this.FirstPic.click();
        cy.wait(1000);
    }
    
    AndScreenshot(folderName, screenshotName) {
        cy.wait(1000);
        const screenshotPath = `${folderName}/${screenshotName}`;
        cy.screenshot(screenshotPath, { overwrite: true });
    }

    ClickSettingsPost(){
        cy.wait(1000);
        this.settingsPost.click();
    }

    clickExcerpPost(){
        cy.wait(1000);
        this.excerpPost.click();
    }

    fillExcerptPost(Excerpt){
        this.excerpPost.clear({ force: true }).type(Excerpt, { force: true });
    }

    shouldAlertExcerpt(){
        this.alertExcerpt.should('be.visible');
    }

    clickPostEvents(){
        cy.wait(1000);
        this.postEvents.click();
    }

    scrollOther(){

    }

    clickOtherContains(){
        cy.wait(1000);
        this.clickOther.click();
    }

    inputUrlOther(Url1){
        this.clickOther.type(Url1);
        cy.get('[data-testid="embed-url"]').trigger('keydown', { key: 'Enter', keyCode: 13, which: 13 });
        cy.wait(4000);cy.get('.not-kg-prose').scrollTo('bottom');
    }

    inputDatePost(Date){
        this.inputDate.clear({ force: true }).type(Date, { force: true });
    }

    clickTimePost(){
        cy.wait(1000);
        this.clickTime.click();
        cy.wait(1000);
    }

    clickMetaDataBtn(){
        cy.get('.settings-menu').scrollTo('bottom');
        cy.wait(1000);
        this.metaDataBtn.click();
    }

    inputTitleMetaData(Title,assert){
        this.titleMetaData.clear({ force: true }).type(Title, { force: true });
        cy.wait(1000);
        cy.get('span.word-count').should('have.text', assert);

    }

    inputDescriptionMetaData(Description,assert){
        this.descriptionMetaData.clear({ force: true }).type(Description, { force: true });
        cy.wait(1000);
        cy.get('span.word-count').should('have.text', assert);

    }

    clickFacebookCardBtn(){
        cy.get('.settings-menu').scrollTo('bottom');
        cy.wait(1000);
        this.facebookCardBtn.click();
    }

    inputTitleFacebookCard(Title){
        this.titleFacebookCard.clear({ force: true }).type(Title, { force: true });
        cy.wait(1000);
    }

    inputDescriptionFacebookCard(Description){
        this.descriptionFacebookCard.clear({ force: true }).type(Description, { force: true });
        cy.wait(1000);
    }

    shouldValidationError(){
        this.validationError.should('contain', 'Validation error, cannot edit post.');
    }

    shouldNotificationAlert(){
        this.notificationAlert.should('contain.text', 'Validation failed');
    }

    clickXCardBtn(){
        cy.get('.settings-menu').scrollTo('bottom');
        cy.wait(1000);
        this.xcardBtn.click();
    }

    inputTitleXCard(Title){
        this.xCardTitle.clear({ force: true }).type(Title, { force: true });
        cy.wait(1000);
    }

    inputDescriptionXCard(Description){
        this.xCardDescription.clear({ force: true }).type(Description, { force: true });
        cy.wait(1000);
    }

    clickTitleXCard(){
        cy.wait(1000);
        this.xCardTitle.click();
    }

    clickDescriptionXCard(){
        cy.wait(1000);
        this.xCardDescription.click();
    }



}
export default new postPage();