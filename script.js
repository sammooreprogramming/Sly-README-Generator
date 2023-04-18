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
        name: "github",
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
        name: "acknowledgements",
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
        name: "testing",
        message: "How is this project tested?"
    },
    
  
    {
        type: "input",
        name: "email",
        message: "Enter your email."
    }
];

// TODO: Create a function to write README file
function newFile() {
    inquirer.prompt(questions).then(function(data) {
        fs.writeFile("README.md", generateMarkdown(data), function(err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success! Your new README.md file has been created!");
        });
    });
}

// TODO: Create a function to initialize app
function init() {
  newFile();
}

// Function call to initialize app
init();