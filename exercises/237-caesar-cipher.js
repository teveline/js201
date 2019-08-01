// Write a function "cipher" which is given a string, a shift, and returns
// the Caesar cipher of the string.
// Caesar cipher --> http://practicalcryptography.com/ciphers/caesar-cipher/
//
// Examples:
// > cipher('Genius without education is like silver in the mine', 5)
// 'ljsnzx bnymtzy jizhfynts nx qnpj xnqajw ns ymj rnsj'
// > cipher('We hold these truths to be self-evident', 8)
// 'em pwtl bpmam bzcbpa bw jm amtn-mdqlmvb'

function cipher (string, shift) {

    // if (shift < 0) {
    //     cipher (string, shift + 26)
    // }

    let letters = "abcdefghijklmnopqrstuvwxyz"
    let smallString = string.toLowerCase() //lowercases the entered string
    let codedString = '' //accumulator

    for (let idx = 0; idx < string.length; idx++) {

        let character = smallString.charAt(idx); //character definition
        let idxOfChar = letters.indexOf(character) //idxOfChar definition

        //this function wraps the index back around to start at 0. 
        let resetIndexOfChar = function (idxOfChar) {
            if (idxOfChar + shift > 25) {
                return idxOfChar += shift - 26
            } else return idxOfChar + shift
        }
        //this function that will input either the character that
        //was entered as input or the new ciphered letter depending on whether its a letter
        let cipherLetter = letters.charAt(resetIndexOfChar(idxOfChar))

        function charToNewString (character) {
            if (letters.includes(character)) {
                return cipherLetter
            } else return character
        }

        let newChar = charToNewString(character) //Won't pass numbers b/c if not in the
        // letters string it passes as "-1" causing all non letters to pass as a letter
        // once "shift" is added to it

        if (smallString.includes(character)) {
            codedString += newChar
        } else codedString += character
    }

    return codedString

}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "decipher" which is given a string, a shift, and returns the
// decoded Caesar cipher message.
//
// Examples:
// > decipher('cvvcem cv fcyp!', 2)
// 'attack at dawn!'
// > decipher('ehz czlod otgpcrpo ty l hzzo', 11)
// 'two roads diverged in a wood'

function decipher (string, shift) {
    //I want a function that works the opposite of cipher

    //keep this
    let letters = "abcdefghijklmnopqrstuvwxyz"
    let smallString = string.toLowerCase() //lowercases the entered string
    let codedString = '' //accumulator

    for (let idx = 0; idx < string.length; idx++) { //iterates through characters on the string

        let character = smallString.charAt(idx); //character definition the character at a certain position
        let idxOfChar = letters.indexOf(character) //idxOfChar definition: the number position of the character

        //this function wraps the index back around to start at 25. 
        let resetIndexOfChar = function (idxOfChar) {
            if (idxOfChar - shift < 0) {                //<-- This function iterates through the
                return idxOfChar -= shift - 26          // letter string in the opposite direction as cipher
            } else return idxOfChar - shift
        }
        //this function will input either the character that
        //was entered as input or the new ciphered letter depending on whether its in "letters"
        let cipherLetter = letters.charAt(resetIndexOfChar(idxOfChar))

        function charToNewString (character) {
            if (letters.includes(character)) {  //if the character is a letter
                return cipherLetter             //return the ciphered letter
            } else return character             //if not return the non-letter that was entered
        }

        let newChar = charToNewString(character) //Won't pass numbers b/c if not in the
        // letters string it passes as "-1" causing all non letters to pass as a letter
        // once "shift" is added to it

         //Recapitalize: will capitalize the newChar to be added to the string
         let stringChar = string.charAt(idx)        // Characters in the original string

        
            let capNewChar = newChar.toUpperCase()

        if (smallString.includes(character) && string.charAt(idx) === string.charAt(idx).toUpperCase()) { //if the character is in smallstring and capitalized in the string
            codedString += capNewChar             // then capitalize the newChar and add it to the decoded string
        } else  if ((smallString.includes(character))) {    // if the character is in the small string
            codedString += newChar                // add the newChar to the coded string
        } else codedString += character         // otherwise add the entered character
                                          
    }

    return codedString  
}
