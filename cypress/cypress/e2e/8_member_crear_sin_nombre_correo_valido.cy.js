import givenStepsMembers from "./steps/givenStepsMembers";
const Mockaroo = require('mockaroo');
const client = new Mockaroo.Client({ apiKey: "API_KEY" });

const posts = await client.generate({
    count: 10,
    schema: [
        { name: 'name', type: 'string' },
        { name: 'name', type: 'int' },
        { name: 'name', type: '' }
    ],
  });

rand 1 a 10

posts[rand]



describe("Pages - Create member", () => {

    beforeEach(() => {

    });

    it('8 - Should create a new member wiuthout name and vailid email', () => {
        givenStepsMembers.fillform(post[4].name, post[4].email);
    });
});
