// null
/*
null i used for representing the intensional absence of an object value
and is a primitive value. Unlike undefined, it is not a property of the global object
It is equal to undefinde but not identical to it.
*/
null == undefined; // true
null === undefined; // false

// the typeof null is object
typeof null; // object

// to properly check if a value is null, compare it with the strict equality operator
var a = null;
a === null; // true

//Testing for NaN using isNaN()
isNaN(NaN); // true
isNaN(1); // false 1 is a number
isNaN(-2e-4); // false -2e-4 is a number
isNaN(true); // false: converted to 1, which is a number
isNaN(false); // false: converted to 0, which is a number
isNaN(null); // false: converted to 0 which is a number
isNaN(""); // false: converted to 0, which is a number
isNaN(" "); // false: converted to 0, which is a number
isNaN("45.3"); // false: string repreenting a number, converted to 45.3
isNaN("1.2e3"); // false: string representing a number, converted to 1.2e3
isNaN("Infinity"); // false: string representing a number, converted to infinity
isNaN(new Date); // false: Date object, converted to milliseconds since epoch
isNaN("10$"); // true: conversion fails, the dollar sign is not a digit
isNaN("hello"); // true: conversion fails, no digits at all
isNaN(undefined); // true: converted to NaN
isNaN(); // true: converted to NaN(implicitly undefined)
isNaN(function(){}); // true: conversion fails
isNaN({}); // true: conversion fails
isNaN([1, 2]); // true: converted to "1, 2" which can't be converted to a number
/*An arrays is considered NaN by isNaN() unless it only holds
one element whose string representation can be converted to a valid number*/
