// Defining a variable
var myVariable = "This is a variable";
var myName = "My name is Jared";
var myCourse = "I take Bachelors degree in Information Technology";
var myInstitution = "Taita Taveta University"; 
var myCareer = "I am a Software Engineer";
console.log(myVariable);
console.log(myName);
console.log(myCourse);
console.log(myInstitution);
console.log(myCareer);

// Using a variable
var number1 = 5; // we defined a variable and assigned 5 to it
number1 = 3; // we cahnged that variable's value to 3
console.log(number1);
//window.alert(number1);

// To add, subtract, multilpy divide etc, we do like so:
number1 = number1 + 5;
number1 = number1 - 6;
var number2 = number1 * 10;
var number3 = number2 / number1;
console.log(number1);
console.log(number2);
console.log(number3);

// We can also add strings which will concate them or put them together
var myString = "I am a " + "string!";
console.log(myString);
var herName = "Mercy " + "Ayuma";
console.log(herName);

//Types of variables
var myInteger = 12; // 32 bit number (from -2,147,483,648 to 2,147,483,648)
var myLong = 931014419482; // 64 bit number
var myFloat = 5.5; // 32 bit floating-poit (decimal)
var myDouble = 931014419482.22; // 64 bit floating-point number
var myBoolean = true; // 1 bit true/fale (0,1)
var myBoolean2 = false;

var myNotANumber = NaN;
var NaN_Example = 0/0; // NaN: Division by zero is not possible

var notDefined; // undefined: we didin't define it to anything yet
var myNull = null;

// Arrays and Objects
var myArray = []; // empty array

// An array is a set of variables. For example
var favoriteFruits = ["apple", "orange", "strawberry"];
var carsInParkingLot = ["Toyota", "Ferrari", "Lexus"];
var employees = ["Billy", "Bob", "Joe"];
var primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
var randomVariables = [2, "any type works", undefined, null, true, 2.51];
console.log(randomVariables[0]); // 0 is the first element of an array, in this case the value is "zero"

// An object is a group of values, unlike arrays, we can do something better than them:
myObject = {};
john = {firstname: "John", lastname: "Doe", fullname: "John Doe"};
billy = {
    firstname: "Billy",
    lastname: undefined,
    fullname: "Billy"
};
console.log(john);
console.log(john.firstname);
console.log(john.lastname);
console.log(john.fullname);
console.log(billy.firstname);