import GivenStepsTag from "./steps/givenStepsTag"
import ThenStepsTag from "./steps/thenStepsTag"
import WhenStepsTag from "./steps/whenStepsTag"

const https = require("https");

    describe("Tag con titulo fb invalido", () => {
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

    it("96 - Tag con titulo fb invalido", () => {
      const tag = tagData[0];

        //  When the user clicks on New tag
        WhenStepsTag.whenClickTagNewTag();
        
        // Generate a tag name using mockaroo invalid
        const nameTag= tag['tag_name']
        // and fills the name tag input
        WhenStepsTag.whenFillNameTag(nameTag);

        // And click on expand in FB card
        WhenStepsTag.whenExpandFbCard();
        // Generate a FB card name > 300 using mockaroo
        const nameFbCard = tag['paragraphs_501'];
        // And fills the name FB card input
        WhenStepsTag.whenFillNameFbCard(nameFbCard);

        // then save the tag
        ThenStepsTag.thenSaveTag();
        // And assert that the error message is displayed
        ThenStepsTag.thenAssertErrorDescriptionFB();  
    });
    
    })