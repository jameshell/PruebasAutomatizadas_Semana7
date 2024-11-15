import LoginPage from "../pages/loginPage";
import MemberPage from "../pages/memberPage";
import tagPage from "../pages/tagPage";
import postPage from "../pages/postPage";
import pagesPage from "../pages/pagesPage";

class ThenSteps {
    thenSeeCreatedMember(){
        MemberPage.seeCreatedMember();
    }
    thenSeeEmailRequiredMemberForm(){
        MemberPage.seeEmailRequired();
    }
    thenSeeInvalidEmailNote(){
        MemberPage.seeInvalidEmailNote();
    }
    thenSeeUpdatedMember(){
        MemberPage.seeUpdatedMember();
    }
    thenSeeTagPage(){
        tagPage.seeTags();
    }

    thenVerifyPost(screenshotName){
        cy.screenshot(`screenshots/posts/${screenshotName}`,{capture: 'viewport', overwrite: true });
        postPage.verifyPost();
     }
     
     thenVerifyEditPost(){
        postPage.ShouldUpdatePost();
     }

     thenShouldNoExitPublish(){
        postPage.shouldNoExist();
     }

     // ------------------- Pages -------------------

    thenIsPublishFlowComplete() {
        pagesPage.isPublishFlowComplete();
    }

    thenIsModalHeaderCorrect(randomPageTitle) {
        pagesPage.isModalHeaderCorrect(randomPageTitle);
    }

    thenIsModalDescriptionCorrect(randomPageDescription) {
        pagesPage.isModalDescriptionCorrect(randomPageDescription);
    }

    thenPublishButton_ShouldNotExist(){
        pagesPage.publishButton_ShouldNotExist();
    }

    thenIsModalHeaderCorrect_Untitled(){
        pagesPage.isModalHeaderCorrect_Untitled();
    }
}

export default new ThenSteps();
