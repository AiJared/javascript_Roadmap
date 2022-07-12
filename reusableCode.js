// functions allow as to create a reusable code in javascript
// example
function ourReusableFunction(){
    console.log("Heyya, World");
}
ourReusableFunction();
// if we call that function several times it will repeat it multiple times as shown below
ourReusableFunction();
ourReusableFunction();

function reusableFunction(){
    console.log("Hi World")
}
reusableFunction();

// Passing values to functions with Arguments
function ourFunctionWithArgs(a, b){
    console.log(a - b);
}
ourFunctionWithArgs(10, 5);

function functionWithArgs(a, b){
    console.log(a + b);
}
functionWithArgs(10, 5);

// local scope variables
function myLocalScope(){
    var myvar = 5;
    console.log(myvar);
}
myLocalScope();

// console.log(myVar); will bring an error because the variable is defined locally inside that function and not globally
// Global vs local scope variables
var outerWear = "T-Shirt"; // Global variable because it is outside a function

function myOutfit(){
    var outerWear = "sweater"; // local variable because it is inside a function

    return outerWear; // return our local variable
}

console.log(myOutfit()); // it will output our local variable
console.log(outerWear); // it will output our global variable

// return a value from a function using the return keyword
function minusSeven(num){
    return num -7;
}

console.log(minusSeven(10));

function timesFive(num){
    return num * 5;
}
console.log(timesFive(5));

// 