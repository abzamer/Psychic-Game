 //variables to hold wins, losses, guesses left
var userWins = 0;
var userLosses = 0;
let userGuesses = [];

var numTries = 9;
// var guessesLeft = document.getElementById("guessesLeft");
// const rootNode = document.getRootNode;
// console.log(document.getRootNode);
// guessesLeft.textContent = numTries;


 
//computerChoice
var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const validGuesses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//computer will choose a random letter & print to console.log & determine outcome
var computerChoice = computerChoice[Math.floor(Math.random()* computerChoice.length)];
console.log(computerChoice);

// functions
isGuessValid = function(guess) {
    if(validGuesses.includes(guess)) {
        console.log("guess: " +  guess + " is considered valid!");
        return true;
    }
    console.log("guess: " + guess + " is not valid!");
    return false;
};

//get id and link to js/html
var userWins= document.getElementById("wins");
//console.log("These are user wins");
var userLosses = document.getElementById("losses");
//console.log("These are the user losses");


//record user guess
document.onkeydown = function(event) {
    const userGuessKey = event.key.toLowerCase();
    const isValid = isGuessValid(userGuessKey);
    if(isValid) {
        userGuesses.push(userGuessKey);
        guesses.textContent = userGuesses;
        // record the user guesses

        guessesLeft.innerHTML = numTries;
        // check if the user guess is correct
        // if correct, increment wins and reset game
        // if not correct, decrement numTries
        // if numTries <= 0, increment losses and reset game
    }
};