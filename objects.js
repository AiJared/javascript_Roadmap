// Objects in Javascript
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

// Creating an Object
/*
Objects are not too dissimilar from real world objects, they have
properties and can perform actions, "methods". An object is a
chance to group multiple values into one. Here we use curly braces.
Let's take a look at an example below.
*/

let dog = {
    dogName: "Js",
    weight: 2.4,
    color: "brown",
    breed: "chihuahua",
    age: 3,
    burglarBite: true
};

/*
We just created an variable called dog and assigned to it a value 
which is an object, we can tell it is an object because of the
curly braces and inside them we can see properties which have 
values in them.
*/

// Accessing the Properties
/*
Accessing objects in Javascript is somehow similar to accessing 
elements of an array except that instead of using index positions
here we use the property name as shown below.
*/

let dogColor = dog["color"];
console.log(dogColor);

/*
There is also another way of doing this, instead of putting the
property name in the square brackets, it can also be after the
variable with a dot in between them, hence a "property". That's
how you know that something is a property by the way, for methods
they come with a parenthesis at the end.
*/

let dogAge = dog.age;
console.log(dogAge);

// Updating Objects
/*
We can change the value of our properties in an object just as we
did in arrays because again, arrays are still objects but here we
can use two different techniques. Check this out.
*/

dog["color"] = "Grey";
dog.weight = 2.3; // utilizing the property feature here
console.log(dog);

/*
As you can see in the logs, the two techniques above updates a 
property in an object the first one uses square brackets and the
second one utilizes the fact that this is a property to do it.

It is also important to note that if changed the data type of a property
for example dog's age to three from 3, it won't cause any problems
Javascript will just change the whole value and the data type to the
new situation

Another thing to note is that we are using the literal string values
to refer to a property, we can also use variables to do the exact
same thing, check this out.
*/

let variable = "age";
console.log(dog[variable]);

/*
If we change the value of the variable to another property, we will
be accessing another property with it.
*/

variable = "breed";
console.log(dog[variable]);

/*
And if we update the values this way, it would still work as it does
when we do it when refering to it by its literal string.
*/

dog[variable] = "dachshund";
console.log(dog["breed"]);

// Working with Objects
/*
When working with objects and arrays, you will these often combined.
We will deal with combining objects and arrays and also objects
inside objects.
*/

// Objects in Objects
/*
Let's say we have an object for a company and  this company
an address which is an object. If we give this company an address
it will be an object inside an object.
*/

let company = {
    companyName: "Axis AI",
    activity: "AI Security",
    address: {
        street: "2nd Street",
        number: 123,
        zipcode: 1,
        city: "Nairobi",
        state: "Kenya"
    },
    yearOfEstablishment: 2026    
}

/*
As you can see, the address object have a number of properties
with values in it and this can go deeper than that.
To access values within the address object we can use one of the
two techniques below.
*/

company.address.zipcode = "12";
company["address"]["number"] = "100";

// Arrays in Objects
/*
Now let's assume our company has a range of activities instead of
just one. So we will put those activities inside of an array inside
that object. Check this out.
*/

company = {
    companyName: "Axis AI",
    activities: ["Security", "AI Agents", "Business Software"],
    address: {
        street: "2nd Street",
        number: 123,
        zipcode: 1,
        city: "Nairobi",
        state: "Kenya"
    },
    yearOfEstablishment: 2026
}
console.log(company);

/*
Retrieving values from the array is also very similar. We just first
access the property then use square brackets to access the value
using it's index number as shown below.
*/

activity = company.activities[1];
console.log(activity);

// Objects in Arrays
/*
It is also possible that our company has more than one addresses.
So we might need to put them all inside a list, hence an array.
Let's do an example with two addresses.
*/

let addresses = [
    {
        street: "1st Street",
        number: 132,
        zipcode: 33116,
        city: "Miami",
        state: "Florida"
    },
    {
        street: "1st Waste Avenue",
        number: 5,
        zipcode: 75001,
        city: "Addison",
        state: "Texas"
    }
];

/*
We can access the street name of the first address for example by
accesing the index position the object is in then the street property
as shown below.
*/