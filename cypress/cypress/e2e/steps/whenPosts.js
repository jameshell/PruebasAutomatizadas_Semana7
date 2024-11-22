import postPage from "../pages/postPage";

class WhenPosts {
// When the user clicks "Publish Right Now" to confirm the publication
    whenclickPostPublishRightNow(){
        postPage.clickPostPublishRightNow()
    }

    whenUpdatePost() {
        postPage.updatePost()
    }

    WhenClicksNewPost() {
        postPage.clickNewPost()
    }
}

export default new WhenPosts();