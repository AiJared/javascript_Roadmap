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

/*
This might seem straightforward but not every conversation is like that,
especially if we are working with null and empty strings. Let's take a look
at the examples below.
*/

let nullToNr = null;
nullToNr = Number(nullToNr);
console.log("null", nullToNr, typeof nullToNr);

let strToNr2 = "";
strToNr2 = Number(strToNr2);
console.log("empty string", strToNr2, typeof strToNr2);

/*
As you can see in the output logs, conversation of null and empty string to
a number returns to 0. This is a choice that was made by the makers of 
Javascript.

Now let's try to convert a string that can't be converted to a number to Number
and see what happens.
*/

let strToNr3 = "hello";
strToNr3 = Number(strToNr3);
console.log(strToNr3, typeof strToNr3);

/*
As you can see in the logs, it return NaN. Here, any string can't be converted
to number by simply removing the quotes is returned as not a number.

Now let's see how converting string to boolean works out.
*/

let strToBool2 = "false";
strToBool2 = Boolean(strToBool2);
console.log(strToBool2, typeof strToBool2);

let strToBool3 = "";
strToBool3 = Boolean(strToBool3);
console.log(strToBool3, typeof strToBool3);

/*
As you can see in the logs, converting any string to boolean returns true
except for the empty string.
*/