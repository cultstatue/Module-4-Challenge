var quizContainer = document.querySelector("#quiz-container");
var questionContainer = document.querySelector("#question-container");
var answersContainer = document.querySelector("#answers-container");
var extraWrapper = document.querySelector("#extra-wrapper");
var buttonWrapper = document.querySelector("#button-box");
var timerContainer = document.querySelector("#timer");

var startTime = 5;

var totalScore =[];

var questions = [

    {
        question: "lorem ipsum gbhhfd cutls fjdshj",
        answer: "a",
        options: [
          "c",
          "a",
          "b",
          "d"
        ]

    },
    {
        question: "lorem ipsum gbhhfd cutls fjdshj",
        answer: "b",
        options: [
          "b",
          "Hyper Text Markup Language",
          "Hyper Text Multiple Language",
          "Hyper Tool Multi Language"
        ]

    },
    {
        question: "What does HTML stand fodfsgfdgfdr?",
        answer: "Hyper Text Markup Language",
        options: [
          "Hyper Text Preprocessor",
          "Hyper Text Markup Language",
          "Hyper Text Multiple Language",
          "Hyper Tool Multi Language"
        ]

    },
    {
        question: "What gtrwgrewreoes HTML stand for?",
        answer: "Hyper Text Markup Language",
        options: [
          "Hyper Text Preprocessor",
          "Hyper Text Markup Language",
          "Hyper Text Multiple Language",
          "Hyper Tool Multi Language"
        ]

    },
    {
        question: "What doestreqtrtqre HTML stand for?",
        answer: "Hyper Text Markup Language",
        options: [
          "Hyper Text Preprocessor",
          "Hyper Text Markup Language",
          "Hyper Text Multiple Language",
          "Hyper Tool Multi Language"
        ]

    }

]

var displayTimer = function() { setInterval(() => {

  timerContainer.textContent = startTime;

  startTime -= 1;

  if (startTime === -1) {

    clearInterval(displayTimer);

    gameEnd();

  }
   
 }, 1000);
}
 
//function to add up numbers in total score array
function getSum(array){

  return array.reduce(function(sum, value) {

    return sum + value;

  }, 0);

}

// function to remove all parents children
var removeChildren = function (parent) {

  while(parent.firstChild) {

    parent.removeChild(parent.firstChild);

  }

}

// function to generate questions and answers
var createQuestion = function(questionIndex) {

  // create "extra" div
  var createExtra = document.createElement("div");
  createExtra.className = "extra";
  extraWrapper.appendChild(createExtra);

  // create question
  var questionEl = document.createElement("h3");
  questionEl.textContent = questions[questionIndex].question;
  questionEl.className = "questions-title";

  questionContainer.appendChild(questionEl);

  //  generate answer options
  for (i = 0; i < questions[questionIndex].options.length; i ++) {

    var answerEl = document.createElement("div");
    answerEl.textContent = questions[questionIndex].options[i]
    answerEl.className = "answer";
    answersContainer.appendChild(answerEl);

  }
  
  // add click events to answers, check if correct or not, and keep score.
  answersContainer.addEventListener("click", function(event) {

    if (event.target.matches(".answer")) {

      var chosenAnswer = event.target.textContent;

      var rightWrong = document.querySelector(".extra");

      if (chosenAnswer === questions[questionIndex].answer) {

        console.log("correct");
        rightWrong.textContent = "correct!";
        totalScore.push(1);
        console.log(getSum(totalScore));

      }
      else {

        console.log("incorrect");
        rightWrong.textContent = "incorrect!";
        console.log(getSum(totalScore));

      }

    };

  }, {once : true});

}

// function to restart the entire quiz
var restartQuiz = function () {

  window.location.reload();

}

// function to handle the quiz ending
var gameEnd = function() {

  var finalScore = getSum(totalScore);

  var endText = document.createElement("h3");
  endText.innerHTML = "Game over!" + "<br />" + "Your final score is: " + finalScore;
  endText.className = "questions-title";

  questionContainer.appendChild(endText);
 
  console.log("end of quiz")

  var recordScoreButton = document.createElement("button");
  recordScoreButton.textContent ="Submit your high score";
  buttonWrapper.appendChild(recordScoreButton);

  recordScoreButton.addEventListener("click", function() {

    console.log("click");

  })

}

// function to start the quiz
var startQuiz = function () {

  // remove instructions and start button
  questionContainer.removeChild(initialText);
  buttonWrapper.removeChild(startButton);

  // create restart button
  var restartButton = document.createElement("button");
  restartButton.textContent = "restart";
  buttonWrapper.appendChild(restartButton);

  restartButton.addEventListener("click", restartQuiz);
  
  // define first spot in questions array
  var currentQuestion = 0

  // create next button
  var nextButton = document.createElement("button");
  nextButton.textContent = "next";
  buttonWrapper.appendChild(nextButton);

  // crerate logic for next button to advance through questions array
  nextButton.addEventListener("click", function(event) {

    removeChildren(questionContainer);
    removeChildren(answersContainer);
    removeChildren(extraWrapper);

    if (currentQuestion < questions.length){

      createQuestion(currentQuestion ++);

    }
    else {

      buttonWrapper.removeChild(nextButton);

      gameEnd();

    }

  })

  //display first question
  createQuestion(currentQuestion);

}

// landing text
var initialText = document.createElement("h3");
initialText.textContent = "lorem uinspid ahfghds ahdhsg";
initialText.className = "questions-title";

questionContainer.appendChild(initialText);


var startButton = document.createElement("button");
startButton.textContent = "start";
buttonWrapper.appendChild(startButton);

startButton.addEventListener("click", function() {

  console.log("start clicked");
  startQuiz();
  displayTimer();

})






