import givenStepsMembers from "./steps/givenStepsMembers";
const https = require("https");

var jsonData = null;

function generatePosts(recordCount = 10) {
    const API_KEY = Cypress.config("API_KEY"); 
    return new Promise((resolve, reject) => {

        const mockarooSchema = [
            { name: "first_name", type: "First Name" },
            { name: "email", type: "Email Address" },
            { name: "note", type: "Sentences", min: 50, max: 100 }
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

describe("Pages - Create member", () => {
    before(() => {
        // Get the mock data from the API
        cy.wrap(generatePosts()).then((response) => {
            const randomNumber = Math.floor(Math.random() * 10);
            jsonData = response[randomNumber];
        })
    });

    it("8 - Create a new member with Name < 100 Characters, Valid Email, Note<100", () => {
        givens
        givenStepsMembers
    });
});
