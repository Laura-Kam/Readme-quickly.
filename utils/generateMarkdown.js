// function that returns a license badge based on which license is passed in

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

// A function that returns the license link

function renderLicenseLink(license) {
  let licenseLink = `* [License](#license)`;

  if (license === "None") {
    licenseLink = "";
  }
  return licenseLink;
}

//A function that returns the license section of README
function renderLicenseSection(license) {
  let licenseSection = `## License
  ${license} `;

  if (license === "None") {
    licenseSection = "";
  }
  return licenseSection;
}

// function to generate markdown for README
// internal links added.
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
  * [Questions](#questions)
  

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
   ## Questions 
   If you have any questions, or would like to get in touch find me on GitHub [${
     response.username
   }](https://github.com/${response.username})
   or email me at ${response.email}.
`;
  console.log(response);
}

module.exports = generateMarkdown;
