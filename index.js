//run application 
const inquirer = require('inquirer');
const fs = require('fs');

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
        }
    ])
    .then((response) => {
        console.log(response);
    })

}

AskManager();