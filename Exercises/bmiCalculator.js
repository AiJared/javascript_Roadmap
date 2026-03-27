// BMI calculator
/*
Set values for height in inches and weight in pounds, then convert the values to
meters and kilos, outputting the results to the console:
• 1 inch is equal to 0.0254 m
• 2.2046 pounds is equal to 1 kilo
Output the results. Then, calculate and log the BMI: this is equal to weight (in kilos)
divided by squared height (in meters). Output the results to the console.
*/
let heightInches = 50;
let weightPounds = 100;
let heightM = heightInches * 0.0254; // converting inches to meters
let weightK = weightPounds / 2.2046; // converting pounds to kilograms
console.log("50 inches equals " + heightM + " meters " + " and 100 pounds equals " + weightK + " Kgs.");

let bmi = weightK / heightM ** 2; // Calculating the BMI
console.log("The BMI is: "+ bmi);