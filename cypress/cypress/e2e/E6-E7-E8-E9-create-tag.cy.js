import { faker } from "@faker-js/faker";
import loginPage from "./pages/loginPage";
import memberPage from "./pages/memberPage";
import dashboardPage from "./pages/dashboardPage";
import GivenSteps from "./steps/givenSteps";
import ThenSteps from "./steps/thenSteps";
import WhenSteps from "./steps/whenSteps";
import whenSteps from "./steps/whenSteps";


describe("Create Tags", () => {

  beforeEach(() => {
    // Given the User navigates to the login page
    GivenSteps.givenNavigateToLoginPage();
    // and enters a valid username and password and click the login button
    GivenSteps.givenLogin();
    // and navigates to the Tags
    GivenSteps.givenNavigateToTagPage();
  })



it("E6 - Create tag with valid values ", () => {
    //  When the user clicks on New tag
    WhenSteps.whenClickTagNewTag();
    // and fills the name tag input
    WhenSteps.whenFillNameTag();
    // and fill the description tag input
    WhenSteps.whenFillDescriptionTag();
    // and save the tag
    WhenSteps.whenSaveTag();
    // then see the page with created tag
    ThenSteps.thenSeeTagPage();
    
});

it("E7 - Create tag with invalid values ", () => {
    //  When the user clicks on New tag
    WhenSteps.whenClickTagNewTag();
    // and fills the name tag input
    WhenSteps.whenFillInvalidNameTag();
    // and fill the description tag input
    WhenSteps.whenFillInvalidDescription();
    // and save the tag
    WhenSteps.whenSaveTag();
    
});

it("E8 - Create tag with not values ", () => {
    //  When the user clicks on New tag
    WhenSteps.whenClickTagNewTag();
    // and save the tag
    WhenSteps.whenSaveTag();

});
   

it("E9 - Create tag and delete tag ", () => {
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
    // When delete the tag
    whenSteps.whenDeleteTagButton();
    // and confirm
    whenSteps.whenConfirmDelte();

    
});


});
