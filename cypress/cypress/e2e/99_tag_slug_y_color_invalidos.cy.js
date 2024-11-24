import GivenStepsTag from "./steps/givenStepsTag"
import ThenStepsTag from "./steps/thenStepsTag"
import WhenStepsTag from "./steps/whenStepsTag"

const https = require("https");

    describe("Tag con slug y color invalidos", () => {
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

    it("99 - Tag con slug y color invalido", () => {
      const tag = tagData[0];

        //  When the user clicks on New tag
        WhenStepsTag.whenClickTagNewTag();
        
        // Generate a tag name using mockaroo invalid
        const nameTag= tag['tag_name']
        // and fills the name tag input
        WhenStepsTag.whenFillNameTag(nameTag);
        
        // Generate a invalid color mockaroo invalid
        const colorTag= tag['tag_name']
        // and fills the name tag input
        WhenStepsTag.whenFillColorTag(colorTag);

        // Generate a tag name using mockaroo invalid
        const nameSlug= tag['paragraphs_501']
        WhenStepsTag.whenFillSlugTag(nameSlug);


        // then save the tag
        ThenStepsTag.thenSaveTag();
        // And assert: Verify that the error message is displayed
        ThenStepsTag.thenAssertErrorslugName();
        // And assert: Verify that the error message is displayed
        ThenStepsTag.thenAssertErrorTagColor();

    });
    
    })