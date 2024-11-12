import {faker} from "@faker-js/faker";
import loginPage from "./pages/loginPage";
import memberPage from "./pages/memberPage";
import dashboardPage from "./pages/dashboardPage";
import GivenSteps from "./steps/givenSteps";
import WhenSteps from "./steps/whenSteps";
import thenSteps from "./steps/thenSteps";
import ThenSteps from "./steps/thenSteps";

describe('Edit Member', () => {

    beforeEach(() => {
        // Given the User navigates to the login page
        GivenSteps.givenNavigateToLoginPage();
        // and enters a valid username and password and click the login button
        GivenSteps.givenLogin();
        // and navigates to the Members
        GivenSteps.givenNavigateToMembersPage();
        // and a member is already created
        GivenSteps.givenCreateNewMember()
        
    })

    it("E13 - Edit Member with valid values", () => {
        // When the user clicks on the Name of the user
        WhenSteps.whenClickMemberName();
        // and updates the name
        WhenSteps.whenUpdateMemberName()
        // and updates the email
        WhenSteps.whenUpdateMemberEmail()
        // and updates the note
        WhenSteps.whenUpdateMemberNote()
        // and clicks save
        WhenSteps.whenClickSaveMember()
        // Then the user should see hte updated data
        ThenSteps.thenSeeUpdatedMember()
        
    })

    it("E14 - Edit Member with invalid values", () => {
        WhenSteps.whenClickMemberName();
        // and updates the name with an invalid name
        WhenSteps.whenFillNameInvalidMemberForm()
        // and updates the email with an invalid email
        WhenSteps.whenFillEmailInvalidMemberForm()
        // and updates the note with an invalid note
        WhenSteps.whenFillNoteInvalid()
        // and clicks save
        WhenSteps.whenClickSaveMember()
        // Then the user should see hte updated data
        ThenSteps.thenSeeInvalidEmailNote()
    });
})
