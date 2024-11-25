import GivenSteps from "./steps/givenSteps";
import pagesPage from "./pages/pagesPage";
import WhenStepsPages from "./steps/whenStepsPages";
import ThenStepsPages from "./steps/thenStepsPages";


describe("Pages - Create Page With Only Description", () => {

    beforeEach(() => {
        GivenSteps.givenNavigateToLoginPage();
        GivenSteps.givenLogin();
        GivenSteps.giveNavigateToPagesPage();

        Cypress.Screenshot.defaults({
            disableTimersAndAnimations: false,
        });

        pagesPage.AndScreenshot('32-596','1');
    });

    it('32 - Should create a new page successfully without title', () => {

        cy.fixture('pages').then((data) => {
            const randomPageDescription = data[0].Description;

            WhenStepsPages.WhenNewPageBtn_Click();

            WhenStepsPages.WhenFillPageDescription(randomPageDescription);

            WhenStepsPages.WhenClickPublishButton();

            WhenStepsPages.WhenClickFinalReviewButton();

            WhenStepsPages.WhenClickConfirmPublishButton();

            ThenStepsPages.thenIsPublishFlowComplete();

            ThenStepsPages.thenIsModalHeaderCorrect_Untitled();

            ThenStepsPages.thenIsModalDescriptionCorrect(randomPageDescription);
        });
    });
});
