class MemberPage {
    
    
    get newMemberButton() {
        return cy.get('div.view-actions-top-row>a[href="#/members/new/"]');
    }

    get memberNameInput() {
        return cy.get('input[name="name"]');
    }

    get memberEmailInput() {
        return cy.get('input[name="email"]');
    }

    get saveButton() {
        return cy.get('button>span').contains('Save');
    }
    
    get memberNoteTextArea(){
        return cy.get('textarea[name="note"]');
    }
    
    get memberName(){
        return cy.get('h3').contains(this.displayNameValid);
    }

    clickNewMember() {
        cy.wait(1000);
        this.newMemberButton.click();
    }
    
    fillNameInput(displayName) {
        this.memberNameInput.clear().type(displayName);
    }
    
    fillEmailInput(email) {
        this.memberEmailInput.clear().type(email);
    }
    
    fillNoteTextArea(note) {
        this.memberNoteTextArea.clear().type(note);
    }
    
    seeEmailRequired(){
        cy.get('p.response').contains('Please enter an email.').should('exist');
    }
    
    seeCreatedMember(name, email){
        cy.get('p').contains('Created').should('exist');
        if (name !== ''){
            cy.get('h3').contains(name).should('exist');
        }
        if (email !== ''){
            cy.get("a, h3").contains(email).should('exist');
        }
    }
    
    clickSave() {
        this.saveButton.click();
    }
    
    seeInvalidName(){
        cy.get("p.response").contains('Name cannot be longer than 191 characters').should('exist');
    }


    seeInvalidEmail(){
        cy.get('p.response').contains('Invalid Email.').should('exist');
    }
    seeInvalidNote(){
        cy.get('p.response').contains('Note is too long.').should('exist')
    }
    
    clickNameMember(name){
        cy.get('h3').contains(name).click();
    }

    updateName(name){
        if (name === ''){
            this.memberNameInput.clear();
        } else{
            this.memberNameInput.clear().type(name);
        }
    }
    
    updateEmail(email){
        if (email === ''){
            this.memberEmailInput.clear()
        }else{
            this.memberEmailInput.clear().type(email);
        }
    }
    
    updateNote(note){
        if (note === ''){
            this.memberNoteTextArea.clear()
        }else{
            this.memberNoteTextArea.clear().type(note);
        }
    }

    seeUpdatedMember() {
        cy.get('h3').contains(this.displayNameValid2).should('exist')
        cy.get('a').contains(this.emailValid2).should('exist')
        cy.get('textarea[name="note"]').should('exist').should('have.value', this.noteValid2);
    }
}

export default new MemberPage();
