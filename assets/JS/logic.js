var quizContainer = document.querySelector("#quiz-container");
var questionContainer = document.querySelector("#question-container");
var questionEl = document.querySelector("#question");
var answersContainer = document.querySelector("#answers-container");
var extraWrapper = document.querySelector("#extra-wrapper");


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

var createQuestion = function(questionIndex) {

  // create question
  var questionEl = document.createElement("h3");
  questionEl.textContent = questions[questionIndex].question;
  questionEl.className = "questions-title";

  questionContainer.appendChild(questionEl);

  //create option A
  var answerElA = document.createElement("div");
  answerElA.textContent = questions[questionIndex].options[0]
  answerElA.className = "answer";

  // listen for clicking A
  answersContainer.appendChild(answerElA);
  answerElA.addEventListener("click", function() {

    console.log("click A");

  })

  // create option B
  var answerElB = document.createElement("div");
  answerElB.textContent = questions[questionIndex].options[1]
  answerElB.className = "answer";

  answersContainer.appendChild(answerElB);

  // listen for click b
  answersContainer.appendChild(answerElB);
  answerElB.addEventListener("click", function() {

    console.log("click B");

  })

  // create option C
  var answerElC = document.createElement("div");
  answerElC.textContent = questions[questionIndex].options[2]
  answerElC.className = "answer";

  answersContainer.appendChild(answerElC);

  // listen for click c
  answersContainer.appendChild(answerElC);
  answerElC.addEventListener("click", function() {

    console.log("click C");

  })


  // create option D
  var answerElD = document.createElement("div");
  answerElD.textContent = questions[questionIndex].options[3]
  answerElD.className = "answer";

  answersContainer.appendChild(answerElD);

  // listen for click D
  answersContainer.appendChild(answerElD);
  answerElD.addEventListener("click", function() {

    console.log("click D");

  })

  
}

var restartQuiz = function () {

  window.location.reload();

}

var startQuiz = function () {

  // remove instructions and start button
  questionContainer.removeChild(initialText);
  questionContainer.removeChild(startButton);
  
  // create "extra" div
  var createExtra = document.createElement("div");
  createExtra.className = "extra";
  extraWrapper.appendChild(createExtra);

  // create restart button
  var restartButton = document.createElement("button");
  restartButton.textContent = "restart";
  createExtra.appendChild(restartButton);

  restartButton.addEventListener("click", restartQuiz);

  // create next button
  var nextButton = document.createElement("button");
  nextButton.textContent = "next";
  createExtra.appendChild(nextButton);

  


  



  createQuestion(0);

}





// landing text
var initialText = document.createElement("h3");
initialText.textContent = "lorem uinspid ahfghds ahdhsg";
initialText.className = "questions-title";

questionContainer.appendChild(initialText);


var startButton = document.createElement("button");
startButton.textContent = "start";
questionContainer.appendChild(startButton);

startButton.addEventListener("click", function() {

  console.log("start clicked");
  startQuiz();

})






