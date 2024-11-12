import { faker } from "@faker-js/faker";
import loginPage from "./pages/loginPage";
import memberPage from "./pages/postPage";
import dashboardPage from "./pages/dashboardPage";
import GivenSteps from "./steps/givenSteps";
import WhenSteps from "./steps/whenSteps";
import whenSteps from "./steps/whenSteps";
import thenSteps from "./steps/thenSteps";

export function createPost() {
  // When the user clicks on "New Post" to start creating a new post
  WhenSteps.whenClicksNewPost();

  // When the user clicks on the post content area to focus on it
  WhenSteps.whenClicksPostContent();
  // When the user clicks on the post title field to focus on it
  whenSteps.whenClicksPostTitle();

  // When the user inputs a title into the post title field
  WhenSteps.whenInputPostTitle();
  // When the user inputs content into the post content field
  whenSteps.whenInputPostContent();

  // When the user clicks the "Publish" button to initiate the publishing flow
  whenSteps.whenClickPublishPost();

  // When the user clicks "Continue" in the publishing flow
  WhenSteps.whenClickContinuePublish();

  // When the user clicks "Publish Right Now" to confirm the publication
  whenSteps.whenclickPostPublishRightNow();

  // Then, verify that the post has been published successfully
  thenSteps.thenVerifyPost();
}

describe("Create Post", () => {
  beforeEach(() => {
    GivenSteps.givenNavigateToLoginPage();
    GivenSteps.givenLogin();
    GivenSteps.givenNavigateToPostsPage();
  });

  it("E1 - Create a new post", () => {
    createPost();
  });

  it("E3 - Crear Post sin titulo pero con descripcion", () => {
    WhenSteps.whenClicksNewPost();

    // When the user clicks on the post content area to focus on it
    WhenSteps.whenClicksPostContent();

    // When the user inputs content into the post content field
    whenSteps.whenInputPostContent();

    // When the user clicks the "Publish" button to initiate the publishing flow
    whenSteps.whenClickPublishPost();

    // When the user clicks "Continue" in the publishing flow
    WhenSteps.whenClickContinuePublish();

    // When the user clicks "Publish Right Now" to confirm the publication
    whenSteps.whenclickPostPublishRightNow();

    // Then, verify that the post has been published successfully
    thenSteps.thenVerifyPost();
  });

  it("E4 - Crear Post con imagen", () => {
    WhenSteps.whenClicksNewPost();

    // When the user clicks on the post title field to focus on it
    whenSteps.whenClicksPostTitle();

    // When the user inputs a title into the post title field
    WhenSteps.whenInputPostTitle();

    // When the user clicks on the post content area to focus on it
    WhenSteps.whenClicksPostContent();

    // When the user inputs content into the post content field
    whenSteps.whenInputPostContent();

    whenSteps.whenClickImagePostButton();

    whenSteps.whenClickFirstImage();

    //When the user clicks the "Publish" button to initiate the publishing flow
    whenSteps.whenClickPublishPost();

    // When the user clicks "Continue" in the publishing flow
    WhenSteps.whenClickContinuePublish();

    // When the user clicks "Publish Right Now" to confirm the publication
    whenSteps.whenclickPostPublishRightNow();

    // Then, verify that the post has been published successfully
    thenSteps.thenVerifyPost();
  });

    it("E5 - Crear Post con datos vacios", () => {
      WhenSteps.whenClicksNewPost();
      thenSteps.thenShouldNoExitPublish();
    });
});
