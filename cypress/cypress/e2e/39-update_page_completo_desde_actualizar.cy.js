import GivenSteps from "./steps/givenSteps";
import pagesPage from "./pages/pagesPage";
import WhenStepsPages from "./steps/whenStepsPages";
import ThenStepsPages from "./steps/thenStepsPages";
const https = require("https");

function fetchMockarooData() {
    const API_KEY = "91dbcda0"; // Ensure this is your valid API key
    const mockarooSchema = [
        { name: "title", type: "Sentence" },
        { name: "description", type: "Paragraph" }
    ];

    const postData = JSON.stringify(mockarooSchema);
    const options = {
        hostname: "api.mockaroo.com",
        path: `/api/generate.json?key=${API_KEY}&count=1`,
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Content-Length": postData.length
        }
    };

    return new Promise((resolve, reject) => {
        const req = https.request(options, (res) => {
            let data = "";
            res.on("data", (chunk) => {
                data += chunk;
            });
            res.on("end", () => {
                if (res.statusCode === 200) {
                    resolve(JSON.parse(data)[0]);
                } else {
                    reject(new Error(`Error: ${res.statusCode} ${res.statusMessage}`));
                }
            });
        });

        req.on("error", (error) => {
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
        pagesPage.AndScreenshot('39-596','1');
        pagesPage.mockPageWithDescription();
        cy.get('button.close').click();
    });

    it('39 - Should edit a page', () => {
        cy.wrap(fetchMockarooData()).then((mockData) => {
            const randomPageTitle = mockData.title;
            const randomPageDescription = mockData.description;

            WhenStepsPages.WhenClickUpdateBtn();
            pagesPage.AndScreenshot('39-596','2');

            WhenStepsPages.WhenClearPageHeader();
            WhenStepsPages.WhenFillPageHeader(randomPageTitle);
            pagesPage.AndScreenshot('39-596','3');

            WhenStepsPages.WhenClearPageDescription();
            WhenStepsPages.WhenFillPageDescription(randomPageDescription);
            pagesPage.AndScreenshot('39-596','4');

            WhenStepsPages.WhenClickUpdateButton();
            pagesPage.AndScreenshot('39-596','5');

            //Then
            ThenStepsPages.thenShouldUpdatePage();
        });
    });
});
