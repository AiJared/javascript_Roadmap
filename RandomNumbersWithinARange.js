function ourRandomRange(ourMin, ourMax) {
    
    
    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

console.log(ourRandomRange(1, 9));

function randomRange(myMin, myMax) {

    return Math.floor(Math.random() * (myMax - myMin +1)) + myMin; 
}

console.log(randomRange(5, 15));