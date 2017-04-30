
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Variables for tracking our wins, losses and ties. They begin at 0.
var wins = 0;
var losses = 0;
var guesses = 10;

    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

    console.log(computerChoice)
document.onkeypress = function(event) {
    var userGuess = event.key;



    if (userGuess === computerChoice) {
    	wins ++
    } else {
    	guesses -- 
    }

    

 // if (userGuess === computerChoice) {
 //        wins = wins + 1;

 //    } else {
 //        losses = losses + 1;     
 //    }


 //    if (wins===1) {
 //    	guesses = guesses - 1;
 //    } else {
 //    	guesses= guesses - 1;

 //    }

 
    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "Losses: " + losses;
    document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;
    document.getElementById('guessed').innerHTML = "Your Guesses so far: " + guessed;

}















// // Variables for tracking our wins, losses and ties. They begin at 0.
// var wins = 0;
// var losses = 0;
// var guesses = 9;
// // var guessed = [];

// var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
//     'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    
// var gameDiv = $("#game");


// // When the user presses a key, it will run the following function...
// document.onkeypress = function(event) {
//     console.log(event);

//    var guessed = $("<p>");

//         guessed.html(alphabet);
//         gameDiv.append(guessed);
    



    

// document.getElementById('wins').innerHTML = "Wins: " + wins;
// document.getElementById('losses').innerHTML = "Losses: " + losses;
// document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;    

 



// }





    // var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

    // console.log(computerChoice)

// var wins = 0;
// var losses = 0;
// var guessesLeft = 9;
// var guessed;

// var html = "<p>Guess what letter Im thinking of...</p>" +
//         "<p>Wins: " + wins + "</p>" +
//         "<p>Losses: " + losses + "</p>" +
//         "<p>Guesses left: " + guessesLeft + "</p>" +
//     	"<p>Your guesses so far: " + guessed + "</p>"


   
// // When the user presses a key, it will run the following function...
// document.onkeyup = function(event) {
//     var userGuess = event.key;
//     var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//     var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];








// document.querySelector("#game").innerHTML = html;
// };





// var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// var wins = 0;
// var losses = -1;
// var guessesLeft = 10;
// var guesses = " ";

// document.onkeyup = function(event) {

//     var userGuess = event.key;
//     var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


//     if (userGuess === computerGuess) {
//         wins = wins + 1;

//     } else {
//         losses = losses + 1;
//     }

//     if (wins===1) {
//     	gamesLeft = gamesLeft - 1;
//     } else {
//     	gamesLeft= gamesLeft - 1;

//     }



//     var html = "<p>Guess what letter Im thinking of...</p>" +
//         "<p>Wins: " + wins + "</p>" +
//         "<p>Losses: " + losses + "</p>" +
//         "<p>Guesses Left: " + gamesLeft + "</p>" +
//         "<p>Your guesses so far: " + guesses + "</p>"

//     document.querySelector("#game").innerHTML = html;


// };
