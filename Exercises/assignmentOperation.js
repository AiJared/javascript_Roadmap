/*
Create variables for three numbers: a, b, and c. Update these variables with the
following actions using the assignment operators:
• Add b to a
• Divide a by c
• Replace the value of c with the modulus of c and b
• Print all three numbers to the console
*/

let a = 2;
let b = 4;
let c = 5;

a += b; // adding b to a
a /= c; // diving a by c
c %= b; // the modulus of c and b

console.log(a, b, c)