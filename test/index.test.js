const { capitalizeWords, filterActiveUsers, logAction } = require('../index')

// Test for captalizeWords 
describe( 'capitalizeWords', () => {
    test( 'capitalizes each word in a normal sentence', () => {
        expect(capitalizeWords('hello world')).toBe('Hello World');
    });
    test('returns an empty string when input is empty', () => {
        expect(capitalizeWords('')).toBe('');

    });

    test('captalizes a single word' , () => {
        expect(capitalizeWords('javascript')).toBe('Javascript');
    });
});

// tests for filterActiveUsers
describe('filterActiveUsers' , () => {
    test('returns only active users from mixed array' , () => {
        const users = [
            {name: 'Alice', isActive: true},
            {name: 'Bob', isActive: false},
            {name: 'Carol', isActive: true},

        ];
        const result = filterActiveUsers(users);

        expect(result).toEqual([
            {name: 'Alice', isActive: true},
            {name: 'Carol', isActive: true}
        ]);

    });

    test('returns an empty array when all users are inactive', () => {
        const users = [
            {name: 'Alice', isActive: false },
            {name: 'Bob', isActive: false},
        ];
        expect(filterActiveUsers(users)).toEqual([]);

    });
    test('returns an empty array when given an empty array' , () =>{
        expect(filterActiveUsers([])).toEqual([]);

    });
});

//tests for logAction
describe('logAction', () => {
    test('returns a formatted log string for valid inputs', () => {
        const result = logAction('login', 'Alice');

        //Checking that important text is there
        expect(result).toMatch('User Alice performed login at');
        //ISO like timestamp check at the end
        expect(result).toMatch(/User Alice performed login at .*T.*Z$/);

    });

    test('throws an error when action is missing', () => {
        expect(() => logAction('', 'Alice')).toThrow('Both action and username are required');

    });

    test('throws an error when username is missing', () => {
        expect(() => logAction('login', '')).toThrow('Both action and username are required');
    });
});
