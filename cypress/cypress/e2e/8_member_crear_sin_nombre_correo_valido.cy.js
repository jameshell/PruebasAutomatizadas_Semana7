import givenStepsMembers from "./steps/givenStepsMembers"; // Assuming this is correct
const https = require("https");

var jsonData = null;

function generatePosts(recordCount = 10) {
    const API_KEY = Cypress.config("API_KEY"); 
    return new Promise((resolve, reject) => {

        const mockarooSchema = [
            { name: "id", type: "Row Number" },
            { name: "first_name", type: "First Name" },
            { name: "last_name", type: "Last Name" },
            { name: "email", type: "Email Address" },
            { name: "age", type: "Number", min: 18, max: 65 }
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
        cy.wrap(generatePosts()).then((response) => {
            jsonData = response;
        })
    });

    it("8 - Should create a new member without a name and a valid email", () => {

    });
});
