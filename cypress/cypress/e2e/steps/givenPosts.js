import postPage from "../pages/postPage";
import DashboardPage from "../pages/dashboardPage";
import LoginPage from "../pages/loginPage";

class GivenPosts {

    givenNavigateToPostsPage(){
        DashboardPage.clickPostsLink();
    }

    givenLogin() {
        LoginPage.login();
    }

    givenNavigateToLoginPage(){
        LoginPage.navigateToLogin();
    }

    AndClicksNewPost(){
        postPage.clickNewPost();
    }

    // given the user clicks on the post title field to focus on it
    AndClicksPostTitle(){
        postPage.clickPostTitle();
    }

    // given the user inputs a title into the post title field
    AndInputPostTitle(Title){
        postPage.fillPostTitle(Title);
    }

    // given the user clicks on the post content area to focus on it
    AndClicksPostContent(){
        postPage.clickPostContent();
    }

    // given the user inputs content into the post content field
    AndInputPostContent(Description){
        postPage.fillPostContent(Description);
    }

    // given the user clicks the "Publish" button to initiate the publishing flow
    AndClickPublishPost(){
        postPage.clickPostPublish();
    }

    // given the user clicks "Continue" in the publishing flow
    AndClickContinuePublish(screenshotName){
        postPage.clickContinuePublish(screenshotName);
    }

    // given the user clicks the button to add an image to the post
    AndClickImagePostButton(){
        postPage.clickAddImagePostButton();
    }

    // given the user clicks on the first image in the image selection
    AndClickFirstImage(){
        postPage.addImageClick();
    }

    // given the user clicks on the background area to close the modal
    AndClickBg(){
        postPage.clickBGModal();
    }

    // given the user edits the title of the post
    AndEditPostTitle(){
        postPage.editPostTitle();
    }

    // given the user edits the content of the post
    AndEditPostContent(){
        postPage.editPostContent();
    }

    //given the user click list post
    AndClickListPost(){
        postPage.clickListPost();
    }

    AndClickSettingsPost(){
        postPage.ClickSettingsPost();
    }

    AndClickExcerptPost(){
        postPage.clickExcerpPost();
    }

    AndFillExcerptPost(Excerpt){
        postPage.fillExcerptPost(Excerpt);
    }

   AndClickPostEvents(){
        postPage.clickPostEvents();
    }

    AndScrollOther(){
        postPage.scrollOther();
    }
    AndClickOther(){
        postPage.clickOtherContains();
    }
    AndInputUrlOther(Url1){
        postPage.inputUrlOther(Url1);
    }

    AndInputDatePost(Date){
        postPage.inputDatePost(Date);
    }

    AndClickTimePost(){
        postPage.clickTimePost();
    }

    AndClickMetaDataBtn(){
        postPage.clickMetaDataBtn();
    }

    AndInputMetaDataTitle(Title,assert){
        postPage.inputTitleMetaData(Title,assert);
    }
    AndInputMetaDataDescription(Description,assert){
        postPage.inputDescriptionMetaData(Description,assert);
    }
   AndClickFacebookCardBtn(){
        postPage.clickFacebookCardBtn();
    }

    AndInputFacebookCardTitle(Title){
        postPage.inputTitleFacebookCard(Title);
    }

    AndInputFacebookCardDescription(Description){
        postPage.inputDescriptionFacebookCard(Description);
    }

    AndClickXCardBtn(){
        postPage.clickXCardBtn();
    }

    AndInputTitleXCard(Title){
        postPage.inputTitleXCard(Title);
    }

    AndInputDescriptionXCard(Description){
        postPage.inputDescriptionXCard(Description);
    }

    AndClickTitleXCard(){
        postPage.clickTitleXCard();
    }

    AndClickDescriptionXCard(){
        postPage.clickDescriptionXCard();
    }

}

export default new GivenPosts()
