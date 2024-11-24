import GivenPosts from "./steps/givenPosts";
import whenPosts from "./steps/whenPosts";
import thenPosts from "./steps/thenPosts";


describe("71_publish_post_with _title_metadata_61_caracteres", () => {
    beforeEach(() => {
        GivenPosts.givenNavigateToLoginPage();
        GivenPosts.givenLogin();
        GivenPosts.givenNavigateToPostsPage();
    })

    it("71_publish_post_with _title_metadata_61_caracteres", () => {
        cy.fixture('mockData.json').then(
            (mockData) => {
                // Given the user clicks on "New Post" to start creating a new post
                GivenPosts.AndClicksNewPost();
                // Given the user clicks on the post title field to focus on it
                GivenPosts.AndClicksPostTitle();

                // Given the user inputs a title into the post title field
                let Title1 =mockData[0].paragraphs
                GivenPosts.AndInputPostTitle(Title1);

                GivenPosts.AndClickSettingsPost();

                GivenPosts.AndClickMetaDataBtn();

                let TitleMetaData =mockData[0].paragraphs
                if (TitleMetaData.length > 62) {
                    TitleMetaData = TitleMetaData.substring(0, 61);}

                GivenPosts.AndInputMetaDataTitle(TitleMetaData,610);

                GivenPosts.AndClickSettingsPost();

                // Given the user clicks the "Publish" button to initiate the publishing flow
                GivenPosts.AndClickPublishPost();

                // Given the user clicks "Continue" in the publishing flow
                GivenPosts.AndClickContinuePublish();

                // Given the user clicks "Publish Right Now" to confirm the publication
                whenPosts.whenclickPostPublishRightNow()
                // Then, verify that the post has been published successfully
                thenPosts.thenVerifyPost()
            }
        )
    });
})