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
        pagesPage.AndScreenshot('40-596','1');
        pagesPage.mockPageWithDescription();
        cy.get('button.close').click()
    });

    it('40 - Should edit a page', () => {
        faker.seed(40);
        const randomPageDescription = faker.lorem.paragraph();
        const randomPageTitle = faker.lorem.words(50).substring(0, 255);

        WhenStepsPages.WhenClickUpdateBtn();
        pagesPage.AndScreenshot('40-596','2');

        WhenStepsPages.WhenClearPageHeader();
        WhenStepsPages.WhenFillPageHeader(randomPageTitle);
        pagesPage.AndScreenshot('40-596','3');

        WhenStepsPages.WhenClearPageDescription();
        WhenStepsPages.WhenFillPageDescription(randomPageDescription);
        pagesPage.AndScreenshot('40-596','4');

        WhenStepsPages.WhenClickUpdateButton();
        pagesPage.AndScreenshot('40-596','5');

        //Then
        ThenStepsPages.thenShouldUpdatePage();
    });
});
