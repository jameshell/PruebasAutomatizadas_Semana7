import GivenStepsTag from "./steps/givenStepsTag"
import ThenStepsTag from "./steps/thenStepsTag"
import WhenStepsTag from "./steps/whenStepsTag"

const https = require("https");

    describe("Tag con datos validos", () => {
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

    it("91 - Tag con datos validos", () => {
      const tag = tagData[0];

        //  When the user clicks on New tag
        WhenStepsTag.whenClickTagNewTag();
        
        // Generate a tag name using mockaroo
        //const nameTag = validTagName(44)
        const nameTag= tag['tag_name']
        // and fills the name tag input
        WhenStepsTag.whenFillNameTag(nameTag);
        
        
        // Generate a long description > 501 using mockaroo
        const descriptionTag= tag['paragraphs']
        // and fill the description tag input
        WhenStepsTag.whenFillInvalidDescription(descriptionTag);

        // then save the tag
        ThenStepsTag.thenSaveTag();
        // Assert: Verify that the new tag appears in the list (replace selector accordingly)
        ThenStepsTag.thenTagVisible(nameTag);


    });
    
    })