//variables for the elements on index.html
var startElement = document.querySelector("#start");
var intro = document.querySelector('#intro');
var intro2 = document.querySelector('#intro-2');
var rules = document.querySelector('#rules');
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

var initial = document.querySelector('#inlineFormInput');


var initialKey = 'initials';
var scoreKey = 'score';

//an array of questions, the options and the correct answer
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
//getting the last question range
var lastQuestion = questions.length - 1;
//initializing the question count, the start time score, the end time and the timer interval
let countQuestion = 0;
var startTime = 75;
var endTime = 0;
var TIMER;
//function that prints the question and the answer in the buttons
function askQuestion() {
  var q = questions[countQuestion];

  question.textContent = q.question;
  answerA.textContent = q.answerA;
  answerB.textContent = q.answerB;
  answerC.textContent = q.answerC;
  answerD.textContent = q.answerD;
}

//printing the text on the main html (index.html)
intro.textContent = "Trivia Quiz CHALLENGE";
intro2.textContent = "The following quiz questions are suitable for all age groups, covering a wide range of topics so everyone can join in the fun.";
rules.textContent = "Score is calculated by time remaining. Answering quickly and correctly results in a higher score. Answering incorrectly results in a time penalty (for example, 15 seconds are subtracted from time remaining). Good Luck!";
startElement.textContent = "Start";

//adding a click function on the start button
startElement.addEventListener("click", startQuestions);

//start the quiz
function startQuestions() {
  page.style.display = "none"; //hiding the page div (intro page)
  askQuestion();
  quiz.style.display = "block"; //displaying the quiz div
  timeCounter();
  TIMER = setInterval(timeCounter, 1000);
}

//setting the time and displying it
function timeCounter() {
  if (startTime > endTime) {
    counter.textContent = startTime;
    startTime--;
  } else {
    startTime = 0;
  }
}

//adding a click button and function on the choices
answerA.addEventListener("click", function () {
  checkAnswer("A");
});
answerB.addEventListener("click", function () {
  checkAnswer("B");
});
answerC.addEventListener("click", function () {
  checkAnswer("C");
});
answerD.addEventListener("click", function () {
  checkAnswer("D");
});

//checking the user's answer 
//printing if the user got the correct answer or wrong answer
function checkAnswer(input) {
  var boolean = false;
  if (input === questions[countQuestion].item) {
    answer.textContent = "Correct!";
  } else {
    answer.textContent = "Wrong!";
    boolean = true;
  }
  //if the user picked the wrong answer, 15 points will be deducted on the time points
  if (boolean) {
    startTime = startTime - 15;
  }
  //if the the count is less than the length of the question, then continue asking questions.
  //if the score is negative then set the score to zero.
  if (countQuestion < lastQuestion) {
    countQuestion++;
    askQuestion();
  } else {
    if (startTime < 0) {
      startTime = 0;
    }
    //if so, stop the timer score
    //hide the quiz div and display the show the score div.
    clearInterval(TIMER);
    quiz.style.display = "none";
    show.style.display = "block";
    showScore(startTime);

  }
}

//print the text in the html that shows the final score of the user and asks the initial of the user
//the submit button will link the user's score and initial to the high score standings
function showScore(input) {
  done.textContent = "All done!";
  final.textContent = "Your final score is: " + input + " points.";
  initials.textContent = "Enter your name: ";
  send.textContent = "Submit";
}

send.addEventListener('click', function () {

  var user = initial.value;
  if (startTime > localStorage.getItem('score') || localStorage.getItem('score') === null) {
    localStorage.setItem(initialKey, user);
    localStorage.setItem(scoreKey, startTime);

  }


});
