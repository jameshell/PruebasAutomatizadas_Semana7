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
    });

    it('55 - Should create not be able to create a page with large title', () => {
        const randomPageDescription = faker.lorem.paragraph();
        const randomPageTitle = faker.lorem.words(255);;

        WhenStepsPages.WhenNewPageBtn_Click();

        WhenStepsPages.WhenFillPageHeader(randomPageTitle);

        WhenStepsPages.WhenFillPageDescription(randomPageDescription);

        ThenStepsPages.thenPublishButton_ShouldNotExist();
    });
});
