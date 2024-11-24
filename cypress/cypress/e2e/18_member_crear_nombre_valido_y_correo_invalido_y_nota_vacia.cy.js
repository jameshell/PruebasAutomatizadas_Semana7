import GivenStepsMembers from "./steps/givenStepsMembers";
import WhenStepsMembers from "./steps/whenStepsMembers";
import ThenStepsMembers from "./steps/thenStepsMembers";

describe("Create Member - Valid Name, Invalid Email and Empty Note", () => {
    

    it('Should Create a Member', () => {
        cy.fixture('members.json').then(
            (mockData) => {
                // Given the user navigates to Login Page
                GivenStepsMembers.givenNavigateToLoginPage()
                // And Logs in
                GivenStepsMembers.givenLogin();

                // And Navigates to the members page
                GivenStepsMembers.givenNavigateToMembersPage()

                // And Clicks The New Member Button
                GivenStepsMembers.givenClicksNewMember()

                // And Fills the Form information
                let name = mockData[1].name
                let email = mockData[1].invalidEmail
                let note = ''
                GivenStepsMembers.givenFillMemberForm(name,email,note)

                // When the user clicks on Save
                WhenStepsMembers.whenClickSaveMember()

                // Then the user should see "Invalid Email."
                ThenStepsMembers.thenSeeInvalidEmail()
            }
        )
    });
});