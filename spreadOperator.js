// The spread operator looks like a rest operator only that it is used to spread the contents of an array as shown below
const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;
(function () {
    arr2 = [...arr1];
    arr1[0] = "potato"
}) ();
console.log(arr2);