const Intern = require('../lib/Intern');

describe('Intern', () => {

    it('should construct a new object including an school validated to a string of at least 2 characters', () => {
        const newIntern = new Intern('James', 7766, 'Intern@test.com', 'UW');

        expect(newIntern.school).toEqual('UW');
    });

    it('should throw an error if an invalid school name is provided', () => {

        expect(() => {new Intern('James', 7766, 'Intern@test.com', '')}).toThrow() &&
        expect(() => {new Intern('James', 7766, 'Intern@test.com', 't')}).toThrow() &&
        expect(() => {new Intern('James', 7766, 'Intern@test.com', 5566)}).toThrow();
    });

    it('should return Intern when the getRole() function is called', () => {
        const newIntern = new Intern('James', 7766, 'Intern@test.com', 'UW');

        expect(newIntern.getRole()).toEqual('Intern');
    });

    it('should return school name when the getSchool() function is called', () => {
        const newIntern = new Intern('James', 7766, 'Intern@test.com', 'UW');

        expect(newIntern.getSchool()).toEqual('UW');
    });
}); 

