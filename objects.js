/*
If you are coming from Python, you will quickly learn that objects
are very similar to Python's "dictionaries".
In fact we have already been secretly introduced to objects via
arrays, arrays are "object" type if you try to log the type of
an array it will give you object. The difference between arrays
and objects dispite being of the same type is that arrays are
objects with "indexed properties" that means the elements in the array
are represented and accessed on the outside using automatically assigned
index numbers as we saw in arrays. All the other objects including
these objects are with "named properties". This means that instead
of an automatically generated index number, we are giving an object
a custom descriptive name.

As we can tell from the code below, arrays are being identified by
javascript as of being of type object.
*/

arr = [1,2,3];
console.log(typeof arr);

/*
Objects are not too dissimilar from real world objects, they have
properties and can perform actions, "methods". An object is a
chance to group multiple values into one. Here we use curly braces.
Let's take a look at an example below.
*/

