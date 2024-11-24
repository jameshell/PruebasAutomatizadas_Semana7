class PagesPage {
    get newPageBtn() {
        return cy.get('[data-test-new-page-button]');
    }

    get publishBtn() {
        return cy.contains('button', 'Publish')
    }

    get addImageBtn() {
        return cy.get('svg[viewBox="0 0 122.43 122.41"]');
    }

    get addImageBtn_FirstPic() {
        return cy.get('#unsplash-selector-wormhole > div.absolute.top-8.right-8.bottom-8.left-8.br4.overflow-hidden.bg-white.z-9999 > div.flex.flex-column.h-100 > div > div > section > div:nth-child(1) > a:nth-child(1) > div > div > div.gh-unsplash-photo-footer > a');
    }

    get confirmPublishBtn() {
        return cy.get('[data-test-button="confirm-publish"]');
    }

    get finalReviewBtn() {
        return cy.get('[data-test-button="continue"]');
    }

    get updateBtn() {
        return cy.get('div.gh-posts-list-item-group').first();
    }

    get pageDescription() {
        return cy.get('div.kg-prose').first();
    }

    get pageHeader() {
        return cy.get('textarea[placeholder="Page title"]');
    }

    get updateButton() {
        return cy.get('button[data-test-button="publish-save"]').first();
    }

    get pageUpdateNotification(){
        return cy.get('.gh-notifications').first();
    }

    get backButton() {
        return cy.get('svg[viewBox="0 0 122.43 122.41"]');
    }

    get pageSettings() {
        return cy.get('button.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon[title="Settings"][data-test-psm-trigger]')
    }

    get typeURLField(){
        return cy.get('input[name="post-setting-slug"][id="url"].post-setting-slug.ember-text-field.gh-input.ember-view');
    }

    get tagField() {
        return cy.get('input.ember-power-select-trigger-multiple-input[type="search"]');
    }

    get excerptField() {
        return cy.get('textarea[name="post-setting-custom-excerpt"][id="custom-excerpt"].post-setting-custom-excerpt.ember-text-area.gh-input.ember-view[data-test-field="custom-excerpt"]');
    }

    TypeExcerpt(text){
        this.excerptField.type(text);
    }

    TypeTagField(tag) {
        this.tagField.first().type(tag);
    }

    TypeURL(text){
        this.typeURLField.type(text);
    }

    clickPageSettings() {
        this.pageSettings.click();
    }

    clickBackButton() {
        this.backButton.click();
    }

    fillPageDescription(description) {
        cy.wait(1000);
        this.pageDescription.type(description);
    }

    fillPageHeader(header) {
        cy.wait(1000);
        this.pageHeader.type(header);
    }

    addImageBtn_FirstPic_Click() {
        cy.wait(1000);
        cy.get('div.gh-unsplash-photo-footer').first().scrollIntoView().trigger('mouseover');
        this.addImageBtn_FirstPic.click();
    }

    updateBtn_Click() {
        cy.wait(1000);
        this.updateBtn.click();
    }

    addImgBtn_Click() {
        this.addImageBtn.click();
    }

    newPageBtn_Click() {
        this.newPageBtn.click();
    }

    publishButton_Click() {
        this.publishBtn.click();
    }

    publishButton_ShouldNotExist() {
        this.publishBtn.should('not.exist');
    }

    updateButton_Click() {
        this.updateButton.click();
    }

    finalReviewButton_Click() {
        this.finalReviewBtn.click();
    }

    confirmPublishButton_Click() {
        this.confirmPublishBtn.click();
    }

    isPublishFlowComplete() {
        return cy.get('[data-test-publish-flow="complete"]').should('be.visible');
    }

    isModalHeaderCorrect_Untitled() {
        return cy.get('[data-test-complete-bookmark=""] .modal-body h2').should('contain', '(Untitled)');
    }

    isModalDescriptionCorrect(description) {
        const shortDescription = description.length > 15 ? description.substring(0, 15) : description;
        return cy.get('[data-test-complete-bookmark=""] .modal-body .post-excerpt').should('contain', shortDescription);
    }

    isModalHeaderCorrect(header) {
        return cy.get('h2').should('contain', header);
    }

    navigateToPagesPage() {
        const url = Cypress.env("url");
        cy.visit(url+'/ghost/#/pages');
    }

    ShouldUpdatePage(){
        this.pageUpdateNotification.should('be.visible');
    }

    ShouldNotUpdatePage(){
        this.pageUpdateNotification.should('not.exist');
    }

    ShouldNotAllowTitleLongerThan255(){
        cy.get('div.gh-alert-content')
            .should('contain.text', 'Update failed: Title cannot be longer than 255 characters.');
    }

    verifyContentExists(content) {
        cy.contains(content).should('be.visible');
    }

    mockPageWithDescription(description) {
        this.newPageBtn_Click();
        this.fillPageHeader("Test");
        this.fillPageDescription("Test")
        this.publishButton_Click();
        this.finalReviewButton_Click();
        this.confirmPublishButton_Click();
        cy.wait(1000);
    }

    AndScreenshot(folderName, screenshotName) {
        cy.wait(1000);
        const screenshotPath = `${folderName}/${screenshotName}`;
        cy.screenshot(screenshotPath, { overwrite: true });
    }

    ClearPageDescription() {
        this.pageDescription.clear();
    }

    ClearPageHeader() {
        this.pageHeader.clear();
    }

    isDraftSaved() {
        cy.get('div[data-test-editor-post-status=""]').should('be.visible');
    }
}

export default new PagesPage();
