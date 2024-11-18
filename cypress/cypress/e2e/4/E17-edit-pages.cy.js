import GivenSteps from "./steps/givenSteps";
import pagesPage from "./pages/pagesPage";
import { faker } from "@faker-js/faker";
import WhenSteps from "./steps/whenSteps";
import postPage from "./pages/postPage";
import whenSteps from "./steps/whenSteps";
import thenSteps from "./steps/thenSteps";


describe("Pages - Edit page title and description", () => {

    beforeEach(() => {
        // Given the User navigates to the login page
        GivenSteps.givenNavigateToLoginPage();
        // and enters a valid username and password and click the login button
        GivenSteps.givenLogin();
        // and navigates to the Pages
        GivenSteps.giveNavigateToPagesPage();
        pagesPage.AndScreenshot('E17-45','1');
        //Create a page with description
        // pagesPage.mockPageWithDescription();

        // cy.get('button.close').click()
    });

    it("E17 - Should edit page", () => {
        // postPage.AndScreenshot('E1-45','1');
        // Given the user clicks on "New Post" to start creating a new post
        GivenSteps.AndClicksNewPost();
        postPage.AndScreenshot('E17-45','2');

        // Given the user clicks on the post title field to focus on it
        GivenSteps.AndClicksPostTitle();


        // Given the user inputs a title into the post title field
        GivenSteps.AndInputPostTitle();
        postPage.AndScreenshot('E17-45','3');

        // Given the user clicks on the post content area to focus on it
        GivenSteps.AndClicksPostContent();

        // Given the user inputs content into the post content field
        GivenSteps.AndInputPostContent();
        postPage.AndScreenshot('E17-45','4');

        // Given the user clicks the "Publish" button to initiate the publishing flow
        GivenSteps.AndClickPublishPost();
        postPage.AndScreenshot('E17-45','5');

        // Given the user clicks "Continue" in the publishing flow
        whenSteps.whenclickPostPublishRightNow();
        postPage.AndScreenshot('E17-45','6');

        // Then, verify that the post has been published successfully
        thenSteps.thenVerifyNotificationExists();
        postPage.AndScreenshot('E17-45','7');
    });
});
