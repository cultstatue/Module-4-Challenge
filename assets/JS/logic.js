var quizContainer = document.querySelector("#quiz-container");
var questionContainer = document.querySelector("#question-container");
var questionEl = document.querySelector("#question");
var answersContainer = document.querySelector("#answers-container")

var questions = [

    {
        numb: 1,
        question: "What does HTML stand for?",
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
        question: "What does HTML stand for?",
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
        question: "What does HTML stand for?",
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
        question: "What does HTML stand for?",
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
        question: "What does HTML stand for?",
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

  for (i = 0; i < questions[1].options.length; i++ ) {

    var answerEl = document.createElement("li")
    answerEl.textContent = questions[questionIndex].options[i]
    answerEl.className = "answer";

    answersContainer.appendChild(answerEl);

  }

}

var runQuiz = function () {


}











//var startButton = document.createElement("button");
//startButton.textContent = "start";
//questionContainer.appendChild(startButton);

//startButton.addEventListener("click", createQuestion);


//createQuestion();

