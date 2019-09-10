 //variables to hold wins, losses, guesses left
var userWins = 0;
var userLosses = 0;
var userGuesses = [];

var numTries = 9;
guessesLeft.innerHTML = numTries;
wins.innerHTML = userWins;
losses.innerHTML = userLosses;

//valid choices
// var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//computer choice
var computerChoice;
createComputerLetter = function(){
 computerChoice = options[Math.floor(Math.random()* options.length)];
console.log(computerChoice);
}
createComputerLetter();

// functions
isGuessValid = function(guess) {
    if(options.includes(guess)) {
        // console.log("guess: " +  guess + " is considered valid!");
        return true;
    }
    // console.log("guess: " + guess + " is not valid!");
    return false;
};

isGuessCorrect = function (userGuess) {
    if (userGuess === computerChoice) {
        console.log("You're awesome!");
        return true;
    }
    return false;
};

isLoss = function(){
    if(numTries<= 0) {
        console.log("You LOSE!");
        return true;
    }
    return false;
}

//record user guess
document.onkeydown = function(event) {
    const userGuessKey = event.key.toLowerCase();
    const isValid = isGuessValid(userGuessKey);
    if(isValid) {
        userGuesses.push(userGuessKey);
        guesses.textContent = userGuesses;
        numTries--;
        
        // check for a win
        if(isGuessCorrect(userGuessKey)) {
            userWins++;
            numTries= 9;
            userGuesses.length = 0;
            document.getElementById("guesses").innerHTML="";
            createComputerLetter();
        } else if (isLoss()) {
            // console.log("it sure was a loss");
            userLosses++;
            numTries=9;
            userGuesses.length = 0;
            document.getElementById("guesses").innerHTML="";
            createComputerLetter();
        }

        //displays the starting number of guesses user has left
        guessesLeft.innerHTML = numTries;
        wins.innerHTML = userWins;
        losses.innerHTML = userLosses;
    }
};

    