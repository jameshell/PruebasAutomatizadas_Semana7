import GivenSteps from "./steps/givenSteps";
import pagesPage from "./pages/pagesPage";
import { faker } from "@faker-js/faker";
import WhenStepsPages from "./steps/whenStepsPages";
import ThenStepsPages from "./steps/thenStepsPages";


describe("Pages - Edit page title and description with empty spaces", () => {

    beforeEach(() => {
        GivenSteps.givenNavigateToLoginPage();
        GivenSteps.givenLogin();
        GivenSteps.giveNavigateToPagesPage();
        pagesPage.AndScreenshot('E17-596','1');
        pagesPage.mockPageWithDescription();
        cy.get('button.close').click()
    });

    it('E30 - Should edit a page', () => {
        WhenStepsPages.WhenClickUpdateBtn();
        pagesPage.AndScreenshot('E30-596','2');

        WhenStepsPages.WhenClearPageHeader();
        pagesPage.AndScreenshot('E30-596','3');

        WhenStepsPages.WhenClearPageDescription();
        pagesPage.AndScreenshot('E30-596','4');

        WhenStepsPages.WhenClickUpdateButton();
        pagesPage.AndScreenshot('E30-596','5');

        //Then
        // pagesPage.verifyContentExists(randomPageTitle);
        // pagesPage.verifyContentExists(randomPageDescription);
    });
});
