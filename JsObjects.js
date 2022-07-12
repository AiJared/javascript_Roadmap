/* objects are similar to arrays except that 
instead of using indexes to access data you use
properties
Properties are located before the collons and the values are located after the collon as shown in the example below*/
// Example
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};
console.log(ourDog);

var car = {
    "company": "Tesla",
    "model": "Model X",
    "age": 2,
};
console.log(car)

// Accessing Object Properties with Dot Notation
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;
console.log(hatValue);
console.log(shirtValue);