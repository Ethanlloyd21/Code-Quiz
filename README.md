# Web APIs: Code Quiz

A company probably may asked to you complete a coding assessment. These assessments are typically a combination of multiple-choice questions and interactive challenges. In this project, the challenge is to build a code quiz with multiple-choice questions.

![](/images/quizHome.PNG)

## How the web app works?

* The user arrives at the landing page and is presented with a call-to-action to "Start Quiz." Also note the navigation option to "View Highscores" and the "Time" value set at 75 seconds.


* Clicking the "Start Quiz" button presents the user with a series of questions. The timer is initialized with a value and immediately begins countdown.


* Score is calculated by time remaining. Answering quickly and correctly results in a higher score. Answering incorrectly results in a time penalty (for example, 15 seconds are subtracted from time remaining).


* When time runs out and/or all questions are answered, the user is presented with their final score and asked to enter their name. Their final score and names are then stored in localStorage.

* The web application is responsive, ensuring that it adapts to multiple screen sizes.
