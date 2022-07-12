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
