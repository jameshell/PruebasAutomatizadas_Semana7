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
    memberPage.screenShot('E11-596','1')
    // and enters a valid username and password and click the login button
    GivenSteps.givenLogin();
    memberPage.screenShot('E11-596','2')
    // and navigates to the Members
    GivenSteps.givenNavigateToMembersPage();
    memberPage.screenShot('E11-596','3')
    // and the user clicks on New Member
    GivenSteps.givenClicksNewMember();
    memberPage.screenShot('E11-596','4')
    // and fills the name , email and note input
    GivenSteps.givenFillMemberForm();
    memberPage.screenShot('E11-596','5')
    // When submits the form 
    WhenSteps.whenClickSaveMember()
    memberPage.screenShot('E11-596','6')
    // Then the user should see the member created
    ThenSteps.thenSeeCreatedMember()
    memberPage.screenShot('E11-596','7')

  });

  it("E12 - Create member with empty values", () => {
     // Given the User navigates to the login page
     GivenSteps.givenNavigateToLoginPage();
     memberPage.screenShot('E12-596','1')
     // and enters a valid username and password and click the login button
     GivenSteps.givenLogin();
     memberPage.screenShot('E12-596','2')
     // and navigates to the Members
     GivenSteps.givenNavigateToMembersPage();
     memberPage.screenShot('E12-596','3')
    //  and the user clicks on New Member
    GivenSteps.givenClicksNewMember();
    memberPage.screenShot('E12-596','4')
    // When submits the form without filling any values
    WhenSteps.whenClickSaveMember()
    memberPage.screenShot('E12-596','5')
    // Then the user should see 'The email is required'
    ThenSteps.thenSeeEmailRequiredMemberForm()
    memberPage.screenShot('E12-596','6')
  });

  it("E15 - Create member with invalid values", () => {
     // Given the User navigates to the login page
     GivenSteps.givenNavigateToLoginPage();
     memberPage.screenShot('E15-596','1')
     // and enters a valid username and password and click the login button
     GivenSteps.givenLogin();
     memberPage.screenShot('E15-596','2')
     // and navigates to the Members
     GivenSteps.givenNavigateToMembersPage();
     memberPage.screenShot('E15-596','3')
    // When the user clicks on New Member
    GivenSteps.givenClicksNewMember();
    memberPage.screenShot('E15-596','4')
    // and fills the name, email and note input with nvalid values
    GivenSteps.givenFillMemberFormInvalid();
    memberPage.screenShot('E15-596','5')
    // and submits the form 
    WhenSteps.whenClickSaveMember()
    memberPage.screenShot('E15-596','6')
    // Then the user should see 'The email is required' and 'Note is too long.'
    ThenSteps.thenSeeInvalidEmailNote()
    memberPage.screenShot('E15-596','7')
  });
});
