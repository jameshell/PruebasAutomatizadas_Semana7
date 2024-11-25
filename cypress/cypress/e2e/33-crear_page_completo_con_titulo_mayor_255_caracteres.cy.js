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
    });

    it('33 - Should create a new page successfully with apriori data', () => {
        cy.fixture('pages').then((data) => {
            const randomPageDescription = data[0].Description_255;
            const randomPageTitle = data[0].Title;

            WhenStepsPages.WhenNewPageBtn_Click();

            WhenStepsPages.WhenFillPageHeader(randomPageTitle);

            WhenStepsPages.WhenFillPageDescription(randomPageDescription);

            WhenStepsPages.WhenClickAddImgBtn();

            WhenStepsPages.WhenClickAddImageBtn_FirstPic()

            WhenStepsPages.WhenClickPublishButton();

            WhenStepsPages.WhenClickFinalReviewButton();

            WhenStepsPages.WhenClickConfirmPublishButton();

            ThenStepsPages.thenIsPublishFlowComplete();

            ThenStepsPages.thenIsModalHeaderCorrect(randomPageTitle);

            ThenStepsPages.thenIsModalDescriptionCorrect(randomPageDescription);
        });
    });
});
