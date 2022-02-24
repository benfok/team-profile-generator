
const Employee = require('../lib/Employee');

describe('Employee', () => {

    it('should construct a new object with name, id and email', () => {
        const newEmployee = new Employee('Ben', 1234, 'test@test.com');
        
        expect(newEmployee).toEqual({ name: 'Ben', id: 1234, email: 'test@test.com', role: 'Employee' });
    });        

    it('should throw an error if an invalid name, id or email is passed as an argument', () => {
       
        expect(() => {new Employee('', 1234, 'test@test.com')}).toThrow() &&
        expect(() => {new Employee('Ben', '1234', 'test@test.com')}).toThrow() &&
        expect(() => {new Employee('Ben', 1234, 'test.com')}).toThrow();
    });
    
    it('should return the employee name when I run getName()', () => {
        const newEmployee = new Employee('Ben', 1234, 'test@test.com');
        
        expect(newEmployee.getName()).toEqual('Ben');
    });
    
    it('should return the employee ID when I run getId()', () => {
        const newEmployee = new Employee('Ben', 1234, 'test@test.com');
        
        expect(newEmployee.getId()).toEqual(1234);
    });

    it('should return the employee email when I run getEmail()', () => {
        const newEmployee = new Employee('Ben', 1234, 'test@test.com');
        
        expect(newEmployee.getEmail()).toEqual('test@test.com');
    });

    it('should return the role Employee when I run getRole()', () => {
        const newEmployee = new Employee('Ben', 1234, 'test@test.com');
        
        expect(newEmployee.getRole()).toEqual('Employee');
    });

});