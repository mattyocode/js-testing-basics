const chunkArray = (arr, len) => {
    // Initialise chunked arr
    const chunkedArr = [];

    // Loop through arr
    arr.forEach(val => {
        // Get last element
        const last = chunkedArr[chunkedArr.length - 1];
        // Check if last and and if last length is equal to chunk length
        if (!last || last.length === len) {
            chunkedArr.push([val]);
            } else {
            last.push(val);
            }
    });

    return chunkedArr;
};

module.exports = chunkArray;