/*
1. Create a new myCar object for a car. Add some properties, including, but not
limited to, make and model, and values for a typical car or your car. Feel free
to use booleans, strings, or numbers.JavaScript Multiple Values
[ 64 ]
2. Create a variable that can hold the string value color. This variable
containing a string value color can now be used to reference the property
name within myCar. Then, use the variable within the square bracket notation
to assign a new value to the color property in myCar.
3. Use that same variable and assign a new property string value to it, such as
forSale. Use the bracket notation once again to assign a new value to the
forSale property to indicate whether the car is available for purchase.
4. Output make and model into the console.
5. Output the value of forSale into the console.
*/

myCar = {
    make: "BMW",
    model: "M3",
    year: 2020,
    color: "white",
    forSale: true
}

let variable = "color";
myCar[variable] = "black";
console.log(myCar.color);

variable = "forSale";
myCar[variable] = false;

console.log("The make of the car is " + myCar.make + " and the model is " + myCar.model);
console.log("Is the car for sale? " + myCar.forSale);

// Exercise #2
/*
1. Create an object named people that contains an empty array that is called
friends.
2. Create three variables, each containing an object, that contain one of your
friend's first names, last names, and an ID value.
3. Add the three friends to the friend array.
4. Output it to the console.
*/

// Building the people object
let people = {
    friends: []
}


// Building the three friends objects
let friend1 = {
    firstName: "Joseph",
    lastName: "Indieka",
    ID: 1
}

let friend2 = {
    firstName: "Benson",
    lastName: "Wachira",
    ID: 2,
}

let friend3 = {
    firstName: "Peter",
    lastname: "Weis",
    ID: 3
}

// Adding the three friends objects in the friends array
people.friends.push(friend1, friend2, friend3);
// Outputing them in the console
console.log(people.friends);