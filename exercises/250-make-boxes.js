// Write a function "makeSquare" which is given a size and returns a square of
// that size using asterisks.
// Example:
// makeSquare(5)
// *****
// *****
// *****
// *****
// *****

// Attempt 1: Worked in Pythontutor, but did not pass tests or work in the browser
// function makeSquare(squareSize) {
//     let lineOfStars = ''

//     for (let idx = 0; idx < squareSize; idx++) {            // 1st loop: For every # between 0 and the squareSize...
//             for (let idx2 = 0; idx2 < squareSize; idx2++) {     // 2nd loop: cycle through the numbers between 0 and squareSize and
//                 lineOfStars += '*'                              // add an * to the lineOfStars string
//             }
//             console.log(lineOfStars)                            // 1st loop: log the line of stars for the first loop
//             lineOfStars = ''                                     // 2nd loop: reset line of Stars to an empty string
//         }
// }
  
// Attempt 2: Works
function makeSquare(squareSize) {
    let square = ''
    let star = '*'

    for (let i = 0; i < squareSize; i++) {
        if (i < squareSize - 1) {
            square += star.repeat(squareSize) + '\n'
        }else square += star.repeat(squareSize)
    }
    return square
}
    

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBox" which is given a width and height and returns a
// hollow box of those dimensions.
// Example:
// makeBox(6, 4)
// ******
// *    *
// *    *
// ******

function makeBox(width, height) {
    let box = ''
    let star = '*'
    let emptySpace = ' '

    for (let i = 0; i < height; i++) {
        if (i === 0) {                       // if on the first row...
            box += star.repeat(width)        // add the entire width of *'s   
        } else if (i === height - 1) {       // if on the last row...
            box += '\n' + star.repeat(width)        // go to next line then add the width of *'s
        } else box += '\n' + star + emptySpace.repeat(width - 2) + star
        //Any other time go to the next line then add spaces surrounded by *'s and
        // then go to the next line
    }

    return box
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBanner" which is given some text and returns a banner
// with a border surrounding the text. The border should stretch to the length
// of the text.
// Example:
// makeBanner('Welcome to DigitalCrafts')
// ****************************
// * Welcome to DigitalCrafts *
// ****************************

function makeBanner(text) {
    let banner = ''
    let star = '*'

    for (let i = 0; i < 3; i++) {
        if (i === 0) {
            banner += star.repeat(text.length + 4)
        } else if (i < 2) {
            banner += '\n' + star + ' ' + text + ' ' + star
        } else banner += '\n' + star.repeat(text.length + 4)
    }
    return banner
}

function makeBox(width, height) {
    let box = ''
    let star = '*'
    let emptySpace = ' '

    for (let i = 0; i < height; i++) {
        if (i === 0) {                       // if on the first row...
            box += star.repeat(width)        // add the entire width of *'s   
        } else if (i === height - 1) {       // if on the last row...
            box += '\n' + star.repeat(width)        // go to next line then add the width of *'s
        } else box += '\n' + star + emptySpace.repeat(width - 2) + star
        //Any other time go to the next line then add spaces surrounded by *'s and
        // then go to the next line
    }

    return box
}