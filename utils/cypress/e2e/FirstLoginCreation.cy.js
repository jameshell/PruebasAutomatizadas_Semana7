describe("Create Admin Setup", () => {

  it("E0 - Initial Login Setup", () => {
    cy.visit('http://localhost:3001/ghost/#/setup');
    cy.get('#blog-title').type('generic test');
    cy.get('#name').type('generic admin');
    cy.get('#email').type('generic_admin@gmail.com');
    cy.get('#password').type('GenericAdmin123.');
    cy.get('button[data-test-button="setup"]').click();
  });
});
