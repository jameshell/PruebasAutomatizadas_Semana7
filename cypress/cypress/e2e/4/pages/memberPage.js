import {fa, faker, th} from "@faker-js/faker";

class MemberPage {
    
    displayNameValid = faker.internet.displayName()
    emailValid = faker.internet.email();
    noteValid = faker.string.alpha(100)

    displayNameValid2 = faker.internet.displayName()
    emailValid2 = faker.internet.email();
    noteValid2 = faker.string.alpha(100)
    
    emailInvalid = faker.string.alpha(10)
    displayNameInvalid = faker.string.symbol(2)
    noteInvalid = faker.string.alpha(600)
    
    
    get newMemberButton() {
        return cy.get('div.view-actions-top-row>a[href="#/members/new/"]');
    }

    get memberNameInput() {
        return cy.get('input#member-name');
    }

    get memberEmailInput() {
        return cy.get('input#member-email');
    }

    get saveButton() {
        return cy.get('button>span').contains('Save');
    }
    
    get memberNoteTextArea(){
        return cy.get('textarea#member-note');
    }
    
    get memberName(){
        return cy.get('h3').contains(this.displayNameValid);
    }

    clickNewMember() {
        this.newMemberButton.click();
    }
    
    fillNameInput() {
        this.memberNameInput.clear().type(this.displayNameValid,{ force: true });
    }
    
    fillEmailInput() {
        this.memberEmailInput.clear().type(this.emailValid,{ force: true });
    }
    
    fillNoteTextArea() {
        this.memberNoteTextArea.clear().type(this.noteValid,{ force: true });
    }

    fillNameInputInvalid() {
        this.memberNameInput.clear().type(this.displayNameInvalid,{ force: true });
    }

    fillEmailInputInvalid() {
        this.memberEmailInput.clear().type(this.emailInvalid,{ force: true });
    }

    fillNoteTextAreaInvalid() {
        this.memberNoteTextArea.clear().type(this.noteInvalid,{ force: true });
    }
    
    seeEmailRequired(){
        cy.get('p.response').contains('Please enter an email.').should('exist');
    }
    
    seeCreatedMember(){
        cy.get('p').contains('Created').should('exist');
        cy.get('h3').contains(this.displayNameValid).should('exist');
        cy.get('a').contains(this.emailValid).should('exist');
    }
    
    clickSave() {
        this.saveButton.click();
    }


    
    seeInvalidEmailNote(){
        cy.get('p.response').contains('Invalid Email.').should('exist');
        cy.get('p.response').contains('Note is too long.').should('exist')
    }
    
    clickNameMember(){
        this.memberName.click();
    }
    
    updateEmail(){
        this.memberNameInput.clear().type(this.displayNameValid2,{ force: true });
    }
    
    updateName(){
        this.memberEmailInput.clear().type(this.emailValid2,{ force: true });
    }
    
    updateNote(){
        this.memberNoteTextArea.clear().type(this.noteValid2,{ force: true });
    }

    seeUpdatedMember() {
        cy.get('h3').contains(this.displayNameValid2).should('exist')
        cy.get('a').contains(this.emailValid2).should('exist')
        cy.get('textarea[name="note"]').should('exist').should('have.value', this.noteValid2);
    }
    screenShot(folderName, screenshotName) {
        const screenshotPath = `${folderName}/${screenshotName}`;
        cy.screenshot(screenshotPath, { overwrite: true });
    }
}

export default new MemberPage();
