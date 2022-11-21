//require 'inquirer'
const inquirer = require('inquirer');
const fs = require('fs');

//require lib
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const generateMarkdown = require('./src/page.template.js')

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
            // function to validate if number
            //isNaN: is not a number therefore !isNaN is a number
            // source: https://www.w3schools.com/jsref/jsref_isnan.asp
            validate: IDInput => {
                if(!isNaN(IDInput)){
                    return true;
                }
                else{
                    console.log("\n Please enter a valid ID (positive number greater than 0)!")
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "What is the manager's email?",
            name: "managerEmail",
            //function to validate email
            validate: managerEmailInput => {
                // source: https://www.w3resource.com/javascript/form/email-validation.php
                var mailValidate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if(managerEmailInput.match(mailValidate)){
                    return true;
                }
                else{
                    console.log("\n Please enter a valid email!");
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "What is the manager's office number?",
            name: "managerOfficeNum",
            //validates is name isn't true i.e is number
            // source: https://www.w3schools.com/jsref/jsref_isnan.asp
            validate: managerOfficeNumInput => {
                if(!isNaN(managerOfficeNumInput)){
                    return true;
                }
                else{
                    console.log("\n Please enter a valid Office Number (positive number greater than 0)!")
                    return false;
                }
            }
        }
    ])
    .then((response) => {
        const manager = new Manager(response.managerName, response.ID, response.managerEmail, response.managerOfficeNum);
        EmployeeInfoList.push(manager);
        console.log(EmployeeInfoList);
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
            FinishedTeam(EmployeeInfoList);
        }
    })

}


// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated


let AddEngineer = () => {

    inquirer    
    .prompt([
        {
            type: "input",
            message: "Enter the name of the engineer?",
            name: "engineerName",
            //validate if input occurs
            validate: engineerInput => {
                if(engineerInput){
                    return true;
                }
                else{
                    console.log("Please enter engineer's name!")
                    return false;
                }
            }

        },
        {
            type: "input",
            message: "Enter the engineer ID?",
            name: "EngineerID",
            // validate if is number
            // source: https://www.w3schools.com/jsref/jsref_isnan.asp
            validate: IDInput => {
                if(!isNaN(IDInput)){
                    return true;
                }
                else{
                    console.log("Please enter a valid ID (positive number greater than 0)!")
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "Enter the email of the Engineer?",
            name: "engineerEmail",
            // validate if email is inputed in correct format
            validate: engineerEmailInput => {
                // source: https://www.w3resource.com/javascript/form/email-validation.php
                var mailValidate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if(engineerEmailInput.match(mailValidate)){
                    return true;
                }
                else{
                    console.log("Please enter a valid email!")
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "What is the engineer's github username?",
            name: "engineerGitHub",
            // validate if input is entered
            validate: engineerGitHub => {
                if(engineerGitHub){
                    return true;
                }
                else{
                    console.log("Please enter a username!")
                    return false;
                }
            }
        }
    ])
    .then((response) => {
        const engineer = new Engineer(response.engineerName, response.EngineerID, response.engineerEmail, response.engineerGitHub);
        EmployeeInfoList.push(engineer);
        OptionMenu();
    })

}

let AddIntern = () => {

    inquirer    
    .prompt([
        {
            type: "input",
            message: "What is the intern's name?",
            name: "internName",
            // validate if input is recieved
            validate: internInput => {
                if(internInput){
                    return true;
                }
                else{
                    console.log("Please enter intern's name!")
                    return false;
                }
            }

        },
        {
            type: "input",
            message: "What is the intern's ID?",
            name: "internID",
            // validate if is number
            // source: https://www.w3schools.com/jsref/jsref_isnan.asp
            validate: IDInput => {
                if(!isNaN(IDInput)){
                    return true;
                }
                else{
                    console.log("Please enter valid ID (positive number greater than 0)!")
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "What is the intern's email?",
            name: "internEmail",
            // validate if email is inputed in correct format
            validate: internEmailInput => {
                // source: https://www.w3resource.com/javascript/form/email-validation.php
                var mailValidate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if(internEmailInput.match(mailValidate)){
                    return true;
                }
                else{
                    console.log("Please enter valid email!")
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "What is the intern's school?",
            name: "internSchool",
            // validate if input retured
            validate: internSchool => {
                if(internSchool){
                    return true;
                }
                else{
                    console.log("Please enter a school!")
                    return false;
                }
            }
        }
    ])
    .then((response) => {
        const intern = new Intern(response.internName, response.internID, response.internEmail, response.internSchool);
        EmployeeInfoList.push(intern);
        OptionMenu();
    })

}



AskManager();

const FinishedTeam = (EmployeeInfoList) => {
    // TODO: Create a function to write README file

    //write to README.md with anything I pass into readMeInfo
    let GeneratedHTML = generateMarkdown(EmployeeInfoList);
    fs.writeFile("dist/index.html", GeneratedHTML, (err) =>
    err ? console.error(err) : console.log('Success!')
    );
  
}
