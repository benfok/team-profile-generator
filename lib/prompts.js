const managerPrompts = [
    {
        type: 'input',
        message: `What is the name of the company?`,
        name: 'company',
        // validate that a name of at least 1 character is entered
        validate(answer) {
            if (!answer) {
                return 'Please enter a company name';
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: `What is the team manager's name?`,
        name: 'managerName',
        // validate that a name of at least 1 character is entered
        validate(answer) {
            if (!answer) {
                return `Please enter the manager's name`;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: `What is the manager's ID number?`,
        name: 'managerId',
        // validate that a number is entered that is at least 1 or greater
        validate(answer) {
            if (isNaN(answer) || answer < 1) {
                return "Please enter a valid ID number";
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: `What is the manager's email address?`,
        name: 'managerEmail',
        // validate that the entry resembles an email address
        validate(answer) {
            if (/^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(answer)) {
                return true;
            } else {
                return 'Please enter a valid email';
            }
        }
    },
    {
        type: 'input',
        message: `What is the manager's office number?`,
        name: 'officeNumber',
        // validate that a number is entered that is at least 1 or greater
        validate(answer) {
            if (isNaN(answer) || answer < 1) {
                return 'Please enter a valid office number';
            } else {
                return true
            }
        }
    }
]






const employeePrompts = [
    {
        type: 'list',
        message: 'Do you wish to add more employees to the team?',
        name: 'addMore',
        choices: [
        // array of choices. Name and answers value can be different
            {name: 'No - Finish and Build My Team', value: 'done'},
            {name: 'Yes - Add an Engineer', value: 'Engineer'},
            {name: 'Yes - Add an Intern', value: 'Intern'}
        ],
        default: 'done'
    },
    {
        type: 'input',
        message: `What is this employee's name?`,
        name: 'name',
        // validate that a name of at least 1 character is entered
        validate(answer) {
            if (answer.length > 0) {
                return true;
            } else {
                return 'Please enter a valid name';
            }
        },
        when(answers) {
            return answers.addMore !== 'done';
        }
    },
    {
        type: 'input',
        message: `What is the employee's ID number?`,
        name: 'id',
        // validate that a number is entered that is at least 1 or greater
        validate(answer) {
            if (isNaN(answer) || answer < 1) {
                return "Please enter a valid ID number";
            } else {
                return true;
            }
        },
        when(answers) {
            return answers.addMore !== 'done';
        }
    },
    {
        type: 'input',
        message: `What is this employee's email address?`,
        name: 'email',
        // validate that the entry resembles an email address
        validate(answer) {
            if (/^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(answer)) {
                return true;
            } else {
                return 'Please enter a valid email';
            }
        },
        when(answers) {
            return answers.addMore !== 'done';
        }
    },
    {
        type: 'input',
        message: `What is this engineer's GitHub username?`,
        name: 'github',
        // validate that the string entered is at least 2 characters long
        validate(answer) {
            if (answer.length >= 2) {
                return true;
            } else {
                return 'Please enter a valid GitHub username';
            }
        },
        // only ask this when the check returns true
        when(answers) {
            return answers.addMore === 'Engineer';
        }
    },
    {
        type: 'input',
        message: `Where did this intern attend school?`,
        name: 'school',
         // validate that the string entered is at least 2 characters long
        validate(answer) {
            if (answer.length >= 2) {
                return true;
            } else {
                return 'Please enter a valid school name';
            }
        },
        // only ask this when the check returns true
        when(answers) {
            return answers.addMore === 'Intern';
        }
    }
];


module.exports = { managerPrompts, employeePrompts }