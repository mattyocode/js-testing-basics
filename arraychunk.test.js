const chunkArray = require('./arraychunk');

test('chunkArray function exists', () => {
    expect(chunkArray).toBeDefined();
});

test('Chunk array of 10 values with length of 2', () => {
    const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const len = 2;
    const chunkedArr = chunkArray(number, len);

    expect(chunkedArr).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
});