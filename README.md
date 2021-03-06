# Web APIs: Code Quiz

## Description

A company probably may asked to you complete a coding assessment. These assessments are typically a combination of multiple-choice questions and interactive challenges. In this project, the challenge is to build a code quiz with multiple-choice questions.


## How the web app works?

* The user arrives at the landing page and is presented with 4 different category (random, sports, geography and animals) to choose from." Also note the navigation option to "View Highscores" and the "Time" value set at 75 seconds.
![](/images/home.PNG)

* Clicking the category button presents the user with a series of questions. The timer is initialized with a value and immediately begins countdown. A sound will trigger for the correct choice and for the incorrect choice button.
![](/images/questions.PNG)


* Score is calculated by time remaining. Answering quickly and correctly results in a higher score. Answering incorrectly results in a time penalty (for example, 15 seconds are subtracted from time remaining).


* When time runs out and/or all questions are answered, the user is presented with their final score and asked to enter their name. Their final score and names are then stored in localStorage.
![](/images/highscore.PNG)

* The web application is responsive, ensuring that it adapts to multiple screen sizes.
![](/images/responsive.PNG)

## Build with:

* JavaScript
* HTML
* CSS

## .gitattribute

* a simple text file that gives attributes to pathnames (from HTML to JavaScript)

## License
This project is licensed under the MIT License - see the LICENSE.md file for details

## Author
* Lloyd Marcelino, 2020

