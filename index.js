const inquirer = require('inquirer');
const fs = require('fs');

const queries = () => {
    return inquirer.prompt([{
            type: 'input',
            message: 'What is the name of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Please enter brief description!',
            name: 'description',
        },
        {
            type: 'input',
            message: 'How to run your application?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Please add a demo file.What is the extension of the file?',
            name: 'demo',
        },
        {
            type: 'input',
            message: 'What are the contribution guidelines?',
            name: 'contribution',
        },
        {
            type: 'input',
            message: 'How to test your application?',
            name: 'test',
        },
        {
            type: 'checkbox',
            name: 'licenses',
            message: 'Which licenses were used for this project?',
            choices: ['Apache', 'GNU', 'IBM', 'MIT', 'Mozilla', 'None'],
        },
        {
            type: 'input',
            message: 'What is your github id?',
            name: 'github',
        },
        {
            type: 'input',
            message: 'What is your email id?',
            name: 'email',
        },
    ])
};