const fibonacci = function(num) {
    number = Number(num);
    if (number === 0) return 0;
    if (number < 0) return "OOPS";
    let fib = [1];
    for (let i = 1; i <= number; i++) {
        if (fib.length === 1) {
            fib[i] = 1;
        } else {
            fib[i] = (fib[i - 1] + fib[i - 2]);
        }
    }
    return fib[number - 1];
};

// Do not edit below this line
module.exports = fibonacci;
