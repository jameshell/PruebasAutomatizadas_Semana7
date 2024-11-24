import GivenSteps from "./steps/givenSteps";
import pagesPage from "./pages/pagesPage";
import WhenStepsPages from "./steps/whenStepsPages";
import ThenStepsPages from "./steps/thenStepsPages";


describe("Pages - Edit page title and description with empty spaces", () => {

    beforeEach(() => {
        GivenSteps.givenNavigateToLoginPage();
        GivenSteps.givenLogin();
        GivenSteps.giveNavigateToPagesPage();
        pagesPage.AndScreenshot('35-596','1');
        pagesPage.mockPageWithDescription();
        cy.get('button.close').click()
    });

    it('35 - Should edit a page', () => {
        WhenStepsPages.WhenClickUpdateBtn();
        pagesPage.AndScreenshot('35-596','2');

        WhenStepsPages.WhenClearPageHeader();
        pagesPage.AndScreenshot('35-596','3');

        WhenStepsPages.WhenClearPageDescription();
        pagesPage.AndScreenshot('35-596','4');

        WhenStepsPages.WhenClickUpdateButton();
        pagesPage.AndScreenshot('35-596','5');

        //Then
        ThenStepsPages.thenShouldUpdatePage();
    });
});
