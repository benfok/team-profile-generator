const inquirer = require('inquirer');
const { managerPrompts, prompts } = require('./lib/prompts');
const { roleData, html, contactCard } = require('./lib/createHtml');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// array to collect employees entered
const employees = [];
console.log(employees);

// array to hold the HTML code for the employee cards:
const employeeCardsHtml = [];

// function to run the questions in the cmd line
const startQuestions = () => {
    inquirer.prompt(managerPrompts)
       .then(({company, managerName, managerId, managerEmail, officeNumber}) => {
            // store company name at front of employees array
            employees.push(company);
            // create new manager object and push to employees array
            const teamManager = new Manager(managerName, parseInt(managerId), managerEmail, parseInt(officeNumber));
            employees.push(teamManager);
            moreQuestions();
         })
        .catch((error) => {
             console.log(error);
        });
};

const moreQuestions = () => {
    inquirer.prompt(prompts)
       .then(({ addMore, name, id, email, github, school }) => {
            if(addMore === 'done') {
                console.log(employees);
                // generateHtml();
            } else {
                if (addMore === 'Engineer') {
                    const newEngineer = new Engineer(name, parseInt(id), email, github);
                    employees.push(newEngineer);
                 } else { 
                    const newIntern = new Intern(name, parseInt(id), email, school);
                    employees.push(newIntern);
                 };
                moreQuestions();
            }
        })
        .catch((error) => {
             console.log(error);
        });
};

startQuestions();






// prior code

const createCards = (employeesArray) => {
    employeesArray.forEach(({role, name: employeeName, id, email}) => {
        const info = collectRoleData(role);
        employeeCardsHtml.push(contactCard(role, employeeName, id, email, info.icon, info.roleKey)); // need to add keyValue somehow
        console.log(employeeCardsHtml);
    })
}

const collectRoleData = role => {
    for (i = 0; i < roleData.length; i++) {
        if (roleData[i].includes(role)) {
            const icon = roleData[i][1];
            const roleKey = roleData[i][2];
            return { icon, roleKey };
        }
    }
}



        // // if the user prompted to add another employee, push the current answers to the array then restart the questions
        // if(answers.restart) {
        //     employees.push(answers);
        //     runQuestions();
        // } else {
        // // else push the current answers to the array and run the code to create the HTML
        //     employees.push(answers);
        //     console.log('Thank you for entering your employees');
        //     console.log(employees);
        //     createCards(employees);
        //     // run code to create file
        // }