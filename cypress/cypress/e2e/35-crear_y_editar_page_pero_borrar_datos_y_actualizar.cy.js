import GivenSteps from "./steps/givenSteps";
import pagesPage from "./pages/pagesPage";
import WhenStepsPages from "./steps/whenStepsPages";
import ThenStepsPages from "./steps/thenStepsPages";


describe("Pages - Edit page title and description with empty spaces", () => {

    beforeEach(() => {
        GivenSteps.givenNavigateToLoginPage();
        GivenSteps.givenLogin();
        GivenSteps.giveNavigateToPagesPage();
        pagesPage.mockPageWithDescription();
        cy.get('button.close').click()
    });

    it('35 - Should edit a page', () => {
        WhenStepsPages.WhenClickUpdateBtn();

        WhenStepsPages.WhenClearPageHeader();

        WhenStepsPages.WhenClearPageDescription();

        WhenStepsPages.WhenClickUpdateButton();

        //Then
        ThenStepsPages.thenShouldUpdatePage();
    });
});
