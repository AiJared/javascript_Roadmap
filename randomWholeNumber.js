// We can generate random whole numbers using Math.floor() and Math.random()
// Remember random() generates a number between 0 and 1
// This number could be zero but not one.
// So here we multiply a random generated number by 20 then round it up to get a random whole number
// This number could be between 0 and 20 but not 20
// Example
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

    return Math.floor(Math.random() * 10);
}

console.log(randomWholeNum());