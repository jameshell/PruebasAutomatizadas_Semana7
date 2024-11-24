import GivenStepsMembers from "./steps/givenStepsMembers";
import WhenStepsMembers from "./steps/whenStepsMembers";
import ThenStepsMembers from "./steps/thenStepsMembers";

describe("Create Member - Invalid Name and Note and Valid Email", () => {
    

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
                let name = mockData[0].invalidName
                let email = mockData[0].email
                let note = mockData[0].invalidNote
                GivenStepsMembers.givenFillMemberForm(name,email,note)

                // When the user clicks on Save
                WhenStepsMembers.whenClickSaveMember()
                
                // Then the user should see the "Note is too long."
                ThenStepsMembers.thenSeeInvalidNote()
                // And "Name cannot be longer than 191 characters."
                ThenStepsMembers.thenSeeInvalidName()
            }
        )
    });
});