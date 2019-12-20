
var startElement = document.querySelector("#start");
var intro = document.querySelector('#intro');
var intro2 = document.querySelector('#intro-2');
var question = document.querySelector("#question");
var answerA = document.querySelector("#choice1");
var answerB = document.querySelector("#choice2");
var answerC = document.querySelector("#choice3");
var answerD = document.querySelector("#choice4");
var counter = document.querySelector("#counter");
var answer = document.querySelector("#answer");
var show = document.querySelector('#show');
var final = document.querySelector('#final');
var done = document.querySelector('#done');
var initials = document.querySelector('#initials');
var send = document.querySelector('#send');

var questions = [
  {
    question: "Which sea creature has three hearts?",
    answerA: "Octopus",
    answerB: "Whale",
    answerC: "Pufferfish",
    answerD: "Starfish",
    item: "A"
  },
  {
    question: "Which country does the sport of pelato come from?",
    answerA: "Spain",
    answerB: "Italy",
    answerC: "Mexico",
    answerD: "Greece",
    item: "A"
  },
  {
    question: "Which ocean surrounds the Maldives?",
    answerA: "Pacific",
    answerB: "Atlantic",
    answerC: "Arctic",
    answerD: "Indian",
    item: "D"
  },
  {
    question:
      "Name the DISNEY fictional character whose household duties did not prevent her determination to dance.",
    answerA: "Belle",
    answerB: "Merida",
    answerC: "Snow White",
    answerD: "Cinderella",
    item: "D"
  },
  {
    question: "This NFL team logo contains a flower.",
    answerA: "Browns",
    answerB: "Redskins",
    answerC: "Saints",
    answerD: "Patriots",
    item: "C"
  }
];

var lastQuestion = questions.length - 1;

let countQuestion = 0;
var startTime = 75;
var endTime = 0;
var TIMER;

function askQuestion() {
  var q = questions[countQuestion];

  question.textContent = q.question;
  answerA.textContent = q.answerA;
  answerB.textContent = q.answerB;
  answerC.textContent = q.answerC;
  answerD.textContent = q.answerD;
}

intro.textContent = "Trivia Quiz CHALLENGE";
intro2.textContent = "The following quiz questions are suitable for all age groups, covering a wide range of topics so everyone can join in the fun.";
startElement.textContent = "Start";
//adding a click function on the start button
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
//adding a click button and function on the choices
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
  if (input === questions[countQuestion].item) {
    answer.textContent = "item. Good job!";
  } else {
    answer.textContent = "Wrong!";
    boolean = true;
  }
  if (boolean) {
    startTime = startTime - 15;
  }
  if (countQuestion < lastQuestion) {
    countQuestion++;
    askQuestion();
  } else {
    if (startTime < 0) {
      startTime = 0;
    }
    clearInterval(TIMER);
    quiz.style.display = "none";
    show.style.display = "block";
    showScore(startTime);

  }
}

function showScore(input) {
  done.textContent = "All done!";
  final.textContent = "Your final score is: " + input + " points.";
  initials.textContent = "Please enter your initials: ";
  send.textContent = "Submit";
}
