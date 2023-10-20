const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([{
        message: "enter your project title",
        name: "title",
        type: "input"
    },
    {
        message: "enter a description",
        name: "description",
        type: "input"
    },
    {
        message: "enter installation instructions",
        name: "installation",
        type: "input"
    },
    {
        message: "enter usage information",
        name: "usage",
        type: "input"
    },
    {
        message: "enter contribution guidelines",
        name: "contribution",
        type: "input"
    },
    {
        message: "enter test instructions",
        name: "test",
        type: "input"
    },
    {
        message: "enter github username",
        name: "github",
        type: "input"
    },
    {
        message: "choose a license: MIT, Apache, GPL",
        name: "license",
        type: "input"
    }

])
    .then((response) => {
        console.log(response);
        const readMe = `# ${response.title}
        
## Table of Contents
        
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
        
## Description:
${response.description}
        
## Installation
${response.installation}
        
## Usage
        
${response.usage}
        
## License
${response.license} License
Copyright (c) 2023
        
## About The Authors
        
- [GitHub](https://github.com/${response.github})`

    fs.writeFile("README.md", readMe, (err) =>
    err ? console.error(err) : console.log('success')
    );
})