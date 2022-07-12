var ourAray = [];

for (var i = 0; i < 5; i++){
    ourAray.push(i);
}

console.log(ourAray);

var myArray = [];
 for (var a = 1; a < 6; a++){
    myArray.push(a);
 }
 console.log(myArray);

 // Iterating Even numbers with a For Loop
var ourAray = [];

for (var i = 0; i < 10; i += 2) {
    ourAray.push(i);
}

console.log(ourAray);

// Iterating Odd numbers using for loop
var myArray = [];

for (var i = 1; i < 10; i += 2) {
    myArray.push(i);
}

console.log(myArray);

// Count Backwards using a for loop
var ourAray = [];

for (var i = 10; i > 0; i--) {
    ourAray.push(i);
}

console.log(ourAray);

// Counting odd numbers backward using for loop
var myArray = [];

for (var i = 9; i > 0; i-=2) {
    myArray.push(i);
}
console.log(myArray);

// Counting even numbers backward using for loop
var ourAray = [];

for (var i = 10; i > 0; i -= 2) {
    ourAray.push(i);
}

console.log(ourAray);

// Iterating through an array with a For Loop
var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
    ourTotal += ourArr[i];
}

console.log(ourTotal);

var myArr = [2, 3, 4, 5, 6];
var myTotal = 0;

for (var i = 0; i < myArr.length; i++) {
    myTotal += myArr[i];
}
console.log(myTotal);

// Nesting for loops for nested array
function multilpyAll(arr) {
    var product = 1;

    for (var i=0; i < arr.length; i++){
        for (var j=0; j < arr[i].length; j++){
            product *= arr[i][j];
        }
    }
    return product;
}

var product = multilpyAll([[1,2], [3,4], [5,6,7]]);
console.log(product);