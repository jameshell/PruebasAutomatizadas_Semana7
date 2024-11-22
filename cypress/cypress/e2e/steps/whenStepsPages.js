import PaqesPage from '../pages/pagesPage';
import pagesPage from "../pages/pagesPage";
class WhenStepsPages {
    WhenNewPageBtn_Click() {
        pagesPage.newPageBtn_Click();
    }

    WhenFillPageHeader(randomPageTitle) {
        pagesPage.fillPageHeader(randomPageTitle);
    }

    WhenFillPageDescription(randomPageDescription){
        pagesPage.fillPageDescription(randomPageDescription)
    }

    WhenClickAddImgBtn(){
        pagesPage.addImgBtn_Click()
    }

    WhenClickAddImageBtn_FirstPic(){
        pagesPage.addImageBtn_FirstPic_Click()
    }

    WhenClickPublishButton(){
        cy.wait(1000);
        pagesPage.publishButton_Click()
    }

    WhenClickFinalReviewButton(){
        cy.wait(1000);
        pagesPage.finalReviewButton_Click()
    }

    WhenClickConfirmPublishButton(){
        pagesPage.confirmPublishButton_Click();
    }

    WhenClickUpdateBtn() {
        pagesPage.updateBtn_Click();
    }

    WhenClickUpdateButton() {
        pagesPage.updateButton_Click();
    }
}

export default new WhenStepsPages();
