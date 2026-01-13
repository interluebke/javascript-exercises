const sumAll = function(i, j) {
    let arr = [];
    if (i === j) {
        return "ERROR";
    } else if (!Number.isInteger(i) || !Number.isInteger(j)) {
        return "ERROR";
    } else if (i < 0 || j < 0) {
        return "ERROR";
    } else if (i > j) {
        let k = i;
        i = j;
        j= k;
    } 
    for (let min = i; i <= j; i++) {
        arr.push(i);
    }
    return arr.reduce((acc, curr) => acc + curr);
};

// Do not edit below this line
module.exports = sumAll;
