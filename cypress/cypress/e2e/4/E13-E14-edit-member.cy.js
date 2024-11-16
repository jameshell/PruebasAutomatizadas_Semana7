import {faker} from "@faker-js/faker";
import loginPage from "./pages/loginPage";
import memberPage from "./pages/memberPage";
import dashboardPage from "./pages/dashboardPage";
import GivenSteps from "./steps/givenSteps";
import WhenSteps from "./steps/whenSteps";
import ThenSteps from "./steps/thenSteps";
import givenSteps from "./steps/givenSteps";

describe('Edit Member', () => {

    beforeEach(() => {
        
    })

    it("E13 - Edit Member with valid values", () => {
        // Given the User navigates to the login page
        GivenSteps.givenNavigateToLoginPage();
        memberPage.screenShot('E13-45','1')
        // and enters a valid username and password and click the login button
        GivenSteps.givenLogin();
       memberPage.screenShot('E13-45','2')
        // and navigates to the Members
        GivenSteps.givenNavigateToMembersPage();
        // and a member is already created
        GivenSteps.givenCreateNewMember()
        memberPage.screenShot('E13-45','3')
        // When the user clicks on the Name of the user
        givenSteps.givenClickMemberName();
        memberPage.screenShot('E13-45','4')
        // and updates the name
        GivenSteps.givenUpdateMemberForm()
        memberPage.screenShot('E13-45','5')
        // and clicks save
        WhenSteps.whenClickSaveMember()
        memberPage.screenShot('E13-45','6')
        // Then the user should see hte updated data
        ThenSteps.thenSeeUpdatedMember()
        memberPage.screenShot('E13-45','7')
        
    })
})
