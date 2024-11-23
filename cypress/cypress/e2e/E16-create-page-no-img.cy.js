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

        pagesPage.AndScreenshot('E16-596','1');
    });

    it('E16 - Should create a new page successfully with a random title and description', () => {
        const randomPageDescription = faker.lorem.paragraph();
        const randomPageTitle = faker.lorem.sentence({min: 3, max: 5});

        WhenStepsPages.WhenNewPageBtn_Click();
        pagesPage.AndScreenshot('E16-596','2');

        WhenStepsPages.WhenFillPageHeader(randomPageTitle);
        pagesPage.AndScreenshot('E16-596','3');

        WhenStepsPages.WhenFillPageDescription(randomPageDescription);
        pagesPage.AndScreenshot('E16-596','4');

        WhenStepsPages.WhenClickPublishButton();
        pagesPage.AndScreenshot('E16-596','5');

        WhenStepsPages.WhenClickFinalReviewButton();

        WhenStepsPages.WhenClickConfirmPublishButton();

        ThenStepsPages.thenIsPublishFlowComplete();

        ThenStepsPages.thenIsModalHeaderCorrect(randomPageTitle);
        pagesPage.AndScreenshot('E16-596','6');

        ThenStepsPages.thenIsModalDescriptionCorrect(randomPageDescription)
    });
});
