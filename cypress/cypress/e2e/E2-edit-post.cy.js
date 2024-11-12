import { faker } from "@faker-js/faker";
import loginPage from "./pages/loginPage";
import memberPage from "./pages/postPage";
import dashboardPage from "./pages/dashboardPage";
import GivenSteps from "./steps/givenSteps";
import WhenSteps from "./steps/whenSteps";
import whenSteps from "./steps/whenSteps";
import thenSteps from "./steps/thenSteps";



describe("edit - post", () => {

    beforeEach(() => {
      // Given the User navigates to the login page
      GivenSteps.givenNavigateToLoginPage();
      // and enters a valid username and password and click the login button
      GivenSteps.givenLogin();
      // and navigates to the Posts
      GivenSteps.givenNavigateToPostsPage();
    })
    
    it("E2- Edit Post ", () => {
      createPost();
      whenSteps.whenClickBg();
      whenSteps.whenClickListPost();
      whenSteps.whenClicksPostTitle();
      whenSteps.whenEditPostTitle();
      whenSteps.whenClicksPostContent();
      WhenSteps.whenEditPostContent();
      whenSteps.whenUpdatePost();
      thenSteps.thenVerifyEditPost();
      
  });

  

  });


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