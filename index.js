var pageElement = document.querySelector('#main-page');
var h1Element = document.querySelector('#intro');
var h4Element = document.querySelector('#intro-2');
var startElement = document.querySelector('#start');
var quizElement = document.querySelector('#quiz');
var questionElement = document.querySelector('#question');
var choicesElement  = document.querySelector('#choices');
var answerA = document.querySelector('#choice1');
var answerB = document.querySelector('#choice2');
var answerC = document.querySelector('#choice3');
var answerD = document.querySelector('#choice4');

var questions = [
    {
        question: 'Which sea creature has three hearts?',
        answerA: 'Octopus',
        answerB: 'Whale',
        answerC: 'Pufferfish',
        answerD: 'Starfish', 
        correct: 'A'
    }, {
        question: 'Which country does the sport of pelato come from?',
        answerA: 'Spain',
        answerB: 'Italy',
        answerC: 'Mexico',
        answerD: 'Greece', 
        correct: 'A'
    }, {
        question: 'Which ocean surrounds the Maldives?',
        answerA: 'Pacific',
        answerB: 'Atlantic',
        answerC: 'Arctic',
        answerD: 'Indian', 
        correct: 'D'
    }, {
        question: 'Name the fictional character whose household duties did not prevent her determination to dance.',
        answerA: 'Belle',
        answerB: 'Merida',
        answerC: 'Snow White',
        answerD: 'Cinderella', 
        correct: 'D'
    }, {
        question: 'This NFL team logo contains a flower.',
        answerA: 'Browns',
        answerB: 'Chargers',
        answerC: 'Saints',
        answerD: 'Patriots', 
        correct: 'C'
    }
]

var qCount = 0;

function askQuestion() {

    var q = questions[qCount];

    question.textContent = q.question;
    answerA.textContent = q.answerA;
    answerB.textContent = q.answerB;
    answerC.textContent = q.answerC;
    answerD.textContent = q.answerD;
}

page.style.display = 'none';
askQuestion();
quiz.style.display = 'block';

