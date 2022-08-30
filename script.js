'use strict';

let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// DOM ELEMENTS
const body = document.querySelector("body");
const btnCheck = document.querySelector(".check");
const btnAgain = document.querySelector(".again");
const lblNumber = document.querySelector(".number");
const lblMessage = document.querySelector(".message");
const lblScore = document.querySelector(".score");





btnCheck.addEventListener("click", function() {
    const inputGuess = Number(document.querySelector(".guess").value);

    if(!inputGuess){
        lblScore.textContent = "Please enter a number."
    } 

    if (inputGuess === secretNumber){
        lblMessage.textContent = "You won!";

        lblNumber.textContent = secretNumber;
        body.style.backgroundColor = "#60b347";
        lblNumber.style.width = "30rem";

    } else if(inputGuess !== secretNumber){
        if(score > 1){
            lblMessage.textContent = inputGuess > secretNumber ? "Too high!" : "Too low!";
            score--;
            lblScore.textContent = score;
        } else {
            lblMessage.textContent = "GAME OVER!";
            score--;
            lblScore.textContent = score;
        }
    }
});


btnAgain.addEventListener("click", function() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    lblNumber.textContent = "?";
    lblMessage.textContent = "Start guessing...";
    lblNumber.style.width = "15rem";
    lblScore.textContent = score;
    document.querySelector(".guess").value = "";

    body.style.backgroundColor = "#222";
    
})