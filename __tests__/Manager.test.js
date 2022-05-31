// imports 
const Manager = require("../lib/Manager");

// tests
test("Ensures office number is created correctly in Manager Constructor", () => {
    const officeNumber = 100;
    const manager = new Manager("Ashley", 1, "ashley@email.com", officeNumber);

    expect(manager.officeNumber).toBe(officeNumber);
});

test("Ensures manager.getOfficeNumber() returns manager's office number", () => {
    const officeNumber = 100;
    const manager = new Manager("Ashley", 1, "ashley@email.com", officeNumber);

    expect(manager.getOfficeNumber()).toBe(officeNumber);
});

// make sure getRole() method returns manager role
test("Ensures manager.getRole() returns manager's role", () => {
    const role = 'Manager';
    const manager = new Manager("Ashley", 1, "ashley@email.com", 100);

    expect(manager.getRole()).toBe(role);
});