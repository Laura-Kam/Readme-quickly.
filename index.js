//  Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

//  array of questions for user input
const questions = [
  "What is your Github username?",
  "What is your email address?",
];

//  a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your Github username?",
        name: "username",
      },
      {
        type: "input",
        message: "What is your project title?",
        name: "title",
      },
      {
        type: "input",
        message: "Please write a short description of your project:",
        default: "What was your motivation?, What problem are you solving?",
        name: "description",
      },
      {
        type: "list",
        message: "What kind of license should your project have?",
        name: "license",
        choices: [
          "Apache license 2.0",
          "GNU General Public License v3.0",
          "MIT",
          "None",
        ],
      },
      {
        type: "input",
        message: "What command should be executed to install dependencies?",
        name: "installDependencies",
        default: "npm i",
      },
      {
        name: "tests",
        type: "input",
        message: "What command is used to run tests?",
        default: "npm test",
      },
      {
        type: "input",
        message: "What instructions should you provide the user for this app?",
        name: "instructions",
      },
      {
        type: "input",
        message: "What are the features of your project?",
        name: "features",
      },
      {
        type: "input",
        message: "How can someone else contribute to your repo?",
        name: "contribute",
        default: "Git clone the repo, work on the code, make a pull request.",
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email",
      },
    ])
    .then((response) => {
      const string = generateMarkdown(response);
      fs.writeFile("./dist/README.md", string, (err) =>
        err ? console.error(err) : console.log("Success!- Readme created!")
      );
    });
}
// Function call to initialize app
init();
