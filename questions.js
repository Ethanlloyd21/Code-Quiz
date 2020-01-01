//variables for the buttons category
var startElement = document.querySelector("#start");
var animalElement = document.querySelector('#animal');
var sportsElement = document.querySelector('#sports');
var geoElement = document.querySelector('#geography');
var catElement = document.querySelector('#category');
var intro = document.querySelector('#intro');
var intro2 = document.querySelector('#intro-2');
var rules = document.querySelector('#rules');

//variables for the questions and choices
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

//variables for the audio on the buttons
var correct = document.querySelector('#correct');
var wrong = document.querySelector('#wrong');


//varialbes for the local storage
var initialKey = 'initials';
var scoreKey = 'score';

//Category: Random - array of questions, the options and the correct answer
var qRandom = [
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


//Category: Animals - array of questions, the options and the correct answer
var qAnimals = [
  {
    question: "A snail can sleep for how many years?",
    answerA: "3 years",
    answerB: "1 year",
    answerC: "5 years",
    answerD: "2 years",
    item: "A"
  },
  {
    question: "The slowest animal in the world",
    answerA: "Sloth",
    answerB: "Turtle",
    answerC: "Slug",
    answerD: "Snail",
    item: "A"
  },
  {
    question: "A group of Lions is called?",
    answerA: "A herd",
    answerB: "A pride",
    answerC: "A colony",
    answerD: "A drift",
    item: "B"
  },
  {
    question:
      "Which bird is a symbol of good luck?",
    answerA: "Dove",
    answerB: "Stork",
    answerC: "Eagle",
    answerD: "Blue Jay",
    item: "B"
  },
  {
    question: "A male turkey is known as?",
    answerA: "Tom",
    answerB: "Stag",
    answerC: "Gilt",
    answerD: "Hart",
    item: "A"
  }
];

//Category: Sports - array of questions, the options and the correct answer
var qSports = [
  {
    question: "What is the most evolved piece of sports equipment among all sports?",
    answerA: "hockey sticks",
    answerB: "football helmets",
    answerC: "basketball court",
    answerD: "baseball gloves",
    item: "D"
  },
  {
    question: "This NFL AFC team won its 11th consecutive DIVISION TITLE.",
    answerA: "Patriots",
    answerB: "Ravens",
    answerC: "Stellers",
    answerD: "Chiefs",
    item: "A"
  },
  {
    question: "He won the NBA dunk contest in 2000(year).",
    answerA: "Kobe Bryant",
    answerB: "Jason Richardson",
    answerC: "Desmond Mason",
    answerD: "Vince Carter",
    item: "D"
  },
  {
    question:
      "This Premier League Soccer team logo contains the RED DEVIL.",
    answerA: "Manchester City",
    answerB: "Manchester United",
    answerC: "Liverpool",
    answerD: "Chelsea",
    item: "B"
  },
  {
    question: "In MLB, how many balls are used during a typical game?",
    answerA: "20",
    answerB: "50",
    answerC: "70",
    answerD: "100",
    item: "C"
  }
];

//Category: Geography - array of questions, the options and the correct answer
var qGeo = [
  {
    question: "This Asian country consists of 7,100 islands?",
    answerA: "Indonesia",
    answerB: "Japan",
    answerC: "Philippines",
    answerD: "Korea",
    item: "C"
  },
  {
    question: "Name the capital of Florida.",
    answerA: "Miami",
    answerB: "Orlando",
    answerC: "Jacksonville",
    answerD: "Tallahassee",
    item: "D"
  },
  {
    question: "Which African nation has the most pyramids?",
    answerA: "Sudan",
    answerB: "Egypt",
    answerC: "Libya",
    answerD: "Algeria",
    item: "A"
  },
  {
    question:
      "How many States have a border with Mexico?",
    answerA: "5",
    answerB: "4",
    answerC: "2",
    answerD: "3",
    item: "B"
  },
  {
    question: "What is the oldest city in the world?",
    answerA: "Argos",
    answerB: "Jerusalem",
    answerC: "Damascus",
    answerD: "Athens",
    item: "C"
  }
];

//printing the text on the main html (index.html)
intro.textContent = "Trivia Quiz CHALLENGE";
intro2.textContent = "The following quiz questions are suitable for all age groups, covering a wide range of topics so everyone can join in the fun.";
rules.textContent = "Score is calculated by time remaining. Answering quickly and correctly results in a higher score. Answering incorrectly results in a time penalty (15 seconds are subtracted from time remaining). Good Luck!";
startElement.textContent = "Random";
animalElement.textContent = "Animals";
sportsElement.textContent = "Sports";
geoElement.textContent = "Geography";
catElement.textContent = "Choose a category. Once clicked, the quiz will start!"


//adding a click function on the start button
startElement.addEventListener("click", function () {
  letStart(qRandom);
});
animalElement.addEventListener("click", function () {
  letStart(qAnimals);
});
sportsElement.addEventListener("click", function () {
  letStart(qSports);
});
geoElement.addEventListener("click", function () {
  letStart(qGeo);
});

//function that does everything
function letStart(input) {
  var questions = input;
  //initializing the question count, the start time score, the end time and the timer interval
  let countQuestion = 0;
  var startTime = 75;
  var endTime = 0;
  var TIMER;

  startQuestions();
  //function that prints the question and the answer in the buttons
  function askQuestion() {
    var q = questions[countQuestion];
    //printing the questions and choices
    question.textContent = q.question;
    answerA.textContent = q.answerA;
    answerB.textContent = q.answerB;
    answerC.textContent = q.answerC;
    answerD.textContent = q.answerD;
  }

  //start the quiz
  function startQuestions() {
    page.style.display = "none"; //hiding the page div (intro page)
    askQuestion();
    quiz.style.display = "block"; //displaying the quiz div
    timeCounter();
    TIMER = setInterval(timeCounter, 1000); //setting the time interval
  }

  //setting the time and displying it
  function timeCounter() {
    if (startTime > endTime) {
      counter.textContent = startTime;
      startTime--;
    } else {
      startTime = 0; //if the timer hits 0 at any point, the quiz ends
      clearInterval(TIMER);
      quiz.style.display = "none";
      show.style.display = "block";
      showScore(startTime);
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
    var isCorrect = false;
    if (input === questions[countQuestion].item) {
      answer.textContent = "Correct!";
      correct.play(); //plays a sound if the answer is correct
    } else {
      answer.textContent = "Wrong!";
      wrong.play(); //plays a sound if the answer is incorrect
      isCorrect = true; //setting the isCorrect value to "true" if the user picked the wrong answer.
    }
    //if the user picked the wrong answer, 15 points will be deducted on the time points
    if (isCorrect) {
      startTime = startTime - 15;
    }
    //if the the count is less than the length of the question, then continue asking questions.
    //if the score is negative then set the score to zero.
    if (countQuestion < questions.length - 1) { //since there are 5 questions each category
      countQuestion++;
      askQuestion();
    } else {
      if (startTime <= 0) {
        startTime = 0;
        clearInterval(TIMER);
        quiz.style.display = "none";
        show.style.display = "block";
        showScore(startTime);
      } else {
        //if so, stop the timer score
        //hide the quiz div and display the show the score div.
        clearInterval(TIMER);
        quiz.style.display = "none";
        show.style.display = "block";
        showScore(startTime);
      }

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

  //send button
  //if the score is greater than the the score in the local storage then set the new score 
  //in the local storage. 
  send.addEventListener('click', function () {
    var user = initial.value;
    if (startTime > localStorage.getItem('score') || localStorage.getItem('score') === null) {
      localStorage.setItem(initialKey, user);
      localStorage.setItem(scoreKey, startTime);

    }

  });
}
