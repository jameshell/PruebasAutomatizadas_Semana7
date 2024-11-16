import { faker } from "@faker-js/faker";
import loginPage from "./pages/loginPage";
import memberPage from "./pages/memberPage";
import dashboardPage from "./pages/dashboardPage";
import GivenSteps from "./steps/givenSteps";
import ThenSteps from "./steps/thenSteps";
import WhenSteps from "./steps/whenSteps";
import tagPage from "./pages/tagPage";




describe("Edit Tags", () => {

  beforeEach(() => {
    // Given the User navigates to the login page
    GivenSteps.givenNavigateToLoginPage();
    // // and enters a valid username and password and click the login button
    // GivenSteps.givenLogin();
    // // and navigates to the Tags
    // GivenSteps.givenNavigateToTagPage();
  })

it("E10 - Create tag and edit tag ", () => {
    //enters a valid username and password and click the login button  
    GivenSteps.givenLogin();
    tagPage.screenShot('E10-45','1')

    //navigates to the Tags
    GivenSteps.givenNavigateToTagPage();
    tagPage.screenShot("E10-45","2");

    //  When the user clicks on New tag
    WhenSteps.whenClickTagNewTag();
    tagPage.screenShot("E10-45","3");

    // and fills the name tag input
    WhenSteps.whenfillNameTagDelete();
    tagPage.screenShot("E10-45","4");

    // and fill the description tag input
    WhenSteps.whenFillDescriptionTag();
    tagPage.screenShot("E10-45","5");

    // and save the tag
    WhenSteps.whenSaveTag();
    tagPage.screenShot("E10-45","6");

    // then see the page with created tag
    ThenSteps.thenSeeTagPage();
    tagPage.screenShot("E10-45","7");

    // When select the tag to delete
    WhenSteps.whenSelectTagToDelete();
    tagPage.screenShot("E10-45","8");

    // and edit the name tag
    WhenSteps.whenEditTagName();
    tagPage.screenShot("E10-45","9");

    // and edit description tag
    WhenSteps.whenEditTagDescription();
    tagPage.screenShot("E10-45","10");
    // and save the tag
    WhenSteps.whenSaveTag();
    tagPage.screenShot("E10-45","11");

    // then see the page with created tag
    ThenSteps.thenSeeTagPage();
    tagPage.screenShot("E10-45","12");

    
    
});


});
