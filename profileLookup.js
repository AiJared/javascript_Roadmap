var contacts = [
    {
        "firstname": "Akira",
        "lastname": "Laine",
        "number": "D543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstname": "Harry",
        "lastname": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstname": "Sherlock",
        "lastname": "Holmes",
        "number": "D487345643",
        "likes": ["Intriguing Cases", "violin"]
    },
    {
        "firstname": "Kristian",
        "lastname": "Vos",
        "number": "unkown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];

function lookupProfile(name, prop) {
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].firstname === name) {
           return contacts[i][prop] || "No such property"; 
        }
    }
    return "No such contact";
}

var data = lookupProfile("Sherlock", "lastname");
console.log(data);