'use strict';

const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1");
const currentScore0 = document.getElementById("current--0");
const currentScore1 = document.getElementById("current--1");
const imageElement = document.querySelector('.dice');
const diceButton = document.querySelector('.btn--roll');
const scoreHold = document.querySelector(".btn--hold");
const newGame = document.querySelector(".btn--new");
let player1 = true;
let player2 = false;
let total = 0;
let current0 = 0;
let current1 = 0;
newGame.addEventListener("click", () => {
    switchPlayer1();
    total = 0;
    current0 = 0;
    current1 = 0;
    currentScore0.textContent = 0;
    currentScore1.textContent = 0;
    score0.textContent = 0;
    score1.textContent = 0;

})
diceButton.addEventListener("click", () => {
    
    let diceValue = rollDice();

    imageElement.src = `dice-${diceValue}.png`;

    if (player1 && diceValue == 1) {
        total = 0;
        switchPlayer2();
    } else if (player2 && diceValue == 1) {
        total = 0;
        switchPlayer1();
    } else if (player1) {
        total += diceValue;
        score0.textContent = total;
    } else if (player2) {
        total += diceValue;
        score1.textContent = total;
    } 
});
scoreHold.addEventListener("click", () => {
    if (player1) {
        current0 += total
        currentScore0.textContent = current0;
        if (Number(current0) >= 100) {
            console.log("Player 1 wins!");
            alert("Player 1 wins!");
        }
        switchPlayer2();
    } else if (player2) {
        current1 += total
        currentScore1.textContent = current1;
        if (Number(current1) >= 100) {
            console.log("Player 2 wins!");
            alert("Player 2 wins!");
        }
        switchPlayer1();
    }
});

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }

function switchPlayer1() {
    player1 = true;
    player2 = false;
    score1.textContent = 0;
    total = 0;
    document.querySelector(".player--0").classList.add("player--active");
    document.querySelector(".player--1").classList.remove("player--active");
}
function switchPlayer2 () {
    player1 = false;
    player2 = true;
    total = 0;
    score0.textContent = 0;
    document.querySelector(".player--1").classList.add("player--active");
    document.querySelector(".player--0").classList.remove("player--active");
}


