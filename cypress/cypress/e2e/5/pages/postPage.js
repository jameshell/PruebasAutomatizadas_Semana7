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
        return cy.get('div.kg-prose p').first();
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
        //cy.wait(1000);
        cy.screenshot(`${screenshotName}_step04`);
        this.postContinuePublish.click();
        cy.screenshot(`${screenshotName}_step04`);
    }

    clickPostPublishRightNow() {
        cy.wait(2000);
        this.postPublishRightNow.click();
        cy.wait(1000);
    }

    fillPostTitle() {
        this.postTitleInput.clear().type(faker.lorem.words(5));
    }

    fillPostContent() {
        this.postContent.clear().type(faker.lorem.paragraph());
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

    editPostTitle(){
        this.postTitleInput.type(faker.lorem.words(10));
    }

    editPostContent(){
      this.postContent.type(faker.lorem.paragraph(2));
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
    
    AndScreenshot(screenshotName){
        cy.screenshot(`screenshots/posts/${screenshotName}`,{ overwrite: true });
    }
}
export default new postPage();