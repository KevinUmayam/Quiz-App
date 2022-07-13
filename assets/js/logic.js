// TODO: add game logic
// variables to keep track of quiz state
const question = document.querySelector(".question");
const choice1 = document.querySelector(".choice1");
const choice2 = document.querySelector(".choice2");
const choice3 = document.querySelector(".choice3");
const choice4 = document.querySelector(".choice4");
const timerEl = document.querySelector(".time");
// questions
const atMost = 5;
const questionsT = [];
let currentQ = {};

//time countdown function
function startTimer() {
  let timerCount = 100;

  let timer = setInterval(function () {
    timerCount--;
    timerEl.textContent = "remaining time: " + timerCount;
  }, 1000);
}

//start the timer function bellow
// startTimer();
// var questionsT = questions.map(function (question) {
//   return question.title;
// });
// console.log(questionsT);

function startQuiz() {
  console.log(questionsT);
  newQselector();
}

function newQselector() {
  var questionsT = [...questions];
  var questionList = Math.floor(Math.random() * questionsT.length);
  currentQ = questionsT[questionList];

  question.innerText = currentQ.title;
  choice1.innerText = currentQ.choice1;
  choice2.innerText = currentQ.choice2;
  choice3.innerText = currentQ.choice3;
  choice4.innerText = currentQ.choice4;
  // questionsT.pop(questionList);
}
startQuiz();
