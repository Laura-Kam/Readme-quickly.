// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  let licenseBadge = "";
  if (license === "MIT") {
    licenseBadge = `![License](https://img.shields.io/badge/license-MIT-blue.svg)`;
  } else if (license === "GNU General Public License v3.0") {
    licenseBadge = `![License](https://img.shields.io/badge/License-GNU%20GPL-blue.svg)`;
  } else if (license === "Apache license 2.0") {
    licenseBadge = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
  }
  return licenseBadge;
}

// // [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
// //[![License](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses/MIT)
// //[![License](https://img.shields.io/badge/License-GNU%20GPL-blue)](https://opensource.org/licenses/gpl-license)

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = `* [License](#license)`;

  if (license === "None") {
    licenseLink = "";
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = `## License
  ${license} `;

  if (license === "None") {
    licenseSection = "";
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README

//data? not response?

function generateMarkdown(response) {
  console.log(response.license);
  let licenseChosen = response.license;

  renderLicenseBadge(licenseChosen);

  return `# Title of Project: ${response.title}
  ${renderLicenseBadge(licenseChosen)}

  ## Table of Contents:
  
  * [Username](#username)
  * [Project Description](#short-description)
  ${renderLicenseLink(licenseChosen)}
  * [Command to install](#command-to-install)
  * [Command to run tests](#command-to-run-tests)
  * [Instructions for users](#instructions-for-users-of-the-app)
  * [Features of the project](#features-of-the-project)
  * [How to contribute](#how-to-contribute)
  

  ## Username
    ${response.username},
  ## Short-description
   ${response.description},
${renderLicenseSection(licenseChosen)}
  ## Command to install
   ${response.installDependencies},
  ## Command to run tests
   ${response.tests},
  ## Instructions for users of the app
   ${response.instructions},
  ## Features of the project
   ${response.features},
  ## How to contribute
   ${response.contribute},
`;
  console.log(response);
}

module.exports = generateMarkdown;

//which bits of code, functions/objects/strings etc to export from this file to index.js
