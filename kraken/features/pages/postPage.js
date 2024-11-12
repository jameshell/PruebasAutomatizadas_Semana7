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
        const newPostButton = await ctx.driver.$('a[href="#/editor/post/"]');
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
        const newPostButton = await ctx.driver.$('textarea[placeholder="Post title"]');
        await newPostButton.waitForExist({ timeout: 500 });
        await newPostButton.click()
    }

    async fillPostTitle(ctx){
        await ctx.driver.$('textarea[placeholder="Post title"]').setValue(generateRandomTitle(5));
    }

    async ClickPostsContent(ctx){
        const newPostButton = await ctx.driver.$('div[class="kg-prose"]');
        await newPostButton.waitForExist({ timeout: 1000 });
        await newPostButton.click()
    }

    async fillPostContent(ctx){
        await ctx.driver.$('div[class="kg-prose"]').setValue(generateRandomParagraph(3));
    }

    async ClickPostsBtnPublish(ctx){
        const newPostButton = await ctx.driver.$('[data-test-button="publish-flow"]');
        await newPostButton.waitForExist({ timeout: 500 });
        await newPostButton.click()
    }

    async ClickPostsBtnContinuePublish(ctx){
        const newPostButton = await ctx.driver.$('[data-test-button="continue"]');
        await newPostButton.waitForExist({ timeout: 500 });
        await newPostButton.click()
    }

    async ClickPostPublishRightNow(ctx){
        const newPostButton = await ctx.driver.$('[data-test-button="confirm-publish"]');
        await newPostButton.waitForExist({ timeout: 500 });
        await newPostButton.click()
    }

    async isConfirmationModalVisible(ctx) {
        const modal = await ctx.driver.$('div.modal-content[data-test-publish-flow="complete"]');
        return await modal.isDisplayed();
    }

    async isConfirmationMessageVisible(ctx) {
        const confirmationText = await ctx.driver.$('h1[data-test-complete-title] span');
        const text = await confirmationText.getText();
        return text.includes("Boom! It's out there.");
    }

    async ClickSelectPost(ctx){
        const newPostButton = await ctx.driver.$('.gh-posts-list-item');
        await newPostButton.waitForExist({ timeout: 500 });
        await newPostButton.click()
    }


    async ClickUpdatePost(ctx){
        const newPostButton = await ctx.driver.$('[data-test-task-button-state="idle"]');
        await newPostButton.waitForExist({ timeout: 1000 });
        await newPostButton.click()
    }

    async isNotificationVisible(ctx) {
        const notification = await ctx.driver.$('aside.gh-notifications article.gh-notification');
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
            const button = await ctx.driver.$('[data-test-button="publish-flow"]');
            const isVisible = await button.isDisplayed();
            return !isVisible; 

        } catch (error) {
            return true;
        }
    }


}

module.exports = new postPage();