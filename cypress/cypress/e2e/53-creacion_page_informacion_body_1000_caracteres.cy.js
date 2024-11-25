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

    it('53 - Should create a new page successfully with a random title and description', () => {
        const randomPageDescription = faker.lorem.words(1000);
        const randomPageTitle = faker.lorem.sentence({min: 3, max: 5});

        WhenStepsPages.WhenNewPageBtn_Click();

        WhenStepsPages.WhenFillPageHeader(randomPageTitle);

        WhenStepsPages.WhenFillPageDescription(randomPageDescription);

        WhenStepsPages.WhenClickPublishButton();

        WhenStepsPages.WhenClickFinalReviewButton();

        WhenStepsPages.WhenClickConfirmPublishButton();

        ThenStepsPages.thenIsPublishFlowComplete();

        ThenStepsPages.thenIsModalHeaderCorrect(randomPageTitle);

        ThenStepsPages.thenIsModalDescriptionCorrect(randomPageDescription);
    });
});
