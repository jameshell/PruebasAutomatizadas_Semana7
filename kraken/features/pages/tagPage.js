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

    async saveTag(ctx){
        await ctx.driver.$('[data-test-button="save"]').click();
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

    async clickTagDelete(ctx){
        await ctx.driver.$('[data-test-button="delete-tag"]').click();
    }

    async confirmTagDelete(ctx){
        await ctx.driver.$('[data-test-button="confirm"]').click();
    }
    async fillTagsToEdit(ctx,name){
        await ctx.driver.$('.gh-input').setValue(name);
    }

    async fillDescriptionTagEdit(ctx,text){
        await ctx.driver.$('#tag-description').setValue(text);
    }

}

module.exports = new TagPage();