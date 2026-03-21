/*
Operators come in handy when we want to work with variables. They help with
different modifications including calculations and comparisons. They are
called operators because we use them to perform operations on our variables.
*/

// Arithmetic Operators
/*
These are used for mostly mathematical tasks.
*/

// Let's start with addition
/*
This is straightforwad with numbers. We use the + operator to add two 
numbers together.
*/

let nr1 = 10;
let nr2 = 20;
let result1 = nr1 + nr2;

/*
However, the + operator can also be used to concatenate two strings together
in Javascript, check out the example below. Note the added space after "Hello "
to ensure space between it and the next string.
*/

let str1 = "Hello ";
let str2 = "Jared";
let result2 = str1 + str2;

// Next is Subtraction
/*
Subtraction works as well as we would expect it to with numbers. It uses 
the - operator. However, it behaves differently if we introduce a string that
cannot be converted into a number, check this out.
*/

let nr3 = 20;
let nr4 = 4;
let result3 = nr3 - nr4;

let str3 = "Hi";
let nr5 = 3;
let result4 = str3 - nr5;

console.log(result3, result4);

/*
As you will in the output logs, the first one successfully subtracts 4 from 20
and returns 16 but the second one returs NaN because the string cannot be
converted to a number.
*/