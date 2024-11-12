import GivenSteps from "./steps/givenSteps";
import pagesPage from "./pages/pagesPage";
import { faker } from "@faker-js/faker";
import WhenSteps from "./steps/whenSteps";
import thenSteps from "./steps/thenSteps";
import ThenSteps from "./steps/thenSteps";

describe("Pages - Create Empty Page", () => {

    beforeEach(() => {
        // Given the User navigates to the login page
        GivenSteps.givenNavigateToLoginPage();
        // and enters a valid username and password and click the login button
        GivenSteps.givenLogin();
        // and navigates to the Pages
        GivenSteps.giveNavigateToPagesPage();
    });

    it('E20 - Should create a new page successfully with a random description', () => {
        const randomPageDescription = faker.lorem.paragraph();

        // When
        // Clicks on new page
        // pagesPage.newPageBtn_Click();
        WhenSteps.WhenNewPageBtn_Click();

        // Then
        // Publish intent page
        // pagesPage.publishButton_ShouldNotExist();
        ThenSteps.thenPublishButton_ShouldNotExist();
    });
});
