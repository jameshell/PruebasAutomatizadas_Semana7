import GivenPosts from "./steps/givenPosts";
import whenPosts from "./steps/whenPosts";
import thenPosts from "./steps/thenPosts";

let postData = [];
before(() => {
    cy.fixture('mockData.json').then((data) => {
        postData = data;
    });
});


describe("78_publish_post_with_title_in_xCard_301_caracteres_negative", () => {
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

    it("78_publish_post_with_title_in_xCard_301_caracteres_negative", () => {
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
            TitleXCard = TitleXCard.substring(0, 301);}
        GivenPosts.AndInputTitleXCard(TitleXCard);

        GivenPosts.AndClickDescriptionXCard();

        GivenPosts.AndClickSettingsPost();

        whenPosts.whenPublishPost();

        thenPosts.thenShouldNotificationAlert();
    });
})