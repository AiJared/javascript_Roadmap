// Array allows one to store several pieces of data in one place as shown in the code below
// Array uses square brackets '[]' and the data to be store is inside the bracket
// Every element in the array is separated by a comma
// Elements in an array can be of any data type and you mix data types inside an array
var ourArray = ["John", 23];
console.log(ourArray);
var myArray = ["Quicny", 1];
console.log(myArray);

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