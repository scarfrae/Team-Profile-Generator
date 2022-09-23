//require 'inquirer'
const inquirer = require('inquirer');
const fs = require('fs');

//require lib
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

var EmployeeInfoList = [];

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
        }
    ])
    .then((response) => {
        const manager = new Manager(response.managerName, response.ID, response.managerEmail, response.managerOfficeNum);
        EmployeeInfoList.push(manager);
        OptionMenu();
    })

}

const OptionMenu = () => {
    inquirer    
    .prompt([
        {
            type: "list",
            message: "Which team member do you want to add?",
            name: "memberOption",
            choices: ['Add an Engineer', 'Add an Intern', 'Finish building your team'],
            // validate: (Function) Receive the user input and answers hash. Should return true if the value is valid, and an error message (String) otherwise. If false is returned, a default error message is provided.
            validate: TeamMemberInput => {
                if(TeamMemberInput){
                    return true;
                }
                else{
                    console.log("Please choose an option!")
                    return false;
                }
            }
        }

    ])
    .then((response) => {
        if(response.memberOption == 'Add an Engineer'){
            AddEngineer();
        }
        else if(response.memberOption == 'Add an Intern'){
            AddIntern();
        }
        else {
            FinishedTeam();
        }
        console.log(response);
    })

}

//add engineer and add intern are really similar to addManager function
//once engineer and intern occur call option menu
//when selecting FinishedTeam write html file
//invoke whichever one I export from page.template(creating html one) and pass EmployeeInfoList
AskManager();

const AskEngineer = () => {
    console.log(Hi)
}