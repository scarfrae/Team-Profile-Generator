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

//add engineer and add intern are really similar to addManager function
//once engineer and intern occur call option menu
//when selecting FinishedTeam write html file
//invoke whichever one I export from page.template(creating html one) and pass EmployeeInfoList



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
            message: "What is the engineer's name?",
            name: "engineerName",
            // validate: (Function) Receive the user input and answers hash. Should return true if the value is valid, and an error message (String) otherwise. If false is returned, a default error message is provided.
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
            message: "What is the engineer ID?",
            name: "EngineerID",
            // validate: (Function) Receive the user input and answers hash. Should return true if the value is valid, and an error message (String) otherwise. If false is returned, a default error message is provided.
            validate: IDInput => {
                if(IDInput){
                    return true;
                }
                else{
                    console.log("Please enter engineer's ID!")
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "What is the engineer's email?",
            name: "engineerEmail",
            // validate: (Function) Receive the user input and answers hash. Should return true if the value is valid, and an error message (String) otherwise. If false is returned, a default error message is provided.
            validate: engineerEmailInput => {
                if(engineerEmailInput){
                    return true;
                }
                else{
                    console.log("Please enter engineer's email!")
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "What is the engineer's github username?",
            name: "engineerGitHub",
            // validate: (Function) Receive the user input and answers hash. Should return true if the value is valid, and an error message (String) otherwise. If false is returned, a default error message is provided.
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
            // validate: (Function) Receive the user input and answers hash. Should return true if the value is valid, and an error message (String) otherwise. If false is returned, a default error message is provided.
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
            // validate: (Function) Receive the user input and answers hash. Should return true if the value is valid, and an error message (String) otherwise. If false is returned, a default error message is provided.
            validate: IDInput => {
                if(IDInput){
                    return true;
                }
                else{
                    console.log("Please enter intern's ID!")
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "What is the intern's email?",
            name: "internEmail",
            // validate: (Function) Receive the user input and answers hash. Should return true if the value is valid, and an error message (String) otherwise. If false is returned, a default error message is provided.
            validate: internEmailInput => {
                if(internEmailInput){
                    return true;
                }
                else{
                    console.log("Please enter intern's email!")
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "What is the intern's school?",
            name: "internSchool",
            // validate: (Function) Receive the user input and answers hash. Should return true if the value is valid, and an error message (String) otherwise. If false is returned, a default error message is provided.
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
  
//   function generateFile(questions){
//     inquirer
//     .prompt(questions)
//     // .then((response) => console.log(response))
//     .then((response) => writeToFile('./dist/README.md', response));
//   // return readmeData;
//   }
  
//   // TODO: Create a function to initialize app
//   function init() {
  
//     generateFile(questions);
  
    
//   }
  
//   // Function call to initialize app
//   init();
  
}
