/*
In this project, you will implement a data structure for a product catalog and create
queries to retrieve data.
1. Create an array to hold an inventory of store items.
2. Create three items, each having the properties of name, model, cost, and
quantity.
3. Add all three objects to the main array using an array method, and then log
the inventory array to the console.
4. Access the quantity element of your third item, and log it to the console.
Experiment by adding and accessing more elements within your data
structure.
*/

// Create an array to hold an inventory of store items.
let cars = [];

// Create three items, each having the properties of name, model, cost, and quantity
let car1 = {
    nme: "BMW",
    model: "iM",
    cost: 85000,
    quantity: 4
}

let car2 = {
    nme: "Mercedes",
    model: "S Class",
    cost: 175000,
    quantity: 3
}

let car3 = {
    nme: "Rolls Royce",
    model: "Cullinan",
    cost: 470000,
    quantity: 2
}

/*
Add all three objects to the main array using an array method, and then log
the inventory array to the console.
*/

cars.push(car1, car2, car3);
console.log(cars);