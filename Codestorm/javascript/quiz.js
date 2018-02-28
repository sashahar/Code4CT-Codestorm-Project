var currentQ = 0;
var productivityPoints = 0;

var questions = [{question:"How cluttered is your desk?", answers:["A mess", "Cluttered", "Organized", "Empty"]},
 {question:"On average, how much sleep do you get per night?", answers:["Less than 6 hours", "6-7 hours", "7-8 hours","More than 8 hours"]},
{question:"How many days of the week do you exercise?", answers:["Less than 2 days", "3 days", "4 days", "5 days or more"]},
{question:"What time of day do you do your work?", answers:["In the morning", "During business hours", "After dinner", "Late at night"]}];

function intro(){
  console.log("intro");
  var questionDiv = document.getElementById("question");
  var answersDiv = document.getElementById("answers");
  clearDiv(answersDiv);
  questionDiv.innerHTML = "How productive are you?";
  var textNode = document.createTextNode("Take this quiz to see whether you have the baits of highly productive people.");
  answersDiv.appendChild(textNode);

  //Add button to get started
  var startButton = document.createElement("button");
  startButton.innerHTML = "Get Started";
  startButton.id = "startButton";
  startButton.onclick = function(){
    buildQuiz();
  }
  answersDiv.appendChild(document.createElement("br"));
  answersDiv.appendChild(startButton);

}

intro();

function buildQuiz(){
  //get relevant DOM elements
  var quizDiv = document.getElementById("quizbox");
  clearDiv(quizDiv);
  //Add questions and answers to HTML DOM
  for(var i = 0; i < questions.length; i++){
    //add current questions
    var questionDiv = document.createElement("h3");
    questionDiv.class = "question";
    questionDiv.innerHTML = questions[i].question;
    quizDiv.appendChild(questionDiv);

    //add answers as radio buttons
    var answersArray = questions[i].answers;
    answerDiv = document.createElement("div");
    answerDiv.class = "answers";
    for(var j = 0; j < answersArray.length; j++){
      var currAnswer = document.createElement("label");
      var currRadioButton = document.createElement("input");
      currRadioButton.type = "radio";
      currRadioButton.name = "question" + i;
      currRadioButton.value = j;
      currAnswer.appendChild(currRadioButton);
      currAnswer.appendChild(document.createTextNode(answersArray[j]));
      answerDiv.appendChild(currAnswer);
      answerDiv.appendChild(document.createElement("br"));
    }
    quizDiv.appendChild(answerDiv);
  }

  //Add a submit button
  var submitButton = document.createElement("button");
  submitButton.innerHTML = "Submit";
  submitButton.id = "submitButton";
  submitButton.onclick = function(){
    displayResult();
  }
  quizDiv.appendChild(submitButton);
}

//Old body of displayQuiz
//   var questionDiv = document.getElementById("question");
//   var answersDiv = document.getElementById("answers");
//   if(currentQ > 3){
//     clearAnswers(answersDiv);
//     displayResult();
//     return;
//   }
//   var currQ = questions[currentQ].question;
//   questionDiv.innerHTML = currQ;
//   //need to clear the previous answers
//   clearAnswers(answersDiv);
//   var answersArray = questions[currentQ].answers;
//   for(var i = 0; i < answersArray.length; i++){
//     //create button for each answer
//     var currButton = document.createElement("button");
//     currButton.class = "answer";
//     currButton.id = i + 1;
//     currButton. innerHTML = answersArray[i];
//     currButton.onclick = function(){
//       //add appropriate number of productivity points
//       productivityPoints += parseInt(this.id);
//       console.log(productivityPoints);
//       currentQ++;
//       takeQuiz(currentQ);
//     }
//     answersDiv.appendChild(currButton);
//     answersDiv.appendChild(document.createElement("br"));
//   }
// }

//takeQuiz(0);

function clearDiv(answersDiv){
  var numChildren = answersDiv.childNodes.length;

  for(var i = 0; i < numChildren; i++){
    answersDiv.removeChild(answersDiv.childNodes[0]);
    console.log("remove");
  }
}

function displayResult(){
  var questionDiv = document.getElementById("question");
  var answersDiv = document.getElementById("answers");
  questionDiv.innerHTML = "Your Result is:";
  var result;
  if (productivityPoints <= 4){
    result = "Least Productive";
  } else if (productivityPoints <= 8){
    result = "You're Struggling";
  } else if (productivityPoints <= 12){
    result = "Productive Pro";
  } else {
    result = "SUPER Productive";
  }

  var resultNode = document.createTextNode(result);
  var node = document.createElement("p");
  node.appendChild(resultNode);
  node.id = "quizResult";
  answersDiv.appendChild(node);
}
