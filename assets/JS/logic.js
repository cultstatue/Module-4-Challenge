var quizContainer = document.querySelector("#quiz-container");
var questionContainer = document.querySelector("#question-container");
var answersContainer = document.querySelector("#answers-container");
var extraWrapper = document.querySelector("#extra-wrapper");
var extraDiv = document.querySelector("#extra-div");
var buttonWrapper = document.querySelector("#button-box");
var timerContainer = document.querySelector("#timer");
var viewHighScore = document.querySelector("#view-high-scores");

var startTime = 60;

var totalScore =[];

var playerInfo = [];

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

      if (chosenAnswer === questions[questionIndex].answer) {

        console.log("correct");
        totalScore.push(10);
        console.log(getSum(totalScore));

      }
      else if (chosenAnswer !== questions[questionIndex].answer) {

        console.log("incorrect");
        console.log(getSum(totalScore));
        startTime -= 5;

      }

    };

  }, {once : true});

}

// function to restart the entire quiz
var restartQuiz = function () {

  window.location.reload();

}

// function to store high score and initials in local storage
var highScoreRecorder = function(event) {

  event.preventDefault();
  
  var nameInputForm = document.querySelector("#name-form");

  var playerNameInput = document.querySelector("input[name='player-name']").value;

  if (!playerNameInput) {

    alert("Please enter your initials.");
    return false;

  }

  nameInputForm.reset();
  
  var playerData = {

    name: playerNameInput,
    score:getSum(totalScore)

  }

  playerInfo.push(playerData);
 
  localStorage.setItem("player", JSON.stringify(playerInfo));
}


// function to handle the quiz ending
var gameEnd = function() {

  clearInterval(timer);

  extraWrapper.textContent = "play again?";

  var finalScore = getSum(totalScore);

  var endText = document.createElement("h3");
  endText.innerHTML = "Game over!" + "<br />" + "Your final score is: " + finalScore;
  endText.className = "questions-title";

  questionContainer.appendChild(endText);
 
  console.log("end of quiz")

  var formInput = document.createElement("div")
  formInput.innerHTML = "<form id='name-form'><input type='text'  maxlength='2' name='player-name' class='text-input' placeholder='Initials Here' /> <button id='save-name' type='submit'> Record High Score </button> </form>"
  
  questionContainer.appendChild(formInput);
  formInput.addEventListener("submit", highScoreRecorder);

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

  // create logic for clicking answers to advance through array of questions
  answersContainer.addEventListener("click", function(event) {

    removeChildren(questionContainer);
    removeChildren(answersContainer);
    
    if (currentQuestion < questions.length){

      createQuestion(currentQuestion ++);

    }
    else {

      gameEnd();

    }

  })

  //display first question
  createQuestion(currentQuestion);

}


var getHighScores = function() {

  var savedPlayerInfo = localStorage.getItem("player");

  if (!savedPlayerInfo) {

    alert("No high scores saved yet");
    return false;
    
  }
  
  savedPlayerInfo = JSON.parse(savedPlayerInfo);
  console.log(savedPlayerInfo);

  var playerInfo = {

    name: savedPlayerInfo[0].name,
    score: savedPlayerInfo[0].score

  }

  alert(playerInfo.name + " has a high score of " + playerInfo.score);
  
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
  timer = setInterval (function() {

    startTime -= 1;

    if(startTime === 0) {
  
      clearInterval(timer);
      gameEnd();
  
    }
  
    timerContainer.textContent = startTime;
  
  }, 1000);

})


viewHighScore.addEventListener("click", getHighScores)


