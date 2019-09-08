$(document).ready(function () {


    var right = 0;
    var wrong = 0;
    var noAnswer = 0;
    var time = 5;
    var intervalID;
    var timeRun = false;

    var questions = $(".questions");
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


    // Intiate the game with an opening start button. Pressing this button will start the quiz
    // score vars:
    $(".pages").hide();
    $("#start").click(startQuiz)
    

    function startQuiz() {
        $("#start").click(startTime);
        $(".pages").show();

        // if ($("#start").click(startTime)) {
        //     startTime();
        // }
    }


    window.download = function () {
        $("#start").on("click", startQuiz.start);
    };

    
    var startTime = {

        time: 5,

        start: function () {
        

            if (!timeRun) {
                timeRun = true;
                intervalId = setInterval(startTime.count, 1000);
                
            
            }

            // if (timeRun === true){
            //     time--;
            // }

        },

        counter: function() {
            $("#timer-text").text("Time Remaining: " + time);
            time --;
        },

    // timer();
    //     function timer() {

    //         clearInterval(intervalID)
    //         intervalID = setInterval(decrement, 1000 * 1);
    //     }

    //     function decrement() {
            
    //         if ($("#start").click(startQuiz)) {
    //             time--;
            
    //         $("#timer-text").text("Time Remaining: " + time);
    //         } if (time === 0) {
    //             stop();
    //         }
    //     }

    //     function stop() {
    //         clearInterval(intervalID);
    //     }

    //     function startTime(){
    //         // if ($("#start").click(startQuiz)) {
    //         //     time--;
    //         // }
    //     }



        // function startTime() {
        //     showQuestions = setInterval(nextQuestion, 3000);

        //   }

        //   function revealQuestion(){
        //     $(".pages").html(questions[count]);
        // }

        // function nextQuestion () {
        //     count++;
        //     $(".pages").html(questions);
        //     if (count === questions.length) {
        //         count = 0;
        //     }
        //     setTimeout(revealQuestion, 5000);
        // }

    

        // decrement: function () {
        //     time--;
        //     $("#timer-text").text("Time Remaining: " + time);
        //     if (time === 0) {
        //         stop();
        //     }
        // },



        // Once the quiz starts, the first question is presented, and the timer starts counting down from 30.

        // timer function 







        // If the correct answer is guessed, timer stops, displays a "correct" message with the answer, and automatically moves to the next question after a few seconds
        // If the incorrect answer is guessed or if the timer reachers zero, timer stops, displays "incorrect" message with the answer, and automatically moves to the next question after a few seconds
        // This repeats until you finish the quiz.








        // After the last question, regardless if answered right or wrong, the timer stops, results screen will pop up, and button to restart the quiz will pop up.



    }})