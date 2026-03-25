/*
The outcome of a comparison operator is always a Boolean, hence different from
all the other operators.
*/

// Equal
/*
There are two equality operators that determine whether two values are equal.
The first flavor is equal value only and the second one is equal value and
data type. The first one returns true as long as the values are the same
even if the type are different and second one only returns true if both
the value and the type are the same.
*/

let x = 5;
let y = "5";
console.log(x == y);

/*
The double equal sign here is the one that is used to check if the values
are the same and not the data type. Both have the value 5 so it will log
to the console. This type of equality is sometimes called "loose equality".

To check whether both the value and the data type are equal we would need to
use the triple equal sign operator. In the example above it would log false
because x is a number and y is a string.
*/

console.log(x === y);

/*
This is sometimes "strict equality", this is what you should mostly be using
since it's the right way of making sure that the variables really are the
equal.
*/

// Not Equal
/*
This is the oposite of the equal comparison operator. It returns true if
the two are not the same and false if they are. We use the exclamation
mark for not equal.
*/

console.log(x != y);

/*
The above is going to return false because with just a single equal sign
it is comparing loosely and as we know, the values of both x and y are
the same.
To check for strict non-equaltiy, we would need to use double equal sign. 
*/

console.log(x !== y);

// Greater than and Smaller than
/*
This comparison works with the values of the variables. The greater than
returns true if the one on the left hand side is greater than the one on
the right hand side. We use the > operator. We also have greater than or
equal to >= and returns true if either the left hand side is greater than or
equal to the right hand side.
*/

console.log(y > x); // This logs true
console.log(x > y); // This logs false
console.log(y > y) // This logs false
console.log(y >= y) // This logs true

/*
Smaller than and smaller than or equal to are the exact opposites of greater
than or equal to. Here we use the < operator for smaller than and <= for
small than or eqaual to.
*/

console.log(y < x); // This logs false
console.log(x < y); // This logs true
console.log(y < y); // This logs false
console.log(y <= y); // This logs true