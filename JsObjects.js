/* objects are similar to arrays except that 
instead of using indexes to access data you use
properties
Properties are located before the collons and the values are located after the collon as shown in the example below*/
// Example
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};
console.log(ourDog);

var car = {
    "company": "Tesla",
    "model": "Model X",
    "age": 2,
};
console.log(car)

// Accessing Object Properties with Dot Notation
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;
console.log(hatValue);
console.log(shirtValue);

// Accessing properties in an object using bracket notation
// bracket notation works best if the properties have space inside of them as shown in the example below
// Example
var testObject = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};
var entreeValue = testObject["an entree"];
var drinkValue = testObject['the drink'];
console.log(entreeValue);
console.log(drinkValue);

// Accessing object properties using variables
var testOb = {
    12: "Namath",
    16: "Montana",
    19: "Unitas",
};

var playerNumber = 16;
var player = testOb[playerNumber];
console.log(player);

// Updating object properties
// We can use dot notation as shown below
var ouDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"]
};

ouDog.name = "Happy Camper";
console.log(ouDog.name);

var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"]
};

myDog.name = "Happy Coder";
console.log(myDog.name);

// Add new properties to an objet
// The dot notation can also be used to add properties to an object as shown in the example below
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"]
};

ourDog.bark = "bow-wow!";
console.log(ourDog.bark);

// We can also use bracket notation to add a property to an object as shown in the example below
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCOdeCamp Campers"]
};

myDog["bark"] = "woof!";
console.log(myDog.bark);

// Delete properties from objects
// delete object deletes a property from an object as shown below
delete ourDog.bark;
delete myDog.bark;

// Using objects for lookups instead of having a long chain of switch statements
// Example
function phoneticLookup(val) {
    var result = "";

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foctrot": "frank"
    };
    result = lookup[val];

    return result;
}
console.log(phoneticLookup("charlie"));

// Testing objects for properties
// we use hasownproperty to do that as shown below
var myObj = {
    gift: "ponny",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    } else {
        return "Not Found"
    }
}
console.log(checkObj("gift"));

// Manipulating COmplex Objects
var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "relaese_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "Beau Carnes",
        "title": "Cereal Man",
        "release_year": 2022,
        "formats": [
            "Youtube Video"
        ]
    }
]

// Accessing Nested Objects
// We do this using either dot or bracket notations or both
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);

// Nested Arrays and Accessing Nested Arrays
var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTree = myPlants[1].list[1];
console.log(secondTree);