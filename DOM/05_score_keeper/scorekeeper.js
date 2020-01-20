var p1 = document.querySelector("#player-one");
var p2 = document.querySelector("#player-two");
var p1Win = document.querySelector("#player-one-win");
var p2Win = document.querySelector("#player-two-win");
var reset = document.querySelector("#reset");
var numberInput = document.querySelector("input");
var maxScore = document.querySelector("#max-score");
var p1Score = 0;
var p2Score = 0;
var winningScore = 5;
var gameOver = false;

p1Win.addEventListener("click", function() {
    if (!gameOver) {
        p1Score++;
        p1.textContent = p1Score;
        if (p1Score === winningScore) {
            p1.classList.add("winner");
            gameOver = true;
        }
    }
});

p2Win.addEventListener("click", function() {
    if(!gameOver) {
        p2Score++;
        p2.textContent = p2Score;
        if (p2Score === winningScore) {
            p2.classList.add("winner");
            gameOver = true;
        }
    }   
});

numberInput.addEventListener("change", function() {
    resetted();
    winningScore = Number(this.value);
    maxScore.textContent = Number(numberInput.value);
});

reset.addEventListener("click", function() {
    resetted();
});

function resetted() {
    p1.classList.remove("winner");
    p2.classList.remove("winner");
    p1.textContent = "0";
    p2.textContent = "0";
    p1Score = 0;
    p2Score = 0;
    gameOver = false;
}

// var playerOneWin = document.querySelector("#player-one-win");
// var playerTwoWin = document.querySelector("#player-two-win");
// var playerOneCount = document.querySelector("#player-one");
// var playerTwoCount = document.querySelector("#player-two");
// var reset = document.querySelector("#reset");
// var inputMaxScore = document.querySelector("#input-max-score");
// var maxScore = document.querySelector("#max-score");

// playerOneWin.addEventListener("click", function() {
//     playerOneCount.textContent = parseInt(playerOneCount.textContent)+1;
//     if (parseInt(playerOneCount.textContent) === parseInt(maxScore.textContent)) {
//         playerOneCount.style.color = "green";
//         disabledButton();
//     }
// });

// playerTwoWin.addEventListener("click", function() {
//     playerTwoCount.textContent = parseInt(playerTwoCount.textContent)+1;
//     if (parseInt(playerTwoCount.textContent)===parseInt(maxScore.textContent)) {
//         playerTwoCount.style.color = "green";
//         disabledButton();
//     }
// });

// reset.addEventListener("click", function() {
//     unlockButton();
//     playerOneCount.textContent = "0";
//     playerTwoCount.textContent = "0";
//     playerOneCount.style.color = "black";
//     playerTwoCount.style.color = "black";
// });

// inputMaxScore.addEventListener("click", function() {
//     maxScore.textContent = inputMaxScore.value.toString();
// });


// function disabledButton() {
//     playerOneWin.disabled = true;
//     playerTwoWin.disabled = true;
// }

// function unlockButton() {
//     playerOneWin.disabled = false;
//     playerTwoWin.disabled = false;
// }

