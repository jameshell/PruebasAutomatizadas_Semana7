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
        return cy.get('span:contains("Save")');
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
        return cy.get('span:contains("Delete tag")');
    }

    get confirmDelete(){
        return cy.get('span:contains("Delete")');
    }

    get tagEditNameInput(){
        return cy.get("#tag-name");
    }

    get tagEditDescription(){
        return cy.get("#tag-description");
    }


    clickNewTag(){
        cy.wait(1000);
        this.newTagButton.click();
    }

    fillNameTag(){
        this.tagNameInput.type(this.nameTagValid);
    }

    fillDescriptionTag(){
        this.tagDescription.type(this.descriptiionTag);
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

    fillInvalidDescriptionTag(){
        this.tagInvalidDescription.type(this.invalidDescriptiionTag);
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
        this.tagEditNameInput
        .clear({ force: true })
        .should('have.value', '')
        .type("Edited tag", { force: true });
    }

    fillEditDescriptionTag(){
        this.tagEditDescription
        .clear({ force: true })
        .should('have.value', '')
        .type("Edited Description", { force: true });
    }
    
    screenShot(folderName, screenshotName) {
        const screenshotPath = `screenshots/${folderName}/${screenshotName}`;
        cy.screenshot(screenshotPath, { overwrite: true });
    }

}

export default new TagPage();