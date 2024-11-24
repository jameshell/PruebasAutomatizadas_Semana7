import GivenPosts from "./steps/givenPosts";
import whenPosts from "./steps/whenPosts";
import thenPosts from "./steps/thenPosts";


describe("80_publish_post_with_description_in_xCard_500_caracteres_negative", () => {
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

    it("80_publish_post_with_description_in_xCard_500_caracteres_negative", () => {
        // Given the user clicks on "New Post" to start creating a new post
        GivenPosts.AndClicksNewPost();
        // Given the user clicks on the post title field to focus on it
        GivenPosts.AndClicksPostTitle();

        let Title1 = postData[0].paragraphs;
        // Given the user inputs a title into the post title field
        GivenPosts.AndInputPostTitle(Title1);

        GivenPosts.AndClickSettingsPost();

        GivenPosts.AndClickXCardBtn();

        let descriptionXCard =postData[0].title;
        if (descriptionXCard.length > 502) {
            descriptionXCard = descriptionXCard.substring(0, 501);}
        GivenPosts.AndInputDescriptionXCard(descriptionXCard);
        GivenPosts.AndInputTitleXCard(" ")

        GivenPosts.AndClickSettingsPost();

        // Given the user clicks the "Publish" button to initiate the publishing flow
        whenPosts.whenPublishPost();

        thenPosts.thenShouldNotificationAlert();
    });
})