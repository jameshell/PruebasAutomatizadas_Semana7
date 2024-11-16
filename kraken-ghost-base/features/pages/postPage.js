function generateRandomWord(length) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function generateRandomTitle(wordCount) {
    let title = [];
    for (let i = 0; i < wordCount; i++) {
        title.push(generateRandomWord(5 + Math.floor(Math.random() * 5))); // Genera palabras entre 5 y 10 letras
    }
    return title.join(' ');
}

function generateRandomParagraph(sentenceCount) {
    let paragraph = [];
    for (let i = 0; i < sentenceCount; i++) {
        let sentence = [];
        const wordCount = 5 + Math.floor(Math.random() * 10); // Número de palabras por oración
        for (let j = 0; j < wordCount; j++) {
            sentence.push(generateRandomWord(4 + Math.floor(Math.random() * 4))); // Palabras entre 4 y 8 letras
        }
        paragraph.push(sentence.join(' ') + '.');
    }
    return paragraph.join(' ');
}


class postPage{

    async navigateNewPosts(ctx){
        const newPostButton = await ctx.driver.$('[class="ember-view gh-btn gh-btn-primary view-actions-top-row"]');
        await newPostButton.waitForExist({ timeout: 1000 });
        await newPostButton.click();

    }

    // Genera un título aleatorio para una publicación
    async generateRandomTitle() {
        return generateRandomTitle(5); 
    }

    // Genera contenido aleatorio para una publicación
    async generateRandomContent() {
        return generateRandomParagraph(3); // Genera contenido con 3 oraciones aleatorias
    }

    async ClickPostsTitle(ctx){
        const title = await ctx.driver.$('.gh-editor-title');
        await title.waitForExist({ timeout: 500 });
        await title.click()
    }

    async fillPostTitle(ctx){
        await ctx.driver.$('.gh-editor-title').setValue(generateRandomTitle(5));
    }

    async ClickPostsContent(ctx){
        const content= await ctx.driver.$('.koenig-editor__editor');
        await content.waitForExist({ timeout: 1000 });
        await content.click()
    }

    async fillPostContent(ctx){
        await ctx.driver.$('.koenig-editor__editor').setValue(generateRandomParagraph(3));
    }

    async ClickPostsBtnPublish(ctx){
        const newPostButton = await ctx.driver.$('.ember-basic-dropdown-trigger');
        await newPostButton.waitForExist({ timeout: 500 });
        await newPostButton.click()
    }


    async ClickPostPublishRightNow(ctx){
        const newPostButton = await ctx.driver.$('.gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon');
        await newPostButton.waitForExist({ timeout: 500 });
        await newPostButton.click()
    }


    async ClickPostsBtnUpdate(ctx){
        const newPostButton = await ctx.driver.$('.ember-basic-dropdown-trigger');
        await newPostButton.waitForExist({ timeout: 500 });
        await newPostButton.click()
    }

    async isConfirmationModalVisible(ctx) {
        const modal = await ctx.driver.$('span.gh-notification-actions');
        return await modal.isDisplayed();
    }

    async isConfirmationMessageVisible(ctx) {
        const confirmationText = await ctx.driver.$('span.gh-notification-actions');
        const text = await confirmationText.getText();
        return text.includes('View Post');
    }

    async ClickSelectPost(ctx){
        const newPostButton = await ctx.driver.$('.gh-posts-list-item');
        await newPostButton.waitForExist({ timeout: 500 });
        await newPostButton.click()
    }


    async ClickUpdatePostMenu(ctx){
        const newPostButton = await ctx.driver.$('.gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon');
        await newPostButton.waitForExist({ timeout: 1000 });
        await newPostButton.click()
    }

    async isNotificationVisible(ctx) {
        const notification = await ctx.driver.$('div.gh-notification-content');
        return await notification.isDisplayed();
    }

    async isConfirmationTitle(ctx) {
        const TitleText = await ctx.driver.$('div.modal-body h2');
        const text = await TitleText.getText();
        return text.includes("(Untitled)");
    }

    async addImagePostButton(ctx){
        const newPostButton = await ctx.driver.$('svg[viewBox="0 0 122.43 122.41"]');
        await newPostButton.waitForExist({ timeout: 500 });
        await newPostButton.click()
    }

    async ClickFirstImage(ctx){
        const newPostButton = await ctx.driver.$('#unsplash-selector-wormhole > div.absolute.top-8.right-8.bottom-8.left-8.br4.overflow-hidden.bg-white.z-9999 > div.flex.flex-column.h-100 > div > div > section > div:nth-child(1) > a:nth-child(1) > div > div > div.gh-unsplash-photo-footer > a');
        await newPostButton.waitForExist({ timeout: 2000 });
        await newPostButton.click()
    }

    async isButtonNotVisible(ctx) {
        try {
            const button = await ctx.driver.$('.gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon');
            const isVisible = await button.isDisplayed();
            return !isVisible; 

        } catch (error) {
            return true;
        }
    }


}

module.exports = new postPage();