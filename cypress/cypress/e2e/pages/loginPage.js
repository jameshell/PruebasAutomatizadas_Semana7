class LoginPage{
    get usernameInput(){
        return cy.get('input[name="identification"]');
    }
    get passwordInput(){
        return cy.get('input[name="password"]');
    }
    get loginButton(){
        return cy.get('button[type="submit"]');
    }

    enterUsername(username){
        console.log(`Logging in with username: ${username}`);
        this.usernameInput.clear().type(username);
    }

    enterPassword(password){
        this.passwordInput.clear().type(password);
    }
    
    clickLogin(){
        this.loginButton.click();
    }

    login(){
        const username = Cypress.config("username");
        const password = Cypress.config("password");
        console.log(`Logging in with username: ${username}, password: ${password}`);
        this.usernameInput.clear().type(username);
        //this.enterUsername(username);
        this.enterPassword(password);
        this.clickLogin();
    }
    
    navigateToLogin(){
        const url = Cypress.config("url"); 
        cy.visit(url+'ghost/#/signin');
    }
}

export default new LoginPage();