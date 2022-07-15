// TODO: add game logic
// variables to keep track of quiz state
const question = document.querySelector(".question");
const choice1 = document.querySelector(".choice1");
const choice2 = document.querySelector(".choice2");
const choice3 = document.querySelector(".choice3");
const choice4 = document.querySelector(".choice4");
let choice = document.querySelectorAll(".choice");
const timerEl = document.querySelector(".time");
console.log(choice);
// questions
let acceptingAswers = false;
const atMost = 5;
const questionsT = [];
let currentQ = {};
let currentQIndex = 0;
let timerCount = 50;
let score;
//time countdown function
function startTimer() {
  let timer = setInterval(function () {
    if (timerCount <= 1 || currentQIndex > 3) {
      clearInterval(timer);
      score = timerCount;
      console.log(score);
      terminateQ();
    }
    timerCount--;
    timerEl.textContent = "remaining time: " + timerCount;
  }, 1000);
}

//start the timer function bellow
startTimer();
// var questionsT = questions.map(function (question) {
//   return question.title;
// });
// console.log(questionsT);

function startQuiz() {
  newQselector();
}

function newQselector() {
  acceptingAswers = true;

  var questionsT = [...questions];
  // var questionList = Math.floor(Math.random() * questionsT.length);
  currentQ = questionsT[currentQIndex];
  currentQIndex++;
  console.log(currentQ);
  question.innerText = currentQ.title;
  choice1.innerText = currentQ.choice1;
  choice2.innerText = currentQ.choice2;
  choice3.innerText = currentQ.choice3;
  choice4.innerText = currentQ.choice4;
  // if (currentQIndex < 4) {
  //   clearInterval(timer);
  // }
}

startQuiz();

function questionTimeDeduct(e) {
  console.log(e);
  // console.log(currentQ.answer);

  if (e != currentQ.answer) {
    var wrongC = document.getElementById("result1");
    wrongC.setAttribute("class", "wrong");

    setTimeout(() => {
      wrongC.setAttribute("class", "hidden");
    }, 1000);

    timerCount = timerCount - 20;

    newQselector();
  } else {
    var rightC = document.getElementById("result2");
    rightC.setAttribute("class", "right");
    console.log("correct!");

    setTimeout(() => {
      rightC.setAttribute("class", "hidden");
    }, 1000);
    newQselector();
  }
}

choice.forEach((element, i) => {
  console.log(element);
  console.log(i);

  element.addEventListener("click", (event) => {
    console.log(event.target.innerHTML);
    questionTimeDeduct(event.target.innerHTML);
  });
});
function terminateQ() {}
