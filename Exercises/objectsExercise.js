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