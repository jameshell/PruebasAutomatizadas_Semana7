import GivenSteps from "./steps/givenSteps";
import pagesPage from "./pages/pagesPage";
import { faker } from "@faker-js/faker";
import WhenSteps from "./steps/whenSteps";
import ThenSteps from "./steps/thenSteps";

describe("Pages - Create a complete valid Page", () => {

    beforeEach(() => {
        // Given the User navigates to the login page
        GivenSteps.givenNavigateToLoginPage();
        // and enters a valid username and password and click the login button
        GivenSteps.givenLogin();
        // and navigates to the Pages
        GivenSteps.giveNavigateToPagesPage();

        Cypress.Screenshot.defaults({
            disableTimersAndAnimations: false,
        })

        pagesPage.AndScreenshot('E19-596','1');
    });

    it('E19 - Should create a new page successfully with a random description', () => {
        const randomPageDescription = faker.lorem.paragraph();
        const randomPageTitle = faker.lorem.sentence({min: 3, max: 5});

        // When
        // Clicks on new page
        // pagesPage.newPageBtn_Click();
        WhenSteps.WhenNewPageBtn_Click();
        pagesPage.AndScreenshot('E19-596','2');

        // Fill in the page with a randon title
        // pagesPage.fillPageHeader(randomPageTitle);
        WhenSteps.WhenFillPageHeader(randomPageTitle);
        pagesPage.AndScreenshot('E19-596','3');

        // Fill in the page with random description
        // pagesPage.fillPageDescription(randomPageDescription);
        WhenSteps.WhenFillPageDescription(randomPageDescription);
        pagesPage.AndScreenshot('E19-596','4');

        // Add a random image 1st step
        // pagesPage.addImgBtn_Click();
        WhenSteps.WhenClickAddImgBtn();
        pagesPage.AndScreenshot('E19-596','5');

        // A a random img 2nd step
        // pagesPage.addImageBtn_FirstPic_Click();
        WhenSteps.WhenClickAddImageBtn_FirstPic()
        pagesPage.AndScreenshot('E19-596','6');

        // Publish intent page
        // pagesPage.publishButton_Click();
        WhenSteps.WhenClickPublishButton();
        pagesPage.AndScreenshot('E19-596','7');

        // Continue Final Review
        // pagesPage.finalReviewButton_Click();
        WhenSteps.WhenClickFinalReviewButton();


        // Publish page now
        // pagesPage.confirmPublishButton_Click();
        WhenSteps.WhenClickConfirmPublishButton();

        // Then
        // Verify the modal appears
        // pagesPage.isPublishFlowComplete();
        ThenSteps.thenIsPublishFlowComplete();

        // Verify the modal header text
        // pagesPage.isModalHeaderCorrect(randomPageTitle);
        ThenSteps.thenIsModalHeaderCorrect(randomPageTitle);

        // Verify the post title and excerpt
        // pagesPage.isModalDescriptionCorrect(randomPageDescription);
        ThenSteps.thenIsModalDescriptionCorrect(randomPageDescription);
        pagesPage.AndScreenshot('E19-596','8');
    });
});
