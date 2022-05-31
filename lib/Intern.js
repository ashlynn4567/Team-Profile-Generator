// import parent constructor
const Employee = require("./Employee");

// create Intern class as a template that extends from Employee
class Intern extends Employee {
    constructor(name, id, email, school) {
        // call parent constructor to ipmort info from Employee class
        super(name, id, email);
        // additional information for intern class
        this.school = school
    };

    getSchool() {
        return this.school;
    };

    getRole() {
        return "Intern"
    };
};

module.exports = Intern;