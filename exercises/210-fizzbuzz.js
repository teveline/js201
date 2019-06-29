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



function fizzbuzz (num) {
    let finalString = '' //the string is the accumulator in this accumulation
    for (let idx = 1; idx <= num; idx++) {   
        if (idx % 3 === 0 && idx % 5 === 0) {
        finalString += 'fizzbuzz'
        } else if (idx % 3 === 0) {
        finalString += 'fizz'
        } else if (idx % 5 === 0) {
        finalString += 'buzz'
        } else finalString += '.'
        }
    
    return finalString
    console.log(finalString)
}


// I should have  3 conditions and an 
// Do NOT try to do the entire project at once. Just get one aspect of the project going.
// Add all the conditions now that it works without breaking what you already have.




// function fizzbuzz (num) {
//     let finalString = ''
//     for (idx = 0; idx < num; idx++) {
//         finalString += '.'}
//     return finalString
//     console.log(finalString)
// }
// fizzbuzz(7)