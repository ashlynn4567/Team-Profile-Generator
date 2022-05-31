// import parent constructor
const Employee = require("./Employee");

// create Manager class as a template that extends from Employee
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // call parent constructor to ipmort info from Employee class
        super(name, id, email);
        // additional information for manager class
        this.officeNumber = officeNumber
    };

    getOfficeNumber() {
        return this.officeNumber;
    };

    getRole() {
        return "Manager"
    };
};

// exports
module.exports = Manager;