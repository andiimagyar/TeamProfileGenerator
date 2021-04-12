const Employee = require('../lib/Employee');

test("confirms Name, ID and email are entered", () => {
    const employee = new Employee();

    expect(employee.getName()).not.toBe(" ");
    expect(employee.getId()).not.toBe(" ");
    expect(employee.getEmail()).not.toBe(" ");
});
    