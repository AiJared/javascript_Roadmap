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

// Understanding undefined value returned from a Function
// If you don't specify a return value, the return value will be undefined
var sum = 0; // this is a global variable
function addThree(){
    sum += 3; // we have not specified the return value so it will be undefined
}
console.log(addThree());

function addFive(){
    sum += 5;
}
console.log(addFive());

// Assignment with a return value
var changed = 0;

function change(num){
    return (num + 5) / 3;
}

changed = change(10);
console.log(changed);

var processed = 0;

function processArg(num){
    return (num + 3) / 5;
}
processed = processArg(7);
console.log(processed);

// Stand in Line
function nextInLine(arr, item){
    arr.push(item);
    return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// Boolean values: There are only two values (true and false)
// true and false are basically on and off
function booleanFunc(){
    return true;
}
console.log(booleanFunc());

// Conditional values with if statements
function trueOrFalse(wasThatTrue){
    if (wasThatTrue){
        return "Yes, that was true";
    }
    return "No, that was false";
}
console.log(trueOrFalse(true));

// Comparison with equallity operator
function testEqual(val){
    if (val == 12){
        return "Equal";
    }
    return "Not Equal";
}

console.log(testEqual(10));
console.log(testEqual(12));

// Comparison with strict equality operator (===)
function testStrict(val){
    if (val === 7){
        return "Equal";
    }
    return "Not Equal";
}
console.log(testStrict(7));
console.log(testStrict('7'));

// Practise comparing different values
function compareEquality(a, b){
    if (a === b){
        return "Equal";
    }
    return "Not Equal";
}

console.log(compareEquality(10, '10'));

// Comparison with the inequality operator
function testNotEqual(val){
    if (val != 99){
        return "Not Equal";
    }
    return "Equal";
}

console.log(testNotEqual(10));

// Strict inequality operator
function testStrictNotEqual(val){
    if (val !== 17){
        return "Not Equal";
    }
    return "Equal";
}
console.log(testStrictNotEqual(10));

// Comparison with logical greater than operator
function testGreaterThan(val){
    if (val > 100){
        return "Over 100";
    }
    return "10 or higher";
}

console.log(testGreaterThan(10));

// Comparison with greater than or equal to
function testGreaterOrEqual(val){
    if (val >= 20){
        return "20 or over";
    }
    
    if (val >= 10){
        return "10 or over";
    }

    return "less than 10";
}
console.log(testGreaterOrEqual(10));

// Comparison with less than operator
function testLessThan(val){
    if (val < 25){
        return "Under 25";
    }

    if (val < 55){
        return "Under 55";
    }

    return "55 or over";
}
console.log(testLessThan(10));

// comparison with less than or equal to operator
function testLessThanOrEqual(val){
    if (val <= 12){
        return "Smaller Than Or Equal to 12";
    }

    if (val <= 24){
        return "Smaller than or Equal to 24";
    }

    return "More than 24";
}
console.log(testLessThanOrEqual(10));

// Comparison with logical And Operator
function testLogicalAnd(val){
    if (val <=50 && val >=25){
        return "Yes";
    }
    return "no";
}
console.log(testLogicalAnd(10));

// Comparison with Or operator
function testLogicalOr(val){

    if (val < 10 || val > 20){
        return "Outside";
    }

    return "Inside";
}
console.log(testLogicalOr(15));

// Else statements
function testElse(val){
    var result = "";

    if (val > 5){
        result = "Bigger than 5";
    } else{
        result = "5 or smaller";
    }

    return result;
}
console.log(testElse(4));

// Else if statements
function testElseIf(val){
    if (val > 10){
        return "Greater than 10";
    } else if(val < 5){
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}
console.log(testElseIf(7));

//Logical order is else if statements
function orderMyLogic(val){
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10){
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    } 
}
console.log(orderMyLogic(3));

// Chaining If Else Statements
function chainIfElse(val){
    if (val < 5){
        return "Tiny";
    } else if(val < 10){
        return "Small";
    } else if (val < 15){
        return "Medium";
    } else if (val < 20){
        return "Large";
    } else{
        return "Huge";
    }
}
console.log(chainIfElse(12));

// Lets do some practise
function prac(name){
    if (name == "Jared"){
        return "firstname";
    } else if (name == "Otieno"){
        return "lastname";
    } else {
        return "Invalid name";
    }
}
console.log(prac("Jared"));
console.log(prac("Otieno"));
console.log(prac("Kim"));

function prac1(number){
    if (number >= 1 && number <=10){
        return "The number is between 1 and 10";
    }
}
console.log(prac1(7));

function prac2(val){
    if (val == 0 || val == 5){
        return "The value is either 0 or 5";
    }
}
console.log(prac2(5));

// Golf code
var names = ["Hole-in-one", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home"];
function glofScore(par, strokes){
    if (strokes == 1){
        return names[0];
    } else if (strokes <= par -2){
        return names[1];
    } else if (strokes <= par -1){
        return names[2];
    } else if (strokes <= par){
        return names[3];
    } else if (strokes <= par + 1){
        return names[4];
    } else if (strokes <= par + 2){
        return names[5];
    } else if (strokes <= par + 3){
        return names[6];
    } else{
        return "Invalid";
    }
}
console.log(glofScore(5, 4));

// Switch Statements
function caseInSwitch(val){
    var answer = "";
    switch(val){
        case 1:
            answer = "apha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    return answer
}
console.log(caseInSwitch(1));

// Default option id switch statement
function switchOfStuff(val){
    var answer = "";
    switch (val){
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
    }
    return answer;
}
console.log(switchOfStuff(2));

// Multiple identical options in switch statement
function sequentialSizes(val){
    var answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
        default:
            answer = "sequential sizes";
            break;

    }
    return answer;
}
console.log(sequentialSizes(1));

// Replacing a chain of if else statements with switch
// Switch statements are easier and flexible to use that a chain of if else statements
// returning Boolean values from Functions
function isLess(a, b) {
    return a < b;
}
console.log(isLess(10, 15));

// Returning Early Pattern from Functions
function abTest(a, b){
    if (a < 0 || b <0){
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(-2, 2));

// Counting Cards
var count = 0;
function cc(card){
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }

    var holdbet = "Hold";
    if (count > 0){
        holdbet = "Bet";
    }
    return count + "" + holdbet;
}
cc(2); cc('K'); cc(10); cc('K'); cc('A');
console.log(cc(4));