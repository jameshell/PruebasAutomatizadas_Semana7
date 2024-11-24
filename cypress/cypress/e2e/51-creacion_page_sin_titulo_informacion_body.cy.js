import GivenSteps from "./steps/givenSteps";
import pagesPage from "./pages/pagesPage";
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

        pagesPage.AndScreenshot('51-596','1');
    });

    it('51 - Should create an empty page', () => {
        WhenStepsPages.WhenNewPageBtn_Click();
        pagesPage.AndScreenshot('51-596','2');

        ThenStepsPages.thenPublishButton_ShouldNotExist();
    });
});
