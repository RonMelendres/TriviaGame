$(document).ready(function () {

// Intiate the game with an opening start button. Pressing this button will start the quiz
// score vars:
var right = 0;
var wrong = 0;
var noAnswer = 0;
var time = 5;
var intervalID;

var questions = ("question-1", "question-2", "question-3");
var showQuestions;
var count = 0;

var rightText = $("#correct-text").text("Correct: " + right);
var wrongText = $("#incorrect-text").text("Inccorect: " + wrong);
var noAnswerText = $("#unanswered-text").text("Unanswered: " + noAnswer);
var timeText = $("#timer-text").text("Time Remaining: " + time);


// function initializeGame(){
//     right = 0;
//     wrong = 0;
//     noAnswer = 0;
// }

// $("#start").click(startQuiz);

function showQuestion(){

}


// Once the quiz starts, the first question is presented, and the timer starts counting down from 30.
    
// timer function 

timer();
function timer() {
    clearInterval(intervalID)
    intervalID = setInterval(decrement, 1000 * 1);
}

function decrement() {
    time--;
    $("#timer-text").text("Time Remaining: " + time);
    if (time === 0) {
        stop();
    }
}

function stop() {
    clearInterval(intervalID);
}




    // If the correct answer is guessed, timer stops, displays a "correct" message with the answer, and automatically moves to the next question after a few seconds
    // If the incorrect answer is guessed or if the timer reachers zero, timer stops, displays "incorrect" message with the answer, and automatically moves to the next question after a few seconds
    // This repeats until you finish the quiz.








// After the last question, regardless if answered right or wrong, the timer stops, results screen will pop up, and button to restart the quiz will pop up.



});