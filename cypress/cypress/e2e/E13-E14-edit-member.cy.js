import {faker} from "@faker-js/faker";
import loginPage from "./pages/loginPage";
import memberPage from "./pages/memberPage";
import dashboardPage from "./pages/dashboardPage";
import GivenSteps from "./steps/givenSteps";
import WhenSteps from "./steps/whenSteps";
import ThenSteps from "./steps/thenSteps";
import givenSteps from "./steps/givenSteps";

describe('Edit Member', () => {

    /*beforeEach(() => {
        
    })

    it("E13 - Edit Member with valid values", () => {
        // Given the User navigates to the login page
        GivenSteps.givenNavigateToLoginPage();
        memberPage.screenShot('E13-596','1')
        // and enters a valid username and password and click the login button
        GivenSteps.givenLogin();
       memberPage.screenShot('E13-596','2')
        // and navigates to the Members
        GivenSteps.givenNavigateToMembersPage();
        // and a member is already created
        GivenSteps.givenCreateNewMember()
        memberPage.screenShot('E13-596','3')
        // When the user clicks on the Name of the user
        givenSteps.givenClickMemberName();
        memberPage.screenShot('E13-596','4')
        // and updates the name
        GivenSteps.givenUpdateMemberForm()
        memberPage.screenShot('E13-596','5')
        // and clicks save
        WhenSteps.whenClickSaveMember()
        memberPage.screenShot('E13-596','6')
        // Then the user should see hte updated data
        ThenSteps.thenSeeUpdatedMember()
        memberPage.screenShot('E13-596','7')
        
    })

    it("E14 - Edit Member with invalid values", () => {
        // Given the User navigates to the login page
        GivenSteps.givenNavigateToLoginPage();
        memberPage.screenShot('E14-596','1')
        // and enters a valid username and password and click the login button
        GivenSteps.givenLogin();
       memberPage.screenShot('E14-596','2')
        // and navigates to the Members
        GivenSteps.givenNavigateToMembersPage();
        // and a member is already created
        GivenSteps.givenCreateNewMember()
        memberPage.screenShot('E14-596','3')
        // When the user clicks on the Name of the user
        GivenSteps.givenClickMemberName();
        memberPage.screenShot('E14-596','4')
        // and updates the name, email and note values with invalid values
        GivenSteps.givenUpdateMemberFormInvalid()
        memberPage.screenShot('E14-596','6')
        // and clicks save
        WhenSteps.whenClickSaveMember()
        // Then the user should see hte updated data
        ThenSteps.thenSeeInvalidEmailNote()
        memberPage.screenShot('E14-596','7')
    });*/
})
