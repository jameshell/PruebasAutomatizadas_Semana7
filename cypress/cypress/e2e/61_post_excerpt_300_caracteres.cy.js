import GivenPosts from "./steps/givenPosts";
import {faker} from "@faker-js/faker";
import whenPosts from "./steps/whenPosts";
import thenPosts from "./steps/thenPosts";


function longDescription(longDesc = 500, seed=null){
    if(seed !== null){
        faker.seed(seed);
    }
    let description = '';
    while(description.length < longDesc){
        description += '' + faker.lorem.paragraph();
    }
    description = description.trim();
    return description.substring(0, longDesc);;
}

describe("Create Post and edit post", () => {
    beforeEach(() => {
        GivenPosts.givenNavigateToLoginPage();
        GivenPosts.givenLogin();
        GivenPosts.givenNavigateToPostsPage();

        Cypress.Screenshot.defaults({
            disableTimersAndAnimations: false,
        })
    })

    it("61_post_excerpt_300_caracteres", () => {
        // Given the user clicks on "New Post" to start creating a new post
        GivenPosts.AndClicksNewPost();
        // Given the user clicks on the post title field to focus on it
        GivenPosts.AndClicksPostTitle();

        let Title1=longDescription(150,44);
        // Given the user inputs a title into the post title field
        GivenPosts.AndInputPostTitle(Title1);

        GivenPosts.AndClickSettingsPost();

        GivenPosts.AndClickExcerptPost();
        const Excerpt=longDescription(300,44);
        GivenPosts.AndFillExcerptPost(Excerpt);

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
