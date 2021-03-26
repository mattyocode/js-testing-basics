const { TestScheduler } = require('jest');
const functions = require('./functions');

// setup and teardown examples for db connection in testing
// before each test
// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());
// before each test run (once)
// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log('DB initialised...');
// const closeDatabase = () => console.log('DB closed...');

// toBe...

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


// check less than and greater than
test('Should be under 1600', () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});

test('Should be over 1600', () => {
  const load1 = 800;
  const load2 = 900;
  expect(load1 + load2).toBeGreaterThan(1600);
});

// Regex tests
test('There is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('There is an I in team', () => {
  expect('teamI').toMatch(/I/);
});

// Arrays
test('Admin should be in usernames', () => {
  usernames = ['matt', 'r2d2', 'admin'];
  expect(usernames).toContain('admin');
});

// Async data tests 

// Promise - requires expect.assertions AND return to work
test('User fetched name should be Leanne Graham', () => {
  expect.assertions(1);
  return functions.fetchUser()
    .then(data => {
      expect(data.name).toEqual('Leanne Graham');
    })
});

// Async Await
test('User fetched name should be Leanne Graham', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
});