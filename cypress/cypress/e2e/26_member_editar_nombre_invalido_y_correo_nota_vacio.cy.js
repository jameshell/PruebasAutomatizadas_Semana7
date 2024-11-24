import {faker} from "@faker-js/faker"; 
import GivenStepsMembers from "./steps/givenStepsMembers";
import WhenStepsMembers from "./steps/whenStepsMembers";
import ThenStepsMembers from "./steps/thenStepsMembers";
import https from "https";
let jsonData1 = null;
let jsonData2 = null;

function generatePosts(recordCount = 10) {
    const API_KEY = Cypress.config("API_KEY");
    return new Promise((resolve, reject) => {

        const mockarooSchema = [
            {name: "name", type: "First Name"},
            {name: "email", type: "Email Address"},
            {name: "note", type: "Words", max: 10},
            {name: "invalidName", type: "Words", min: 90, max: 100},
            {name: "invalidEmail", type: "First Name"},
            {name: "invalidNote", type: "Words", min: 190, max: 200},
        ];

        const postData = JSON.stringify(mockarooSchema);
        const options = {
            hostname: "api.mockaroo.com",
            path: `/api/generate.json?key=${API_KEY}&count=${recordCount}`,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Content-Length": postData.length
            }
        };
        const req = https.request(options, (res) => {
            let data = "";
            res.on("data", (chunk) => {
                data += chunk;
            });
            res.on("end", () => {
                if (res.statusCode === 200) {
                    var mock = JSON.parse(data);
                    resolve(mock);
                } else {
                    console.error("Error:", res.statusCode, res.statusMessage);
                }
            });
        })
        req.on("error", (error) => {
            console.error("Failed to generate mock data:", error.message);
            reject(error)
        });
        req.write(postData);
        req.end()
    });
}
describe("Edit Member - Invalid Name and Empty Email and Note", () => {
    before(() => {
        cy.wrap(generatePosts()).then((response) => {
            const randomNumber = Math.floor(Math.random() * 10);
            let randomNumber2;
            do {
                randomNumber2 = Math.floor(Math.random() * 10);
            } while (randomNumber2 === randomNumber);

            // Create User
            jsonData1 = response[randomNumber];
            // Updated User
            jsonData2 = response[randomNumber2];

        })

    })

    it('Should Edit a Member', () => {

        // Given the user navigates to Login Page
        GivenStepsMembers.givenNavigateToLoginPage()
        // And Logs in
        GivenStepsMembers.givenLogin();

        // And Navigates to the members page
        GivenStepsMembers.givenNavigateToMembersPage()

        // And Creates a Member
        GivenStepsMembers.givenCreateNewMember(jsonData1.name, jsonData1.email, jsonData1.note)

        // And Clicks on the Member Name
        GivenStepsMembers.givenClickMemberName(jsonData1.name)
        
        // And Fills the Form information
        let name = jsonData2.invalidName
        let email = ''
        let note = ''
        GivenStepsMembers.givenUpdateMemberForm(name,email,note)
        
        // When the user clicks on Save
        WhenStepsMembers.whenClickSaveMember()
        
        // Then the user should see the error "Name cannot be longer than 191 characters."
        ThenStepsMembers.thenSeeInvalidName()
        // And "Please enter an email"
        ThenStepsMembers.thenSeeEmailRequiredMemberForm()
    });
});