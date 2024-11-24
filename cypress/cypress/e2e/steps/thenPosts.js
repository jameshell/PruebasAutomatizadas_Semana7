import postPage from "../pages/postPage";

class ThenPosts {

    thenVerifyPost(screenshotName){
        postPage.verifyPost();
    }

    thenShouldAlertExcerpt(){
        postPage.shouldAlertExcerpt();
    }

    thenVerifyEditPost(){
        postPage.ShouldUpdatePost();
    }

    thenShouldNoExitPublish(){
        postPage.shouldNoExist();
    }

    thenShouldValidationError(){
        postPage.shouldValidationError();
    }

    thenShouldNotificationAlert(){
        postPage.shouldNotificationAlert();
    }
}

export default new ThenPosts()