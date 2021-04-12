const Intern = require('../lib/Intern');

test("confirms School name is entered", () => {
    const intern = new Intern();

    expect(intern.getSchool()).not.toBe(" ");
});
    