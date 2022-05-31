// imports
const generatePage = require("./src/generatePage.js");
const prompts = require("./utils/prompts");
const fs = require("fs");
const path = require("path");

// path to directory so that the user receives the frontend files
const directory = path.resolve(__dirname, "dist");
const public = path.join(directory, "index.html");

// use user input from prompts to generate HTML page
const writeHTML = async (teamInfo) => {
    console.log("Generating a team page...");
    fs.writeFileSync(public, generatePage(teamInfo), "utf-8");
    console.log("Page generated successfully!");
};

// start application
prompts.createTeam();