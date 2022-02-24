class Employee {
    // constructor function
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee';
        // validation code to ensure that a valid name, id and email are entered. Otherwise the object will not be created and an error will be thrown.
        if(typeof id !== 'number' || name.length < 1 || !/^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(email)) {
            throw new Error('Employee not created. Please enter a valid name, id number and email');
        }
    } 
 
    getName() {
        return this.name;
    }
 
    getId() {
        return this.id;
    }
 
    getEmail() {
        return this.email;
    }
 
    getRole() {
        return this.role;
    }
}

module.exports = Employee;