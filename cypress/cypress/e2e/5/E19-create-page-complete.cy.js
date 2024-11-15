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
    });

    it('E19 - Should create a new page successfully with a random description', () => {
        const randomPageDescription = faker.lorem.paragraph();
        const randomPageTitle = faker.lorem.sentence({min: 3, max: 5});

        // When
        // Clicks on new page
        // pagesPage.newPageBtn_Click();
        WhenSteps.WhenNewPageBtn_Click();

        // Fill in the page with a randon title
        // pagesPage.fillPageHeader(randomPageTitle);
        WhenSteps.WhenFillPageHeader(randomPageTitle);

        // Fill in the page with random description
        // pagesPage.fillPageDescription(randomPageDescription);
        WhenSteps.WhenFillPageDescription(randomPageDescription);

        // Add a random image 1st step
        // pagesPage.addImgBtn_Click();
        WhenSteps.WhenClickAddImgBtn();

        // A a random img 2nd step
        // pagesPage.addImageBtn_FirstPic_Click();
        WhenSteps.WhenClickAddImageBtn_FirstPic()

        // Publish intent page
        // pagesPage.publishButton_Click();
        WhenSteps.WhenClickPublishButton();

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
    });
});
