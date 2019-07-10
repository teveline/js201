// Write a function "gcd" that returns the Greatest Common Divisor of two numbers
// If no GCD exists, return 1
// Greatest Common Divisor --> https://tinyurl.com/gr84qca
//
// Examples:
// gcd(5, 1) --> 1
// gcd(3, 15) --> 3
// gcd(50, 20) --> 10

function gcd (num1, num2) {
    let num1factors = []
    let num2factors = []
    let commonFactors = []
    for (let i = 0; i <= num1; i++) {

        //Loops through all numbers between num1 & num2 adds to respective arrays
        if (num1 % i === 0) {
            num1factors.push(i)
        }
        if (num2 % i === 0) {
            num2factors.push(i)
        }
        //Compares 2 factor arrays uploading similar numbers to commonFactors
        for (let i2 = 0; i2 < num1factors.length; i2++) {
            if (num1factors[i] === num2factors[i2]) {
                commonFactors.push(num1factors[i])
            }
        }
    }

    return commonFactors
}



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "factors" which is given a number and returns an array
// containing all its factors.
// What are factors? --> https://tinyurl.com/gncg62o
//
// Examples:
// factors(1) --> [1]
// factors(12) --> [1, 2, 3, 4, 6, 12]
// factors(42) --> [1, 2, 3, 6, 7, 14, 21, 42]

function factors (num) {
    numFactors = []

    for (let i = 0; i <= num; i++) {

        if (num % i === 0) {
            numFactors.push(i)
        }
    }
    return numFactors
}
