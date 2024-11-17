import GivenSteps from "./steps/givenSteps";
import pagesPage from "./pages/pagesPage";
import { faker } from "@faker-js/faker";
import WhenSteps from "./steps/whenSteps";
import ThenSteps from "./steps/thenSteps";
import thenSteps from "./steps/thenSteps";

describe("Pages - Create Page without img", () => {

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

        pagesPage.AndScreenshot('E16-596','1');
    });

    it('E16 - Should create a new page successfully with a random title and description', () => {
        const randomPageDescription = faker.lorem.paragraph();
        const randomPageTitle = faker.lorem.sentence({min: 3, max: 5});

        // When
        // Clicks on new page
        // pagesPage.newPageBtn_Click();
        WhenSteps.WhenNewPageBtn_Click();
        pagesPage.AndScreenshot('E16-596','2');

        // Fill in the page with a randon title
        // pagesPage.fillPageHeader(randomPageTitle);
        WhenSteps.WhenFillPageHeader(randomPageTitle);
        pagesPage.AndScreenshot('E16-596','3');

        // Fill in the page with random description
        // pagesPage.fillPageDescription(randomPageDescription);
        WhenSteps.WhenFillPageDescription(randomPageDescription);
        pagesPage.AndScreenshot('E16-596','4');

        // Publish intent page
        // pagesPage.publishButton_Click();
        WhenSteps.WhenClickPublishButton();
        pagesPage.AndScreenshot('E16-596','5');

        // Continue Final Review
        // pagesPage.finalReviewButton_Click();
        // WhenSteps.WhenClickFinalReviewButton();

        // Publish page now
        pagesPage.confirmPublishButton_Click();
        WhenSteps.WhenClickConfirmPublishButton();
        // pagesPage.AndScreenshot('E16-596','6');

        // Then
        // Verify the modal appears
        // pagesPage.isPublishFlowComplete();
        // ThenSteps.thenIsPublishFlowComplete();

        // Verify the modal header text
        // pagesPage.isModalHeaderCorrect(randomPageTitle);
        // ThenSteps.thenIsModalHeaderCorrect(randomPageTitle);
        cy.wait(1000);
        thenSteps.thenVerifyNotificationExists();
        pagesPage.AndScreenshot('E16-596','6');

        // Verify the post title and excerpt
        // pagesPage.isModalDescriptionCorrect(randomPageDescription);
        // ThenSteps.thenIsModalDescriptionCorrect(randomPageDescription)
    });
});
