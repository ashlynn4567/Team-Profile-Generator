// imports
const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");
const inquirer = require("inquirer");

// ask user if they want to create a new team
const createTeam = () => {
    console.log("Welcome to Team Builder!")
    return inquirer
        .prompt(
            [
                {
                    type: "confirm",
                    name: "createConfirm",
                    message: "Would you like to create a new team?"
                }
            ]
        )
        .then(() => {
            // if yes, ask user to add a new member
            createMember();
        });
};

// ask user if they want to create a new team member (manager, engineer or intern)
const createMember = () => {
    return inquirer
        .prompt([
            {}
        ])
        .then(managerAnswers);
};

// create a new manager
const createManager = () => {
    return inquirer
        .prompt([
            {
                type: "input", 
                name: "managerName",
                message: "Please enter the team Manager's name (Required).",
                validate: managerNameInput => {
                    if (managerNameInput === "") {
                        console.log("You must enter a name to continue!");
                        return false;
                    };
                    return true;
                }
            },
            {
                type: "input",
                name: "managerId",
                message: "Please enter the team Manager's ID number (Required)",
                validate: managerIdInput => {
                    if (managerIdInput === "") {
                        console.log("You must enter an id to continue!");
                        return false;
                    };
                    return true;
                }
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the manager's email address? (Required)",
                validate: managerEmailInput => {
                    if (managerEmailInput === "") {
                        console.log("You must enter an email address to continue!");
                        return false;
                    };
                    return true;
                }
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is the manager's office number?"
            }
        ])
        .then((managerAnswers) => {
            // create a new manager by inserting user input into the Manager constructor
            const manager = new Manager(managerAnswers.managerName, managerAnswers.managerId, managerAnswers.managerEmail, managerAnswers.managerOfficeNumber);
            // push new manager into the team array
            teamArr.push(manager);
            // ask user if they want to add another team member
            createMember();
        });
};

// create a new enginer
const createEngineer = () => {
    return inquirer
        .prompt()
        .then();
};

// create a new intern
const createIntern = () => {
    return inquirer
        .prompt()
        .then();
};

// exports
module.exports = {
    createTeam,
    createMember,
    createManager,
    createEngineer,
    createIntern
};