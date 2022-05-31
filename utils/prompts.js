// imports
const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");
const inquirer = require("inquirer");
// const { writeHTML } = require("../index");

// create an empty array that will be filled with team info
const teamArr = [];

// ask user if they want to create a new team
const createTeam = () => {    
    console.log("================================================================");
    console.log("==========================TEAM BUILDER==========================");
    console.log("================================================================");
    console.log("Welcome to Team Builder!");
    inquirer
        .prompt(
            [
                {
                    type: "confirm",
                    name: "createConfirm",
                    message: "Would you like to create a new team?",
                    default: true
                }
            ]
        )
        .then((answer) => {
            // if yes, bring user to CRUD menu
            if (answer.createConfirm) {
                decisionTree();
            } else {
                console.log("Thanks for using Team Builder! Goodbye!");
            };
        });
};

const decisionTree = () => {
    return inquirer
        .prompt(
            [
                {
                    type: "list",
                    name: "choice",
                    message: "Please select one of the following options:",
                    choices: [
                        "I would like to create a team member.",
                        // "I would like to delete a team member.",
                        // "I would like to update a team member.",
                        "I am done creating my team. I would like to generate my webpage."
                    ]
                }
            ]
        )
        .then((choiceAnswer) => {
            switch(choiceAnswer.choice) {
                case "I would like to create a team member.":
                    createMember();
                    break
                // case "I would like to delete a team member.":
                //     createEngineer();
                //     break
                // case "I would like to update a team member.":
                //     createIntern();
                //     break;
                case "I am done creating my team. I would like to generate my webpage.":
                    console.log(teamArr);
                    // call writeHTML(teamArr);
                    // writeHTML(teamArr);
                    break;
            }
        });
}

// ask user if they want to create a new team member (manager, engineer or intern)
const createMember = () => {
    return inquirer
        .prompt([
            {
               type: "list",
               name: "memberChoice",
               message: "Which type of team member would you like to add?",
               choices: [
                   "Manager",
                   "Engineer",
                   "Intern",
                   "I do not want to add any more team members."
               ]
            }
        ])
        .then((memberChoiceAnswer) => {
            switch(memberChoiceAnswer.memberChoice) {
                case "Manager":
                    createManager();
                    break
                case "Engineer":
                    createEngineer();
                    break
                case "Intern":
                    createIntern();
                    break;
                case "I do not want to add any more team members.":
                    decisionTree();
                    break;
            }
        }
    );
};

// create a new manager
const createManager = () => {
    console.log("================================================================");
    console.log("========================CREATE A MANAGER========================");
    console.log("================================================================");
    return inquirer
        .prompt([
            {
                type: "input", 
                name: "managerName",
                message: "Please enter the team manager's name (Required).",
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
                message: "Please enter the team manager's ID number (Required)",
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
    console.log("================================================================");
    console.log("=======================CREATE AN ENGINEER=======================");
    console.log("================================================================");
    return inquirer
        .prompt([
            {
                type: "input", 
                name: "engineerName",
                message: "Please enter the team engineer's name (Required).",
                validate: engineerNameInput => {
                    if (engineerNameInput === "") {
                        console.log("You must enter a name to continue!");
                        return false;
                    };
                    return true;
                }
            },
            {
                type: "input",
                name: "engineerId",
                message: "Please enter the team engineer's ID number (Required)",
                validate: engineerIdInput => {
                    if (engineerIdInput === "") {
                        console.log("You must enter an id to continue!");
                        return false;
                    };
                    return true;
                }
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is the engineer's email address? (Required)",
                validate: engineerEmailInput => {
                    if (engineerEmailInput === "") {
                        console.log("You must enter an email address to continue!");
                        return false;
                    };
                    return true;
                }
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "What is the engineer's GitHub link?"
            }
        ])
        .then((engineerAnswers) => {
            // create a new engineer by inserting user input into the Engineer constructor
            const engineer = new Engineer(engineerAnswers.engineerName, engineerAnswers.engineerId, engineerAnswers.engineerEmail, engineerAnswers.engineerGithub);
            // push new engineer into the team array
            teamArr.push(engineer);
            // ask user if they want to add another team member
            createMember();
        });
};

// create a new intern
const createIntern = () => {
    console.log("================================================================");
    console.log("========================CREATE AN INTERN========================");
    console.log("================================================================");
    return inquirer
        .prompt([
            {
                type: "input", 
                name: "internName",
                message: "Please enter the team intern's name (Required).",
                validate: internNameInput => {
                    if (internNameInput === "") {
                        console.log("You must enter a name to continue!");
                        return false;
                    };
                    return true;
                }
            },
            {
                type: "input",
                name: "internId",
                message: "Please enter the team intern's ID number (Required)",
                validate: internIdInput => {
                    if (internIdInput === "") {
                        console.log("You must enter an id to continue!");
                        return false;
                    };
                    return true;
                }
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is the intern's email address? (Required)",
                validate: internEmailInput => {
                    if (internEmailInput === "") {
                        console.log("You must enter an email address to continue!");
                        return false;
                    };
                    return true;
                }
            },
            {
                type: "input",
                name: "internSchool",
                message: "What school does the intern attend?"
            }
        ])
        .then((internAnswers) => {
            // create a new intern by inserting user input into the Intern constructor
            const intern = new Intern(internAnswers.internName, internAnswers.internId, internAnswers.internEmail, internAnswers.internSchool);
            // push new intern into the team array
            teamArr.push(intern);
            // ask user if they want to add another team member
            createMember();
        });
};

// exports
module.exports = { createTeam, teamArr };