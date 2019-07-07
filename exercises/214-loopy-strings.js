// TIP: check out these references for Strings and Arrays:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "reverse" that computes the reversal of a string.
//
// Example:
// reverse("skoob") --> "books"

// Solution 1
function reverse(string) {
    string.split('').reverse()
}

//Solution 2
function reverse(string) {
    let reversed = ''
    for (idx = string.length - 1; idx >= 0; idx--) {
        reversed += string[idx];
    }
    return reversed
}

// Lessons Learned:
// 1. Make sure you always have a return value at the end of your function, otherwise it will return undefined.
//    --> Javascript always returns a value, if you don't specify it will return undefined.


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "findLongestWord" that takes a string of words and returns
// the longest word in that string. If there are multiple words with the same
// maximum length return the first longest word.
//
// Example:
// findLongestWord('a book full of dogs') --> 'book'

function findLongestWord (string) {
    string = string.split(" ") //creates an array breaking at each empty space
    let longestWord = ''        //This is the accumulator that changes in each iteration
    for (idx = 0; idx < string.length; idx++) { //this is used to iterate through the array
        if(string[idx].length > longestWord.length ) { //says that if the item in the string array is longer than longestWord...
            longestWord = string[idx]       // then replace longestWord with that item in the string array.
        }
    }
    return longestWord
}
//What I learned:
// 1. I forgot to add the .length property to longestWord so it kept kicking back one of the first words.
// 2. It was helpful to write out what was happening on a sheet of paper



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "nicer"
// It should clean up the language in its input sentence.
// Forbidden words include heck, darn, dang, and crappy.
//
// Example:
// nicer('mom get the heck in here and bring me a darn sandwich.')
// > 'mom get the in here and bring me a sandwich.'

// function nicer (sentence) {
//     sentenceArray = sentence.split(' ') //turns the sentence into an array
//     let niceSentence = '' // this is the accumulator that will hold the new sentence *changed to an array
//     let badWords = ['heck', 'darn', 'dang', 'crappy'] // list of bad words
//     for (idx = 0; idx < sentenceArray.length; idx++) {  //this iterates through the index of sentenceArray
//         if (sentenceArray[idx] !== 'heck' || sentenceArray[idx] !== 'darn' ||    //this are the naughty words
//             sentenceArray[idx] !== 'dang' || sentenceArray[idx] !== 'crappy') {  // it says to add them to the
//                 niceSentence += sentenceArray[idx] + ' '       //new array if they are not these words
//             }
//     }
//     return 'zzz' + niceSentence + 'zzz'
// }



//Didn't work. A nested for loop was not necessary
// function nicer (sentenceString) {
//     let sentenceArray = sentenceString.split(' ') //turns the sentence into an array (explodes the string into an array)
//     let niceSentence = [] // this is the accumulator that will hold the new sentence *changed to an array
//     let badWords = ['heck', 'darn', 'dang', 'crappy'] // list of bad words

//     for (let idx = 0; idx < sentenceArray.length; idx++) {  //this iterates through the index of sentenceArray
//         for (let idx2 = 0; idx2 < badWords.length; idx2++) { //this will iterate through the index of badwords
//             if (sentenceArray[idx] !== badWords[idx2]) {  // 
//                 niceSentence += sentenceArray[idx] + " "
//                 // niceSentence.push(sentenceArray[idx]) //<-- didn't work "not a function"
//                 // sentenceArray[idx].push(niceSentence) // <-- didn't work, "not a function"
//                 // niceSentence += sentenceArray[idx]      //<-- This is not how to push a word to an array.
//             }
//         }
//     }
//     return niceSentence.join(' ')
// }

// From Chris' Solution
function nicer (sentenceString) {
    let sentenceArray = sentenceString.split(' ') //turns the sentence into an array (explodes the string into an array)
    let niceSentence = [] // this is the accumulator that will hold the new sentence *changed to an array
    let badWords = ['heck', 'darn', 'dang', 'crappy'] // list of bad words

    for (let idx = 0; idx < sentenceArray.length; idx++) {  //this iterates through the index of sentenceArray
            const wordFromString = sentenceArray[idx] //Defining a variable here to make more semantic sense.
            if (!badWords.includes(wordFromString)) { //if the array of badwords DOESN'T include a word from string
            niceSentence.push(wordFromString) //then push it the word from string to the nice sentence
        }
    }                                         // Exit the for loop
    return niceSentence.join(' ') //return the niceSentence array joined back into a string separated by " "
}

 

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "capitalizeAll"
// It should take as input a sentence and capitalize the first letter
// of every word in the sentence.
//
// Examples:
// capitalizeAll('hello world') --> 'Hello World'
// capitalizeAll('every day is like sunday') --> 'Every Day Is Like Sunday'



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "split" that does the same thing as String.split
// It should take two inputs: (1) a string and (2) a delimiter string
// Do not use the native .split() method for this. Your task is to reverse-engineer
// .split() and write your own.
//
// Examples:
// split('a-b-c', '-') --> ['a', 'b', 'c']
// split('APPLExxBANANAxxCHERRY', 'xx') --> ['APPLE', 'BANANA', 'CHERRY']
// split('xyz', 'r') --> ['xyz']
