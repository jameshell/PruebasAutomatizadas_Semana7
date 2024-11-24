import LoginPage from "../pages/loginPage";
import MemberPage from "../pages/memberPage";
import tagPage from "../pages/tagPage";
import postPage from "../pages/postPage";
import pagesPage from "../pages/pagesPage";

class ThenSteps {
    thenSeeCreatedMember(){
        MemberPage.seeCreatedMember();
    }
    thenSeeUpdatedMember(){
        MemberPage.seeUpdatedMember();
    }
    thenSeeTagPage(){
        tagPage.seeTags();
    }
    thenConfirmDelte(){
        tagPage.deleteConfirmClick()
    }
    thenSaveTag(){
        tagPage.saveTag();
    }

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

export default new ThenSteps();
