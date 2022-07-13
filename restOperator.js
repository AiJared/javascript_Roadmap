// The rest operator is (...) that can be used in place of arguments in a function
// The good part is with a rest operator, you can call more values in the function
const sum = (function () {
    return function sum(...args) {
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3, 4));