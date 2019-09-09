$(document).ready(function () {

    var time = 20;
    
    var rightText = $("#correct-text").text("Correct: " + right);
    var wrongText = $("#incorrect-text").text("Inccorect: " + wrong);
    var noAnswerText = $("#unanswered-text").text("Unanswered: " + noAnswer);
    var timeText = $("#timer-text").text("Time Remaining: 20");

    var intervalId;
    var timeRun = false;

    // score vars:
    var right = 0;
    var wrong = 0;
    var noAnswer = 0;

    var questions = [{
        question: "Which MLB team won the 2014 World Series?",
        choices: ["Kansas City Royals ", "New York Yankees ", "San Francisco Giants ", "Oakland Athletics "],
        correctAnswer: 2
    }, {
        question: "Who is the first President of the US?",
        choices: ["George Washington", "John Adams", "Thomas Jefferson", "James Madison"],
        correctAnswer: 0
    }, {
        question: " Which battle of the American Civil War was fought from July 1 - July 3, 1863?",
        choices: ["Antietam", "Fredericksburg", "First Battle of Bull Run", "Gettysburg"],
        correctAnswer: 3
    }];

    
    var questionDiv = $(".quiz-questions");

    
    
    $.each(questions, function(i, list){
        console.log(questions[i].choices);
        console.log(list);
        console.log(i);
        var list = $("<p>");    
        
        list.append(questions[i].question, $("<br>"));

        var labelOne = $("<label for = 'button1'></label>").text(questions[i].choices[0])
        var labelTwo = $("<label for = 'button2'></label>").text(questions[i].choices[1])
        var labelThree = $("<label for = 'button2'></label>").text(questions[i].choices[2])
        var labelFour = $("<label for = 'button2'></label>").text(questions[i].choices[3])

        var choiceList = $("<p>");
        var buttonOne = $("<br><input id='button1' type = 'radio' data-choice = '0' />").text(questions[i].choices[0]);
        
        var buttonTwo = $("<input type = 'radio' data-choice = '0' />").text(questions[i].choices[1]);
        var buttonThree = $("<input type = 'radio' data-choice = '0' />").text(questions[i].choices[2]);
        var buttonFour = $("<input type = 'radio' data-choice = '0' />").text(questions[i].choices[3]);

        choiceList.append(buttonOne);
        choiceList.append(labelOne);

        choiceList.append(buttonTwo);
        choiceList.append(labelTwo);

        choiceList.append(buttonThree);
        choiceList.append(labelThree);

        choiceList.append(buttonFour);
        choiceList.append(labelFour);

        list.append(choiceList);

        questionDiv.append(list);

        //issue: text does not appear next to radio button after appending or using .text


        
        //create a new li var
        // write out the html within the jQuery to deal with inputs

        // var whatever = $("<li>");
        // var button1 = $("<input type = 'radio' data-choice = '0' />" + questions[i].choices[0]);

        // var buttonOne = $("<input>");
        // buttonOne.attr("type", "radio");
        // buttonOne.attr("data-choice", 0);
        // buttonOne.attr("value", questions[i].choices[0]);
        // buttonOne.append(questions[i].choices[0], $("<br>"));

        // var buttonTwo = $("<input>");
        // buttonTwo.attr("type", "radio");
        // buttonTwo.attr("data-choice", 1);
        // buttonTwo.append(questions[i].choices[1]);

        // var buttonThree = $("<input>");
        // buttonThree.attr("type", "radio");
        // buttonThree.attr("data-choice", 2);
        // buttonThree.append(questions[i].choices[2]);

        // var buttonFour = $("<input>");
        // buttonFour.attr("type", "radio");
        // buttonFour.attr("data-choice", 3);
        // buttonFour.append(questions[i].choices[3]);
        
        
        // list.append(buttonOne);
        // list.append(buttonTwo);
        // list.append(buttonThree);
        // list.append(buttonFour);
        




        //variable -> nQ = $("<p>");
        //nQ.append(questions[i].question, , questions[i].choices[0], questions[i].choices[1], questions[i].choices[2], questions[i].choices[3]);
        //questionDiv.append(nQ);

        //variable -> nq = $("<p>");
        //nq.append(questions[i].question);
        // you want radio buttons for the choices
        //variable -> button1 = $("<button>");
        //button1.attr("style", "radio");
        //button1.attr("data-choice", 2);
        //button1.append(questions[i].choices[0]);
        
    });

    // var questions = [{
    //     questions: "",
    //     choices: [],
    //     correctAnswer
    // }]
    // First. Access the questions array
    // Second. Access each question and choices in each index
    // Questions: questions[i].question
    // Choices: questions[i].choices[0], questions[i].choices[1],...

    
    
    
    
    // var totalQuestions = $(".questions").size();
    // var questions = $(".questions");
    // var questionCount = 0;

    // $questions = $("questions");
    // $questions.hide();

    
    // Intiate the game with an opening start button. Pressing this button will start the quiz
    
    // Once the quiz starts, the first question is presented, and the timer starts counting down from 30.

        
    
    $(".pages").hide();
    $("#game-body").hide();
    $("#start").click(startQuiz)
    

    function startQuiz() {
        // $("#start").click(startQuiz);

        $("#game-body").show();
        
        $(".pages").show();

        $(".quiz-questions").show();

        $("#start").hide();

        $("#final-results").hide();

        startTime();

    }
    
    // timer functions

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

    // display the 10 questions. each questions has four choices you can only click one option. if you dont finish before the timer, then will go directly to the results page. 

    function showQuestions () {

        for (var i = 0; i < questions.length; i++) {

        }
    }






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


         







        // If the correct answer is guessed, timer stops, displays a "correct" message with the answer, and automatically moves to the next question after a few seconds
        // If the incorrect answer is guessed or if the timer reachers zero, timer stops, displays "incorrect" message with the answer, and automatically moves to the next question after a few seconds
        // This repeats until you finish the quiz.








        // After the last question, regardless if answered right or wrong, the timer stops, results screen will pop up, and button to restart the quiz will pop up.



    })