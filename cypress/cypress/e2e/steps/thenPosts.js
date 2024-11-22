import postPage from "../pages/postPage";

class ThenPosts {

    thenVerifyPost(screenshotName){
        postPage.verifyPost();
    }

    thenVerifyEditPost(){
        postPage.ShouldUpdatePost();
    }

    thenShouldNoExitPublish(){
        postPage.shouldNoExist();
    }
}

export default new ThenPosts()