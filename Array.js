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

// Built-in length Property
/*
To know the total number of values/elements in an array we use the 
length property.
*/
colors = ["black", "Orange", "Pink"];
booleans = [true, false, false, true];
emptyArray = [];

console.log("The length of colors: ", colors.length);
console.log("The length of booleans: ", booleans.length);
console.log("The length of emtpyArray: ", emptyArray.length);

/*
Now let's finally take a look at that none-existent index we talked
about above, specifically adding new elements to it. 
*/
numbers = [12, 24, 36];
numbers[5] = 48;
console.log(numbers.length);
/*
In the logs you will notice that we have the length of the 
array "numbers" as 6, so what's happening here? What Javascript
just did is add our new element 48 at index 5 as we instructed it
then filled the middle index values starting at 2 all the way to
4 with emtpy items and still counted them. Take a look at the log
below
*/
console.log("numbers: ", numbers);
/*
Notice the log includes the first three numbers then an empty
part and finalizes with the one we added later.
*/

// Array Methods
/*
We have worked with one array property which is the length property.
In arrays, we also have methods and unlike properties which just
hold values, methods perform actions.
We also saw that we can add elements to an array by assigning them
to a new index position but that is not the recommended way of adding
elements since it can cause issues like accidentally overwriting an 
existing element or skipping certain index positions and creating
empty items. 
*/

// Adding and Replacing Elements
/*
We can add new elements to the array using the push method.
This method adds new elements to the end of the array.
*/
favoriteFruites = ["Mango", "Banana", "Pineapple"];
favoriteFruites.push("Apple");
console.log(favoriteFruites);
/*
Now check this out, the push method returns the length of the array
which we can store in a new variable and use it together with the push
method to add new elements to the end of the array.
*/
let lengthOfFavoriteFruites = favoriteFruites.push("Grapes");
console.log(favoriteFruites);
console.log("The length of favoriteFruites: ", favoriteFruites.length);
console.log("The length of favoriteFruites using the variable: ", lengthOfFavoriteFruites);

/*
Now if you wanted to add elements at a specific index, you would use
the splice() method. Check this out.
*/
let arrOfShapes = ["circle", "triangle", "rectangle", "Pentagon"];
arrOfShapes.splice(2, 0, "square", "trapezoid");
console.log(arrOfShapes);

/*
Now pay attention here, the slice methods takes three parameters,
the first parameter is the index position where you want to start
at in our case it is 2, the second parameter is the number of 
elements we want to delete starting at our previously defined 
starting index in our case it is 0 and finally the third parameter
is the elements themselves that we are inserting starting at the
start index in our case square and trapeziod.
So had placed 2 in the place of 0, it would have deleted rectangle and 
pentagon and replace them with square and trapezoid.
If we were to increase the second parameter to a number higher than
the array, it would replace those values that it can starting at the
specified starting index position ofcourse then just stop as soon as
as it runs out of values.
Another thing is that we can add another array to the existing array
using the concat() method. This way you can create an array of a 
concatenation of the two arrays. The elements of the first array
will be first then followed by the elements of the second array or the
one following the concat() method. Check this out.
*/
arr5 = [1, 2, 3];
arr6 = [4, 5, 6];
arr7 = arr5.concat(arr6);
console.log(arr7);

/*
The concat method can also be used to add values, both single values
and also multiple values using comma separation to an existing array.
*/
arr8 = arr7.concat(7, 8, 9);
console.log(arr8);

// Deleting Elements
/*
There are several ways in which you can delete elements from 
an array. Deleting the last element is done with pop().
*/
arr8.pop();
console.log(arr8);

/*
Deleting the first element can be done with shift().
*/
arr8.shift();
console.log(arr8);

/*
We saw how the splice() method adds elements to specific index
positions, it also deletes them starting with the specified
starting index position just as it adds them.
*/
arr8.splice(1, 3);
console.log(arr8);
/*
Remember that the splice() method took three parameters when used
to adding new elements right, when it comes to deleting it only
takes two, the first one is the starting index and the second one
is the number of elements to be deleted.

Now if you wish to delete an element and not change any of the later
indeces you can use the operator delete. It is not a method but
can change the value of a certain position to undefined.
*/
delete arr8[0];
console.log(arr8);

/*
The delete operator is useful if you want to retain the length
of the array for some reason.
*/

// Finding Elements
/*
To find elements in an array you will use the find() method and what
goes inside the find method is a function. That function will be
executed on all the elements of the array until it finds the element
or return undefined. In the code example below, we are writting
two functions to check for two different elements in the array.
The functions look different but they actually perform the same
task. 
*/
arr9 = [2, 6, 7, 8];
let findValue = arr9.find(function(e) {return e === 6});
let findValue2 = arr9.find(e => e === 10);
console.log(findValue, findValue2);
/*
The log above returns 6 and undefined because 6 is an element
in the array while 10 is not. A function can take an input then
work on it and return an output. In the case above, the two
functions took inputs 6 and 10, checked whether they exist in 
the array and then returned 6 and undefined respectively.
*/

// Finding the Index Position of an Element
/*
Now might also want to know the index position in which a specifc
element is at. To achieve that, you would use the indexOf() method.
If the element occurs more than once it will only return the first
occurance and if it doesn't, it will return -1.
*/
let findIndex = arr9.indexOf(6);
let findIndex2 = arr9.indexOf(10);
console.log(findIndex, findIndex2);
/*
If you want to find the next occurence for example of 2 in our array
above you can add an argument to the indexOf() method specifying where
it should start to search from.
*/
let findIndex3 = arr9.indexOf(6, 2);
console.log(findIndex3);
/*
The above will log -1 since 6 isn't in any index position starting
from 2 going forward.
Finally, we can find the last occurence using the lastIndexOf()
method.
*/
let animals = ["dog", "cat", "horse", "Platypus", "dog"];
let lastDog = animals.lastIndexOf("dog");
console.log(lastDog);
/*
The index value of the lastDog will be 4 since it is the 
last occurence.
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