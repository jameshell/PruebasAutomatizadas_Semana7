import LoginPage from "../pages/loginPage";
import MemberPage from "../pages/memberPage";
import DashboardPage from "../pages/dashboardPage";
import PagesPage from "../pages/pagesPage";
import postPage from "../pages/postPage";
class GivenSteps {
    givenNavigateToLoginPage(){
        LoginPage.navigateToLogin();
    }
    
    givenNavigateToMembersPage(){
        DashboardPage.clickMembersLink();
    }

    givenLogin() {
        LoginPage.login();
    }

    giveNavigateToPagesPage(){
        DashboardPage.clickPagesLink();
    }
    givenCreateNewMember(){
        MemberPage.clickNewMember()
        MemberPage.fillNameInput()
        MemberPage.fillEmailInput()
        MemberPage.fillNoteTextArea()
        MemberPage.clickSave();
        DashboardPage.clickMembersLink();
    }
    givenNavigateToTagPage(){
        DashboardPage.clickTagLink();
    }

    givenNavigateToPostsPage(){
        DashboardPage.clickPostsLink();
    }

    givenClicksNewMember(){
        MemberPage.clickNewMember();
        cy.wait(1000)
    }
    givenFillMemberForm(){
        MemberPage.fillNameInput();
        MemberPage.fillEmailInput();
        MemberPage.fillNoteTextArea();
    }

    givenFillMemberFormInvalid(){
        MemberPage.fillNameInputInvalid();
        MemberPage.fillEmailInputInvalid()
        MemberPage.fillNoteTextAreaInvalid()
    }

    givenUpdateMemberForm(){
        MemberPage.updateName();
        MemberPage.updateEmail();
        MemberPage.updateNote();
    }

    givenUpdateMemberFormInvalid(){
        MemberPage.fillNameInputInvalid();
        MemberPage.fillEmailInputInvalid()
        MemberPage.fillNoteTextAreaInvalid()
    }

    givenClickMemberName(){
        MemberPage.clickNameMember();
    }

    //----------------------------------------Post Given----------------------------------
    AndClicksNewPost(){
        postPage.clickNewPost()
    }

    // given the user clicks on the post title field to focus on it
    AndClicksPostTitle(){
        postPage.clickPostTitle()
    }

    // given the user inputs a title into the post title field
    AndInputPostTitle(){
        postPage.fillPostTitle()
    }

   // given the user clicks on the post content area to focus on it
    AndClicksPostContent(){
        postPage.clickPostContent()
    }
    
    // given the user inputs content into the post content field
    AndInputPostContent(){
        postPage.fillPostContent()
    }
    
    // given the user clicks the "Publish" button to initiate the publishing flow
    AndClickPublishPost(){
        postPage.clickPostPublish()
    }
    
    // given the user clicks "Continue" in the publishing flow
    AndClickContinuePublish(screenshotName){
        postPage.clickContinuePublish(screenshotName)
    }
    
    // given the user clicks the button to add an image to the post
    AndClickImagePostButton(){
        postPage.clickAddImagePostButton()
    }
    
    // given the user clicks on the first image in the image selection
    AndClickFirstImage(){
        postPage.addImageClick()
    }
    
    // given the user clicks on the background area to close the modal
    AndClickBg(){
        postPage.clickBGModal()
    }
    
    // given the user edits the title of the post
    AndEditPostTitle(){
        postPage.editPostTitle()
    }
    
    // given the user edits the content of the post
    AndEditPostContent(){
        postPage.editPostContent()
    }

    //given the user click list post
    AndClickListPost(){
        postPage.clickListPost()
    }

    AndUpateBtnPost(){
        postPage.updatePost()
    }
    //----------------------------------------------
 
}

export default new GivenSteps();
