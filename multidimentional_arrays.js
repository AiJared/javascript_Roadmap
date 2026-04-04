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

/*
We can create an array of already existing arrays. We call it
two-dimentional array. We can do it like this.
*/

let arrOfArrays2 = [[1,2,3], [4,5,6], [7,8,9]];

/*
If we want to access the element of any of the inner arrays in the
array above for example, we will have to specify the index position
twice, the first one being that of the array itself and the second one
is for the element itself.
*/
let value1 = arrOfArrays2[0][1];
console.log(value1);

let value2 = arrOfArrays2[2][2];
console.log(value2);

/*
As you can see the first one takes the second element of the first
array and second takes the third element of the third array.

And it doesn't stop there, it can go way deeper than that. Let's
demonstrate this well by creating an array of our array of arrays.
We are simply going to store this array three times in another
array.
*/

arrOfArraysOfArrays = [arrOfArrays, arrOfArrays, arrOfArrays];
console.log(arrOfArraysOfArrays);

/* Let's try to get the middle element which is 5 and it is also
located in the second array which is the middle array of the second
array that is also in the middle.
Confusing? Well we have three arrays each of which is a multidimensional
array and they are all in one array, get it now?
*/
let middleValue = arrOfArraysOfArrays[1][1][1];
console.log(middleValue);

/*
The first step is to get the second array of arrays which is index
1, then we get the second array inside of it which is also in index
1 then finally we get the it's second value which again is in index
1.
*/