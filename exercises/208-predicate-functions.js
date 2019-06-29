// TIP:
// A predicate function is a function that returns boolean true or false
// They are useful for improving the semantics of checking for conditions.
// Examples:
// - isUserLoggedIn(user)
// - isString(s)
// - isValidZipCode(code)
// etc

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "isVowel" that takes a character (i.e. a string of length 1)
// as input and returns true if it is a vowel, false otherwise.
//
// Useful resource:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
//
// Examples:
// isVowel('c') --> false
// isVowel('e') --> true
// isVowel('A') --> true
// isVowel(99) --> false
// isVowel({e: 'Elephant'}) --> false
function isVowel (character) {
    // let vowel = ['A', 'a', 'E', ]
// 
if (typeof character !== 'string') return false
if (character.length !== 1) return false

//const vowels = 'aeiou'.split(' ') <-- This works also to create the constant vowels.
// rather than typing

const vowels = ['a','e','i','o','u']
const lowerCaseCharacter = character.toLowerCase()
return vowels.includes(lowerCaseCharacter)

function isVowel (char) {
    return typeof char !== 'string' && //if the type of character is not a string -->false
        char.length !== 1 && //if character length is not 1 --> false
        'aeiou'.includes(char.toLowerCase()) !== -1 // the character when changed to lowercase
        // must be included in the string 'aeiou'. the -1 just means not in the index.
}
}



//My solution (Not the best)
    // if (character == 'a') {
    //     return true
    // } else if (character == 'e') {
    //     return true
    // } else if (character == 'i') {
    //     return true
    // } else if (character == 'o') {
    //     return true
    // } else if (character == 'u') {
    //     return true
    // } else if (character == 'A') {
    //     return true
    // } else if (character == 'E') {
    //     return true
    // } else if (character == 'I') {
    //     return true
    // } else if (character == "O") {
    //     return true
    // } else if (character == "U") {
    //     return true
    // } else return false

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write two functions: "isEven" and "isOdd" that take a number argument and
// return true or false if the number is even or odd, respectively.
// The functions should return "false" if the number passed in is not an integer.
//
// Examples:
// isEven(100) --> true
// isEven(1) --> false
// isEven(-2) --> true
// isEven('banana') --> false
// isOdd(5) --> true
// isOdd('7') --> false
// isOdd(3.14) --> false

//Solution 1: My solution
function isEven (number) {
    if (number % 2 === 0 & typeof number == 'number') {
        return true
    } else return false
}

function isOdd (number) {

    if (number % 2 !== 0 && typeof number == 'number' && number % 2 == 1) {
        return true
    } else if (number % 2 == -1) {
        return true
    } else return false
}
//Solution 2: From Class wit help from Chris 
function isInteger (number) {             //This is a predicate function that checks if a number is an integer
    return typeof number === 'number' && number % 1 === 0 //if a number divided by 1 has a remainder of 0, its an integer.
} //Here we created a predicate function that checks whether a number is an integer so that
  //We can pass it into the isOdd function.
// Predicate functions are commonly solved with other predicate functions like isInteger
function isOdd(number) {
    return isInteger(number) &&
    number % 2 !== 0
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "isCapitalCity" that takes two arguments: a US state and a city name
// and returns true or false if the city name is the capital of the state.
// The function should return false if the state name is not a valid US state.
//
// Hint 1: What is the best data structure to store this information? Object? Array? etc.
// Hint 2: This problem can be solved without using a "for" or "while" loop.
// Hint 3: Can you find this data online in JSON format? How might that be helpful?
//
// Examples:d
// isCapitalCity('Texas', 'Austin') --> true
// isCapitalCity('Texas', 'Houston') --> false
// isCapitalCity('Alaska', 'Juneau') --> true
// isCapitalCity('Strawberry', 'Mango') --> false

let capitals = {
    Alabama: 'Montgomery',
    Montana: 'Helena',
    Alaska:    'Juneau',    
    Nebraska: 'Lincoln',
    Arizona: 'Phoenix',    
    Nevada:    'Carson City',
    Arkansas: 'Little Rock',    
    'New Hampshire': 'Concord',
    California:    'Sacramento',    
    'New Jersey': 'Trenton',
    Colorado: 'Denver',    
    'New Mexico': 'Santa Fe',
    Connecticut: 'Hartford',    
    'New York': 'Albany',
    Delaware: 'Dover',    
    'North Carolina': 'Raleigh',
    Florida: 'Tallahassee',    
    'North Dakota': 'Bismarck',
    Georgia: 'Atlanta',    
    Ohio: 'Columbus',
    Hawaii:    'Honolulu',    
    Oklahoma: 'Oklahoma City',
    Idaho: 'Boise',    
    Oregon:    'Salem',
    Illinois: 'Springfield',    
    Pennsylvania: 'Harrisburg',
    Indiana: 'Indianapolis',    
    'Rhode Island': 'Providence',
    Iowa: 'Des Moines',    
    'South Carolina': 'Columbia',
    Kansas:    'Topeka',    
    'South Dakota': 'Pierre',
    Kentucky: 'Frankfort',    
    Tennessee: 'Nashville',
    Louisiana: 'Baton Rouge',
    Texas: 'Austin',
    Maine: 'Augusta',
    Utah: 'Salt Lake City',
    Maryland: 'Annapolis',    
    Vermont: 'Montpelier',
    Massachusetts: 'Boston',    
    Virginia: 'Richmond',
    Michigan: 'Lansing',    
    Washington:    'Olympia',
    Minnesota:    'St. Paul',    
    'West Virginia': 'Charleston',
    Mississippi: 'Jackson',    
    Wisconsin: 'Madison',
    Missouri: 'Jefferson City',    
    Wyoming: 'Cheyenne'
};

function isCapitalCity (state, city) {
    
if (capitals[state] === city) { //I had to use branch notation for capitals, because dot notation
    return true                 // did not work. I couldn't use it in this instance. Why?
} else return false
//What it says here in English is if the condition is met, pass it as true, if not its false.
//Another way of saying this is: if you pass state into capitals as a property it should return what
// was entered as city. 
}
