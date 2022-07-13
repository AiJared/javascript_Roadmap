/* 
An arrow function is different from a normal function in many ways but does everything that a normal function does.
You declare the function name then use an arrow to show the return value.
That's it, you do not need to put curly braces as shown in the examples below
*/

const magic = () => new Date();
console.log(magic);

// Arrow functions with parameters
const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4]));

// Write higher order functions with arrow functions
const realNUmberArray  = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0);
    return squaredIntegers;
};

const squaredIntegers = squareList(realNUmberArray).map(x => x * x);
console.log(squaredIntegers);

// Write Higher Arrow Functions
const increment = (function() {
    return function increment(number, value = 1) {
        return number + value;
    };
})();
console.log(increment(5, 2));
console.log(increment(5));