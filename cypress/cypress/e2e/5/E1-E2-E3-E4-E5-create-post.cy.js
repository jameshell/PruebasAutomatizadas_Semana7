import { faker } from "@faker-js/faker";
import loginPage from "./pages/loginPage";
import memberPage from "./pages/postPage";
import dashboardPage from "./pages/dashboardPage";
import GivenSteps from "./steps/givenSteps";
import whenSteps from "./steps/whenSteps";
import thenSteps from "./steps/thenSteps";
import postPage from "./pages/postPage";


describe("Create Post and edit post", () => {
  beforeEach(() => {
    GivenSteps.givenNavigateToLoginPage();
    GivenSteps.givenLogin();
    GivenSteps.givenNavigateToPostsPage();
    
    Cypress.Screenshot.defaults({
      disableTimersAndAnimations: false,
    })
  });

  it("E1_create publication with valid data", () => {
    postPage.AndScreenshot('E1-596','1');
    // Given the user clicks on "New Post" to start creating a new post
    GivenSteps.AndClicksNewPost();
    postPage.AndScreenshot('E1-596','2');

    // Given the user clicks on the post title field to focus on it
    GivenSteps.AndClicksPostTitle();


    // Given the user inputs a title into the post title field
    GivenSteps.AndInputPostTitle();
    postPage.AndScreenshot('E1-596','3');

    // Given the user inputs content into the post content field
    GivenSteps.AndClicksPostContent();
 

     // Given the user clicks on the post content area to focus on it
    GivenSteps.AndInputPostContent();
    postPage.AndScreenshot('E1-596','4');

    // Given the user clicks the "Publish" button to initiate the publishing flow
    GivenSteps.AndClickPublishPost();
    postPage.AndScreenshot('E1-596','5');

    // Given the user clicks "Continue" in the publishing flow
    GivenSteps.AndClickContinuePublish();

    // Given the user clicks "Publish Right Now" to confirm the publication
    whenSteps.whenclickPostPublishRightNow();
    postPage.AndScreenshot('E1-596','6');
    // Then, verify that the post has been published successfully
    thenSteps.thenVerifyPost();
    postPage.AndScreenshot('E1-596','7');
  });

  it("E2-Edit post with title and description ", () => {
    postPage.AndScreenshot('E2-596','1');
    // Given the user clicks on the list of posts to view available posts
    GivenSteps.AndClickListPost();
    postPage.AndScreenshot('E2-596','2');
    // Given the user clicks on the title of a specific post to edit it
    GivenSteps.AndClicksPostTitle();
  

    // Given the user edits the title of the selected post
    GivenSteps.AndEditPostTitle();
    postPage.AndScreenshot('E3-596','3');

    // Given the user clicks on the content area of the post to edit it
    GivenSteps.AndClicksPostContent();
 

    // Given the user edits the content of the selected post
    GivenSteps.AndEditPostContent();
    postPage.AndScreenshot('E2-596','4');

    // When the user updates the post by saving the changes
    whenSteps.whenUpdatePost();
    postPage.AndScreenshot('E2-596','5');

    // Then the user verifies that the post has been edited successfully
    thenSteps.thenVerifyEditPost();
    postPage.AndScreenshot('E2-596','6');
        
});

  it("E3_Create post without title", () => {
    postPage.AndScreenshot('E3-596','1');

    GivenSteps.AndClicksNewPost();
    postPage.AndScreenshot('E3-596','2');

    // When the user clicks on the post content area to focus on it
    GivenSteps.AndClicksPostContent();


    // When the user inputs content into the post content field
    GivenSteps.AndInputPostContent();
    postPage.AndScreenshot('E3-596','3');

    // When the user clicks the "Publish" button to initiate the publishing flow
    GivenSteps.AndClickPublishPost();
    postPage.AndScreenshot('E3-596','4');

    // When the user clicks "Continue" in the publishing flow
    GivenSteps.AndClickContinuePublish();
    postPage.AndScreenshot('E3-596','5');

    // When the user clicks "Publish Right Now" to confirm the publication
    whenSteps.whenclickPostPublishRightNow();
    postPage.AndScreenshot('E3-596','6');

    // Then, verify that the post has been published successfully
    thenSteps.thenVerifyPost();
    postPage.AndScreenshot('E3-596','7');
  });

  it("E4_Create full post with image", () => {
    postPage.AndScreenshot('E4-596','1');
    GivenSteps.AndClicksNewPost();

    // When the user clicks on the post title field to focus on it
    GivenSteps.AndClicksPostTitle();

    // When the user inputs a title into the post title field
    GivenSteps.AndInputPostTitle();
    postPage.AndScreenshot('E4-596','1');

    // When the user clicks on the post content area to focus on it
    GivenSteps.AndClicksPostContent();

    // When the user inputs content into the post content field
    GivenSteps.AndInputPostContent();
    postPage.AndScreenshot('E4-596','1');

    GivenSteps.AndClickImagePostButton();
    postPage.AndScreenshot('E4-596','2');

    GivenSteps.AndClickFirstImage();
    postPage.AndScreenshot('E4-596','3');
    

    //When the user clicks the "Publish" button to initiate the publishing flow
    GivenSteps.AndClickPublishPost();
    postPage.AndScreenshot('E4-596','4');

    // When the user clicks "Continue" in the publishing flow
    GivenSteps.AndClickContinuePublish();
    postPage.AndScreenshot('E4-596','5');

    // When the user clicks "Publish Right Now" to confirm the publication
    whenSteps.whenclickPostPublishRightNow();
    postPage.AndScreenshot('E4-596','6');

    // Then, verify that the post has been published successfully
    thenSteps.thenVerifyPost();
    postPage.AndScreenshot('E4-596','7');
  });

  it("E5_create empty post", () => {
    whenSteps.WhenClicksNewPost();
    postPage.AndScreenshot('E5-596','1');

    thenSteps.thenShouldNoExitPublish();
    postPage.AndScreenshot('E5-596','2');
  });
});
