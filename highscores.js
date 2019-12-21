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
clear.addEventListener('click', function () {

    localStorage.removeItem(initialKey);
    localStorage.removeItem(scoreKey);


    retrieveInfo();

});


retrieveInfo();
console.log(localStorage.getItem(initialKey));
console.log(localStorage.getItem(scoreKey));

function retrieveInfo() {
    var user = localStorage.getItem(initialKey);
    var points = localStorage.getItem(scoreKey);

    if (points === null || user === null) {
        initial.textContent = "No high score";

    }
    else {
        initial.textContent = user + ": " + "\t" + points + " points";
    }



}
