// TODO: add game logic
// variables to keep track of quiz state
var question = document.getElementsByClassName(".question");
var choice = document.getElementsByClassName(".choiceI");
var timerEl = document.querySelector(".time");

function startTimer() {
  let timerCount = 100;

  let timer = setInterval(function () {
    timerCount--;
    timerEl.textContent = "remaining time: " + timerCount;
  }, 1000);
}
startTimer();
