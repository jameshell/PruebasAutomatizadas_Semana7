import GivenSteps from "./steps/givenSteps";
import pagesPage from "./pages/pagesPage";
import { faker } from "@faker-js/faker";
import WhenStepsPages from "./steps/whenStepsPages";
import ThenStepsPages from "./steps/thenStepsPages";

describe("Pages - Create Page without img", () => {

    beforeEach(() => {
        GivenSteps.givenNavigateToLoginPage();
        GivenSteps.givenLogin();
        GivenSteps.giveNavigateToPagesPage();

        Cypress.Screenshot.defaults({
            disableTimersAndAnimations: false,
        });

        pagesPage.AndScreenshot('57-596','1');
    });

    it('57 - Should create a new draft', () => {
        const randomPageDescription = faker.lorem.sentence({min: 3, max: 5});
        const randomPageTitle = faker.lorem.sentence({min: 3, max: 5});

        WhenStepsPages.WhenNewPageBtn_Click();
        pagesPage.AndScreenshot('57-596','2');

        WhenStepsPages.WhenFillPageHeader(randomPageTitle);
        pagesPage.AndScreenshot('57-596','3');

        WhenStepsPages.WhenFillPageDescription(randomPageDescription);
        pagesPage.AndScreenshot('57-596','4');

        cy.wait(2000);

        ThenStepsPages.thenIsDraftSaved();
    });
});
