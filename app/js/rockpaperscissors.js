////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    var ROCK = 'rock';
    var PAPER = 'paper';
    var SCISSORS = 'scissors';
    switch (playerMove) {
        case ROCK:
          switch (computerMove) {
            case ROCK: winner = 'tie'; break;
            case PAPER: winner = 'computer'; break;
            case SCISSORS: winner = 'player'; break;
          }
          break;
        case PAPER:
          switch (computerMove) {
            case ROCK: winner = 'player'; break;
            case PAPER: winner = 'tie'; break;
            case SCISSORS: winner = 'computer'; break;
          }
          break;
        case SCISSORS:
          switch (computerMove) {
            case ROCK: winner = 'computer'; break;
            case PAPER: winner = 'player'; break;
            case SCISSORS: winner = 'tie'; break;
          }
          break;
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var playTo = 5;
    var currWinner;
    var currPlayerMove;
    var currComputerMove;
    var maxPlays = 500;
    var numPlays = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while (playerWins < playTo && computerWins < playTo) {
        currPlayerMove = getPlayerMove();
        if (currPlayerMove === 'exit') {
            break;
        }
        currComputerMove = getComputerMove();
        currWinner = getWinner(currPlayerMove, currComputerMove);
        switch (currWinner) {
            case 'computer': computerWins += 1; break;
            case 'player' : playerWins += 1; break;
        }
        console.log("Current player move = " + currPlayerMove + ". Current ComputerMove = " + currComputerMove);
        console.log("The score is currently " + playerWins + " to " + computerWins + '\n');
        numPlays += 1;
        if (numPlays > maxPlays) {
            break;
        }
    }
    return [playerWins, computerWins];
}
