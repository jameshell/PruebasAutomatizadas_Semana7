import GivenSteps from "./steps/givenSteps";
import ThenSteps from "./steps/thenSteps";
import WhenSteps from "./steps/whenSteps";
import whenSteps from "./steps/whenSteps";
import tagPage from "./pages/tagPage";
import thenSteps from "./steps/thenSteps";

describe("Create Tags", () => {

  beforeEach(() => {
    // Given the User navigates to the login page
    GivenSteps.givenNavigateToLoginPage();
    // and enters a valid username and password and click the login button
    // GivenSteps.givenLogin();
    // and navigates to the Tags
    // GivenSteps.givenNavigateToTagPage();
  })



it("E6 - Create tag with valid values ", () => {
    //enters a valid username and password and click the login button
    GivenSteps.givenLogin();
    tagPage.screenShot('E6-45','1')

    //navigates to the Tags
    GivenSteps.givenNavigateToTagPage();
    tagPage.screenShot("E6-45","2");

    //  When the user clicks on New tag
    WhenSteps.whenClickTagNewTag();
    tagPage.screenShot("E6-45","3");

    // and fills the name tag input
    WhenSteps.whenFillNameTag();
    tagPage.screenShot("E6-45","4");

    // and fill the description tag input
    WhenSteps.whenFillDescriptionTag();
    tagPage.screenShot("E6-45","5");

    // and save the tag
    WhenSteps.whenSaveTag();
    tagPage.screenShot("E6-45","6");

    // then see the page with created tag
    ThenSteps.thenSeeTagPage();
    tagPage.screenShot("E6-45","7");
    
});

});
