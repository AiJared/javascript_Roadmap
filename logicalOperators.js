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

console.log(x > y && y < z); // This will log false since x is smaller than y

// OR
/*
The operator is used if you want to check if just one of them is true. 
We use || operator here. It doesn't matter if one is not true as long as
the other is true and it will return true.
*/

console.log(x > y || y < z);

/*
It doesn't matter that x is not greater than y, y is smaller than z so we 
get true.

Now if both expressions are false, it will return false as shown in the
log below.
*/

console.log(x > y || y > z);

// Not
/*
In some cases you might want to negate a Boolean and that's where the not
operator comes in. By doing so, you make it the opposite value. It can
be done with an exclamation mark which reads as not.
*/

let a = false;
console.log(!a);