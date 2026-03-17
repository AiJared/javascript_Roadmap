// Primitive Data Types
/*
Unlike C and C# for example, javascript doesn't require explicitly
declaring the data type of a value. It understands and assigns one
internally. But there is a distinction between primitive data types and
other more complex data types when it comes to declaring the.
Now there are primitive data types and other more complex types but the
primitive ones include Number, BigInt, String, Boolean, Symbol, Undefined
and null.
You will notice a bit of a difference here for example C doesn't have Symbol,
undefined or null for that matter and it has int not number.
In javascript 5 is a number, in C it's int.
*/

// String
/*
A string is used to store a sequence of characters. There are different
ways to declare a string:
1. Single quotes.
2. Double quotes.
3. Backticks: special template strings in which you can use variables directly.
The single and double quotes can both be used like this:
*/

let singleString = 'Hi, there!';
let doubleString = "How are you doing?";

/*
Now a string begins with the quote and ends with the next immediate quote so
a colde like:
let singleString = 'let's learn Javascript
would through an error because the compiler would only understand let.

In a string backtick, you can point to variables and the variable's value
will be substituted in it's place as show below.
*/

let language = "Javascript";
let message = `Let's learn ${language}`;
console.log(message);

// Escape Characters
/*
An escape character helps an interpreter recognize a specific character as
part of the output for example an apostrophe which would otherwise be seen
as a quote closing a string. Now it does way more than just that though.
In javascript that escape character is a backslash.
Let's look at the example below.
*/

let str1 = "What's your name? Is it \"Mike\"?";
let str2 = 'What\'s your name? Is it "Mike"?';
console.log(str1);
console.log(str2);

/*
As I said earlier, the escape character can be used for varous reasons.
For example inserting a new line or even adding in the real backslash.
*/

let str3 = "New \nline";
let str4 = "This contains a backslassh \\";
console.log(str3);
console.log(str4);

// Numbers
/*
This is one of those areas where Javascript differs with most other languages.
The numbers type represent well, mnumbers. Whether integers, decimals,
hexadecimals, exponentials, octal and binary numbers.
Most other languages store each number type differently, for example whole
numbers as integers, decimals as floats and so forth.
The example below demonstrates how Javascript does it.
*/

let intNr = 1;
let decNr = 1.5;
let expNr = 1.4e15;
let octNr = 0o10 // decimal version would be 8
let hexNr = 0x3E8 // decimal version would be 1000
let biNr = 0b101 // decimal version would be 5

/*
All the above are of the number data type. However, you might need to represent
an even bigger number. That's where the data type below comes in.
*/

// BigInt
/*
The limits of the number type are within 2^53 and -2^53. If you need to 
store a bigger number or a much smaller number you would need the BigInt
type. A BigInt type can be recognized by the postfix n. Below is an example
*/

let bigNr = 90071992547409920n;

/*
If we try to add a BigInt with a number for example, it will throw a
TypeError. We cannot mix up a BigInt with a number when doing operations.
BigIn can only work with another BigInt.
*/