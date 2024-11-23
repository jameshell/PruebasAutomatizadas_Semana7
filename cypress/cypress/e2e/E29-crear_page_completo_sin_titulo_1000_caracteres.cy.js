import GivenSteps from "./steps/givenSteps";
import pagesPage from "./pages/pagesPage";
import WhenStepsPages from "./steps/whenStepsPages";
import ThenStepsPages from "./steps/thenStepsPages";


describe("Pages - Create Page With Only Description with 1000 characters", () => {

    beforeEach(() => {
        GivenSteps.givenNavigateToLoginPage();
        GivenSteps.givenLogin();
        GivenSteps.giveNavigateToPagesPage();

        Cypress.Screenshot.defaults({
            disableTimersAndAnimations: false,
        });

        pagesPage.AndScreenshot('E18-596','1');
    });

    it('E29 - Should create a new page successfully without title', () => {

        cy.fixture('pages').then((data) => {
            const randomPageDescription = data[0].Description_1000;

            WhenStepsPages.WhenNewPageBtn_Click();
            pagesPage.AndScreenshot('E29-596','2');

            WhenStepsPages.WhenFillPageDescription(randomPageDescription);
            pagesPage.AndScreenshot('E29-596','3');

            WhenStepsPages.WhenClickPublishButton();
            pagesPage.AndScreenshot('E29-596','4');

            WhenStepsPages.WhenClickFinalReviewButton();

            WhenStepsPages.WhenClickConfirmPublishButton();
            pagesPage.AndScreenshot('E29-596','5');

            ThenStepsPages.thenIsPublishFlowComplete();

            ThenStepsPages.thenIsModalHeaderCorrect_Untitled();
            pagesPage.AndScreenshot('E29-596','6');

            ThenStepsPages.thenIsModalDescriptionCorrect(randomPageDescription);
        });
    });
});
