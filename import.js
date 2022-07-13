import { capitalizeString } from "./export";
const cap = capitalizeString("hello");

console.log(cap);

// importing everything from another file using "*" as shown below
import * as capitalizeStrings from "./export";