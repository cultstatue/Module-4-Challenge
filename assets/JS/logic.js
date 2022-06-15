var quizContainer = document.querySelector("#quiz-container");
var questionContainer = document.querySelector("#question-container");
var questionEl = document.querySelector("#question");
var answersContainer = document.querySelector("#answers-container");
var extraWrapper = document.querySelector("#extra-wrapper");
var buttonWrapper = document.querySelector("#button-box");


var totalScore =[];

var questions = [

    {
        numb: 1,
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
        numb: 1,
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
        numb: 1,
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
        numb: 1,
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
        numb: 1,
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

      var rightWrong = document.querySelector(".extra");

      if (chosenAnswer === questions[questionIndex].answer) {

        console.log("correct");
        rightWrong.textContent = "correct!";
        totalScore.push(1);
        console.log(totalScore);

      }
      else {

        console.log("incorrect");
        rightWrong.textContent = "incorrect!";
        console.log(totalScore);

      }

    };

  }, {once : true});

  
}

var restartQuiz = function () {

  window.location.reload();

}

var startQuiz = function () {

  // remove instructions and start button
  questionContainer.removeChild(initialText);
  buttonWrapper.removeChild(startButton);
  
  // create "extra" div
  var createExtra = document.createElement("div");
  createExtra.className = "extra";
  extraWrapper.appendChild(createExtra);

  // create restart button
  var restartButton = document.createElement("button");
  restartButton.textContent = "restart";
  buttonWrapper.appendChild(restartButton);

  restartButton.addEventListener("click", restartQuiz);

  // create next button
  var nextButton = document.createElement("button");
  nextButton.textContent = "next";
  buttonWrapper.appendChild(nextButton);

  


  



  createQuestion(0);

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

})






