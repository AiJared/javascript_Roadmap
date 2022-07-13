const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
    "use strict";

    const {tomorrow: tempOfTomorrow} = avgTemperatures;

    return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES));

// Destructuring Assignment with Nested Objects
// Remember to use curly braces to destructure
const LOCAL_FORECAST = {
    today: {min: 72, max: 83},
    tomorrow: {min: 73.3, max: 84.6}
};

function getMaxOfTmrw(forecast) {
    "use strict";

    const {tomorrow: {max: maxOfTomorrow}} = forecast;

    return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));

// Use destrucuturing assignment to assign variables to the array
// It can also be used to switch values as shown below
const [z, x, , y] = [1, 2, 3, 4, 5, 6];
console.log(z,x,y);

let a = 8, b = 6;
(() => {
    "use strict";
    [a, b] = [b, a]
})();
console.log(a);
console.log(b);

// use destructuring with the rest operator
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTow(list) {

    const [ , , ...arr] = list;

    return arr;
}
const arr = removeFirstTow(source);
console.log(arr);
console.log(source);

// Use destructing Assignment to pass an object as a function's paramemters
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.53,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = (function () {
    return function half({max, min}) {
        return (max + min) / 2.0;
    };
})();
console.log(stats);
console.log(half(stats));