import GivenSteps from "./steps/givenSteps";
import pagesPage from "./pages/pagesPage";
import { faker } from "@faker-js/faker";
import WhenStepsPages from "./steps/whenStepsPages";
import ThenStepsPages from "./steps/thenStepsPages";


describe("Pages - Edit page title and description", () => {

    beforeEach(() => {
        GivenSteps.givenNavigateToLoginPage();
        GivenSteps.givenLogin();
        GivenSteps.giveNavigateToPagesPage();
        pagesPage.AndScreenshot('E17-596','1');
        pagesPage.mockPageWithDescription();
        cy.get('button.close').click()
    });

    it('E17 - Should edit a page', () => {
        const randomPageDescription = faker.lorem.paragraph();
        const randomPageTitle = faker.lorem.sentence({min: 3, max: 5});

        WhenStepsPages.WhenClickUpdateBtn();
        pagesPage.AndScreenshot('E17-596','2');

        WhenStepsPages.WhenFillPageHeader(randomPageTitle);
        pagesPage.AndScreenshot('E17-596','3');

        WhenStepsPages.WhenFillPageDescription(randomPageDescription);
        pagesPage.AndScreenshot('E17-596','4');

        WhenStepsPages.WhenClickUpdateButton();
        pagesPage.AndScreenshot('E17-596','5');

        //Then
        // pagesPage.verifyContentExists(randomPageTitle);
        // pagesPage.verifyContentExists(randomPageDescription);
    });
});
