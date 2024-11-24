import MemberPage from "../pages/memberPage";
import LoginPage from "../pages/loginPage";
import DashboardPage from "../pages/dashboardPage";

class GivenStepsMembers {

    givenLogin() {
        LoginPage.login();
    }

    givenNavigateToLoginPage() {
        LoginPage.navigateToLogin();
    }

    givenClicksNewMember() {
        MemberPage.clickNewMember();
    }

    givenCreateNewMember(name, email, note) {
        MemberPage.clickNewMember()
        MemberPage.fillNameInput(name);
        MemberPage.fillEmailInput(email);
        MemberPage.fillNoteTextArea(note);
        MemberPage.clickSave();
        DashboardPage.clickMembersLink();
    }

    givenNavigateToMembersPage() {
        DashboardPage.clickMembersLink();
    }

    givenClickMemberName(name) {
        MemberPage.clickNameMember(name);
    }

    givenFillMemberForm(name, email, note) {
        if (name !== '') {
            MemberPage.fillNameInput(name);
        }
        if (email !== '') {
            MemberPage.fillEmailInput(email);

        }
        if (note !== '') {
            MemberPage.fillNoteTextArea(note);
        }
    }

    givenUpdateMemberForm(name, email, note) {
        MemberPage.updateName(name);
        MemberPage.updateEmail(email);
        MemberPage.updateNote(note);
    }
}

export default new GivenStepsMembers();