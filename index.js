// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")

// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        message: "What is the title of your application?",
        name: "title",
    },
    {
        message: "Please provide a description of your application:",
        name: "description",
    },
    {
        message: "Please provide instructions for installing your application:",
        name: "installation"
    },
    {
        message: "Please provide usage information about your application:",
        name: "usage",
    },
    {
        message: "Please provide guidelines for open-source contributions:",
        name: "guidelines"
    },
    {
        message: "Please provide any testing instructions",
        name: "test"
    },
    {
        message: "Plese select your application's license below:",
        name: "license",
        type: "list",
        choices: ['None','Apache License 2.0', 'GNU General Puplic License v3.0', 'MIT License', 'BSD 2-Clause Simplified License', 'BSD 3-Clause New or Revised License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
    },
    {
        message: "Please provide your GitHub username:",
        name: "username",
    },
    {
        message: "Please provide your email address:",
        name: "email",
    },
]).then(response =>
    fs.appendFile('README-Generated.md', writeToFile(response), err =>
        err ? console.error('Failed to write to file') : console.log('Success!'))
);

// TODO: Create a function to write README file
function writeToFile(response) {
    return `
# Title
${response.title}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Testing](#testing)
- [Questions](#questions)
 
## Description
${response.description}

## Installation
${response.installation}

## Usage
${response.usage}

## License
${response.license}

## Contributing
${response.guidelines}

## Tests
${response.test}

## Questions
Find me on GitHub: ${response.username} ||
For further questions: ${response.email}`
}

// TODO: Create a function to initialize app
// function init() { }

// // Function call to initialize app
// init();
