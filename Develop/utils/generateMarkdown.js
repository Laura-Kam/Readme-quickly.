// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  let licenseChosen = response.license;
  let licenseBadge = "";
  if (licenseChosen === "MIT") {
    licenseBadge = `$[![License](https://img.shields.io/badge/license-MIT-blue)]`;
  } else if (licenseChosen === "GNU General Public License v3.0") {
    licenseBadge = `[![License](https://img.shields.io/badge/License-GNU%20GPL-blue)]`;
  } else if (licenseChosen === "Apache license 2.0") {
    licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`;
  } else {
    licenseBadge = "";
  }
}

// // [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
// //[![License](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses/MIT)
// //[![License](https://img.shields.io/badge/License-GNU%20GPL-blue)](https://opensource.org/licenses/gpl-license)

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseChosen = response.license;
  let licenseLink = "";

  if (licenseChosen === "MIT") {
    licenseLink = `$[![License](https://opensource.org/licenses/MIT]`;
  } else if (licenseChosen === "GNU General Public License v3.0") {
    licenseLink = `[![License](https://opensource.org/licenses/gpl-license]`;
  } else if (licenseChosen === "Apache license 2.0") {
    licenseBadge = `[![License](https://opensource.org/licenses/Apache-2.0)]`;
  } else {
    licenseLink = "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

//data? not response?

function generateMarkdown(response) {
  let licenseChosen = response.license;
  let licenseBadge = "";

  renderLicenseBadge(licenseChosen);

  return `# Title of Project: ${response.title} ${response.license}
  ${licenseLink}  ${licenseBadge};

  ## Table of Contents:
  * Git-hub Username
  * Project description
  * License
  * Command to install
  * Command to run tests
  * Instructions for users
  * Features of the project
  * How to contribute
  

  ## Git-hub username
    ${response.username},
  ## Short description
   ${response.description},
  ## License
   ${response.license},
  ## Command to install
   ${response.installDependencies},
  ## Command to run tests
   ${response.tests},
  ## Instructions for users of the app
   ${response.instructions},
  ## Features of your project
   ${response.features},
  ## How someone else can contribute to the repo
   ${response.contribute},
`;
  console.log(response);
}

module.exports = generateMarkdown;

//which bits of code, functions/objects/strings etc to export from this file to index.js
