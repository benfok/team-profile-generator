const Engineer = require('../lib/Engineer');

describe('Engineer', () => {

    it('should construct a new object including an github username validated to a string of at least 2 characters', () => {
        const newEngineer = new Engineer('Sam', 4434, 'engineer@test.com', 'userName');

        expect(newEngineer.github).toEqual('userName');
    });

    it('should throw an error if an invalid user name is provided', () => {

        expect(() => {new Engineer('Sam', 4434, 'engineer@test.com', '')}).toThrow() &&
        expect(() => {new Engineer('Sam', 4434, 'engineer@test.com', 't')}).toThrow();
    });

    it('should return Engineer when the getRole() function is called', () => {
        const newEngineer = new Engineer('Sam', 4434, 'engineer@test.com', 'userName');

        expect(newEngineer.getRole()).toEqual('Engineer');
    });

    it('should return GitHub user name when the getGithub() function is called', () => {
        const newEngineer = new Engineer('Sam', 4434, 'engineer@test.com', 'userName');

        expect(newEngineer.getGithub()).toEqual('userName');
    });
}); 

