import { faker } from "@faker-js/faker";
import loginPage from "./pages/loginPage";
import memberPage from "./pages/postPage";
import dashboardPage from "./pages/dashboardPage";
import GivenSteps from "./steps/givenSteps";
import whenSteps from "./steps/whenSteps";
import thenSteps from "./steps/thenSteps";
import postPage from "./pages/postPage";


describe("Create Post", () => {
  beforeEach(() => {
    GivenSteps.givenNavigateToLoginPage();
    GivenSteps.givenLogin();
    GivenSteps.givenNavigateToPostsPage();
  });

  it("E1_create publication with valid data", () => {
    postPage.AndScreenshot('E1-45','1');
    // Given the user clicks on "New Post" to start creating a new post
    GivenSteps.AndClicksNewPost();
    postPage.AndScreenshot('E1-45','2');

    // Given the user clicks on the post title field to focus on it
    GivenSteps.AndClicksPostTitle();
    

    // Given the user inputs a title into the post title field
    GivenSteps.AndInputPostTitle();
    postPage.AndScreenshot('E1-45','3');

    // Given the user clicks on the post content area to focus on it
    GivenSteps.AndClicksPostContent();

    // Given the user inputs content into the post content field
    GivenSteps.AndInputPostContent();
    postPage.AndScreenshot('E1-45','4');

    // Given the user clicks the "Publish" button to initiate the publishing flow
    GivenSteps.AndClickPublishPost();
    postPage.AndScreenshot('E1-45','5');

    // Given the user clicks "Continue" in the publishing flow
    whenSteps.whenclickPostPublishRightNow();
    postPage.AndScreenshot('E1-45','6');

    // Then, verify that the post has been published successfully
    thenSteps.thenVerifyPost();
    postPage.AndScreenshot('E1-45','7');
  });

  it("E2-Edit post with title and description ", () => {
    postPage.AndScreenshot('E2-45','1');

    // Given the user clicks on the list of posts to view available posts
    GivenSteps.AndClickListPost();

    // Given the user clicks on the title of a specific post to edit it
    GivenSteps.AndClicksPostTitle();
    

    // Given the user edits the title of the selected post
    GivenSteps.AndEditPostTitle();
    postPage.AndScreenshot('E2-45','2');

    // Given the user clicks on the content area of the post to edit it
    GivenSteps.AndClicksPostContent();
 

    // Given the user edits the content of the selected post
    GivenSteps.AndEditPostContent();
    postPage.AndScreenshot('E2-45','3');

    // When the user updates the post by saving the changes
    GivenSteps.AndUpateBtnPost();
    postPage.AndScreenshot('E2-45','4');

    whenSteps.whenupdatePostDrop();

    // Then the user verifies that the post has been edited successfully
    thenSteps.thenVerifyEditPost();
    postPage.AndScreenshot('E2-45','5');
        
});


  it("E5_create empty post", () => {
    postPage.AndScreenshot('E5-45','1');

    whenSteps.AndClicksNewPostEmpty();
    postPage.AndScreenshot('E5-45','2');

    thenSteps.thenShouldNoExitPublish();
  });
});
