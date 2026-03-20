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

/*
There are three conversation methods; String(), Number() and Boolean().
The first one converts a variable to a string. It puts quatation marks on
any variable really including undefined and a null and makes it a string.
The second one converts variables to number. If the variable can't be converted
it returns NaN (not a number). The third one converts variables to boolean
except null, undefined, 0 (number), empty string and NaN. Let's see them in
action below.
*/

let nrToStr = 6;
nrToStr = String(nrToStr);
console.log(nrToStr, typeof nrToStr);

let strToNr = "12";
strToNr = Number(strToNr);
console.log(strToNr, typeof strToNr);

let strToBool = "Any string will be true";
strToBool = Boolean(strToBool);
console.log(strToBool, typeof strToBool);