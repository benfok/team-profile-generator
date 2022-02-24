const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.role = 'Engineer';
        if (github.length < 2 || typeof github !== 'string') {
            throw new Error('Please enter a valid GitHub username');
        }
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;