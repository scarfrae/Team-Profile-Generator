//function that takes in array of emplyees and filters based on type
//once filtered have three seperate arrays: manager, engineer, intern
//for each elemetn in those arrays create html card that is specific based on employee type
//note: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter\
//create html card
//push those cards to array of html snipits
//take array and inject it into final html template
//return html template

const ManagerCard = (data) => {
    return`
        <div class="card col-xs-6 col-sm-6 col-md-4 mt-1">
            <div class="card-header">
                <h3 class="card-title titleSection">${data.getName()}</h3>
                <h5 class="card-subtitle mb-2"><span class="material-icons">manage_accounts</span> ${data.getRole()}</h5>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${data.getId()}</li>
                    <li class="list-group-item">Email: ${data.getEmail()}</li>
                    <li class="list-group-item">Office Number: ${data.getOfficeNum()}</li>
                </ul>
            </div>
        </div>
    ` 
}

const EngineerCard = (data) => {
    return`

        <div class="card col-xs-6 col-sm-6 col-md-4 mt-1">
            <div class="card-header">
                <h3 class="card-title titleSection">${data.getName()}</h3>
                <h5 class="card-subtitle mb-2"><span class="material-icons">engineering</span> ${data.getRole()}</h5>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${data.getId()}</li>
                    <li class="list-group-item">Email: ${data.getEmail()}</li>
                    <li class="list-group-item">Office Number: ${data.getGithub()}</li>
                </ul>
            </div>
        </div>
    ` 
}

const InternCard = (data) => {
    return`

        <div class="card col-xs-6 col-sm-6 col-md-4 mt-1">
            <div class="card-header">
                <h3 class="card-title titleSection">${data.getName()}</h5>
                <h5 class="card-subtitle mb-2"><span class="material-icons">school</span> ${data.getRole()}</h5>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${data.getId()}</li>
                    <li class="list-group-item">Email: ${data.getEmail()}</li>
                    <li class="list-group-item">Office Number: ${data.getSchool()}</li>
                </ul>
            </div>
        </div>

    ` 
}
var EmployeeInformation = [];
let FilterArray = (EmployeeArray) => {
    const employeeEngineer = EmployeeArray.filter(employee => employee.getRole() === 'Engineer');
    console.log('filter infoE:', employeeEngineer);
    const employeeIntern = EmployeeArray.filter(employee => employee.getRole() === 'Intern');
    console.log('filter infoI:', employeeIntern);
    const employeeManager = EmployeeArray.filter(employee => employee.getRole() === 'Manager');
    console.log('filter infoM:', employeeManager);
// 1. split each employee based on type it is
// 2. take array of employee type and send each element through html card function
    var engineerCards = employeeEngineer.map(function(engineer) { 
    //take each engineer and send through html card function
    // console.log('EngineerCard', EngineerCard(engineer))
    return EngineerCard(engineer);
    });
//   console.log('engineerCards', engineerCards)
    var managerCards = employeeManager.map(function(manager) { 
    //take each engineer and send through html card function
    return ManagerCard(manager);
    
    });
//   console.log('managerCards', managerCards)
    var internCards = employeeIntern.map(function(intern) { 
    //take each engineer and send through html card function
    return InternCard(intern);
    });
//   console.log('internCards', internCards)


// var EmployeeInformation = [];
// EmployeeInformation.push(engineerCards, managerCards, internCards);
managerCards.map(manager => EmployeeInformation.push(manager))
engineerCards.map(engineer => EmployeeInformation.push(engineer))
internCards.map(intern => EmployeeInformation.push(intern))
// console.log('EmployeeInformation', EmployeeInformation);
const newEmployeeInfoArray = EmployeeInformation.join("");
return newEmployeeInfoArray;
  
// 3. take all arrays and put into <body> of final html template
// 4. write the function to html
}


function generateMarkdown(data) {
    // console.log('employee info', data)
    let EI = FilterArray(data);
    // console.log('filterData', EI);
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./style.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
</head>
<body>
    <header>
        <nav class="navbar navSection">
            <div class="container-fluid justify-content-center">
                <span class="headingSection navbar-brand mb-1"><h1>My Team<h1></span>
            </div>
        </nav>
    <header>
    <main>
        <div class="container">
            <div class="row justify-content-center">
                ${EI}
            </div>
        </div>     
    <main>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js" integrity="sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk" crossorigin="anonymous"></script>
</body>
</html>
  `
}
//export function that creates final html
module.exports = generateMarkdown;