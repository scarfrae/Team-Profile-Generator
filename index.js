//require 'inquirer'
const inquirer = require('inquirer');
const fs = require('fs');

//require lib

//need to enter team manager's name, employee id, email address, and office number
//need to save manager info into variable for printing in html later
const AskManager = () => {
    inquirer    
    .prompt([
        {
            type: "input",
            message: "What is the manager's name?",
            name: "managerName",
            // validate: (Function) Receive the user input and answers hash. Should return true if the value is valid, and an error message (String) otherwise. If false is returned, a default error message is provided.
            validate: managerInput => {
                if(managerInput){
                    return true;
                }
                else{
                    console.log("Please enter manager's name!")
                    return false;
                }
            }

        },
        {
            type: "input",
            message: "What is the employee ID?",
            name: "ID",
            // validate: (Function) Receive the user input and answers hash. Should return true if the value is valid, and an error message (String) otherwise. If false is returned, a default error message is provided.
            validate: IDInput => {
                if(IDInput){
                    return true;
                }
                else{
                    console.log("Please enter employee's ID!")
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "What is the manager's email?",
            name: "managerEmail",
            // validate: (Function) Receive the user input and answers hash. Should return true if the value is valid, and an error message (String) otherwise. If false is returned, a default error message is provided.
            validate: managerEmailInput => {
                if(managerEmailInput){
                    return true;
                }
                else{
                    console.log("Please enter manager's email!")
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "What is the manager's office number?",
            name: "managerOfficeNum",
            // validate: (Function) Receive the user input and answers hash. Should return true if the value is valid, and an error message (String) otherwise. If false is returned, a default error message is provided.
            validate: managerOfficeNumInput => {
                if(managerOfficeNumInput){
                    return true;
                }
                else{
                    console.log("Please enter a positive number greater than 0!")
                    return false;
                }
            }
        },
        {
            type: "list",
            message: "Which team member do you want to add?",
            name: "memberOption",
            choices: ['Manager', 'Engineer', 'Intern'],
            // validate: (Function) Receive the user input and answers hash. Should return true if the value is valid, and an error message (String) otherwise. If false is returned, a default error message is provided.
            validate: TeamMemberInput => {
                if(TeamMemberInput){
                    return true;
                }
                else{
                    console.log("Please enter a positive number greater than 0!")
                    return false;
                }
            }
        }


    ])
    .then((response) => {
        console.log(response);
    })

}

AskManager();