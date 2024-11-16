import loginPage from "./pages/loginPage";
import memberPage from "./pages/memberPage";
import dashboardPage from "./pages/dashboardPage";
import GivenSteps from "./steps/givenSteps";
import ThenSteps from "./steps/thenSteps";
import WhenSteps from "./steps/whenSteps";

describe("Create Members", () => {
  
  it("E11 - Create member with valid values", () => {
    // Given the User navigates to the login page
    GivenSteps.givenNavigateToLoginPage();
    memberPage.screenShot('E11-45','1')
    // and enters a valid username and password and click the login button
    GivenSteps.givenLogin();
    memberPage.screenShot('E11-45','2')
    // and navigates to the Members
    GivenSteps.givenNavigateToMembersPage();
    memberPage.screenShot('E11-45','3')
    // and the user clicks on New Member
    GivenSteps.givenClicksNewMember();
    memberPage.screenShot('E11-45','4')
    // and fills the name , email and note input
    GivenSteps.givenFillMemberForm();
    memberPage.screenShot('E11-45','5')
    // When submits the form 
    WhenSteps.whenClickSaveMember()
    memberPage.screenShot('E11-45','6')
    // Then the user should see the member created
    ThenSteps.thenSeeCreatedMember()
    memberPage.screenShot('E11-45','7')

  });
});