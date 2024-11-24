import GivenSteps from "./steps/givenSteps";
import pagesPage from "./pages/pagesPage";
import { faker } from "@faker-js/faker";
import WhenStepsPages from "./steps/whenStepsPages";
import ThenStepsPages from "./steps/thenStepsPages";

describe("Pages - Create Page with large title draft", () => {

    beforeEach(() => {
        GivenSteps.givenNavigateToLoginPage();
        GivenSteps.givenLogin();
        GivenSteps.giveNavigateToPagesPage();

        Cypress.Screenshot.defaults({
            disableTimersAndAnimations: false,
        });

        pagesPage.AndScreenshot('55-596','1');
    });

    it('55 - Should create not be able to create a page with large title', () => {
        const randomPageDescription = faker.lorem.paragraph();
        const randomPageTitle = faker.lorem.words(255);;

        WhenStepsPages.WhenNewPageBtn_Click();
        pagesPage.AndScreenshot('55-596','2');

        WhenStepsPages.WhenFillPageHeader(randomPageTitle);
        pagesPage.AndScreenshot('55-596','3');

        WhenStepsPages.WhenFillPageDescription(randomPageDescription);
        pagesPage.AndScreenshot('55-596','4');

        ThenStepsPages.thenPublishButton_ShouldNotExist();
    });
});
