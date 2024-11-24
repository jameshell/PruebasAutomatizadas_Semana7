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
        pagesPage.AndScreenshot('60-596','1');
        pagesPage.mockPageWithDescription();
        cy.get('button.close').click()
    });

    it('60 - Should edit a page with description of over 1000', () => {
        let randomPageDescription = "";
        while (randomPageDescription.length < 260) {
            randomPageDescription += faker.lorem.paragraph();
        }
        randomPageDescription = randomPageDescription.slice(0, 260);
        let randomPageTitle = "";
        while (randomPageTitle.length < 260) {
            randomPageTitle += faker.lorem.paragraph();
        }
        randomPageTitle = randomPageTitle.slice(0, 260);

        WhenStepsPages.WhenClickUpdateBtn();
        pagesPage.AndScreenshot('60-596','2');

        WhenStepsPages.WhenFillPageHeader(randomPageTitle);
        pagesPage.AndScreenshot('60-596','3');

        WhenStepsPages.WhenFillPageDescription(randomPageDescription);
        pagesPage.AndScreenshot('60-596','4');

        WhenStepsPages.WhenClickUpdateButton();
        pagesPage.AndScreenshot('60-596','5');


        //Then
        cy.wait(1000);
        ThenStepsPages.thenShouldNotAllowTitleLongerThan255();
    });
});
