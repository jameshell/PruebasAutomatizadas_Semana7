class DashboardPage{

    async navigateToMembers(ctx){
        await ctx.driver.$('li>a[href="#/members/"]').click();
    }


    async navigateToPages(ctx){
        await ctx.driver.$('li>a[href="#/pages/"]').click();
    }
    async navigateToTags(ctx){
        await ctx.driver.$('li>a[href="#/tags/"]').click();
    }    

    async navigateToPosts(ctx){
        await ctx.driver.$('li>a[href="#/posts/"]').click();
    }
}

module.exports = new DashboardPage();
