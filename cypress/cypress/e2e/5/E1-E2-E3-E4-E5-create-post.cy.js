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
    postPage.AndScreenshot('E1-postcypress-1');
    // Given the user clicks on "New Post" to start creating a new post
    GivenSteps.AndClicksNewPost();
    postPage.AndScreenshot('E1-postcypress-2');
    // Given the user clicks on the post content area to focus on it
    GivenSteps.AndClicksPostContent();
    postPage.AndScreenshot('E1-postcypress-3');
    // Given the user clicks on the post title field to focus on it
    GivenSteps.AndClicksPostTitle();
    postPage.AndScreenshot('E1-postcypress-4');
    // Given the user inputs a title into the post title field
    GivenSteps.AndInputPostTitle();
    postPage.AndScreenshot('E1-postcypress-5');
    // Given the user inputs content into the post content field
    GivenSteps.AndInputPostContent();
    postPage.AndScreenshot('E1-postcypress-6');
    // Given the user clicks the "Publish" button to initiate the publishing flow
    GivenSteps.AndClickPublishPost();
    postPage.AndScreenshot('E1-postcypress-7');
    // Given the user clicks "Continue" in the publishing flow
    GivenSteps.AndClickContinuePublish('E1-postcypress-8');
    // Given the user clicks "Publish Right Now" to confirm the publication
    whenSteps.whenclickPostPublishRightNow('E1-postcypress-9');
    // Then, verify that the post has been published successfully
    thenSteps.thenVerifyPost('E1-postcypress-10');
  });

  it("E2-Edit post with title and description ", () => {
    postPage.AndScreenshot('E2-postcypress-1');
    // Given the user clicks on the list of posts to view available posts
    GivenSteps.AndClickListPost();
    postPage.AndScreenshot('E2-postcypress-2');
    // Given the user clicks on the title of a specific post to edit it
    GivenSteps.AndClicksPostTitle();
    postPage.AndScreenshot('E2-postcypress-3');

    // Given the user edits the title of the selected post
    GivenSteps.AndEditPostTitle();
    postPage.AndScreenshot('E2-postcypress-4');

    // Given the user clicks on the content area of the post to edit it
    GivenSteps.AndClicksPostContent();
    postPage.AndScreenshot('E2-postcypress-5');

    // Given the user edits the content of the selected post
    GivenSteps.AndEditPostContent();
    postPage.AndScreenshot('E2-postcypress-6');

    // When the user updates the post by saving the changes
    whenSteps.whenUpdatePost();
    postPage.AndScreenshot('E2-postcypress-7');

    // Then the user verifies that the post has been edited successfully
    thenSteps.thenVerifyEditPost();
    postPage.AndScreenshot('E2-postcypress-8');
        
});

  it("E3_Create post without title", () => {
    postPage.AndScreenshot('E3-postcypress-1');
    GivenSteps.AndClicksNewPost();

    // When the user clicks on the post content area to focus on it
    GivenSteps.AndClicksPostContent();
    postPage.AndScreenshot('E3-postcypress-2');

    // When the user inputs content into the post content field
    GivenSteps.AndInputPostContent();
    postPage.AndScreenshot('E3-postcypress-3');

    // When the user clicks the "Publish" button to initiate the publishing flow
    GivenSteps.AndClickPublishPost();
    postPage.AndScreenshot('E3-postcypress-4');

    // When the user clicks "Continue" in the publishing flow
    GivenSteps.AndClickContinuePublish('E3-postcypress-5');

    // When the user clicks "Publish Right Now" to confirm the publication
    whenSteps.whenclickPostPublishRightNow('E3-postcypress-6');

    // Then, verify that the post has been published successfully
    thenSteps.thenVerifyPost('E3-postcypress-7');
  });

  it("E4_Create full post with image", () => {
    GivenSteps.AndClicksNewPost();

    // When the user clicks on the post title field to focus on it
    GivenSteps.AndClicksPostTitle();

    // When the user inputs a title into the post title field
    GivenSteps.AndInputPostTitle();

    // When the user clicks on the post content area to focus on it
    GivenSteps.AndClicksPostContent();

    // When the user inputs content into the post content field
    GivenSteps.AndInputPostContent();

    GivenSteps.AndClickImagePostButton();

    GivenSteps.AndClickFirstImage();

    //When the user clicks the "Publish" button to initiate the publishing flow
    GivenSteps.AndClickPublishPost();

    // When the user clicks "Continue" in the publishing flow
    GivenSteps.AndClickContinuePublish();

    // When the user clicks "Publish Right Now" to confirm the publication
    whenSteps.whenclickPostPublishRightNow();

    // Then, verify that the post has been published successfully
    thenSteps.thenVerifyPost();
  });

  it("E5_create empty post", () => {
    GivenSteps.AndClicksNewPost();
    thenSteps.thenShouldNoExitPublish();
  });
});
