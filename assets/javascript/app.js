$(document).ready(function () {

    var right = 0;
    var wrong = 0;
    var noAnswer = 0;
    var time = 60;

    var rightText = $("#correct-text").text("Correct: " + right);
    var wrongText = $("#incorrect-text").text("Inccorect: " + wrong);
    var noAnswerText = $("#unanswered-text").text("Unanswered: " + noAnswer);
    var timeText = $("#timer-text").text("Time Remaining: 60");

    var intervalId;
    var timeRun = false;

    
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
    }, {
        question: "At the conclusion of the Spanish-American war, the U.S. PAID Spain $20 million for this colony...",
        choices: ["Guam", "The Philippines", "Puerto Rico", "Cuba"],
        correctAnswer: 1
    }, {
        question: "Kenshin Himura from Rurouni Kenshin was also known as...",
        choices: ["Zero", "Dokukanryu", "Hitokiri Batousai", "Omae Wa Mou Shindeiru"],
        correctAnswer: 2

    }, {
        question: "What is the signiture move of Captain Falcon?",
        choices: ["Falcon Punch", "Falcon Kick", "Falcon Drive", "Falcon Knee"],
        correctAnswer: 0

    }, {
        question: "Who is the leader of the Blue Loins house in Fire Emblem: Three Houses?",
        choices: ["Edelgard von Hresvelg", "Dimitri Alexandre Blaiddyd", "Claude von Riegan", "Ferdinand von Aegir"],
        correctAnswer: 1

    }, {
        question: "Ike from Fire Emblem: Path of Radiance and Radiant Dawn is known for wielding which sword?",
        choices: ["Alondite", "Ettard", "Excalibur", "Ragnell"],
        correctAnswer: 3

    }, {
        question: "Roy, the protaganist of Fire Emblem: The Binding Blade, is from which country?",
        choices: ["Etruria", "Bern", "Lycia", "Illia"],
        correctAnswer: 2

    }, {
        question: "What is the air speed velocity of an unladen swallow?",
        choices: ["24 mph", "11 mps", "20.86 knots", "What do you mean? African or European Swallow?"],
        correctAnswer: 3

    }];

    var questionDiv = $(".quiz-questions");

    $.each(questions, function (i, list) {
        // console.log(questions)
        // console.log(questions[i].choices);
        // console.log(list);
        // console.log(i);

        var list = $("<p>");

        // to deal with the spacing issue, make a new div tag and put multiple p tags 

        list.append(questions[i].question, $("<br>"));

        var labelOne = $(`<label for ='button-${i}-${questions[i].choices[0]}'></label>`).text(questions[i].choices[0])
        var labelTwo = $(`<label for = 'button-${i}-${questions[i].choices[0]}'></label>`).text(questions[i].choices[1])
        var labelThree = $(`<label for = 'button-${i}-${questions[i].choices[0]}'></label>`).text(questions[i].choices[2])
        var labelFour = $(`<label for = 'button-${i}-${questions[i].choices[0]}'></label>`).text(questions[i].choices[3])

        var choiceList = $("<p>");

        var buttonOne = $(`<br><input id='button-${i}-${questions[i].choices[0]}' value=${questions[i].choices[0]} type='radio' name=${i} />`).text(questions[i].choices[0]);
        var buttonTwo = $(`<input id='button-${i}-${questions[i].choices[1]}' value=${questions[i].choices[1]} type='radio' name=${i} />`).text(questions[i].choices[1]);
        var buttonThree = $(`<input id='button-${i}-${questions[i].choices[2]}' value=${questions[i].choices[2]} type='radio' name=${i} />`).text(questions[i].choices[2]);
        var buttonFour = $(`<input id='button-${i}-${questions[i].choices[3]}' value=${questions[i].choices[3]} type='radio' name=${i} />`).text(questions[i].choices[3]);

        // "button-0"
        // "button-" + "0" === "button-0" 
        // // i === 0 on first pass through
        // "button-" + i === "button-0"
        // // i === 1 on second pass through
        // "button-" + i === "button-1"
        // // STRING INTERPOLATION ``
        // `button-${i}`
        // this makes the code cleaner instead of manually putting in button [number]

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

    });

    // display the 10 questions. each questions has four choices you can only click one option. if you dont finish before the timer, then will go directly to the results page. If user wants to restart the quiz, they will need to click the "start again" button at the bottom of the page.
    
    // Answers will show below the number results with some fun gifs. 

    $(".pages").hide();
    $("#game-body").hide();
    $("#start").click(startQuiz)
    $("#restart").click(restartQuiz)

    function startQuiz() {
        // $("#start").click(startQuiz);

        $("#game-body").show();

        $(".pages").show();

        $(".quiz-questions").show();

        $("#start").hide();

        $("#final-results").hide();

        startTime();

    }

    function restartQuiz() {
        $("#game-body").show();

        $(".pages").show();

        $(".quiz-questions").show();

        $("#start").hide();

        $("#final-results").hide();

        startTime();
        time = 60;
    }

    // timer functions

    function startTime() {
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
            $(".quiz-questions").hide();
            $("#final-results").show();
        }
    }

    function stop() {
        timeRun = false;
        clearInterval(intervalID);
    }

    // Notes: This quiz is not fully complete: 1) The questions and choices section still need to be stylized a bit.
    // 2) If the user finishes early, the page is supposed to go directly to the results page.
    // 3) Most importantly, the recording of answers is not complete.

//  Space below is supposed have a function(s) to connect/record the answers to the results section

//  Make it so that "userGuess" is a function or part of a function and attach it to a click event.
// If the user is able to guess on all questions before the end of the timer, this will go to the results page.
    //This should be triggered by a function/conditional stating that if all questions are guess before the timer reaches zero, then
    // $("#final-results").show() and $(".quiz-questions").hide() will activate.

// The click event will eventually be recorded through conditionals.
// Basically, if userGuess equals the correct index value of the choices sub category, then correct++
//  If userGuess does not equal the correct index value, then incorrect++
// If userguess does not choose an option, then unanswered++


})