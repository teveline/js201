// Write a function "fizzbuzz" that returns the fizzbuzz string for an input number.
// A fizzbuzz string is defined as the following:
// For every number from 1 to the input number
// - if that number is not a multiple of 3 or 5, add a period "." to the fizzbuzz string
// - for every number that is a multiple of 3 (but not 5), add "fizz" to the fizzbuzz string
// - for every number that is a multiple of 5 (but not 3), add "buzz" to the fizzbuzz string
// - for every number that is a multiple of 3 and 5, add "fizzbuzz" to the fizzbuzz string
//
// Examples:
// fizzbuzz(3) --> '..fizz'
// fizzbuzz(15) --> '..fizz.buzzfizz..fizzbuzz.fizz..fizzbuzz'

/* My method of solving:
1. create an array that holds every number between 1 and num.
    - create a for loop that runs through every number between 1 and num
2. use .foreach to iterate over the array and check each item in num for:
    - whether its not a multiple of 3 or 5
    - push '.' to the an empty string called fizzBuzzString
3. use .foreach to iterate over the array and check each item in num for:
    - whether that number is a multiple of 3, but not 5
    - push 'fizz' to the fizzBuzzString
4. use .foreach to iterate over the array and check each item in num for:
    - whether that number is a multiple of 5, but not 3
    - add 'buzz' to the fizzBuzzString
5. use .foreach to iterate over the array and check each item in num for:
    - whether that number is a multiple of both 3 and 5
    - push 'fizzbuzz' to the fizzBuzzString
*/



function fizzbuzz (num) {
    let finalString = ''
    for (idx = 0; idx < num; idx++) {
        finalString += '.'
    }
    return finalString
}
