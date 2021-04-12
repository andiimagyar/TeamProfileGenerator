const Manager = require('../lib/Manager');

test("confirms office number is entered", () => {
    const manager = new Manager();

    expect(manager.getOfficeNumber()).not.toBe(" ");
});
    