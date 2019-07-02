// Write a function "numberJoinerWhile" which is given a start number and an end number.
// It should return a string of the numbers joined together by the "_" character.
// Use a "while" loop to do this.
// Examples:
// numberJoinerWhile(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerWhile(12, 14) --> '12_13_14'

// function numberJoinerWhile (startNum, endNum) {
//     let numberJoinerString = ''
//     for (idx = startNum; idx <= endNum; idx++) {
//         numberJoinerString += idx
//         numberJoinerString += '_'
//     }
//     return numberJoinerString = numberJoinerString.slice(0,-1)
// }

let numberJoinerString = '';
function numberJoinerWhile (startNum, endNum) {
    let numberJoinerString = '';
    if (typeof startNum === 'number' && typeof endNum === 'number') {
        let idx = startNum;
        while (idx <= endNum) {
            numberJoinerString += idx
            numberJoinerString += '_'
            idx++
        }
        return numberJoinerString = numberJoinerString.slice(0,-1)

    }
}



// Lessons:
// 1. Be sure to place your accumulator outside of the for loop.
// 2. Make sure only things that need to be strings are strings, in this example the idx
// 3. Search for and use different classes for your variables
// 4. The accumulator had to be inside of the function, but outside of the loop to "reset" each time

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFor" which does the same thing as "numberJoinerWhile",
// except using a "for" loop internally.

function numberJoinerFor (startNum, endNum) {
    let numberJoinerString = ''
    if (typeof startNum === 'number' && typeof endNum === 'number') {
        for (idx = startNum; idx <= endNum; idx++) {
            numberJoinerString += idx + '_'
        }
        return numberJoinerString = numberJoinerString.slice(0, -1)
    }
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFancy" which does the same thing as "numberJoinerWhile",
// except it takes an optional third argument specifying the separator between the numbers.
// Use either a "while" or a "for" loop (your preference).
// Examples:
// numberJoinerFancy(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerFancy(1, 5, '~') --> 1~2~3~4~5
// numberJoinerFancy(3, 6, '***BANANAS***') --> 1***BANANAS***2***BANANAS***3

function numberJoinerFancy (startNum, endNum, separator = '_') {
    let numberJoinerString = ''
    if (typeof startNum === 'number' && typeof endNum === 'number' && typeof separator === 'string') {
        for (idx = startNum; idx <= endNum; idx++) {
            numberJoinerString += idx;
            numberJoinerString += separator
            }
        return numberJoinerString.slice(0, -separator.length)
    }
}

// Lessons from this exercise:
// 1. you can define a default argument to a property by using the "=" assign operator (ex. separator = '_').
// 2. If you want an argument to pass as a certain type of value, such as a string, you need to specifically state that.
//    ex. (typeof separator === 'string')
// 3. You do not have to convert the value of an argument to a string. Just limit it by using a typeof boolean expression.
// 4. You can use .slice(->enter arguments here<-) to slice off parts of the return value.