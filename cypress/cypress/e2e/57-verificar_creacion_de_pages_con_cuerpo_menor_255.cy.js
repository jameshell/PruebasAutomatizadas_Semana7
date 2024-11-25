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
    });

    it('57 - Should create a new draft', () => {
        const randomPageDescription = faker.lorem.sentence({min: 3, max: 5});
        const randomPageTitle = faker.lorem.sentence({min: 3, max: 5});

        WhenStepsPages.WhenNewPageBtn_Click();

        WhenStepsPages.WhenFillPageHeader(randomPageTitle);

        WhenStepsPages.WhenFillPageDescription(randomPageDescription);

        cy.wait(2000);

        ThenStepsPages.thenIsDraftSaved();
    });
});
