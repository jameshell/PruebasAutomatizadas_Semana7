import GivenSteps from "./steps/givenSteps";
import pagesPage from "./pages/pagesPage";
import { faker } from "@faker-js/faker";
import WhenSteps from "./steps/whenSteps";
import ThenSteps from "./steps/thenSteps";


describe("Pages - Create Page With Only Description", () => {

    beforeEach(() => {
        // Given the User navigates to the login page
        GivenSteps.givenNavigateToLoginPage();
        // and enters a valid username and password and click the login button
        GivenSteps.givenLogin();
        // and navigates to the Pages
        GivenSteps.giveNavigateToPagesPage();

        Cypress.Screenshot.defaults({
            disableTimersAndAnimations: false,
        });

        pagesPage.AndScreenshot('E18-596','1');
    });

    it('E18 - Should create a new page successfully with a random description', () => {
        const randomPageDescription = faker.lorem.paragraph();

        // When
        // Clicks on new page
        // pagesPage.newPageBtn_Click();
        WhenSteps.WhenNewPageBtn_Click();
        pagesPage.AndScreenshot('E18-596','2');

        // Fill in the page with random description
        // pagesPage.fillPageDescription(randomPageDescription)
        WhenSteps.WhenFillPageDescription(randomPageDescription);
        pagesPage.AndScreenshot('E18-596','3');

        // Publish intent page
        // pagesPage.publishButton_Click();
        WhenSteps.WhenClickPublishButton();
        pagesPage.AndScreenshot('E18-596','4');

        // Continue Final Review
        // pagesPage.finalReviewButton_Click();
        WhenSteps.WhenClickFinalReviewButton();

        // Publish page now
        // pagesPage.confirmPublishButton_Click();
        WhenSteps.WhenClickConfirmPublishButton();
        pagesPage.AndScreenshot('E18-596','5');

        // Then
        // Verify the modal appears
        // pagesPage.isPublishFlowComplete();
        ThenSteps.thenIsPublishFlowComplete();

        // Verify the modal header text
        // pagesPage.isModalHeaderCorrect_Untitled();
        ThenSteps.thenIsModalHeaderCorrect_Untitled();
        pagesPage.AndScreenshot('E18-596','6');

        // Verify the post title and excerpt
        // pagesPage.isModalDescriptionCorrect(randomPageDescription);
        ThenSteps.thenIsModalDescriptionCorrect(randomPageDescription);
    });
});
