function renderLicenseBadge(license) {
  let dynamicBadge = "";

  if(license != "None") {
    dynamicBadge = "![License Badge](https://shields.io/badge/license-" + license + "-green)";
  }
  
  return dynamicBadge;
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  let linkToLicense;

  // select correct license link for the selected license
  switch(license) {

    case "MIT":
      linkToLicense = "https://mit-license.org/";
      break;
    case "BSD":
      linkToLicense = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    case "GPL":
      linkToLicense = "https://www.gnu.org/licenses/gpl-3.0.en.html";
      break;
    case "Apache":
      linkToLicense = "https://www.apache.org/licenses/LICENSE-2.0.html";
      break;
    default:
      linkToLicense = "";
      break;
  }

  return linkToLicense;
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSect = "";

  // if a license has been selected, create License section
  // with link to license information
  if (license != "None") {
    licenseSect += "## License\n"
    licenseSect += "Please see " + renderlinkToLicense(license) + " to get detailed information for this license\n";
  }

  return licenseSect;
}


// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ---
  ![${data.license}](https://img.shields.io/badge/license-${data.license}-green)
  ## Description
  ${data.description}
  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Repository](#repository)
  5. [Contributing](#contributing)
  6. [Tests](#tests)
  7. [Questions](#questions)

  ## Installation
  This is how the project is installed: ${data.installation}.
  ## Usage
  ${data.usage}
  ## License 
  This project is licensed under the ${data.license} license.
  ## Repository
  This is the associated Github repository ${data.repo}.
  ## Contributing
  ${data.contribution}
  ## Tests
  To test the project, follow these steps: ${data.tests}.
  ## Questions
  Regarding any questions, contact me directly at [${data.email}](mailto:${data.email}). More of my work: [${data.username}](https://www.github.com/${data.username}).
`;
}

module.exports = generateMarkdown;