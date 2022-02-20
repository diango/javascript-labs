/**
 * You have already made some functions for temperatures. Now you will make some
 * more functions!
 *
 * 1. Research the formula for conversions to and from Kelvin. Write a KtoC,
 *    CtoK, FtoK and a KtoF function. Be sure to return the value so that the
 *    code below functions without error.
 *
 * 2. Research and write a function that uses the pythagorean formula to get the
 *    length of the hypotenuse of a right angled triangle. It should take in two
 *    arguments, the two shorter sides of a triangle, and return the longest
 *    side. Call the function "pythagoras". After writing your function the code
 *    below should work without error.
 *
 * 3. Research and write a functions to convert
 *      - inches to centimeters (inchToCm)
 *      - centimeters to inches (CmToInch)
 *      - miles to kilometers (MToKm)
 *      - kilometers to miles (KmToM)
 *
 */

// Write your code here:

/*
Convert 300 Kelvin to degrees Celsius:
T(°C) = 300K - 273.15 = 26.85 °C
T(K) = 10°C + 273.15 = 283.15 K
T(K) = (60°F + 459.67) × 5/9 = 288.71 K
T(°F) = T(K) × 9/5 - 459.67
*/

let KtoC = function(kelvin) {
    return kelvin - 273.5;
}

let CtoK = function (celcius) {
    return celcius + 273.15;
}

let FtoK = function(fahrenheit) {
    return (fahrenheit + 459.67) * (5 / 9);
}

let KtoF = function (kelvin) {
    return kelvin * (9 / 5) - 459.67;
}


// Pythagorean formula
// a² + b² = c²
let pythagoras = function(a, b) {
    let c = Math.sqrt(a * a + b * b);
    return c;
}

// - inches to centimeters (inchToCm)
// 1 inch = 2.54cm
let inchToCm = function(inch) {
    return inch * 2.54;  // 25.4 centimeter
}

// - centimeters to inches (CmToInch)
// 1cm = 1 / 2.54
let CmToInch = function (centimeter) {
    return centimeter / 2.54;  //  167.32283465 inches
}

// - miles to kilometers (MToKm)
// 1 mile = 1.609344km
let MToKm = function(mile) {
    return mile * 1.609344;   // 160.9344 km
}

// - kilometers to miles (KmToM)
// 1km = 1 /1.609344
let KmToM = function(km) {
    return km / 1.609344;   // 15.534279806 miles
}







// Do not modify anything below this line

console.log(KtoC(272));
console.log(CtoK(0));
console.log(FtoK(30));
console.log(KtoF(100));


console.log(pythagoras(10, 20));
console.log(pythagoras(30, 100));
console.log(pythagoras(20, 50));

console.log(MToKm(100));
console.log(KmToM(25));

console.log(inchToCm(10));
console.log(CmToInch(425));