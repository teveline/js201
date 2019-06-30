// Write a function "rockPaperScissors" which takes the throw of player 1 and
// the throw of player 2.
// A throw can have the values of 'rock', 'paper', or 'scissors'.
// It should return the winner: 'player 1', 'player 2', or 'draw'
// Examples:
// rockPaperScissors('rock', 'scissors') --> 'player 1'
// rockPaperScissors('rock', 'paper') --> 'player 2'
// rockPaperScissors('paper', 'paper') --> 'draw'

function rockPaperScissors (player1, player2) {
    if (player1 === player2) {
        return 'draw'
    }
    if (player1 === 'rock') {
        if (player2 === 'paper') {
            return 'player 2'
        } else return 'player 1'
    }
    if (player1 === 'rock') {
        if (player2 === 'scissors') {
            return 'player 1'
        } else return 'player 2'
    }
    if (player1 === 'paper') {
        if (player2 === 'rock') {
            return 'player 1'
        } else return 'player 2'
    }
    if (player1 === 'paper') {
        if (player2 === 'scissors') {
            return 'player 2'
        } else return 'player 1'
    }
    if (player1 === 'scissors') {
        if (player2 === 'rock') {
            return 'player 2'
        } else return 'player 1'
    }
    if (player1 === 'scissors') {
        if (player2 === 'paper') {
            return 'player 1'
        } else return 'player 2'
    }
}