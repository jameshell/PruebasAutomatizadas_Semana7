import GivenStepsTag from "./steps/givenStepsTag"
import ThenStepsTag from "./steps/thenStepsTag"
import WhenStepsTag from "./steps/whenStepsTag"

const https = require("https");

    describe("Tag con nombre y descripcion invalido", () => {
        let tagData = [];
        before(() => {
        cy.fixture('mockData.json').then((data) => {
            tagData = data;
          });
        });

    beforeEach(() => {
        // Given the User navigates to the login page
        GivenStepsTag.givenNavigateToLoginPage();
        // and enters a valid username and password and click the login button
        GivenStepsTag.givenLogin();
        // and navigates to the Tags
        GivenStepsTag.givenNavigateToTagPage();

      })

    it("98 - Tag con nombre y descripcion invalido", () => {
      const tag = tagData[0];

        //  When the user clicks on New tag
        WhenStepsTag.whenClickTagNewTag();
        
        // Generate a tag name using mockaroo invalid
        const nameTag= tag['paragraphs_501']
        // and fills the name tag input
        WhenStepsTag.whenFillNameTag(nameTag);

        // Generate a long description > 501 using mockaroo
        const descriptionTag= tag['paragraphs_501']
        // and fill the description tag input
        WhenStepsTag.whenFillInvalidDescription(descriptionTag);

        // then save the tag
        ThenStepsTag.thenSaveTag();
        // And assert: Verify that the error message is displayed
        ThenStepsTag.thenAssertErrorTagName();
        // And assert that the error message is displayed
        ThenStepsTag.thenAssertErrorDescription();
    });
    
    })