const { TestScheduler } = require('jest');
const functions = require('./functions');

// 

test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to NOT equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

test('Should be falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy();
})

test('Should be truthy', () => {
  expect(functions.checkValue(1)).toBeTruthy();
})

// toEqual for objects or arrays

test('User should be Matt Oliver', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Matt',
    lastName: 'Oliver'
  });
});