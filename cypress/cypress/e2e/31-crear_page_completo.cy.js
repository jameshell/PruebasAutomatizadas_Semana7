import GivenSteps from "./steps/givenSteps";
import pagesPage from "./pages/pagesPage";
import { faker } from "@faker-js/faker";
import WhenStepsPages from "./steps/whenStepsPages";
import ThenStepsPages from "./steps/thenStepsPages";

describe("Pages - Create a complete valid Page with apriori data", () => {

    beforeEach(() => {
        GivenSteps.givenNavigateToLoginPage();
        GivenSteps.givenLogin();
        GivenSteps.giveNavigateToPagesPage();

        Cypress.Screenshot.defaults({
            disableTimersAndAnimations: false,
        })

        pagesPage.AndScreenshot('31-596','1');
    });

    it('31 - Should create a new page successfully with apriori data', () => {
        cy.fixture('pages').then((data) => {
            const randomPageDescription = data[0].Description;
            const randomPageTitle = data[0].Title;

            WhenStepsPages.WhenNewPageBtn_Click();
            pagesPage.AndScreenshot('31-596','2');

            WhenStepsPages.WhenFillPageHeader(randomPageTitle);
            pagesPage.AndScreenshot('31-596','3');

            WhenStepsPages.WhenFillPageDescription(randomPageDescription);
            pagesPage.AndScreenshot('31-596','4');

            WhenStepsPages.WhenClickAddImgBtn();
            pagesPage.AndScreenshot('31-596','5');

            WhenStepsPages.WhenClickAddImageBtn_FirstPic()
            pagesPage.AndScreenshot('31-596','6');

            WhenStepsPages.WhenClickPublishButton();
            pagesPage.AndScreenshot('31-596','7');

            WhenStepsPages.WhenClickFinalReviewButton();

            WhenStepsPages.WhenClickConfirmPublishButton();

            ThenStepsPages.thenIsPublishFlowComplete();

            ThenStepsPages.thenIsModalHeaderCorrect(randomPageTitle);

            ThenStepsPages.thenIsModalDescriptionCorrect(randomPageDescription);
            pagesPage.AndScreenshot('31-596','8');
        });
    });
});
