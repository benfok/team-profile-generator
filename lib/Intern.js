const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = 'Intern';
        if (school.length < 2 || typeof school !== 'string') {
            throw new Error('Please enter a valid school username');
        }
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;