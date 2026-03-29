// Array allows one to store several pieces of data in one place as shown in the code below
// Array uses square brackets '[]' and the data to be store is inside the bracket
// Every element in the array is separated by a comma
// Elements in an array can be of any data type and you mix data types inside an array
// Creating an Array
/*
There are two different ways of creating an array. One is recommended
and the second one isn't, check them out below.
*/

arr1 = new Array(1, 2, 3, 4); // first method
arr2 = [1, 2, 3, 4]; // Second method

/*
Now the first method isn't adviced because it comes with a lot of
issues, the second one, is both clean readable and straightup
creates an array we will issues that come with the first one in a
moment for example, if we try to create arrays of just single
values in them, the first method will do something unexpected,
check this out.
*/

arr3 = new Array(10);
arr4 = [10];
console.log(arr3);
console.log(arr4);

/*
If we log both arrays, the first one (arr3) will create an array 
of 10 undefined values while the second one (arr4) will create
an array of value 10. See why it is recommended to use the second
method now? So unless the goal is to create an array of undefined
values, just use square brackets.

Again as mentioned above, an array can have values of different
data types in it and it will store them as they are it won't try
to convert them. Below are some examples.
*/

var ourArray = ["John", 23];
console.log(ourArray);
var myArray = ["Quicny", 1];
console.log(myArray);
console.log(typeof ourArray[0]);
console.log(typeof myArray[1]);

/*
As you can see on logs, when you output the typeof each value
separately it is exactly what it is meant to be.
Now just like basic variables, we can also define arrays using
"const", if we do that, the array itself won't be able to be 
changed but we can change the values within it. Check out the
example below.
*/

const arr = ["hi there!"];
arr[0] = "new value";
console.log(arr[0]);
// arr = ["nope, now you are overwriting the entire array"];
/*
If you try to change the whole array that is declare with const,
you will get a "TypeError: Assignment to constant variable."
*/

// Accessing Elements
/*
Now I might have demonstrated it above a bit but did not explain
it, accessing elements of an array is easier really. You just 
need to specify the index position it is at. When you create an
array Javascript assigns each element an index position starting
from 0 for the first element. To access any element, all you have
to do is call the array put square brackets at the end and add the
index position inside of the square brackets. Check out the example
below.
*/
cars = ["Toyota", "Renault", "BMW"];
console.log(cars[0]); // This will log the first element(Toyota)
console.log(cars[1]); // This will log the second elemet(Renault)
console.log(cars[2]); // This will log the third element(BMW)

/*
Now in case we try to access an element using a negative index
position or an index position that is higher than what the array
has, it will log "undefined", Javascript doesn't throw errors 
for this.
*/

// Overwriting Elements
/*
In Javascript you can change/overwrite the values of specific
elements by accesing them via their index position and assigning
a new value to it.
*/
cars[0] = "Tesla";
console.log(cars[0]); // This will log Tesla because it overwrites Toyota
console.log(cars); // The array will start with Tesla as the first element

/*
Now remember when we try to access elements of negative index
positions and those of none-existent index value Javascript gives
us undefined right? If we try to overwrite with a negative index
position or a none-exsitent one, Javascript will add them to the 
array. I am not going to demonstrate in a live code or perhaps I
can put it as comment below:

cars[-1] = "Kia";
cars[3] = "Fiat";
console.log(cars[-1]);
console.log(cars[3]);

We will look it what is happening here later but for now just
know that this is not the recommended way of adding elements to
an array in Javascript.
*/


// Nested Arrays
/*A nested array is an array that have other arrays inside it
as it's elements. Those arrays that are inside this array also have
there own elements. An example of a nested array is shown by the 
code below
 */
var anArray = [["The universe", 23], ["Everythin", 101010]];
console.log(anArray);

var theArray = [["Bulls", 23], ["White sox", 45]];
console.log(theArray);

// Access Array data with Indexes
var ourData = ourArray[0];
console.log(ourData);
var myData = anArray[0][1];
console.log(myData);
var theData = theArray[1][0];
console.log(theData);

// Modify Array data with Indexes
anArray[1][0] = "Anything";
console.log(anArray);
theArray[0][1] = 50;
console.log(theArray);

// Manipulate Array with push
// The push function appends data to the end of an array
anArray.push(["Jared", "Javascript", "Programmer"]);
console.log(anArray);
theArray.push("React", "Frontend", ["Web", "Development"]);
console.log(theArray);

// Manipulate Arrays with pop
// The pop function removes the last data in the array
var removedFromanArray = anArray.pop();
console.log(anArray);
console.log(removedFromanArray);
var removedFromtheArray = theArray.pop();
console.log(theArray);
console.log(removedFromtheArray);

// Manipulate the Arrays with shift()
// the shift method removes the first data in the array
anArray[0] = "Kenya";
console.log(anArray);
var removedFromAnArray = anArray.shift();
console.log(anArray);
console.log(removedFromAnArray);

// Manipulating the array with unshift()
// unshift method adds an element to the beggining of the array
anArray.unshift("Happy");
console.log(anArray);
theArray.unshift("King");
console.log(theArray);