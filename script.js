window.onload = function () {


    // Golbal Variable: 
    // buttons
    var buttonA = document.getElementById("a")
    var buttonB = document.getElementById("b")
    var buttonC = document.getElementById("c")
    var buttonD = document.getElementById("d")
    var startButton = document.getElementById("start")
    var submitScore = document.getElementById("submit")
    var nextRound = document.getElementById("newRounds")
    var clearScores = document.getElementById("clearHighScores")

    // HTML elements
    var quiz = document.getElementById("startQuiz");
    var quizCountDown = document.getElementById("countDown");
    var quizResults = document.getElementById("results");
    var finalScore = document.getElementById("yourScore");
    var endOfGameSect = document.getElementById("endOfGame");
    var startPage = document.getElementById("quiz");
    var highScorePage = document.getElementById("highScorePage");
    var hihgScoreInputName = document.getElementById("intials");
    var highScoreName = document.getElementById("highScoreI");
    var scorePageBtn = document.getElementById("scorePage");
    var endGame = document.getElementById("gameFin");
    var answerChoices = document.getElementById("answerChoices")

    // Quiz questions:
    var questions = [
        {
            question: "1.Inside which HTML element do we put the JavaScript?",
            a: "<javascript>",
            b: "<js>",
            c: "<script>",
            d: "<scripting>",
            cAnswer: "c"
        },
        {
            question: "2. What is the correct JavaScript syntax to write Hello World?",
            a: "response.write(Hello World)",
            b: "Hello World",
            c: "document.write(Hello World)",
            d: "(Hello World)",
            cAnswer: "c",
        },
        {
            question: "3. Where is the correct place to insert a JavaScript?",
            a: "Both the <head> section and the <body> section are correct",
            b: "The <body> section",
            c: "The <head> section",
            d: "Only in a JS file",
            cAnswer: "a",
        },
        {
            question: "4. What is the correct syntax for referring to an external script called xxx.js?",
            a: "<script src=xxx.js></script>",
            b: "<script name=xxx.js>",
            c: "<script href=xxx.js>",
            d: "<script value=xxx.js>",
            cAnswer: "a",
        },
        {
            question: "5. How do you create a function?",
            a: "function:myFunction()",
            b: "function=myFunction()",
            c: "function myFunction()",
            d: "function myFunction()",
            cAnswer: "c",
        }
    ];

    // Other Variables: 
    var questionlength = questions.length;
    var currentQuestion = 0;
    var time = 50;
    var timeInter;
    var score = 0;
    var correct;

    // Questions to Answers Function
    function generateQuestions() {
        endOfGameSect.style.display = "none";
        if (currentQuestion === questionlength) {
            return scoreBoard();
        };
        var quersionNum = questions[currentQuestion];
        answerChoices.innerHTML = "<p>" + quersionNum.question + "</p>";
        buttonA.innerHTML = currentQuestion.a;
        buttonB.innerHTML = currentQuestion.b;
        buttonC.innerHTML = currentQuestion.c;
        buttonD.innerHTML = currentQuestion.d;
    };

    // Start function:
    function start() {
        endOfGameSect.style.display = "none";
        quiz.style.display = "none";
        generateQuestions();

        //Timer
        timeInter = setInterval(function () {
            time--;
            quizCountDown.textContent = "Time Remaining: " + time;

            if (time === 0) {
                clearInterval(timeInterval);
                showScore();
            }
        }, 1000);
        startPage.style.display = "block";
    }
    start();
};
    //End function show score screen: 
    function endFunc (){
        startPage.style.display = "none"

    }
    endFunc();