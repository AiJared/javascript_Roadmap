/* 
We have been declaring variables using "var" keyword so far and it has been working fine.
However the downside is you can with var you can declare the same varibale name to different values.
This can lead into issues if you are working on a large code as it won't know which value belongs to which variable.
This is where "let" and "const" keywords comes in.
With let, you cannot create more than one variable with the same name and assign different values to them
The same applies to const keyword as it makes that variable read on(). However with const you can mutate aan array and an object using the bracket notation
as shown in previous topics concerned with arrays and objects.
Also, "use strict" helps to prevent one accidentally from reassigning a variable in a function as shown below
That being said, we can also prevent object mutation even when using const keyword further by using Object.feeze()
for example
*/
function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 2.14
    };

    Object.freeze(MATH_CONSTANTS);

    try {
        MATH_CONSTANTS = 99;
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();