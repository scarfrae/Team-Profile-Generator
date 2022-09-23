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
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${data.getName()}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${data.getRole()}</h6>
            <ul class="card-text"><li>"ID:" ${data.getId()}</li>
            <li>"Email:" ${data.getEmail()}</li>
            <li>"Office Number:" ${data.getOfficeNum()}</li></ul>
        </div>
    </div>
    ` 
}

const EngineerCard = (data) => {
    return`
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${data.getName()}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${data.getRole()}</h6>
            <ul class="card-text"><li>"ID:" ${data.getId()}</li>
            <li>"Email:" ${data.getEmail()}</li>
            <li>"Office Number:" ${data.getGithub()}</li></ul>
        </div>
    </div>
    ` 
}

const InternCard = (data) => {
    return`
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${data.getName()}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${data.getRole()}</h6>
            <ul class="card-text"><li>"ID:" ${data.getId()}</li>
            <li>"Email:" ${data.getEmail()}</li>
            <li>"Office Number:" ${data.getSchool()}</li></ul>
        </div>
    </div>
    ` 
}

const FilterArray = (EmployeeArray) => {
    const result = words.filter(word => word.length > 6);
// 1. split each employee based on type it is
// 2. take array of employee type and send each element through html card function
// 3. take all arrays and put into <body> of final html template
// 4. write the function to html
}

//export function that creates final html