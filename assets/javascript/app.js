$(document).ready(function () {


    var right = 0;
    var wrong = 0;
    var noAnswer = 0;
    var time = 5;
    

    var rightText = $("#correct-text").text("Correct: " + right);
    var wrongText = $("#incorrect-text").text("Inccorect: " + wrong);
    var noAnswerText = $("#unanswered-text").text("Unanswered: " + noAnswer);
    var timeText = $("#timer-text").text("Time Remaining: 5");

    var intervalId;
    var timeRun = false;
    
    
    // var totalQuestions = $(".questions").size();
    // var questions = $(".questions");
    // var questionCount = 0;

    $questions = $("questions");
    $questions.hide();

    


    // Intiate the game with an opening start button. Pressing this button will start the quiz
    // score vars:
    $(".pages").hide();
    $("#start").click(startQuiz)
    

    function startQuiz() {
        // $("#start").click(startQuiz);
        
        $(".pages").show();

        startTime();
    }
    

    function startTime(){
        if (!timeRun) {
            timeRun = true;
            intervalID = setInterval(decrement, 1000);
        }
    }

    function decrement() {
        
        time--;
        
        $("#timer-text").text("Time Remaining: " + time);
         if (time === 0) {
            stop();
        }
    }

    function stop() {
        timeRun = false;
        clearInterval(intervalID);
    
    }


    // window.onload = function () {
    //     // $("#start").on("click", startTime.start);
    // };
    
    
    
    // var startTime = {
    //     time: 5,
        

    //     start: function () {
    //         if (!timeRun) {
    //             timeRun = true;
    //             intervalId = setInterval(startTime.counter, 1000);
                
    //         }
    //     },

    //     counter: function() {
            
    //         if (timeRun === true){
                
    //         startTime.time--;
    //         console.log(startTime.time);
    //         timeText = $("#timer-text").html("Time Remaining: " + startTime.time);
    //         }
            
    //     },

    
        



    //     // function startTime() {
    //     //     showQuestions = setInterval(nextQuestion, 3000);

    //     //   }

    //     //   function revealQuestion(){
    //     //     $(".pages").html(questions[count]);
    //     // }

    //     // function nextQuestion () {
    //     //     count++;
    //     //     $(".pages").html(questions);
    //     //     if (count === questions.length) {
    //     //         count = 0;
    //     //     }
    //     //     setTimeout(revealQuestion, 5000);
    //     // }

    

    //     // decrement: function () {
    //     //     time--;
    //     //     $("#timer-text").text("Time Remaining: " + time);
    //     //     if (time === 0) {
    //     //         stop();
    //     //     }
    //     // },



        // Once the quiz starts, the first question is presented, and the timer starts counting down from 30.

        // timer function 







        // If the correct answer is guessed, timer stops, displays a "correct" message with the answer, and automatically moves to the next question after a few seconds
        // If the incorrect answer is guessed or if the timer reachers zero, timer stops, displays "incorrect" message with the answer, and automatically moves to the next question after a few seconds
        // This repeats until you finish the quiz.








        // After the last question, regardless if answered right or wrong, the timer stops, results screen will pop up, and button to restart the quiz will pop up.



    })