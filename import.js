import { capitalizeString } from "./export";
const cap = capitalizeString("hello");

console.log(cap);

// importing everything from another file using "*" as shown below
import * as capitalizeStrings from "./export";

// importing a default export
import subtract from "math_functions";

subtract(7, 4);