var currentQ = 0;
var productivityPoints = 0;

var questions = [{question:"How cluttered is your desk?", answers:["A mess", "Cluttered", "Organized", "Empty"]},
 {question:"On average, how much sleep do you get per night?", answers:["Less than 6 hours", "6-7 hours", "7-8 hours","More than 8 hours"]},
{question:"How many days of the week do you exercise?", answers:["Less than 2 days", "3 days", "4 days", "5 days or more"]},
{question:"What time of day do you do your work?", answers:["In the morning", "During business hours", "After dinner", "Late at night"]}];

function takeQuiz(currentQ){
  //get relevant DOM elements

  var questionDiv = document.getElementById("question");
  var answersDiv = document.getElementById("answers");
  if(currentQ > 3){
    clearAnswers(answersDiv);
    displayResult();
    return;
  }
  var currQ = questions[currentQ].question;
  questionDiv.innerHTML = currQ;
  //need to clear the previous answers
  clearAnswers(answersDiv);
  var answersArray = questions[currentQ].answers;
  for(var i = 0; i < answersArray.length; i++){
    //create button for each answer
    var currButton = document.createElement("button");
    currButton.class = "answer";
    currButton. innerHTML = answersArray[i];
    currButton.onclick = function(){
      //add appropriate number of productivity points
      productivityPoints += i+1;
      currentQ++;
      takeQuiz(currentQ);
    }
    answersDiv.appendChild(currButton);
    answersDiv.appendChild(document.createElement("br"));
  }
}

takeQuiz(0);

function clearAnswers(answersDiv){
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
