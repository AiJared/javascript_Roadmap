/*
When working with null and undefined data types it can be difficult to know
the data type you are dealing with. That's where typeof comes in. You can
use it to determine which data type it is by entering typeof space then the
variable in question or the variable in question in brackets. Let's take
a look at some examples below. 
*/

testVariable = 1;
variableTestType1 = typeof testVariable;
variableTestType2 = typeof (testVariable);
console.log(variableTestType1);
console.log(variableTestType2);

/*
As you can see in the output logs, both say it is a number type. Because
typeof isn't a method but an operator, it doesn't require a bracket. However,
using brackets makes your code easier to read. Check the code below.
*/

let str = "Hello";
let nr = 7;
let bigNr = 12345678901234n;
let bool = true;
let sym = Symbol("unique");
let undef = undefined;
let unknown = null;

console.log(typeof str);
console.log(typeof nr);
console.log(typeof bigNr);
console.log(typeof bool);
console.log(typeof sym);
console.log(typeof undef);
console.log(typeof unknown);

/*
When you look at the output logs of the code above you will notice that all
the types were identified correctly except for the null type. It was identified
as "object". This is a bug that has existed for a while now and cannot be
removed due to backward compatibility problems.
*/