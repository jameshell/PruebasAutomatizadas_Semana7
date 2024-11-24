import GivenSteps from "./steps/givenSteps";
import pagesPage from "./pages/pagesPage";
import { faker } from "@faker-js/faker";
import WhenStepsPages from "./steps/whenStepsPages";
import ThenStepsPages from "./steps/thenStepsPages";


describe("Pages - Create Empty Page", () => {

    beforeEach(() => {
        GivenSteps.givenNavigateToLoginPage();
        GivenSteps.givenLogin();
        GivenSteps.giveNavigateToPagesPage();

        Cypress.Screenshot.defaults({
            disableTimersAndAnimations: false,
        });

        pagesPage.AndScreenshot('E20-596','1');
    });

    it('E20 - Should create a new page successfully with a random description', () => {
        const randomPageDescription = faker.lorem.paragraph();

        WhenStepsPages.WhenNewPageBtn_Click();
        pagesPage.AndScreenshot('E20-596','2');

        ThenStepsPages.thenPublishButton_ShouldNotExist();
    });
});
