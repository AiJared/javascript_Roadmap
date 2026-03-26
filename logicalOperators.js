/*
Logical Operators are used whenever you want to check two conditions in one
or need to negate a condition. There are several logical operators and we 
will look at "and", "or" and "not".
*/

// And
/*
If you want to check if x is greater than y and y is greater than z then 
you would need to combine two expressions. You will use the && operator and
it will only return true if both expressions are true.
*/

let x = 1;
let y = 2;
let z = 3;

console.log(x < y && y < z);

/*
It logs true because both expressions are true, x really is smaller than y
and y is smaller than z.
*/