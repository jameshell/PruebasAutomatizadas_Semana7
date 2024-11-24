import {faker} from "@faker-js/faker"; 
import GivenStepsMembers from "./steps/givenStepsMembers";
import WhenStepsMembers from "./steps/whenStepsMembers";
import ThenStepsMembers from "./steps/thenStepsMembers";

describe("Create Member - Invalid Name, Email and Note", () => {
    

    it('Should Create a Member', () => {
        
        // Given the user navigates to Login Page
        GivenStepsMembers.givenNavigateToLoginPage()
        // And Logs in
        GivenStepsMembers.givenLogin();
        
        // And Navigates to the members page
        GivenStepsMembers.givenNavigateToMembersPage()
        
        // And Clicks The New Member Button
        GivenStepsMembers.givenClicksNewMember()
        
        // And Fills the Form information
        let name = faker.string.alphanumeric(192)
        let email = faker.string.alphanumeric(12)
        let note = faker.string.alphanumeric(501)
        GivenStepsMembers.givenFillMemberForm(name,email,note)
        
        // When the user clicks on Save
        WhenStepsMembers.whenClickSaveMember()
        
        // Then the user should see the error "Name cannot be longer than 191 characters."
        ThenStepsMembers.thenSeeInvalidName()
        // And "Invalid Email"
        ThenStepsMembers.thenSeeInvalidEmail()
        // And "Note is too long"
        ThenStepsMembers.thenSeeInvalidEmail()
    });
});