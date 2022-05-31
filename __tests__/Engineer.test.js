// imports 
const Engineer = require("../lib/Engineer");

// tests
test("Ensures github username is created correctly in Engineer Constructor", () => {
    const github = "ashlynn4567";
    // placeholder values for name, id, and email
    const engineer = new Engineer("Ashley", 1, "ashley@email.com", github);

    expect(engineer.github).toBe(github);
});

test("Ensures engineer.getGithub() returns github username", () => {
    const github = "ashlynn4567"
    const engineer = new Engineer("Ashley", 1, "ashley@email.com", github);

    expect(engineer.getGithub()).toBe(github);
});

test("Ensures engineer.getRole() returns engineer's role", () => {
    const role = 'Engineer';
    const engineer = new Engineer("Ashley", 1, "ashley@email.com", "ashlynn4567");

    expect(engineer.getRole()).toBe(role);
});