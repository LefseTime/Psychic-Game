//array of letters to draw from
var letters = ["a", "b", "c", "d"]

//generate random letter from array
var letter = letters[Math.floor(Math.random() * letters.length)];
//log random letter to console (removed to preserve... THE MYSTERY!)
// console.log(letter);

//create variables for wins, losses, guesses left, and guessed so far
var win = 0;
var lose = 0;
var guessLeft = 9;
var guessSoFar = "";

//function to run when key pressed
document.onkeyup = function (event) {
    // console.log(event.key)

    //call the key pushed guessKey
    var guessKey = event.key;

    //if key is correct
    if (guessKey == letter) {
        //add one to wins
        win++;
        // console.log(win);
        var p1 = document.getElementById("wins");
        p1.textContent = ("Wins: " + win);

        //regenerate random letter
        letter = letters[Math.floor(Math.random() * letters.length)];
        // console.log(letter);

        //reset guessesLeft
        guessLeft = 9;
        var p3 = document.getElementById("left");
        p3.textContent = ("Guesses Left: " + guessLeft);

        //reset guessSoFar
        guessSoFar = "";
        var p4 = document.getElementById("soFar");
        p4.textContent = ("Guessed So Far: ");
    }

    //else if key is incorrect
    else if (guessKey !== letter) {
        //subtract 1 from guessesleft
        guessLeft--;
        // console.log(guessLeft);
        var p3 = document.getElementById("left");
        p3.textContent = ("Guesses Left: " + guessLeft);

        //add letter guessed to letters guessed
        guessSoFar = (guessSoFar + " " + guessKey);
        var p4 = document.getElementById("soFar");
        p4.textContent = ("Guessed So Far: " + guessSoFar);

        //add 1 loss if guessesleft = 0
        if (guessLeft === 0) {
            //add 1 to losses
            lose++;
            // console.log(lose);
            var p2 = document.getElementById("losses");
            p2.textContent = ("Losses: " + lose);

            //regenerate random letter
            letter = letters[Math.floor(Math.random() * letters.length)];
            // console.log(letter);

            //reset guessesLeft
            guessLeft = 9;
            var p3 = document.getElementById("left");
            p3.textContent = ("Guesses Left: " + guessLeft);

            //reset guessSoFar
            guessSoFar = "";
            var p4 = document.getElementById("soFar");
            p4.textContent = ("Guessed So Far: ");

        }
    }
}