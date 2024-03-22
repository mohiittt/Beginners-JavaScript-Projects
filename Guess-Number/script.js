let input = document.getElementById("input");
let btn = document.querySelector(".button-5");
let wrong = document.querySelector(".wrong");
let guess = document.getElementById("guess");

let answer = Math.floor(Math.random() * 101);
console.log(answer);

let numGuess = 0;

btn.addEventListener("click", () => {
  guessNumber();
});

function guessNumber() {
  if (input.value < 1 || input.value > 100 || isNaN(input.value)) {
    wrong.innerHTML = "Enter Between 1 to 100 Only!";
  } else {
    numGuess++;
    guess.innerHTML = "Number of Guesses : " + numGuess;
    if (input.value > answer) {
      wrong.innerHTML = " Too High!";
      input.value = "";
    } else if (input.value < answer) {
      wrong.innerHTML = "Too Low";
      input.value = "";
    } else if (input.value == answer) {
      alert("Congratulation You Won!! You took  " + numGuess + " Attempts");
      location.reload();
    }
  }
}
