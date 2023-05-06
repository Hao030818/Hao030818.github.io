let randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = 10;

function guessNumber() {
  const guess = parseInt(document.getElementById("guess").value);
  if (isNaN(guess) || guess < 1 || guess > 100) {
    document.getElementById("result").innerHTML = "Please enter a valid number between 1 and 100.";
  } else {
    guesses--;
    if (guess < randomNumber) {
document.getElementById("result").innerHTML = "Too low! You have " + guesses + " guesses left.";
document.getElementById("result").style.backgroundColor = "blue";
document.querySelector(".crocodile").classList.remove("happy");
document.querySelector(".crocodile").classList.add("angry");
} else if (guess > randomNumber) {
document.getElementById("result").innerHTML = "Too high! You have " + guesses + " guesses left.";
document.getElementById("result").style.backgroundColor = "red";
document.querySelector(".crocodile").classList.remove("happy");
document.querySelector(".crocodile").classList.add("sad");
} else {
document.getElementById("result").innerHTML = "Congratulations! You guessed the number in " + (10 - guesses) + " guesses.";
document.getElementById("result").style.backgroundColor = "green";
document.querySelector(".crocodile").classList.remove("angry");
document.querySelector(".crocodile").classList.remove("sad");
document.querySelector(".crocodile").classList.add("happy");
document.getElementById("guess").disabled = true;
document.getElementsByTagName("button")[0].disabled = true;
   }
 }
}
