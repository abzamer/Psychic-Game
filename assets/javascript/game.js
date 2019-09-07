 //variables to hold wins, losses, guesses left
var userWins = 0;
var userLosses = 0;
var guessesLeft = 9;
var userGuesses;

//get id and link to js/html
var userWins= document.getElementById("wins");
console.log("These are user wins");
var userLosses = document.getElementById("losses");
console.log("These are the user losses");
var guessesLeft = document.getElementById("guessesLeft");
console.log("What you have left");

//this will track what key the user pressed
document.onkeyup = function(event) {
    var userGuesses = event.key.toLowerCase();
    console.log(userGuesses);
    guesses.textContent = userGuesses;
};




// var userChoice = event.key.toLowerCase();
// console.log(userChoice);


//check order: this will compare the userChoice to computerChoice & If userChoice is wrong, subtract one from guessesLeft




//this will add the letterPressed to "guesses so far"



//I need to make the computer pick a random letter




//if guessesLeft === 0, user loses the game



//restarts the game & adds 1 to losses




//If userChoice matches computerChoice, Restart game & add 1 to wins

