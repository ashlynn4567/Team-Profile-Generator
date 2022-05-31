// imports
const generatePage = require("./src/generatePage.js");
const prompts = require("./utils/prompts");
const helpers = require("./utils/helpers");
const fs = require("fs");
const path = require("path");

// path to directory so that the user receives the frontend files
const directory = path.resolve(__dirname, "dist");
const public = path.join(directory, "index.html");

// create an empty array that will be filled with team info
const teamArr = [];

// use user input from prompts to generate HTML page
const fillTemplate = () => {
    console.log("Generating a team page...");
    fs.writeFileSync(public, generatePage(teamArr), "utf-8");
    console.log("Page generated successfully!");
};

// start application
helpers.teamHandler();