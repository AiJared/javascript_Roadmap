/*
We have the ability to convert data types in Javascript using various methods.
However, unlike most other languages, Javascript has the ability to automatically
convert them automatically on its own. Take a look at the examples below.
*/

let nr = 2;
let nr2 = "2";
console.log(nr * nr2);

/*
As you can see in the output logs, javascript just converted the nr2 from
a string to a number then multiplied them to give us 4. However, we must
be careful with this because if we for example try to added them together
using the + operator, instead of perfoming a sum operation, it will do a 
concatenation operation because + is used to concatenate two strings together.
So Javascript would convert nr into a string then give us "22"
*/

console.log(nr + nr2);