// Declaring string variables and assigning values
var firstname = "Mercy";
var lastname = "Ayuma";
console.log(firstname);
console.log(lastname);
var myFirstName = "Jared";
var myLastName = "Otieno";
console.log(myFirstName);
console.log(myLastName);

//Escaping Literal Quotes in Strings
/* The backslash '\' is used to show that the string is continuing even after it is written after the closing
quotation mack as shown below */
var mystr = "I am am\" double quoted \"String inside\" double quotes";
console.log(mystr);
var str = "I am a\" programmer who \"codes in javascript\" and python";
console.log(str);

//Quoting strings with single quotes
/* Javascript also identifies strings using single quotes. This means that you can use single quotes to show that
the variable is a string and at the same time use double quotes inside that string for normal quotation as shown below.  */
var String = '<a href="http://www.example.com" target="_blank">Link</a>';

// Escape Sequences in strings
/*
CODE OUTPUT
\' = single quote
\" = double quote
\\ = backslash
\n = newline
\r = carriage return
\t = tab
\b = backspace
\f = form feed
Let us do an example to demonstrate the above escape sequences
*/
var string = "FirstLine\n\tSecondLine\nThirdLine";
console.log(string);
var Name = "Jared\tOtieno\nMercy\tAyuma";
console.log(Name);

//Concatnating strings with plus operator
var ourStr = "I am a string. "+"I am a string";
console.log(ourStr);
var mystr = "This is the start. "+"This is the end.";
console.log(mystr);

//Concatnating strings with plus equals operator
var sentence = "This is the first sentence. ";
sentence += "This is the second sentence.";
console.log(sentence);

//Constructing Strings with Variables
var ourName = "freecodecamp";
var Ourstr = "Hello our name is "+ ourName +", how are you?";
console.log(Ourstr);
var MyName = "Jared";
var MyStr = "My name is "+MyName+" and I am a programmer.";
console.log(MyStr);

//Appending Variables to Strings
var anAdjective = "awesome!";
var oustr = "FreecodeCamp is ";
oustr += anAdjective;
console.log(oustr);
var language = "javascript";
var coder = "Jared codes in ";
coder += language;
console.log(coder);

// Finding the length of a string
var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length
console.log(firstNameLength)

var lastNameLength = 0;
var lastName = "LoveLace";
lastNameLength = lastName.length;
console.log(lastNameLength);

var FirstNameLength = 0;
var FirstName = "Jared";
FirstNameLength = FirstName.length
console.log(FirstNameLength)

var LastNameLength = 0;
var LastName = "Otieno";
LastNameLength = LastName.length
console.log(LastNameLength)