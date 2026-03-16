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