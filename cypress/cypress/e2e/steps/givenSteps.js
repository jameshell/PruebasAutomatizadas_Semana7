import LoginPage from "../pages/loginPage";
import MemberPage from "../pages/memberPage";
import DashboardPage from "../pages/dashboardPage";
import PagesPage from "../pages/pagesPage";

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
}

export default new GivenSteps();
