class LoginPage{

    async enterUserName(ctx, username){
        await ctx.driver.$('input[name="identification"]').setValue(username);
    }
    async enterPassword(ctx, password){
        await ctx.driver.$('input[name="password"]').setValue(password);
    }
    async clickOnSubmit(ctx){
        await ctx.driver.$('button[type="submit"]').click();
    }
}

module.exports = new LoginPage();