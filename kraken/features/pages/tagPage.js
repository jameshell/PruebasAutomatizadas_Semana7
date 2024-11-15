class TagPage{


    async navigateToNewTags(ctx){
        await ctx.driver.$('a[href="#/tags/new/"]').click();
    }

    async fillNewTags(ctx,name){
        await ctx.driver.$('.gh-input').setValue(name);
    }

    async fillDescriptionTags(ctx,text){
        await ctx.driver.$('#tag-description').setValue(text);
    }

    // async saveTag(ctx){
    //     await ctx.driver.$('[data-test-button="save"]').click();
    // }
    async saveTag(ctx) {
        const saveButton = await ctx.driver.$('[data-test-button="save"]');
        if (await saveButton.isExisting()) {
            await saveButton.click(); // Si el botón existe, haz clic en él
        } else {
            const saveSpan = await ctx.driver.$('span=Save');
            if (await saveSpan.isExisting()) {
                await saveSpan.click(); // Si el span existe, haz clic en él
            }
        }
    }

    async clickInTags(ctx){
        await ctx.driver.$('a[href="#/tags/"]').click();
    }

    async fillInvalidNewTags(ctx,text){
        await ctx.driver.$('.gh-input').setValue(text);
    }

    async fillInvalidDescriptionTags(ctx,text){
        await ctx.driver.$('#tag-description').setValue(text);
    }

    async fillNewTagsToDelete(ctx,name){
        await ctx.driver.$('.gh-input').setValue(name);
    }

    async navigateToTagDelete(ctx){
        await ctx.driver.$('a[href="#/tags/todelete/"]').click();
    }

    // async clickTagDelete(ctx){
    //     await ctx.driver.$('[data-test-button="delete-tag"]').click();
    // }
    async clickTagDelete(ctx) {
        const deleteButton = await ctx.driver.$('[data-test-button="delete-tag"]');
        if (await deleteButton.isExisting()) {
            await deleteButton.click(); // Si el botón existe, haz clic en él
        } else {
            const deleteSpan = await ctx.driver.$('span=Delete tag');
            if (await deleteSpan.isExisting()) {
                await deleteSpan.click(); // Si el span existe, haz clic en él
            }
        }
    }

    // async confirmTagDelete(ctx){
    //     await ctx.driver.$('[data-test-button="confirm"]').click();
    // }

    async confirmTagDelete(ctx) {
        const confirmButton = await ctx.driver.$('[data-test-button="confirm"]');
        if (await confirmButton.isExisting()) {
            await confirmButton.click(); // Si el botón existe, haz clic en él
        } else {
            const deleteSpan = await ctx.driver.$('span=Delete');
            if (await deleteSpan.isExisting()) {
                await deleteSpan.click(); // Si el span existe, haz clic en él
            }
        }
    }
    async fillTagsToEdit(ctx,name){
        await ctx.driver.$('.gh-input').setValue(name);
    }

    async fillDescriptionTagEdit(ctx,text){
        await ctx.driver.$('#tag-description').setValue(text);
    }

}

module.exports = new TagPage();