// Multidimentional Arrays.

/*
We know now from "Arrays.js" that arrays can contain any data type
and that includes even "arrays". An array can hold an array which
inturn holds an array. This is called a "Multidimentional Array".
It sounds complicated but it is simply an array of arrays.
*/
let someValues1 = [1, 2, 3];
let someValues2 = [4, 5, 6];
let someValues3 = [7, 8, 9];

let arrOfArrays = [someValues1, someValues2, someValues3];
console.log(arrOfArrays);