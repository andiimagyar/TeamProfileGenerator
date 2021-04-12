const Engineer = require('../lib/Engineer');

test("confirms Github username is entered", () => {
    const engineer = new Engineer();

    expect(engineer.getGithub()).not.toBe(" ");
});
    