// Project working with Arrays
/*
Take the following array:
const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
{test: 'one', score: 55}, ['one', 'two']];
Manipulate your array using various methods, such as pop(), push(), shift(), and
unshift(), and transform it into the following:
["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]
You can take the following steps, or adopt your own approach:
• Remove the first item and the last item.
• Add FIRST to the start of the array.
• Assign hello World to the fourth item value.
• Assign MIDDLE to the third index value.
• Add LAST to the last position in the array.
• Output it to the console.
*/

let theList = ['Laurence', 'Svekis', true, 35, null, undefined,
{test: 'one', score: 55}, ['one', 'two']];

// Remove the first item
theList.splice(0,1);
console.log(theList);

// Remove the last item
theList.pop();
console.log(theList);

// Add FIRST to the start of the array
theList.splice(0,0, "FIRST");
console.log(theList);

// Assign "hello world" to the fourth item value
theList.splice(3,1, "hello world");
console.log(theList);

// Assign MIDDLE to the third index value
theList.splice(2,1, "MIDDLE");
console.log(theList);

// Add LAST to the last position in the array
theList.push("LAST");
console.log(theList);