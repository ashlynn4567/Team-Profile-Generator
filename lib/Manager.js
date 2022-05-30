const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name) {
        // call parent constructor (Employee)
        super(name);

        this.id = blah  // use some kind of authenticator to generate random id
        this.email = email
        this.officeNumber = officeNumber
    };

    getName() {};

    getId() {};

    getEmail() {};

    getRole() {};  // overrides to return "Manager"
};

module.exports = Manager;