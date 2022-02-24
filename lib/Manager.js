const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = 'Manager';
        if (typeof officeNumber !== 'number') {
            throw new Error('Please enter numbers only for office number');
        }
    }
}

module.exports = Manager;