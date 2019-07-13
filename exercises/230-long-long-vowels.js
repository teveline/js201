// Write a function "longLongVowels" which is given a string, and returns a
// version of that string extending any long vowels to 5 characters.
//
// Examples:
// > longLongVowels('Good')
// 'Goooood'
// > longLongVowels('Cheese')
// 'Cheeeeese'
// > longLongVowels('Man')
// 'Man'


// strategy
// Look up methods, maybe .replace()?
// Search the string for any double vowels
// if two vowels are next to each other replace them with 5 of that same character
function longlongvowels (word) {
    longVowel = ["aa", "ee", "ii", "oo", "uu"] //these are the long vowels we want to look for
    for (let index = 0; index < word.length; index++) { //used to iterate through the longVowel string list
            console.log("Phase 1 is working")   //will check the string to see if it contains double vowels
        }
}