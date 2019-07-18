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

// 

// function longLongVowels (word) {
//     let vowels = 'aeiou'
//     for (let idx = 0; idx < word.length; idx++) {
//       let character = word.charAt(idx)
//     if (vowels.includes(character)) {
//         console.log("This character is a vowel")
//     } else console.log("This character is  NOOOOOT a vowel")
//     }
// }
// longLongVowels('cheese')

function longLongVowels (word) {
    let vowels = 'aeiou' //Creates a string of vowels to check
    let newWord = '' //empty string to accumulate to.
    for (let idx = 0; idx < word.length; idx++) {
      let character = word.charAt(idx)
      let nextCharacter = word.charAt(idx + 1) 
        if (vowels.includes(character) && character === nextCharacter) {
            newWord += character.repeat(4) //adds the repeated character to newWord
        } else newWord += character //adds character to the string newWord
    }
    return newWord
}