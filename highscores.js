//variable elements on highschore.html
var text = document.querySelector('#text');
var initial = document.querySelector('#initial');
var score = document.querySelector('#score');
var clear = document.querySelector('#clear');
var initialKey = 'initials';
var scoreKey = 'score';

//printing the high scores string in the div id.
text.textContent = "High Score";
clear.textContent = "Clear";

retrieveInfo();

//clear button
//removing both user name and score in the local storage
clear.addEventListener('click', function () {
    localStorage.removeItem(initialKey);
    localStorage.removeItem(scoreKey);
    retrieveInfo();
});

//getting the user name and score from the local storage and printing it
function retrieveInfo() {
    var user = localStorage.getItem(initialKey);
    var points = localStorage.getItem(scoreKey);
    //if the name or score is null print 'No High Score'
    //if not print the user name and the score;
    if (points === 0 || points === null || user === null) {
        initial.textContent = "No high score";
    }
    else {
        initial.textContent = user + ": " + "\t" + points + " points";
    }
}
