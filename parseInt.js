function convertToInteger(str) {
    return parseInt(str);

}

console.log(convertToInteger("56"));

// parseInt with a radix
// we will convert a binary number into an integer with a base of 2 as shown below
function convertToInteger(str) {
    return parseInt(str, 2);
}

convertToInteger("10011");