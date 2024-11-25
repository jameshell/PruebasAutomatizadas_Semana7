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
            { name: "url", type: "Words" },
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


describe("Pages - Edit page URL", () => {

    beforeEach(() => {
        GivenSteps.givenNavigateToLoginPage();
        GivenSteps.givenLogin();
        GivenSteps.giveNavigateToPagesPage();
        pagesPage.mockPageWithDescription();
        cy.get('button.close').click()
    });

    it('42 - Should edit a page', () => {
        cy.wrap(fetchMockarooData()).then((response) => {
            cy.wait(1000);
            WhenStepsPages.WhenClickUpdateBtn();

            WhenStepsPages.WhenClickPageSettings();

            WhenStepsPages.WhenTypePageURL(response.url);

            WhenStepsPages.WhenClickPageSettings();

            //Then
            cy.wait(1000);
            ThenStepsPages.thenIsDraftSaved();
        });
    });
});
