var quizContainer = document.querySelector("#quiz-container");
var questionContainer = document.querySelector("#question-container");
var questionEl = document.querySelector("#question");
var answersContainer = document.querySelector("#answers-container");
var answerEl = document.querySelector("#answer");

var totalScore =[];

var questions = [

    {
        numb: 1,
        question: "What does HTML stand for?",
        answer: "a",
        options: [
          "Hyper Text Preprocessor",
          "a",
          "Hyper Text Multiple Language",
          "Hyper Tool Multi Language"
        ]

    },
    {
        numb: 1,
        question: "What does HTML gregrwgstand for?",
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

var createQuestion = function(questionIndex) {

  var questionEl = document.createElement("h3");
  questionEl.textContent = questions[questionIndex].question;
  questionEl.className = "questions-title";

  questionContainer.appendChild(questionEl);

  for (i = 0; i < questions[questionIndex].options.length; i++ ) {

    var answerEl = document.createElement("li")
    answerEl.textContent = questions[questionIndex].options[i]
    answerEl.className = "answer";

    answersContainer.appendChild(answerEl);

    answerEl.addEventListener("click", function() {

      var chosenAnswer = answerEl.textContent;
      console.log(chosenAnswer);

    })
  
  }

}








createQuestion(0);



//var startButton = document.createElement("button");
//startButton.textContent = "start";
//questionContainer.appendChild(startButton);

//startButton.addEventListener("click", createQuestion);


//createQuestion(0);

