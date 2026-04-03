/*
1. Create an empty array to use as a shopping list.
2. Add Milk, Bread, and Apples to your list.
3. Update "Bread" with Bananas and Eggs.
4. Remove the last item from the array and output it into the console.
5. Sort the list alphabetically.
6. Find and output the index value of Milk.
7. After Bananas, add Carrots and Lettuce.
8. Create a new list containing Juice and Pop.
9. Combine both lists, adding the new list twice to the end of the first list.
10. Get the last index value of Pop and output it to the console.
11. Your final list should look like this:
["Bananas", "Carrots", "Lettuce", "Eggs", "Milk", "Juice",
"Pop", "Juice", "Pop"]
*/
// Create an empty array to use as a shopping list.
shpList = [];
// Add Milk, Bread, and Apples to your list.
shpList.push("Milk", "Bread", "Apples");
// Update "Bread" with Bananas and Eggs.
shpList.splice(1, 1, "Bananas", "Eggs");
console.log(shpList);

//Remove the last item from the array and output it into the console.
shpList.pop();
console.log(shpList);

// Sort the list alphabetically.
shpList.sort();
console.log(shpList);

// Find and output the index value of Milk.
let findIndexOfMilk = shpList.indexOf("Milk");
console.log(findIndexOfMilk);

// After Bananas, add Carrots and Lettuce.
shpList.splice(1, 0, "Carrots", "Lettuce");
console.log(shpList);

// Create a new list containing Juice and Pop.
let newList = ["Juice", "Pop"];
console.log(newList);

// Combine both lists, adding the new list twice to the end of the first list.
shpList1 = shpList.concat(newList);
console.log(shpList1);
shpList2 = shpList1.concat(newList);
console.log(shpList2);

//Get the last index value of Pop and output it to the console.
let lastPop = shpList2.lastIndexOf("Pop");
console.log(lastPop);