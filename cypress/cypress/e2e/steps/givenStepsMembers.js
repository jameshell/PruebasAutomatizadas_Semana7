import MemberPage from "../pages/memberPage";
import LoginPage from "../pages/loginPage";
import DashboardPage from "../pages/dashboardPage";

class GivenStepsMembers {

    givenLogin() {
        LoginPage.login();
    }

    givenNavigateToLoginPage(){
        LoginPage.navigateToLogin();
    }
    
    givenClicksNewMember(){
        MemberPage.clickNewMember();
    }

    givenCreateNewMember() {
        MemberPage.clickNewMember()
        MemberPage.fillNameInput()
        MemberPage.fillEmailInput()
        MemberPage.fillNoteTextArea()
        MemberPage.clickSave();
        DashboardPage.clickMembersLink();
    }

    givenNavigateToMembersPage(){
        DashboardPage.clickMembersLink();
    }

    givenFillMemberForm(name, email, note){
        if (name!==''){
            MemberPage.fillNameInput(name);
        }
        if (email!==''){
            MemberPage.fillEmailInput(email);
            
        }
        if (note!==''){
            MemberPage.fillNoteTextArea(note);
        }
    }
}

export default new GivenStepsMembers();