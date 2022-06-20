var quizContainer = document.querySelector("#quiz-container");
var questionContainer = document.querySelector("#question-container");
var answersContainer = document.querySelector("#answers-container");
var extraWrapper = document.querySelector("#extra-wrapper");
var buttonWrapper = document.querySelector("#button-box");
var timerContainer = document.querySelector("#timer");
var viewHighScore = document.querySelector("#view-high-scores");

var startTime = 60;

var totalScore =[];

var playerInfo = [];

var questions = [

    {
        question: "Which is an example of a semantic HTML element?",
        answer: "A: <section>",
        options: [
          "A: <section>",
          "B: <div>",
          "B: <div>",
          "D: <span>"
        ]

    },
    {
        question: "Style Sheet 1 is referenced in an HTML document after style sheet 2. Which style sheet’s styles will apply to the document?",
        answer: "C: style sheet 1",
        options: [
          "A: style sheet 2",
          "B: neither",
          "C: style sheet 1",
          "D: Order will have no effect"
        ]

    },
    {
        question: "What is the difference between a class and an ID?",
        answer: "D: none of the provided answers are correct",
        options: [
          "A: an ID can be used more than once",
          "B: classes can only be used once",
          "C: classes cannot be referenced in javascript",
          "D: none of the provided answers are correct"
        ]

    },
    {
        question: "What are media queries?",
        answer: "A: Styles that dynamically change a website based on the device/screen size accessing the page",
        options: [
          "A: Styles that dynamically change a website based on the device/screen size accessing the page",
          "B: A tool that racks what devices are accessing a webpage for statistical reasons",
          "C: An API that locally stores data in the user’s browser",
          "D: A standardized list of devices approved for accessing websites"
        ]

    },
    {
        question: "What is the purpose of using flexbox while styling a document?",
        answer: "B: It allows creation of responsive site design",
        options: [
          "A: It allows multiple style sheets to be used at once",
          "B: It allows creation of responsive site design",
          "C: Enables the use of javascript on a webpage",
          "D: none of the provided answers are correct"
        ]

    },
    {
      question: "How can we determine if a variable in javascript is global/public?",
      answer: "D: Both A and C are correct",
      options: [
        "A: It is defined outside of any function or closed brackets",
        "B: It is defined within a function using it",
        "C: It is information defined sans the var prefix",
        "D: Both A and C are correct"
      ]

  },
  {
    question: "Which is an example of string type data?",
    answer: "A: Someone’s name entered in an input field",
    options: [
      "A: Someone’s name entered in an input field",
      "B: A list of prime numbers",
      "C: Wether or not a user selected a a box agreeing to terms of service",
      "D: Someone's birth month as represented by a two digit number"
    ]

},
{
  question: "What API can we use to save data in a user’s browser?",
  answer: "C: localStorage",
  options: [
    "A: Media Queries",
    "B: jQuery",
    "C: localStorage",
    "D: Bootstrap"
  ]

},
{
  question: "Do you need to use jQuery in order to manipulate the DOM?",
  answer: "A: No, it can be done with vanilla javascript",
  options: [
    "A: No, it can be done with vanilla javascript",
    "B: No, it can be done with Bootstrap",
    "C: Yes, but only if disconnected from internet access",
    "D: Yes, but only in tangent with Bootstrap or a similar library"
  ]

},
{
  question: "What is Bootstrap?",
  answer: "C: A CSS library of pre built styles",
  options: [
    "A: A specialized tool that generates HTML on demand",
    "B: A library of javascript functions",
    "C: A CSS library of pre built styles",
    "D: A CSS library of styles of standardized use on the web"
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
        console.log(getSum(totalScore))

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

  removeChildren(questionContainer);
  removeChildren(answersContainer);

  clearInterval(timer);

  extraWrapper.textContent = "play again?";

  var finalScore = getSum(totalScore);

  var endText = document.createElement("h3");
  endText.innerHTML = "Game over!" + "<br />" + "Your final score is: " + finalScore;
  endText.className = "questions-title";

  questionContainer.appendChild(endText);
 
  console.log("end of quiz")

  var formInput = document.createElement("div")
  formInput.innerHTML = "<form id='name-form'><input type='text'  maxlength='2' name='player-name' class='text-input' placeholder='Initials Here' /> <button id='save-name' type='submit'> Record Score </button> </form>"
  
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
initialText.textContent = "60 seconds to answer 10 questions. For every wrong answer five seconds will be deducted the running timer. Click the start button when you're ready.";
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


