// import parent constructor
const Employee = require("./Employee");

// create Engineer class as a template that extends from Employee
class Engineer extends Employee {
    constructor(name, id, email) {
        // call parent constructor to ipmort info from Employee class
        super(name, id, email);
        // additional information for engineer class
        this.github = github
    };

    getGithub() {
        return this.github;
    };

    getRole() {
        return "Engineer"
    };
};

// exports
module.exports = Engineer;