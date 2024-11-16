import LoginPage from "../pages/loginPage";
import MemberPage from "../pages/memberPage";
import tagPage from "../pages/tagPage";
import TagPage from "../pages/tagPage";
import postPage from "../pages/postPage";
import pagesPage from "../pages/pagesPage";

class WhenSteps {
    
    whenFillNameMember(){
        MemberPage.fillNameInput()
    }
    
    whenFillEmailMember(){
        MemberPage.fillEmailInput()
    }
    whenClickSaveMember(){
        MemberPage.clickSave()
    }

    whenFillNameInvalidMemberForm(){
        MemberPage.fillNameInputInvalid()
    }

    whenFillEmailInvalidMemberForm(){
        MemberPage.fillEmailInputInvalid()
    }
    whenFillNoteMember(){
        MemberPage.fillNoteTextArea()
    }
    whenFillNoteInvalid(){
        MemberPage.fillNoteTextAreaInvalid()
    }

    whenClickMemberName(){
        MemberPage.clickNameMember();
    }
    whenUpdateMemberName(){
        MemberPage.updateName()
    }
    whenUpdateMemberEmail(){
        MemberPage.updateEmail()
    }
    whenUpdateMemberNote(){
        MemberPage.updateNote()
    }
    whenClickTagNewTag(){
        tagPage.clickNewTag()
    }

    whenFillNameTag(){
        tagPage.fillNameTag()
    }

    whenFillDescriptionTag(){
        tagPage.fillDescriptionTag()
    }

    whenSaveTag(){
        tagPage.saveTag()
    }

    whenFillInvalidNameTag(){
        tagPage.fillInvalidNameTag()
    }

    whenFillInvalidDescription(){
        tagPage.fillInvalidDescriptionTag()
    }

    whenfillNameTagDelete(){
        tagPage.fillNameTagDelete()
    }
    
    whenSelectTagToDelete(){
        tagPage.tagToDelete()
    }
    whenDeleteTagButton(){
        tagPage.deleteTag()
    }
    
    whenConfirmDelte(){
        tagPage.deleteConfirmClick()
    }

    whenEditTagName(){
        tagPage.fillEditNameTag()
    }
    whenEditTagDescription(){
        tagPage.fillEditDescriptionTag()
    }

    whenSeeTagPage(){
        tagPage.seeTags();
    }
//---------------------------post-----------------------------------------------------

    // When the user clicks "Publish Right Now" to confirm the publication
    whenclickPostPublishRightNow(screenshotName){
       cy.screenshot(`screenshots/posts/${screenshotName}`,{capture: 'viewport', overwrite: true });
       postPage.clickPostPublishRightNow()
    }

    whenUpdatePost(){
        postPage.updatePost()
    }


    //---------------------------pages-----------------------------------------------------

    WhenNewPageBtn_Click() {
        pagesPage.newPageBtn_Click();
    }

    WhenFillPageHeader(randomPageTitle) {
        pagesPage.fillPageHeader(randomPageTitle);
    }

    WhenFillPageDescription(randomPageDescription){
        pagesPage.fillPageDescription(randomPageDescription)
    }

    WhenClickAddImgBtn(){
        pagesPage.addImgBtn_Click()
    }

    WhenClickAddImageBtn_FirstPic(){
        pagesPage.addImageBtn_FirstPic_Click()
    }

    WhenClickPublishButton(){
        pagesPage.publishButton_Click()
    }

    WhenClickFinalReviewButton(){
        pagesPage.finalReviewButton_Click()
    }

    WhenClickConfirmPublishButton(){
        pagesPage.confirmPublishButton_Click();
    }

    WhenClickUpdateBtn() {
        pagesPage.updateBtn_Click();
    }

    WhenClickUpdateButton() {
        pagesPage.updateButton_Click();
    }
}

export default new WhenSteps();
