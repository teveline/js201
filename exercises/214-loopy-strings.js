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
//             if (sentenceArray[idx] !== badWords[idx2]) {  // <-- The correct way to do this was to use the .includes() method rather than another for loop
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
function nicer (sentenceString) {   //defines the function "nicer" that takes an argument that will be the sentence string.
    let sentenceArray = sentenceString.split(' ') //turns the sentence (or explodes it) into an array
    let niceSentence = [] // this is the accumulator that will hold the new sentence as an array of words
    let badWords = ['heck', 'darn', 'dang', 'crappy'] // list of bad words

    for (let idx = 0; idx < sentenceArray.length; idx++) {  //this iterates through the index of sentenceArray
            const wordFromString = sentenceArray[idx] //Defining a variable here to make the code have more semantic sense.
            if (!badWords.includes(wordFromString)) { //if the array of badwords DOESN'T include a word from the string
            niceSentence.push(wordFromString) //then push the word to the nice sentence
        }                                     // All the words in the sentenceArray are then iterated through, accumulating the new result in niceSentence
    }                                         // Exit the for loop
    return niceSentence.join(' ') //return the niceSentence array joined back together into a string separated by " " (an empty space)
}

 

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "capitalizeAll"
// It should take as input a sentence and capitalize the first letter
// of every word in the sentence.
//
// Examples:
// capitalizeAll('hello world') --> 'Hello World'
// capitalizeAll('every day is like sunday') --> 'Every Day Is Like Sunday'

//Strategy: Take input sentence and break it into an array of words, break down each item in that array into another array of letters, use the .toUppercase() method
// to capitalize that first item in each array, then use the .join() method to put the string back together with an empty space in between each word

// 1st Attempt
// function capitalizeAll (sentenceString) {
//     let arrayOfWords = sentenceString.split(' ') //breaks sentence string into an array of words

//     //let letterArray = sentenceArray.split('') <-- This will not work. You may not be able to use .split on arrays only on strings.
//     let newString = [] //sets accumulator as an empty array

//     for (let idx = 0; idx < arrayOfWords.length; idx++) { //1. I want this loop to iterate through arrayOfWords and turn each item into an array of letters. DONE
        
//         const aWord = arrayOfWords[idx] //added variable for semantic reasons
//         let lettersOfaWord = aWord.split('')  //turns each word into an array of letters

//         //2. Take the first element of that array and capitalize it
//         console.log("the arry of letters for each word has just now been created" + idx)

//         newString.push(lettersOfaWord) //pushes the letters of a word into array of letters. Now you have an array of words, each being an array of letters
//         console.log('The letters have just now been pushed to the accumulator newString')
//     }
//     return newString

//     //2. Take the first element of that array and capitalize it


//     //3. Return it back to another array
//     //4. Use .join to turn the letters back into words
//     //5. Use  .join to turn the words back into a sentence string using .join(' ')
// }

// 2nd Attempt
function capitalizeAll (sentenceString) {
    let sentenceArray = sentenceString.split(' ') //breaks sentence string into an array of words

    //let letterArray = sentenceArray.split('') <-- This will not work. You may not be able to use .split on arrays only on strings.
    let newString = [] //sets accumulator as an empty array

    for (let idx = 0; idx < sentenceArray.length; idx++) { //1. I want this loop to iterate through arrayOfWords and turn each item into an array of letters. DONE
        
        let aWord = sentenceArray[idx] //Each item in sentence is now defined as aWord

        let arrayofLetters = aWord.split('') //explode each word into letter array

        //now you need to cycle through each arrayofLetters and capitalize [0]
        //then add letters to a new Word string

        arrayofLetters

        let capitalizedFirstLetterArray = []

        newString.push(arrayofLetters)
    }
    return newString

   
}

// 3rd Attempt (Using research -- I learned about the .charAt() method)
function capitalizeAll (sentenceString) {
    let sentenceArray = sentenceString.split(' ') //breaks sentence string into an array of words

    //let letterArray = sentenceArray.split('') <-- This will not work. You may not be able to use .split on arrays only on strings.
    let newSentenceArray = [] //sets accumulator as an empty array

    for (let idx = 0; idx < sentenceArray.length; idx++) { //1. I want this loop to iterate through arrayOfWords and turn each item into an array of letters. DONE
        
        // let aWord = sentenceArray[idx] // Each string in sentenceArray is now defined as aWord
        
        let firstCapitalLetter = sentenceArray[idx].charAt(0).toUpperCase()
        // this capitalizes only the first character at index 0 in the new string
        let restofWordlowCase = sentenceArray[idx].slice(1).toLowerCase()
        // this slices for use every letter except the first letter and lowercases all of it
        newWord = firstCapitalLetter + restofWordlowCase
        // this concatenates the capital letter and rest of the word, putting them back together
        newSentenceArray.push(newWord) // this pushes the now capitablized word to the new sentence Array

    }
    return newSentenceArray.join(' ') //This turns the new sentence array back into a string with a space in between each word.
   
}

//Later on you should try using the .map method which calls a function on every item
// in an array and returns a new array with the results of calling that function.

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

    //Strategy: Use a for loop to iterate through each character of the string and push that
    // character to a new string.
    // if the character at the string is the delimter, join the previous characters together
    // and start a new item for the array. 

//Stage 1 of Solution: Turns every character in the string into an item in an array
function split (string, delimiter) {
    let newStringArray = []
    let itemArray = []
    for (let idx = 0; idx < string.length; idx++) {
    
        let currentChar = string.charAt(idx)
        newStringArray.push(currentChar)
    
    }
    return newStringArray
}
//Solution 1, looping through with .charAt(), Amanda's Solution
    // Don't use charAt use a substring

function split(string, delimiter) {
    var results = []
    var delimiterLength = delimiter.length
    
    for (var index = 0; index < string.length; index++) {
        // let characters = string.substr(index, delimiterLength)
        // let chunkStart
        // let chunkEnd = 
    console.log(characters, index)
        
    }
}

//Solution 2, using regular expressions (RegEx) to find and replace

//Solution 3, While loop with index of delimiter on the string




//Check out: https://dev.to/dhilipkmr/implementing-our-own-split-in-javascript-ii7 for one method to do this activity
