var pageElement = document.querySelector("#main-page");
var h1Element = document.querySelector("#intro");
var h4Element = document.querySelector("#intro-2");
var startElement = document.querySelector("#start");
var quizElement = document.querySelector("#quiz");
var questionElement = document.querySelector("#question");
var choicesElement = document.querySelector("#choices");
var answerA = document.querySelector("#choice1");
var answerB = document.querySelector("#choice2");
var answerC = document.querySelector("#choice3");
var answerD = document.querySelector("#choice4");
var rightWrong = document.querySelector("#answer-text");
var counter = document.querySelector("#counter");
var answer = document.querySelector("#answer");
var scoreDiv = document.querySelector("#score");

var questions = [
  {
    question: "Which sea creature has three hearts?",
    answerA: "Octopus",
    answerB: "Whale",
    answerC: "Pufferfish",
    answerD: "Starfish",
    correct: "A"
  },
  {
    question: "Which country does the sport of pelato come from?",
    answerA: "Spain",
    answerB: "Italy",
    answerC: "Mexico",
    answerD: "Greece",
    correct: "A"
  },
  {
    question: "Which ocean surrounds the Maldives?",
    answerA: "Pacific",
    answerB: "Atlantic",
    answerC: "Arctic",
    answerD: "Indian",
    correct: "D"
  },
  {
    question:
      "Name the DISNEY fictional character whose household duties did not prevent her determination to dance.",
    answerA: "Belle",
    answerB: "Merida",
    answerC: "Snow White",
    answerD: "Cinderella",
    correct: "D"
  },
  {
    question: "This NFL team logo contains a flower.",
    answerA: "Browns",
    answerB: "Redskins",
    answerC: "Saints",
    answerD: "Patriots",
    correct: "C"
  }
];

var lastQuestion = questions.length - 1;

let countQuestion = 0;
var startTime = 75;
var endTime = 0;
var TIMER;

function askQuestion() {
  var q = questions[countQuestion];

  console.log(q);

  question.textContent = q.question;
  answerA.textContent = q.answerA;
  answerB.textContent = q.answerB;
  answerC.textContent = q.answerC;
  answerD.textContent = q.answerD;
}

startElement.addEventListener("click", startQuestions);
//start the quiz

function startQuestions() {
  page.style.display = "none";
  askQuestion();
  quiz.style.display = "block";
  timeCounter();
  TIMER = setInterval(timeCounter, 1000);
}

function timeCounter() {
  
    if (startTime > endTime) {
      counter.textContent = startTime;
      startTime--;
    } else {
      startTime = 0;
    }
  
}

answerA.addEventListener("click", function() {
  checkAnswer("A");
});
answerB.addEventListener("click", function() {
  checkAnswer("B");
});
answerC.addEventListener("click", function() {
  checkAnswer("C");
});
answerD.addEventListener("click", function() {
  checkAnswer("D");
});

function checkAnswer(input) {
  var boolean = false;
  if (input === questions[countQuestion].correct) {
    answer.textContent = "Correct";
  } else {
    answer.textContent = "Wrong!";
    boolean = true;
  }
  if (boolean === true) {
    startTime = startTime - 15;
  }
  if (countQuestion < lastQuestion) {
    countQuestion++;
    askQuestion();
  } else {
    if(boolean === true) {
      startTime = startTime - 15;
    }
    clearInterval(TIMER);
  }
}


