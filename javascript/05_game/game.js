//create secretNumber
var secretNumber = 4;
// ask use for guess
var guess=Number(prompt("guess a number"));

alert(guess);
//check guess
if (guess===secretNumber) {
    alert("You got it right!");
}
else if (guess > secretNumber){
    alert("Too high. Guess again.");
}
else {
    alert("Too small. Guess again.");
}