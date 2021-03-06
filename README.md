# Team Profile Generator

## Table-of-Contents

- [Description](#description)
- [Features](#usage-and-features)
- [Installation](#installation)
- [Technologies and Languages](#technologies-and-languages)
- [Future Development](#future-development)
- [Credits](#credits)

## Description

Team Profile Generator is an application that uses Node.js to gather information about employees so that users can generate an HTML webpage displaying summaries for each person. There are also basic code tests using the Jest framework to implement TDD methodologies.

## Features

This is how the generated HTML page will appear to users. It is responsive, adapting to multiple screen sizes using flexbox and media queries.

<p align="center">
<img alt="The team builder website, with cards showing the information entered about each employee on the team." src="./dist/images/team-builder-screenshot.JPG"/>
</p>

This application was developed using Test-Driven Development techniques though Jest. If the user wishes to see which tests pass, they can simply open the application within the proper directory and run the command `npm test`.

<p align="center">
<img alt="A gif demonstrating how to run the Jest testing suite within the application directory." src="./dist/images/team-builder-jest.gif"/>
<br>Here's a <a href="https://drive.google.com/file/d/1p-DQwGmyZ_-eo6VgUg_amYxE8siRHYn2/view" target="_blank">link</a> to the video version of the above gif.
</p>

In order to run this application, users must have all dependencies installed. See the installation section below for instructions. To start the application, use the command `node index.js`.

<p align="center">
<img alt="A gif demonstrating how to begin running the application from the command line interface." src="./dist/images/team-builder-start.gif"/>
<br>Here's a <a href="https://drive.google.com/file/d/1LkRx3okDZEFF-astKyuGU3Z3p7uU0ANv/view" target="_blank">link</a> to the video version of the above gif.
</p>

Follow the prompts given in the command line interface to give information about your team. Some prompts are required. Once completed, an HTML file will generate in `dist/index.html`. Open the HTML in a browser to view your team's webpage.

<p align="center">
<img alt="A gif demonstrating how to run through each prompt in order to generate your team page." src="./dist/images/team-builder-demonstration.gif"/>
<br>Here's a <a href="https://drive.google.com/file/d/1CY1jFAw5lcKqw_hKgHDbOuveSs10NqdB/view" target="_blank">link</a> to the video version of the above gif.
</p>

## Installation

In order to use this application, you will need to install it on your local computer.

1. Open the command line interface.
2. Clone the repository onto your local machine using the `git clone` command.
3. Once the repository has been cloned, navigate into the root directory of the application using the command `cd Team-Profile-Generator`.
4. Run the command `npm install` to install necessary packages and dependencies.
5. Once the dependencies have been properly installed, enter the command `node index.js` to initiate the application.
6. Navigate through the prompts in your command line interface using your keyboard.
7. Once completed, your webpage will generate automatically with the data you entered. Open `dist/index.html` to see your generated webpage.

In order to run the testing suites through Jest:

1. Complete steps 1-3 as listed above.
2. After all your dependencies are installed locally, run the command `npm test` to run all jest testing suites.

## Technologies and Languages

- HTML
- CSS
- JavaScript
- Node.js
- npm
- Jest
- Inquirer.js

## Future Development

In the future, I would like to add the following improvements:

- Data permanence, so that you can load, edit, and delete your existing team data.
- An option to view your team data in tables within the command line interface before your team data is generated into a webpage.

I'm always interested in refactoring code to improve it's functionality. If you would like to suggest your own improvements, you can reach me at the links below.

- <a href="mailto:ashlynn4567@gmail.com">Email</a>
- <a href="https://github.com/ashlynn4567">GitHub</a>
- <a href="https://www.linkedin.com/in/ashley-lynn-smith/">LinkedIn</a>

## Credits

This project was built with the help of the University of Oregon's Coding Boot Camp.

Special thanks to [Mohamed Hassan](https://pixabay.com/photos/teamwork-cooperation-brainstorming-3213924/) for the background image used in this application.
