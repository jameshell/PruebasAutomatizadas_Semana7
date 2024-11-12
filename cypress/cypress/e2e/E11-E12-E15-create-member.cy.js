import loginPage from "./pages/loginPage";
import memberPage from "./pages/memberPage";
import dashboardPage from "./pages/dashboardPage";
import GivenSteps from "./steps/givenSteps";
import ThenSteps from "./steps/thenSteps";
import WhenSteps from "./steps/whenSteps";

describe("Create Members", () => {

  beforeEach(() => {
    // Given the User navigates to the login page
    GivenSteps.givenNavigateToLoginPage();
    // and enters a valid username and password and click the login button
    GivenSteps.givenLogin();
    // and navigates to the Members
    GivenSteps.givenNavigateToMembersPage();
  });
  
  it("E11 - Create member with valid values", () => {
    // When the user clicks on New Member
    WhenSteps.whenClicksNewMember();
    // and fills the name input
    WhenSteps.whenFillNameMember();
    // and fills the email input
    WhenSteps.whenFillEmailMember();
    // and fills the note TextArea
    WhenSteps.whenFillNoteMember()
    // and submits the form 
    WhenSteps.whenClickSaveMember()
    // Then the user should see the member created
    ThenSteps.thenSeeCreatedMember()
  });

  it("E12 - Create member with empty values", () => {
    // When the user clicks on New Member
    WhenSteps.whenClicksNewMember();
    // and submits the form without filling any values
    WhenSteps.whenClickSaveMember()
    // Then the user should see 'The email is required'
    ThenSteps.thenSeeEmailRequiredMemberForm()
  });

  it("E15 - Create member with invalid values", () => {
    // When the user clicks on New Member
    WhenSteps.whenClicksNewMember();
    // and fills the name input with an invalid value
    WhenSteps.whenFillNameInvalidMemberForm();
    // and fills the email input with an invalid value
    WhenSteps.whenFillEmailInvalidMemberForm();
    // and fills the note TextArea with an invalid value
    WhenSteps.whenFillNoteInvalid()
    // and submits the form 
    WhenSteps.whenClickSaveMember()
    // Then the user should see 'The email is required' and 'Note is too long.'
    ThenSteps.thenSeeInvalidEmailNote()
  });
});
