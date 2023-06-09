const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type:"input",
        name: "Title",
        message: "What is the title of your project",
    },

    {
        type:"input",
        name:"description",
        message:"Please provide a description of your project",
    },

    {
        type:"input",
        name:"usage",
        message:"How is this app used",

    },

    {
        type:"input",
        name:"installation",
        message: "What would you like to install?",
    },
{
    type:"input",
    name:"Test",
    message:"Please state the kind of tests you have",
},
    {
        type:"list",
        name:"license",
        message:"Please state your type of license",
        choices:["ISC","MIT","Apache"],

    },

    {
        type:"input",
        name:"Platform",
        message:"What is your github user ID?"
    },
     
];

// function to write README file
//function writeToFile(fileName, data) {
//}

// function to initialize program
function init() {
inquirer.prompt(questions)
.then((answerObj) => {
    var markdown = generateMarkdown(answerObj);
    var filePath = path.join(__dirname, "app", "ReadMe.md")
    fs.writeFile(markdown, filePath, function (){
        console.log("Nicely Written, pal!");
    });
})}

init();


// function to write README file
//function writeToFile(fileName, data) {
//}
// function call to initialize program
