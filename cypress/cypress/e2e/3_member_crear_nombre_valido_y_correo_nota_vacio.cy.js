import {faker} from "@faker-js/faker"; 
import GivenStepsMembers from "./steps/givenStepsMembers";
import WhenStepsMembers from "./steps/whenStepsMembers";
import ThenStepsMembers from "./steps/thenStepsMembers";

describe("Create Member - Valid Name and Empty Email and Note", () => {
    

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
        let name = faker.internet.displayName()
        let email = ''
        let note = ''
        GivenStepsMembers.givenFillMemberForm(name,email,note)
        
        // When the user clicks on Save
        WhenStepsMembers.whenClickSaveMember()
        
        //Then the user should see the error "Please enter an email"
        ThenStepsMembers.thenSeeEmailRequiredMemberForm()
        
    });
});