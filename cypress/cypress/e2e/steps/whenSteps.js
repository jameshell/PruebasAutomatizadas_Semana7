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
    whenclickPostPublishRightNow(){;
       postPage.clickPostPublishRightNow()
    }

    whenUpdatePost(){
        postPage.updatePost()
    }

    WhenClicksNewPost(){
        postPage.clickNewPost()
    }
}

export default new WhenSteps();
