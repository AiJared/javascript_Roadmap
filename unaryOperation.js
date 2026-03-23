/*
There are two more arithmetic operations and those are increment and 
decrement. A term we use here is "operands". Operands are subject to the
operator for example in x + y, x and y are operands. 
Now here we only need one operand, hence the name "unary", so we will do
x++ in place of x = x + 1 or x-- in place of x = x - 1. 
Let's take a look at some examples below.
*/

let nr1 = 4;
nr1++;
console.log(nr1);

let nr2 = 4;
nr2--;
console.log(nr2);

/*
As you can see in the logs, the output is 5 and 3 respectively.
*/

// Postfix and Prefix Operators
/*
We can have the operator after the operand (x++), we call it "Postfix Unary
Operator" or we can have it before the operand (++x), we call it "Prefix
Unary Operator". The postfix works by sending the variable through first,
then after that the operation is executed. In the example below, nr gets 
incremented by 1 after logging. The first logging statement still logging
the old value because it has not been updated yet. The second logging
statement now logs the incremented value.
*/

let nr = 2;
console.log(nr++);
console.log(nr);

/*
As you can see the ouput is 2 and 3 respectively.

Now prefix on the other side executes the operation before the variable
is passed through. And often this is the one you want to use. 
*/

let nr3 = 2;
console.log(++nr3);