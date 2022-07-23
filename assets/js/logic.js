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
let initialsEl = document.querySelector("#inicialS");
// test
let savebtn = document.querySelector(".save");
// questions
let acceptingAswers = false;
const atMost = 5;
const questionsT = [];
let currentQ = {};
let currentQIndex = 0;
let timerCount = 100;
let score;
//time countdown function
function startTimer() {
  let timer = setInterval(function () {
    if (timerCount <= 1 || currentQIndex > 5) {
      clearInterval(timer);

      terminateQ();
    }
    timerCount--;
    timerEl.textContent = "remaining time: " + timerCount;
  }, 1000);
}

startTimer();

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

savebtn.addEventListener("click", (e) => {
  e.preventDefault();
  const endF = document.getElementById("submit");
  endF.setAttribute("class", "hidden");

  const endS = document.getElementById("endS");
  endS.setAttribute("class", "form");
  saveInfo();
});

function terminateQ() {
  const changeB = document.getElementById("body");
  changeB.setAttribute("class", "hidden");

  const endF = document.getElementById("submit");
  endF.setAttribute("class", "form");
  displayScore();
}

// test
function saveInfo() {
  let initials = initialsEl.value.trim();

  if (initials !== "") {
    let playerScore =
      JSON.parse(window.localStorage.getItem("playerScore")) || [];
    console.log(playerScore);
    let newScore = {
      score: timerCount,
      initials: initials,
    };
    console.log(newScore);
    playerScore.push(newScore);
    console.log(newScore);
    window.localStorage.setItem("playerScore", JSON.stringify(playerScore));
    console.log("b" + playerScore);
  }
}
savebtn.onClick = saveInfo;

function displayScore() {
  const finalList =
    JSON.parse(window.localStorage.getItem("playerScore")) || [];

  finalList.forEach(function (score) {
    var liTag = document.createElement("li");
    liTag.textContent = score.initials + " - " + score.score;

    var olEl = document.getElementById("scoreol");
    olEl.appendChild(liTag);
  });
}
