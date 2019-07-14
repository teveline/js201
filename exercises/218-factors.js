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
//The problem with this solution is that I need to take some other things into consideration such as the fact that
// that the GCF can't be higher than the lowest number and that you only need the greatest common factor not all
// of the common factors. The bottom of you code neglects to find the greatest, it just returns the array.
// Chris' critique of this code was that it should not be a "nested" for loop, just 2 for loops. The second one should
// not be nested. 

// Solution after research

function gcd(num1, num2) {
    let remainder
    while((num1 % num2) > 0) {
        remainder = num1 % num2
        num1 = num2
        num2 = remainder
    }
    return num2
}
//Explanation
// https://guide.freecodecamp.org/algorithms/greatest-common-divisor-euclidean/

//Chris's Solution 
function gcd (a, b) {
    // find the smallest value of a or b
    // (a factor of both numbers cannot be larger than one of the numbers)
    const smallerNum = Math.min(a, b)
  
    // count down starting from the smaller number
    let idx = smallerNum
    while (idx > 0) {
      // a and b are both evenly divisible by idx when their modulus returns 0
      if (a % idx === 0 && b % idx === 0) {
        // since we are counting down from the smaller number, we are finished
        // as soon as we find the first evenly divisible number of a and b
        return idx
      }
      idx = idx - 1
    }
  
    // if we did not find a divisor of both numbers, return 1
    // (1 is a factor of all numbers)
    return 1
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


