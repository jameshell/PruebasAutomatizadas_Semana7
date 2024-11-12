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
}

export default new PagesPage();
