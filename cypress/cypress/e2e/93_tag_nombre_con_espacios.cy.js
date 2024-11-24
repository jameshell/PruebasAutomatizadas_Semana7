import GivenStepsTag from "./steps/givenStepsTag"
import ThenStepsTag from "./steps/thenStepsTag"
import WhenStepsTag from "./steps/whenStepsTag"

const https = require("https");

    describe("Tag con nombre con espacios", () => {
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

    it("93 - Tag con nombre con espacios", () => {
      const tag = tagData[0];

        //  When the user clicks on New tag
        WhenStepsTag.whenClickTagNewTag();
        
        // Generate a tag name using mockaroo invalid
        const nameTag= tag['paragraphs']
        // and fills the name tag input
        WhenStepsTag.whenFillNameTag(nameTag);
        // then save the tag

        ThenStepsTag.thenSaveTag();
        // Assert: Verify that the new tag appears in the list (replace selector accordingly)
        ThenStepsTag.thenTagVisible(nameTag);


    });
    
    })