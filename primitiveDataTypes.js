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

// Boolean
/*
As you know from also other programming languages, the boolean data type
only stores two values, "true" and "false". Nothing in between. This can
also be used to show "on/off" or "yes/no". It is applicable in programs
where we only have two options and nothing in between as shown below.
*/
let lightIsOn = true;
let itemIsDeleted = false;

// Symbol
/*
The symbol data type is brand new and was introduced in the ES6. It is used
when it is important that the variables are not equal if the data type and
the values are the same. Take a look at the example below.
*/

let strng1 = "Javascript is fun!";
let strng2 = "Javascript is fun!";

console.log("The two strings above are the same: ", strng1 === strng2);

let sym1 = Symbol("Javascript is fun!");
let sym2 = Symbol("Javascript is fun!");

console.log("The two symbols above are the same: ", sym1 === sym2);

/*
As you will see in the logs when you output the code above, the two symbols
are not the same even though both are strings and the values are the same.
The core importance of symbols is to bring uniqueness.
These symbol data types can be very handy as properties of objects which
we will see later.
*/

// Undefined
/*
Javascript is a very special programming language. Special in that you can
create a variable without a value and it will assign to it an "undefined"
data type.
*/

let unasigned;
console.log(unasigned);

/*
As you will see in the output logs, javascript returns "undefined".
You can also directly assign undefined to a variable but it is not adviced
to do so for a number of reasons, for example when checking whether two
variables are the same. If one variable is undefined and you have your own
manually defined variable as undefined, they will be considered equal. This
is a problem because if you are checking the equality of two variables you
want to make sure that they are actually equal, not just that they are 
undefined. This can make someone's pet's name and their last name might be
considered equal whereas they are just empty values.
*/