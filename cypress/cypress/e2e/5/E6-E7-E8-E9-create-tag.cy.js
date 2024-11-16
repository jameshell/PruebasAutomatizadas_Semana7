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
    tagPage.screenShot('E6-596','1')

    //navigates to the Tags
    GivenSteps.givenNavigateToTagPage();
    tagPage.screenShot("E6-596","2");

    //  When the user clicks on New tag
    WhenSteps.whenClickTagNewTag();
    tagPage.screenShot("E6-596","3");

    // and fills the name tag input
    WhenSteps.whenFillNameTag();
    tagPage.screenShot("E6-596","4");

    // and fill the description tag input
    WhenSteps.whenFillDescriptionTag();
    tagPage.screenShot("E6-596","5");

    // and save the tag
    WhenSteps.whenSaveTag();
    tagPage.screenShot("E6-596","6");

    // then see the page with created tag
    ThenSteps.thenSeeTagPage();
    tagPage.screenShot("E6-596","7");
    
});

it("E7 - Create tag with invalid values ", () => {
    //enters a valid username and password and click the login button  
    GivenSteps.givenLogin();
    tagPage.screenShot('E7-596','1')

    //navigates to the Tags
    GivenSteps.givenNavigateToTagPage();
    tagPage.screenShot("E7-596","2");  
  
    //  When the user clicks on New tag
    WhenSteps.whenClickTagNewTag();
    tagPage.screenShot("E7-596","3");  
  
    // and fills the name tag input
    WhenSteps.whenFillInvalidNameTag();
    tagPage.screenShot("E7-596","4");  
  
    // and fill the description tag input
    WhenSteps.whenFillInvalidDescription();
    tagPage.screenShot("E7-596","5");  
  
    // then save the tag
    ThenSteps.thenSaveTag();
    tagPage.screenShot("E7-596","6");  
    
});

it("E8 - Create tag with not values ", () => {
    //enters a valid username and password and click the login button  
    GivenSteps.givenLogin();
    tagPage.screenShot('E8-596','1')

    //navigates to the Tags
    GivenSteps.givenNavigateToTagPage();
    tagPage.screenShot("E8-596","2");    
    // When the user clicks on New tag
    WhenSteps.whenClickTagNewTag();
    tagPage.screenShot("E8-596","3"); 

    // and save the tag
    ThenSteps.thenSaveTag();
    tagPage.screenShot("E8-596","4"); 

});
   

it("E9 - Create tag and delete tag ", () => {
    //enters a valid username and password and click the login button  
    GivenSteps.givenLogin();
    tagPage.screenShot('E9-596','1')

    //navigates to the Tags
    GivenSteps.givenNavigateToTagPage();
    tagPage.screenShot("E9-596","2");    
  
    //When the user clicks on New tag
    WhenSteps.whenClickTagNewTag();
    tagPage.screenShot("E9-596","3");

    // and fills the name tag input
    WhenSteps.whenfillNameTagDelete();
    tagPage.screenShot("E9-596","4");

    // and fill the description tag input
    WhenSteps.whenFillDescriptionTag();
    tagPage.screenShot("E9-596","5");

    // and save the tag
    WhenSteps.whenSaveTag();
    tagPage.screenShot("E9-596","6");

    // and see the page with created tag
    WhenSteps.whenSeeTagPage();
    tagPage.screenShot("E9-596","7");

    // and select the tag to delete
    WhenSteps.whenSelectTagToDelete();
    tagPage.screenShot("E9-596","8");

    // and delete the tag
    whenSteps.whenDeleteTagButton();
    tagPage.screenShot("E9-596","9");

    // then confirm
    thenSteps.thenConfirmDelte();
    tagPage.screenShot("E9-596","10");

    
});


});
