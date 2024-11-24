import GivenSteps from "./steps/givenSteps";
import pagesPage from "./pages/pagesPage";
import { faker } from "@faker-js/faker";
import WhenStepsPages from "./steps/whenStepsPages";
import ThenStepsPages from "./steps/thenStepsPages";
import https from "https";


function fetchMockarooData(recordCount = 1) {
    const API_KEY = Cypress.config("API_KEY");
    return new Promise((resolve, reject) => {
        const mockarooSchema = [
            { name: "title", type: "Sentences" },
            { name: "description", type: "Custom List", values: ["A".repeat(255)] }
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
                    resolve(JSON.parse(data));
                } else {
                    console.error("Error:", res.statusCode, res.statusMessage);
                    reject(new Error(`Error: ${res.statusCode} ${res.statusMessage}`));
                }
            });
        });

        req.on("error", (error) => {
            console.error("Failed to fetch mock data:", error.message);
            reject(error);
        });

        req.write(postData);
        req.end();
    });
}

describe("Pages - Edit page title and description with pseudo random data", () => {

    beforeEach(() => {
        GivenSteps.givenNavigateToLoginPage();
        GivenSteps.givenLogin();
        GivenSteps.giveNavigateToPagesPage();
        pagesPage.AndScreenshot('41-596','1');
        pagesPage.mockPageWithDescription();
        cy.get('button.close').click()
    });

    it('41 - Should edit a page with 1000 characters', () => {
        cy.wrap(fetchMockarooData()).then((response) => {
            const randomPageDescription = response.description;

            WhenStepsPages.WhenClickUpdateBtn();
            pagesPage.AndScreenshot('41-596','2');

            WhenStepsPages.WhenClearPageHeader();
            pagesPage.AndScreenshot('41-596','3');

            WhenStepsPages.WhenClearPageDescription();
            WhenStepsPages.WhenFillPageDescription(randomPageDescription);
            pagesPage.AndScreenshot('41-596','4');

            WhenStepsPages.WhenClickUpdateButton();
            pagesPage.AndScreenshot('41-596','5');

            //Then
            ThenStepsPages.thenShouldUpdatePage();
        });
    });
});
