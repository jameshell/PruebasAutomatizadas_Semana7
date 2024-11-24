import {fa, faker, th} from "@faker-js/faker";

class TagPage{

    nameTagValid = faker.internet.displayName()
    descriptiionTag = faker.string.alpha(200)

    nameTagInValid = faker.internet.displayName()
    invalidDescriptiionTag = faker.string.alpha(510)

    get newTagButton(){
        return cy.get('a[href="#/tags/new/"]');
    }

    get tagNameInput(){
        return cy.get("#tag-name");
    }

    get tagDescription(){
        return cy.get("#tag-description");
    }

    get saveTagButtom(){
        return cy.get('[data-test-button="save"]');
    }

    get returnTags(){
        return cy.get('a[href="#/tags/"]').first();
    }

    get tagNameInvalidInput(){
        return cy.get("#tag-name");
    }

    get tagInvalidDescription(){
        return cy.get("#tag-description");
    }

    get tagNameDelete(){
        return cy.get("#tag-name");
    }
    get selectTagToDelete(){
        return cy.get('a[href="#/tags/todelete/"]').first()
    }

    get deleteTagButtom(){
        return cy.get('[data-test-button="delete-tag"]');
    }

    get confirmDelete(){
        return cy.get('[data-test-button="confirm"]');
    }

    get tagEditNameInput(){
        return cy.get("#tag-name");
    }

    get tagEditDescription(){
        return cy.get("#tag-description");
    }

    get tagExpandFbCard(){
        return cy.get('.gh-btn.gh-btn-expand').eq(2);
    }

    get tagfillNameFbCard(){
        return cy.get('#og-title');
    }

    get tagfillDescriptionFb(){
        return cy.get('#og-description');
    }
    get tagExpandMetadataCard(){
        return cy.get('.gh-btn.gh-btn-expand').eq(0);
    }

    get tagfillMetadataName(){
        return cy.get('#meta-title');
    }

    get tagfillMetadataDescription(){
        return cy.get('#meta-description');
    }
    
    get tagfillMetadataUrl(){
        return cy.get('#canonical-url');
    }

    get tagExpandXcard(){
        return cy.get('.gh-btn.gh-btn-expand').eq(1);
    }
    get tagfillNameXCard(){
        return cy.get('#twitter-title');
    }
    get tagfillXDescription(){
        return cy.get('#twitter-description');
    }

    get errorDescription(){
        return cy.contains('Description cannot be longer than 500 characters');
    }

    get errorDescriptionFB(){
        return cy.get('article.gh-alert.gh-alert-red');
    }

    get errorDescriptionX(){
        return cy.get('article.gh-alert.gh-alert-red');
    }

    get ErrorTagName(){
        return cy.get('span.error p.response');
    }


    get slugNameInput(){
        return cy.get("#tag-slug");
    }

    get ErrorSlugName(){
        return cy.get('p.response');
    }

    get colorTag(){
        return cy.get('input[name="accent-color"]');
    }

    clickNewTag(){
        cy.wait(1000);
        this.newTagButton.click();
    }

    fillNameTag(nameTag){
        this.tagNameInput.clear().type(nameTag);
    }

    fillDescriptionTag(){
        this.tagDescription.clear().type(this.descriptiionTag);
    }

    saveTag(){
        this.saveTagButtom.click();
    }

    seeTags(){
        this.returnTags.click();
    }

    fillInvalidNameTag(){
        this.tagNameInvalidInput.type(this.nameTagInValid);
    }

    fillInvalidDescriptionTag(descriptionTag){
        this.tagInvalidDescription.type(descriptionTag);
    }
    fillNameTagDelete(){
        this.tagNameDelete.type("ToDelete");
    }
    tagToDelete(){
        this.selectTagToDelete.click();
    }
    deleteTag(){
        this.deleteTagButtom.click();
    }
    deleteConfirmClick(){
        this.confirmDelete.click();
        cy.wait(1000);
    }
    fillEditNameTag(){
        this.tagEditNameInput.clear().type("Edited tag");
    }

    fillEditDescriptionTag(){
        this.tagEditDescription.clear().type("Edited Description");
    }

    expandFbCard(){
        this.tagExpandFbCard.click();
    }

    fillNameFbCard(nameFbCard){
        this.tagfillNameFbCard.clear().type(nameFbCard);
    }
    
    fillDescriptionFb(descripcionFb){
        this.tagfillDescriptionFb.clear().type(descripcionFb);
    }
    expandMetadataCard(){
        this.tagExpandMetadataCard.click();
    }

    fillMetadataName(descripcionmMeta){
        this.tagfillMetadataName.clear().type(descripcionmMeta);
    }

    fillMetadataDescription(descripcionMeta){
        this.tagfillMetadataDescription.clear().type(descripcionMeta);
    }

    fillMetadataUrl(urlMeta){
        this.tagfillMetadataUrl.clear().type(urlMeta);
    }

    expandXcard(){
        this.tagExpandXcard.click();
    }

    fillXcardName(xcardName){
        this.tagfillNameXCard.clear().type(xcardName);
    }
    fillXDescription(descripcionX){
        this.tagfillXDescription.clear().type(descripcionX);
    }

    assertErrorDescription(){
        this.errorDescription.should('be.visible');
    }

    assertErrorDescriptionFB(){
        this.errorDescriptionFB.should('be.visible')
        .and('contain', 'Validation error, cannot save tag.');
    }

    assertErrorDescriptionX(){
        this.errorDescriptionX.should('be.visible')
        .and('contain', 'Validation error, cannot save tag.')
    }
    
    assertTagVisible(nameTag){
        cy.contains(nameTag).should('be.visible');
    }

    assertErrorTagName(){
        this.ErrorTagName.should('be.visible')
        .and('contain', 'Tag names cannot be longer than 191 characters');
    }

    fillSlugTag(nameSlug){
        this.slugNameInput.clear().type(nameSlug);
    }

    assertErrorSlugName(){
        this.ErrorSlugName.should('be.visible')
        .and('contain', 'URL cannot be longer than 191 characters.');
    }

    fillColorTag(nameSlug){
        this.colorTag.first().type(nameSlug);
    }

    assertErrorTagColor(){
        this.ErrorSlugName.should('be.visible')
        .and('contain', 'The colour should be in valid hex format');
    }
}

export default new TagPage();