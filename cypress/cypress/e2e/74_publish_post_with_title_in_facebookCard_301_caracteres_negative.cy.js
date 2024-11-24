import GivenPosts from "./steps/givenPosts";
import whenPosts from "./steps/whenPosts";
import thenPosts from "./steps/thenPosts";



describe("74_publish_post_with_title_in_facebookCard_301_caracteres_negative", () => {
    let postData = [];
    before(() => {
        cy.fixture('mockData.json').then((data) => {
            postData = data;
        });
    });
    beforeEach(() => {
        GivenPosts.givenNavigateToLoginPage();
        GivenPosts.givenLogin();
        GivenPosts.givenNavigateToPostsPage();
    })

    it("74_publish_post_with_title_in_facebookCard_301_caracteres_negative", () => {
        // Given the user clicks on "New Post" to start creating a new post
        GivenPosts.AndClicksNewPost();
        // Given the user clicks on the post title field to focus on it
        GivenPosts.AndClicksPostTitle();

        let Title1 = postData[0].paragraphs;
        // Given the user inputs a title into the post title field
        GivenPosts.AndInputPostTitle(Title1);

        GivenPosts.AndClickSettingsPost();

        GivenPosts.AndClickFacebookCardBtn();

        let TitleFBcard =postData[0].title;
        if (TitleFBcard.length > 302) {
            TitleFBcard = TitleFBcard.substring(0, 301);}
        GivenPosts.AndInputFacebookCardTitle(TitleFBcard);
        GivenPosts.AndInputFacebookCardDescription(" ")

        GivenPosts.AndClickSettingsPost();

        // Given the user clicks the "Publish" button to initiate the publishing flow
        GivenPosts.AndClickPublishPost();

        // Given the user clicks "Continue" in the publishing flow
        GivenPosts.AndClickContinuePublish();

        // Given the user clicks "Publish Right Now" to confirm the publication
        whenPosts.whenclickPostPublishRightNow();
        // Then, verify that the post has been published successfully
        thenPosts.thenShouldValidationError();
    });
})