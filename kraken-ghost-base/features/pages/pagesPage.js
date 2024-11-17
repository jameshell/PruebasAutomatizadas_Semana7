class PagesPage {
    async fillTitle(context, title) {
        const titleField = await context.driver.$('textarea[placeholder="Page title"]');
        await titleField.setValue(title);
    }

    async fillContent(context, content) {
        await context.driver.$('div[class="kg-prose"]').setValue(content);
    }

    async ClickPagePublishRightNow(ctx){
        const newPostButton = await ctx.driver.$('[data-test-button="confirm-publish"]');
        await newPostButton.waitForExist({ timeout: 500 });
        await newPostButton.click()
    }

    async ClickPageBtnContinuePublish(ctx){
        const newPostButton = await ctx.driver.$('[data-test-button="continue"]');
        await newPostButton.waitForExist({ timeout: 500 });
        await newPostButton.click()
    }

    async ClickPageBtnEdit(ctx){
        const editButton = await ctx.driver.$('span[title="Go to Editor"]');
        await editButton.click();
    }


    async addImage(context) {
        const addImageButton = await context.driver.$('button[aria-label="Add image"]');
        await addImageButton.click();
        const firstImage = await context.driver.$('img[alt="First image"]');
        await firstImage.click();
    }

    async updateTitle(context, newTitle) {
        const titleField = await context.driver.$('textarea[placeholder="Page title"]');
        await titleField.setValue(newTitle);
    }

    async updateContent(context, newContent) {
        await context.driver.$('div[class="kg-prose"]').setValue(newContent);
    }

    async isConfirmationMessageVisible(ctx) {
        const confirmationText = await ctx.driver.$('span.gh-notification-actions');
        const text = await confirmationText.getText();
        return text.includes('View Page');
    }

}

module.exports = new PagesPage();
