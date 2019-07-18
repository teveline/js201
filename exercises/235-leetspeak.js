// Write a function "leetspeak" which is given a string, and returns the
// leetspeak equivalent of the string.
// To convert text to its leetspeak version, make the following substitutions:
// A => 4
// E => 3
// G => 6
// I => 1
// O => 0
// S => 5
// T => 7
//
// HINT: What is the best data structure to represent the substitutions?
//
// Examples:
// leetspeak('Leet') --> "l337"
// leetspeak('ORANGE') --> "0r4n63"

//Lowercase each character of the string
//loop through all characters of the string
//replace target letters with their substitutions before inputing them into the new string
function leetspeak (string) {
    let newWord = ''
    let bigString = string.toUpperCase() //capitalizes the entire string so it will match with keys of substitutions
    let substitutions = {
        A: 4,
        E: 3,
        G: 6,
        I: 1,
        O: 0,
        S: 5,
        T: 7
    }
    let keys = Object.keys(substitutions)
    for (let idx = 0; idx < string.length; idx++) {
        let character = bigString.charAt(idx)
        if (keys.includes(character)) {
            newWord += substitutions[character]
        } else newWord += character

        }
    return newWord.toLowerCase()
}
 
