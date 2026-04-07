/*
1. Create an array containing three values: 1, 2, and 3.
2. Nest the original array into a new array three times.
3. Output the value 2 from one of the arrays into the console.
*/
let arr = [1,2,3];
let arrayOfArrs = [arr, arr, arr];
let findValue = arrayOfArrs[1][1];
console.log(findValue);