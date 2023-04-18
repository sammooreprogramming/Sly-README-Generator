// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ---
  ---
  ![${data.license}](https://img.shields.io/badge/license-${data.license}-green)
  ## Description
  ${data.description}
  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)
  ## Installation
  In order to install the needed dependencies, run this command:
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License 
  This project is licensed under the ${data.license} license.
  ## Contributing
  ${data.contribution}
  ## Tests
  To test the project, run the following command:
  ${data.tests}
  ## Questions
  Regarding any questions, contact me directly at [${data.email}](mailto:${data.email}). More of my work: [${data.username}](https://www.github.com/${data.username}).
`;
}

module.exports = generateMarkdown;

module.exports = generateMarkdown;