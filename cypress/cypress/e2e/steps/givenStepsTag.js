import LoginPage from "../pages/loginPage";
import DashboardPage from "../pages/dashboardPage";

class GivenStepsTag {


givenNavigateToLoginPage(){
    LoginPage.navigateToLogin();
}

givenLogin() {
    LoginPage.login();
}

givenNavigateToTagPage(){
    DashboardPage.clickTagLink();
}

}

export default new GivenStepsTag();