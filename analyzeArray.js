function analyzeArray(arr) {
    let total = arr.reduce((sum, cur) => sum + cur, 0); 

    let average = total / arr.length;

    let max = Math.max(...arr);
    let min = Math.min(...arr);

    let length = arr.length;

    return {average, min, max, length};
}

module.exports = analyzeArray;