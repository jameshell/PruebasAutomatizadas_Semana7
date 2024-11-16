import { faker } from "@faker-js/faker";
import loginPage from "./pages/loginPage";
import memberPage from "./pages/memberPage";
import dashboardPage from "./pages/dashboardPage";
import GivenSteps from "./steps/givenSteps";
import ThenSteps from "./steps/thenSteps";
import WhenSteps from "./steps/whenSteps";



describe("Edit Tags", () => {

  beforeEach(() => {
    // Given the User navigates to the login page
    GivenSteps.givenNavigateToLoginPage();
    // and enters a valid username and password and click the login button
    GivenSteps.givenLogin();
    // and navigates to the Tags
    GivenSteps.givenNavigateToTagPage();
  })


it("E10 - Create tag and edit tag ", () => {
    //  When the user clicks on New tag
    WhenSteps.whenClickTagNewTag();
    // and fills the name tag input
    WhenSteps.whenfillNameTagDelete();
    // and fill the description tag input
    WhenSteps.whenFillDescriptionTag();
    // and save the tag
    WhenSteps.whenSaveTag();
    // then see the page with created tag
    ThenSteps.thenSeeTagPage();
    // When select the tag to delete
    WhenSteps.whenSelectTagToDelete();
    // and edit the name tag
    WhenSteps.whenEditTagName();
    // and edit description tag
    WhenSteps.whenEditTagDescription();
    // and save the tag
    WhenSteps.whenSaveTag();
    // then see the page with created tag
    ThenSteps.thenSeeTagPage();

    
    
});


});
