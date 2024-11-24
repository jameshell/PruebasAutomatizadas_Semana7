import GivenSteps from "./steps/givenSteps";
import pagesPage from "./pages/pagesPage";
import { faker } from "@faker-js/faker";
import WhenStepsPages from "./steps/whenStepsPages";
import ThenStepsPages from "./steps/thenStepsPages";


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
        faker.seed(41);
        const randomPageDescription = faker.lorem.words(200).substring(0, 1000);

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
