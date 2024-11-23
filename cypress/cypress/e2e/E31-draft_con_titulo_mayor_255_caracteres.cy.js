import GivenSteps from "./steps/givenSteps";
import pagesPage from "./pages/pagesPage";
import WhenStepsPages from "./steps/whenStepsPages";
import ThenStepsPages from "./steps/thenStepsPages";

describe("Pages - Create a draft with title greater than 255 characters", () => {

    beforeEach(() => {
        GivenSteps.givenNavigateToLoginPage();
        GivenSteps.givenLogin();
        GivenSteps.giveNavigateToPagesPage();

        Cypress.Screenshot.defaults({
            disableTimersAndAnimations: false,
        })

        pagesPage.AndScreenshot('E19-596','1');
    });

    it('E31 - Should create a new page successfully with apriori data', () => {
        cy.fixture('pages').then((data) => {
            const randomPageTitle = data[0].Title_255;

            WhenStepsPages.WhenNewPageBtn_Click();
            pagesPage.AndScreenshot('E31-596','1');

            WhenStepsPages.WhenFillPageHeader(randomPageTitle);
            pagesPage.AndScreenshot('E31-596','2');

            WhenStepsPages.WhenClickAddImgBtn();
            pagesPage.AndScreenshot('E31-596','3');

            WhenStepsPages.WhenClickAddImageBtn_FirstPic()
            pagesPage.AndScreenshot('E31-596','4');

            ThenStepsPages.thenPublishButton_ShouldNotExist();
            pagesPage.AndScreenshot('E31-596','5');
        });
    });
});
