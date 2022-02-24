const Manager = require('../lib/Manager');

describe('Manager', () => {

    it('should construct a new object including an office number validated to type of number', () => {
        const newManager = new Manager('Tom', 888, 'manager@test.com', 4354);

        expect(newManager.officeNumber).toEqual(4354);
    });

    it('should throw an error if an invalid office number is provided', () => {

        expect(() => {new Manager('Tom', 888, 'manager@test.com', '4354')}).toThrow() &&
        expect(() => {new Manager('Tom', 888, 'manager@test.com', '')}).toThrow();
    });

    it('should return Manager when the getRole() function is called', () => {
        const newManager = new Manager('Tom', 888, 'manager@test.com', 4354);

        expect(newManager.getRole()).toEqual('Manager');
    });
}); 

