// imports
const Intern = require("../lib/Intern");

// tests
test("Ensures school name is created correctly in Intern Constructor", () => {
    const school = "Ohio State University";
    // placeholder values for name, id, and email
    const intern = new Intern("Ashley", 1, "ashley@yahoo.com", school);

    expect(intern.school).toBe(school);
});

test("Ensures intern.getSchool() returns intern's school", () => {
    const school = "Ohio State University"
    const intern = new Intern("Ashley", 1, "ashley@yahoo.com", school);

    expect(intern.getSchool()).toBe(school);
});

test("Ensures intern.getRole() returns intern's role", () => {
    const role = "Intern";
    const intern = new Intern("Ashley", 1, "ashley@yahoo.com", "Ohio State University");

    expect(intern.getRole()).toBe(role);
});