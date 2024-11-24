import GivenPosts from "./steps/givenPosts";
import whenPosts from "./steps/whenPosts";
import thenPosts from "./steps/thenPosts";
import {faker} from "@faker-js/faker";

describe("72_publish_post_with_description_and_title_in_metadata", () => {
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

    it("72_publish_post_with_description_and_title_in_metadata", () => {
        // Given the user clicks on "New Post" to start creating a new post
        GivenPosts.AndClicksNewPost();
        // Given the user clicks on the post title field to focus on it
        GivenPosts.AndClicksPostTitle();

        let Title1 = postData[0].paragraphs;
        // Given the user inputs a title into the post title field
        GivenPosts.AndInputPostTitle(Title1);

        GivenPosts.AndClickSettingsPost();

        GivenPosts.AndClickMetaDataBtn();

        let TitleMetaData =postData[0].paragraphs
        if (TitleMetaData.length > 62) {
            TitleMetaData = TitleMetaData.substring(0, 60);}
        GivenPosts.AndInputMetaDataTitle(TitleMetaData,600);


        let descriptionMetaData =postData[0].paragraphs
        if (descriptionMetaData.length > 146) {
            descriptionMetaData = descriptionMetaData.substring(0, 145);}
        GivenPosts.AndInputMetaDataDescription(descriptionMetaData,60145);
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