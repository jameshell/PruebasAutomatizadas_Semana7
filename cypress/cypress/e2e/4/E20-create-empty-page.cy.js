import GivenSteps from "../4/steps/givenSteps";
import pagesPage from "./pages/pagesPage";
import { faker } from "@faker-js/faker";
import WhenSteps from "../4/steps/whenSteps";
import thenSteps from "../4/steps/thenSteps";
import postPage from "./pages/postPage";
import whenSteps from "./steps/whenSteps";

describe("Pages - Create Empty Page", () => {

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
    });

    // it('E20 - Should create a new page successfully with a random description', () => {
    //     const randomPageDescription = faker.lorem.paragraph();
    //
    //     // When
    //     // Clicks on new page
    //     // pagesPage.newPageBtn_Click();
    //     WhenSteps.WhenNewPageBtn_Click();
    //     pagesPage.AndScreenshot('E20-596','2');
    //
    //     // Then
    //     // Publish intent page
    //     // pagesPage.publishButton_ShouldNotExist();
    //     ThenSteps.thenPublishButton_ShouldNotExist();
    // });

    it("E20 - Create empty page", () => {
        postPage.AndScreenshot('E20-45','1');

        whenSteps.AndClicksNewPostEmpty();
        postPage.AndScreenshot('E20-45','2');

        thenSteps.thenShouldNoExitPublish();
    });
});
