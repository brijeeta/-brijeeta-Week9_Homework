let licenseArray = [];
let licenseList = [];
let listOfBadges = [];
let allBadges = [];
let licenseURL;


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenses) {
    // for each license in the list of licenses
    for (const license of licenses) {
        // declare a new variable and set it equal to the license badge url
        let searchCrit;

        if (license === 'Apache') {
            searchCrit = `Apache%202.0-red.svg`;
        } else if (license === 'GNU') {
            searchCrit = `GPL%20v3-lightgrey.svg`;
        } else if (license === 'IBM') {
            searchCrit = `IPL%201.0-blue.svg`;
        } else if (license === 'MIT') {
            searchCrit = `MIT-green.svg`;
        } else if (license === 'Mozilla') {
            searchCrit = `MPL%202.0-yellow.svg`;
        }

        let licenseBadge = `[![License](https://img.shields.io/badge/License-${searchCrit})]`;
        renderLicenseLink(license);
        // add the url to the array 
        listOfBadges.push(licenseBadge + licenseURL);

        // if no license selected
        if (license === 'None' || license === undefined || license === null) {
            // return an empty string
            licenseBadge = '';
            listOfBadges = [];
        }
    }

    allBadges = listOfBadges.join('   ');
    return allBadges;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'Apache') {
        searchLicense = `Apache-2.0`;
    } else if (license === 'GNU') {
        searchLicense = `GPL-3.0`;
    } else if (license === 'IBM') {
        searchLicense = `IPL-1.0`;
    } else if (license === 'MIT') {
        searchLicense = `MIT`;
    } else if (license === 'Mozilla') {
        searchLicense = `MPL-2.0`;
    }

    licenseURL = `(https://opensource.org/licenses/${searchLicense})`;
    return licenseURL;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenses) {

    for (const license of licenses) {
        licenseArray.push(`[${license}]${renderLicenseLink(license)}`);
    }

    licenseList = licenseArray.join(`
`);
    return licenseList;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    const url = 'https://www.github.com/' + data.githubId;
    const licenses = data.licenses;

    renderLicenseBadge(licenses);
    renderLicenseSection(licenses);

    return `# ${data.title}
${allBadges}
## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Testing Instructions](#testing-instructions)
- [License](#license)
- [Questions](#questions)
---

## User Story

${'```md'}
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
${'```'}

## Acceptance Criteria

${'```md'}
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
${'```'}

## Installation

${data.installation}

## Usage

The following animation demonstrates the application functionality:

![ReadmeGenertorDemo](./${data.demo})

## Contribution

${data.contribution}

## Testing Instructions

${data.test}

## License

This project is covered under the following license(s):

${licenses}

## Questions?

GitHub :[ ${data.githubId}](${url})

Email : ${data.emailId}
`;
}

module.exports = generateMarkdown;