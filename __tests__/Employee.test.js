// imports
const Employee = require("../lib/Employee");

// tests
test("Ensures that employee is created as an object", () => {
    const employee = new Employee();

    expect(typeof employee).toBe("object");
});

test("Verifies name is created correctly in Employee constructor", () => {
    const name = "Ashley";
    const employee = new Employee(name);

    expect(employee.name).toBe(name);
});

test("Verifies ID is created correctly in Employee constructor", () => {
    const id = 1;
    const employee = new Employee("Ashley", id);

    expect(employee.id).toBe(id);
});

test("Verifies email is created correctly in Employee constructor", () => {
    const email = "ashley@yahoo.com";
    const employee = new Employee("Ashley", 1, email);

    expect(employee.email).toBe(email);
});

test("Ensures employee.getName() returns employee's name", () => {
    const name = "Ashley";
    const employee = new Employee(name);

    expect(employee.getName()).toBe(name);
});

test("Ensures employee.getId() returns employee's id", () => {
    const id = 1;
    const employee = new Employee("Ashley", id);

    expect(employee.getId()).toBe(id);
});

test("Ensures employee.getEmail() returns employee's email", () => {
    const email = "ashley@yahoo.com";
    const employee = new Employee("Ashley", 1, email);

    expect(employee.getEmail()).toBe(email);
});

test("Ensures employee.getRole() returns employee's role", () => {
    const role = "Employee";
    const employee = new Employee("Ashley", 1, "ashley@yahoo.com");

    expect(employee.getRole()).toBe(role);
});