// Write a function "max" that takes an array of numbers returns the highest
// number in the array.
function max (numberArray) {
    let highestNum = 0
    for (let idx = 0; idx < numberArray.length; idx++) {
        if (numberArray[idx] > highestNum) {
            highestNum = numberArray[idx]
        }
    }
    return highestNum
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "sumNumbers" which is given an array of numbers and returns
// the sum of the numbers.
// Example:
// sumNumbers([1, 4, 8]) --> 13

function sumNumbers (numArr) { //the function sumNumbers takes an array as an argument
    let numSum = 0  // set the number sum, numSum = 0 to start
    for (let i = 0; i < numArr.length; i++) { //begin a for loop that iterates through the array
        numSum = numSum + numArr[i] //sets the number sum to whatever the number sum is plus the number in that part of the array
    }
    return numSum
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "positives" which is given an array of numbers and
// returns a new array containing only the positive numbers within the given array.
// Examples:
// positives([1, -3, 5, -3, 0]) --> [1, 5]
// positives([1, 2, 3]) --> [1, 2, 3]
// positives([-1, -2, -3]) --> []

function positives (numArr) {
    positiveArr = []
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] > 0) {
            positiveArr.push(numArr[i])
        }
    }
    return positiveArr
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "evens" which takes an array of numbers and returns a new
// array containing only the even numbers in the given array.
// Hint: you may want to re-use your "isEven" function from 01-predicate-functions.js

function evens (numArr) {
    let evenArr = []
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] % 2 === 0) {
            evenArr.push(numArr[i])
        }
    }
    return evenArr
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "odds" which takes an array of numbers and returns a new
// array containing only the odd numbers in the given array.
// Hint: you may want to re-use your "isOdd" function from 01-predicate-functions.js

function odds (numArr) {
    let oddArr = []
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] % 2 !== 0) {
            oddArr.push(numArr[i])
        }
    }
    return oddArr
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "integers" which takes an array of numbers and returns a new
// array containing only the integers in the given array.
// Hint: Do you need a new predicate function for this?
//
// Example:
// integers([3.14, 2.4, 7, 8.1, 2]) --> [7, 2]

function integers (numArr) {
    let intArr = []
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] % 1 === 0) {
        intArr.push(numArr[i])
        }
    }
    return intArr
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "squareDance" which takes an array of numbers and returns a
// new array containing the result of squaring each of the numbers in the given array.
//
// Example:
// squareDance([1, 2, 3]) --> [1, 4, 9]

function squareDance (numArr) {
    let squareArr = []
    for (let i = 0; i < numArr.length; i++) {
        let squareIndex = numArr[i] * numArr[i]
        squareArr.push(squareIndex)
    }
    return squareArr
}
