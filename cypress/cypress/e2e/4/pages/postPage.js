import {faker} from "@faker-js/faker";

const buttonPublish='.gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon'

class postPage {
   
    get newPostButton() {
        return cy.get('[class="ember-view gh-btn gh-btn-primary view-actions-top-row"]').first();
    }


    get postTitleInput() {
        return cy.get('.gh-editor-title');
    }

    get postContent() {
        return cy.get('.koenig-editor__editor');
        ;
    }

    get postPublish() {
        return cy.get('.ember-basic-dropdown-trigger').first();
    }
  
    get postPublishRightNow() {
        return cy.get('.gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon').first();
    }

    get postShould() {
        return cy.get('span.gh-notification-actions').first();
    }

    get selectPost(){
        return cy.get('.gh-posts-list-item').first();
    }

    get postUpdate() {
        return cy.get('div.ember-basic-dropdown-trigger.gh-btn.gh-btn-editor.green.gh-publishmenu-trigger').first();
    }

    get postUpdatedrop() {
        return cy.get('.gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon').first();
    }
    
    get postUpdateShould(){
        return cy.get('div.gh-notification-content').first();
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
      this.postShould.should('contain', 'View Post');
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

    updatePostDrop(){
        cy.wait(1000);
        this.postUpdatedrop.click(); 
    }

    ShouldUpdatePost(){
        this.postUpdateShould.should('contain', 'Updated')
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
}
export default new postPage();