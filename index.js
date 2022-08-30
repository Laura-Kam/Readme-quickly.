// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  "What is your Github username?",
  "What is your email address?",
  "What is your project title?",
  "Please write a short description of your project:",
  "What kind of license should your project have?",
  "What command should be executed to install dependencies?",
  "What command is used to run tests?",
  "What instructions should you provide the user for this app?",
  "What are the features of your project?",
  "How can someone else contribute to your repo?",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
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
      },
      {
        type: "input",
        message: "What command is used to run tests?",
        name: "tests",
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
