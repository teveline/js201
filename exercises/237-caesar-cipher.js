// Write a function "cipher" which is given a string, a shift, and returns
// the Caesar cipher of the string.
// Caesar cipher --> http://practicalcryptography.com/ciphers/caesar-cipher/
//
// Examples:
// > cipher('Genius without education is like silver in the mine', 5)
// 'ljsnzx bnymtzy jizhfynts nx qnpj xnqajw ns ymj rnsj'
// > cipher('We hold these truths to be self-evident', 8)
// 'em pwtl bpmam bzcbpa bw jm amtn-mdqlmvb'

// function cipher (string, shift) {

//     if (shift < 0) {
//         cipher (string, shift + 26)
//     }

//     let letters = "abcdefghijklmnopqrstuvwxyz"
//     let smallString = string.toLowerCase()
//     let codedString = ''

//     for (let idx = 0; idx < string.length; idx++) {

//         let character = smallString.charAt(idx); // 1
//         let idxOfChar = letters.indexOf(character)
        
//         let reset = function (idxOfChar) {
//             if (idxOfChar + shift > 25) {
//                 return idxOfChar += shift - 26
//             } else return idxOfChar + shift
//         }
//         let newChar = letters.charAt(reset(idxOfChar)) //Won't pass numbers b/c if not in the
//         // letters string it passes as "-1" causing all non letters to pass as C

//         if (smallString.includes(character)) {
//             codedString += newChar
//         } else codedString += character
//     }

//     return codedString
// }

//Everything about the code above works except for adding characters that are not in the
//alphabet to the new string. It doesn't work because .indexOf always starts it from -1

function cipher (string, shift) {

    if (shift < 0) {
        cipher (string, shift + 26)
    }

    let letters = "abcdefghijklmnopqrstuvwxyz"
    let smallString = string.toLowerCase()
    let codedString = ''

    for (let idx = 0; idx < string.length; idx++) {

        let character = smallString.charAt(idx);
        let idxOfChar = letters.indexOf(character)

        //this function wraps the index back around to start at 0. 
        let reset = function (idxOfChar) {
            if (idxOfChar + shift > 25) {
                return idxOfChar += shift - 26
            } else return idxOfChar + shift
        }
        let newChar = letters.charAt(reset(idxOfChar)) //Won't pass numbers b/c if not in the
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



function numReset (num, shift) {
    if (num + shift < 25) {
        num = 0 + (num + shift) - 25
    }
}