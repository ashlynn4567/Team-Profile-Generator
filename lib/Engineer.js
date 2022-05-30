const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name) {
        // call parent constructor (Employee)
        super(name);

        this.id = blah  // use some kind of authenticator to generate random id
        this.email = email
        this.github = github
    };

    getName() {};

    getId() {};

    getEmail() {};

    getGithub() {};

    getRole() {};  // overrides to return "Engineer"
};

module.exports = Engineer;