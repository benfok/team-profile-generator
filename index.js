const inquirer = require('inquirer');
const { managerPrompts, employeePrompts } = require('./lib/prompts');
const { pageHtml, contactCard } = require('./src/createHtml');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');

// array to collect employees entered
let companyName;

// string to hold the HTML code for the employee cards:
let employeeCardsHtml = '';

// function to run the questions in the cmd line
const startQuestions = () => {
    inquirer.prompt(managerPrompts)
       .then(({company, managerName, managerId, managerEmail, officeNumber}) => {
            // store company name at front of employees array
            companyName = company;
            // create new manager object and push to employees array
            const teamManager = new Manager(managerName, parseInt(managerId), managerEmail, parseInt(officeNumber));
            const html = contactCard(teamManager.getRole(), teamManager.getName(), teamManager.getId(), teamManager.getEmail(), `<i class="fa-solid fa-clipboard-list"></i>`, 'Office Number: ', teamManager.officeNumber)
            employeeCardsHtml += html;
            moreQuestions();
         })
        .catch((error) => {
             console.log(error);
        });
};

const moreQuestions = () => {
    inquirer.prompt(employeePrompts)
       .then(({ addMore, name, id, email, github, school }) => {
            if(addMore === 'done') {
                console.log('Thanks for entering your team information!')
                const str = pageHtml(companyName, employeeCardsHtml);
                createIndexHtml(str);
                return;
            } else if (addMore === 'Engineer') {
                        const newEngineer = new Engineer(name, parseInt(id), email, github);
                        const html = contactCard(newEngineer.getRole(), newEngineer.getName(), newEngineer.getId(), newEngineer.getEmail(), `<i class="fa-solid fa-code-branch"></i>`, 'GitHub Profile: ', `<a href="https://github.com/${newEngineer.getGithub()}" target="_blank">${newEngineer.getGithub()}</a>`)
                        employeeCardsHtml += html;
                            } else { 
                            const newIntern = new Intern(name, parseInt(id), email, school);
                            const html = contactCard(newIntern.getRole(), newIntern.getName(), newIntern.getId(), newIntern.getEmail(), `<i class="fa-solid fa-graduation-cap"></i>`, 'School: ', newIntern.getSchool())
                            employeeCardsHtml += html;
                 };
            moreQuestions();
        })
        .catch((error) => {
             console.log(error);
        });
};

startQuestions();


const createIndexHtml = (str) => {
    fs.writeFile('./dist/index.html', str, (error) => {
        if (error) {
            console.log(error);
        }
        console.log('\nTeam profile created!');
    });
};