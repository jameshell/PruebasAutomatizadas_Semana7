import GivenPosts from "./steps/givenPosts";
import {faker} from "@faker-js/faker";
import whenPosts from "./steps/whenPosts";
import thenPosts from "./steps/thenPosts";


const https = require("https");

var jsonData = null;

function generatePosts(recordCount = 10) {
    const API_KEY = Cypress.config("API_KEY");
    return new Promise((resolve, reject) => {

        const mockarooSchema = [
            { name: "paragraphs_150", type: "Paragraphs", min:"3", max: "3"},
            { name: "url", type: "URL" },
            { name: "title1", type: "Sentences", min:"1", max: "1"},
            { name: "description", type: "Sentences", min:"1", max: "1"}
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



describe("87_create_post_empty_with_tag", () => {
    let data = [];
    before(() => {
        cy.wrap(generatePosts(), { timeout: 10000 }).then((response) => {
            jsonData = response;
            const value = Math.floor(Math.random() * 10);
            data = jsonData[value];
        })
    });

    beforeEach(() => {
        GivenPosts.givenNavigateToLoginPage();
        GivenPosts.givenLogin();
        GivenPosts.givenNavigateToPostsPage();

        Cypress.Screenshot.defaults({
            disableTimersAndAnimations: false,
        })
    })

    it("87_create_post_empty_with_tag", () => {
        // Given the user clicks on "New Post" to start creating a new post
        GivenPosts.AndClicksNewPost();
        GivenPosts.AndClickSettingsPost();
        GivenPosts.AndInputTag(data["description"]);
        GivenPosts.AndClickSettingsPost();
        thenPosts.thenShouldNoExitPublish();
    });
})
