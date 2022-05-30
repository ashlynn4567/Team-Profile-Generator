const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name) {
        // call parent constructor (Employee)
        super(name);

        this.id = blah  // use some kind of authenticator to generate random id
        this.email = email
        this.school = school
    };

    getName() {};

    getId() {};

    getEmail() {};

    getSchool() {};

    getRole() {};  // overrides to return "Intern"
};

module.exports = Intern;