let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 25);
console.log(randomNumber)

function checkGuess() {
    let number = parseInt(userInput.value);
    if (number >=0 & number<=25) {
        if (number > randomNumber & number > (randomNumber+5)) {
            gameResult.textContent = "Too High! Try again.";
            gameResult.style.backgroundColor = "red"
        } 
        else if (number < randomNumber & number < (randomNumber-5)) {
            gameResult.textContent = "Too Low! Try again.";
            gameResult.style.backgroundColor = "red"
        }
        else if (number > (randomNumber) & number <= (randomNumber+5)) {
            gameResult.textContent = "High! Try again with a nearby value.";
            gameResult.style.backgroundColor = "#ff5757"
        } 
        else if (number < (randomNumber) & number >= (randomNumber-5)) {
            gameResult.textContent = "Low! Try again with a nearby value.";
            gameResult.style.backgroundColor = "#ff5757"
        }
        else if (number === randomNumber) {
            gameResult.textContent = "Congratulations! You won the game.";
            gameResult.style.backgroundColor = "green"
        }
    }
    else {
        gameResult.textContent = "Please enter a valid number between 0 to 25";
        gameResult.style.backgroundColor = "red"
    }
}
