const isAnagram = require('./anagram');

test('isAnagram function exists', () => {
    expect(typeof isAnagram).toEqual('function');
});

test('"cinema" is an anagram of "iceman"', () => {
    expect(isAnagram('cinema', 'iceman')).toBeTruthy();
});

test('"dog" is an anagram of "iceman"', () => {
    expect(isAnagram('dog', 'iceman')).toBeFalsy();
})