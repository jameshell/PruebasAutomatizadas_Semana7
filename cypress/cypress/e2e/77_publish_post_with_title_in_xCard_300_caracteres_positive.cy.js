import GivenPosts from "./steps/givenPosts";
import whenPosts from "./steps/whenPosts";
import thenPosts from "./steps/thenPosts";


describe("77_publish_post_with_title_in_xCard_300_caracteres_positive", () => {
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

    it("77_publish_post_with_title_in_xCard_300_caracteres_positive", () => {
        // Given the user clicks on "New Post" to start creating a new post
        GivenPosts.AndClicksNewPost();
        // Given the user clicks on the post title field to focus on it
        GivenPosts.AndClicksPostTitle();

        let Title1 = postData[0].paragraphs;
        // Given the user inputs a title into the post title field
        GivenPosts.AndInputPostTitle(Title1);

        GivenPosts.AndClickSettingsPost();

        GivenPosts.AndClickXCardBtn();

        let TitleXCard =postData[0].title;
        if (TitleXCard.length > 302) {
            TitleXCard = TitleXCard.substring(0, 300);}
        GivenPosts.AndInputTitleXCard(TitleXCard);

        GivenPosts.AndClickSettingsPost();

        // Given the user clicks the "Publish" button to initiate the publishing flow
        GivenPosts.AndClickPublishPost();

        // Given the user clicks "Continue" in the publishing flow
        GivenPosts.AndClickContinuePublish();

        // Given the user clicks "Publish Right Now" to confirm the publication
        whenPosts.whenclickPostPublishRightNow();
        // Then, verify that the post has been published successfully
        thenPosts.thenVerifyPost();
    });
})