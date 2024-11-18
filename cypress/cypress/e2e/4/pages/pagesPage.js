class PagesPage {
    get newPageBtn() {
        return cy.get('[class="ember-view gh-btn gh-btn-primary view-actions-top-row"]');
    }

    get publishBtn() {
        return cy.get('.ember-basic-dropdown-trigger').first();
    }

    get notificationShould() {
        return cy.get('span.gh-notification-actions').first();
    }

    get addImageBtn() {
        return cy.get('svg[viewBox="0 0 122.43 122.41"]');
    }

    get addImageBtn_FirstPic() {
        return cy.get('#unsplash-selector-wormhole > div.absolute.top-8.right-8.bottom-8.left-8.br4.overflow-hidden.bg-white.z-9999 > div.flex.flex-column.h-100 > div > div > section > div:nth-child(1) > a:nth-child(1) > div > div > div.gh-unsplash-photo-footer > a');
    }

    get confirmPublishBtn() {
        return cy.get('span:contains("Publish")').first();
    }

    // get finalReviewBtn() {
    //     return cy.get('span:contains("Delete tag")');
    // }

    get updateBtn() {
        return cy.get('div.gh-posts-list-item-group').first();
    }

    get pageDescription() {
        return cy.get('.koenig-editor__editor').first();
    }

    get pageHeader() {
        return cy.get('.gh-editor-title');
    }

    get updateButton() {
        return cy.get('button[data-test-button="publish-save"]').first();
    }

    verifyNotificationExists() {
        this.notificationShould.should('be.visible');
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

    // finalReviewButton_Click() {
    //     this.finalReviewBtn.click();
    // }

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
        return cy.get('[data-test-complete-bookmark=""] .modal-body .post-excerpt').should('contain', description);
    }

    isModalHeaderCorrect(header) {
        return cy.get('h2').should('contain', header);
    }

    navigateToPagesPage() {
        const url = Cypress.env("url");
        cy.visit(url+'/ghost/#/pages');
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
}

export default new PagesPage();
