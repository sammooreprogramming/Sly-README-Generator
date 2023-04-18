// TODO: Include packages needed for this project
// TODO: Include packages needed for this project
const generateMarkdown = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");
const fs = require("fs");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your README.md?"
    },

    {
        type: "input",
        name: "username",
        message: "Enter your Github username, please."
    },

    {
        type: "input",
        name: "repo",
        message: "Enter the link to the github repository for this project."
    },

    {
        type: "input",
        name: "description",
        message: "Enter a brief description of your project."
    },
    
    {
        type: "input",
        name: "documentation",
        message: "Please describe the function of your project and how to use it appropriately."
    },
    
    {
        type: "input",
        name: "use",
        message: "How do you use this project?"
    },

    {
        type: "input",
        name: "screenshot",
        message: "Please enter the relative path for a screenshot of your project."
    },

    {
        type: "input",
        name: "features",
        message: "What are the features of the project?"
    },

    {
        type: "input",
        name: "contribution",
        message: "List those who contributed to the project, please."
    },

    {
        type: "list",
        name: "license",
        message: "What license is used for this project?",
        choices: ["AAL", "ISC", "NTP", "W3C", "MIT", "GNU", "Apache"]
    },
     
      
    {
        type: "input",
        name: "tests",
        message: "How is this project tested?"
    },
    
  
    {
        type: "input",
        name: "email",
        message: "Enter your email."
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let content = generateMarkdown(data);
    fs.writeFile(fileName, content, function (error) {
        if (error) {
            return console.log(error)
        }
        console.log('success')
    });
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (data) {
        let newREADME = "README.md";
        writeToFile(newREADME, data)
    });
}

// Function call to initialize app
init();