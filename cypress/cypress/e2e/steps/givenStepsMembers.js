import MemberPage from "../pages/memberPage";

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
        MemberPage.fillNameInput();
        MemberPage.fillEmailInput();
        MemberPage.fillNoteTextArea();
    }
}