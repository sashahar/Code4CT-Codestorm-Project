
//An array of quiz questions.  Each element of the array is an object whose properties are a
//question and the array of possible answers.
var questions = [{question:"How cluttered is your desk?", answers:["A mess", "Cluttered", "Organized", "Empty"]},
 {question:"On average, how much sleep do you get per night?", answers:["Less than 6 hours", "6-7 hours", "7-8 hours","More than 8 hours"]},
 {question:"How many days of the week do you exercise?", answers:["Less than 2 days", "3 days", "4 days", "5 days or more"]},
 {question:"What time of day do you do your work?", answers:["In the morning", "During business hours", "After dinner", "Late at night"]}];

//This function adds dom elements to display an introductory page prompting the user to start the quiz.
function intro(){
  console.log("Setting up beginning page.");
  var headingDiv = document.getElementById("heading");
  var bodyDiv = document.getElementById("bodyText");
  //Activity - Change the contents of the heading div to say "How productive are you?"
  headingDiv.innerHTML = "How productive are you?";

  //Add a new child node to the bodyDiv to make a description of the quiz appear on the screen
  var textNode = document.createTextNode("Take this quiz to see whether you have the baits of highly productive people.");
  bodyDiv.appendChild(textNode);

  //Below, we create a button get started
  var startButton = document.createElement("button");
  startButton.id = "startButton";
  //Activity - Change the button text to say "Get Started".
  startButton.innerHTML = "Get Started";
  //Activity - Create an onclick method that calls the buildQuiz method.
  startButton.onclick = function(){
    buildQuiz();
  }

  //Activity - add your new button as a child of the bodyDiv
  bodyDiv.appendChild(document.createElement("br"));
  bodyDiv.appendChild(startButton);

}

//Activity - call the intro function completed above
intro();

//This function displays the quiz questions on the webpage by iterating through
//the questions array and creating new DOM elements for each question.
function buildQuiz(){
  //get relevant DOM elements
  var quizDiv = document.getElementById("quizbox");
  //Clear the introductory message
  clearDiv(quizDiv);
  //Iterate through questions array to add questions and answers to HTML DOM
  for(var i = 0; i < questions.length; i++){
    //Activity - Create a new h3 element to house the question text
    var questionDiv = document.createElement("h3");
    //Activity - set the h3 element's innerHTML to the current question in the array
    questionDiv.innerHTML = questions[i].question;
    //Activity - set the element's "className" attribute to be "question"
    questionDiv.className = "question";
    //Activity - add this new element to the quizDiv.
    //If you've done everything correctly up until this point, you should see all 4 questions
    // appear on the webpage when you click the "Get Started button"
    quizDiv.appendChild(questionDiv);

    //Next, we will add the four answer options as radio buttons
    var answersArray = questions[i].answers; //save the array of answers.  Each element is a string
    //Activity - create a new "div" element that will house the different answer choices.
    //Set the "className" attribute of this element to "div"
    var answerDiv = document.createElement("div");
    answerDiv.className = "answers";
    for(var j = 0; j < answersArray.length; j++){
      //We have created a radio button element for each answer choice.
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
    //Activity - here, add answerDiv as a child of quizDiv
    //When you're finished, you should see all of the answer choices pop up on the quiz page.
    quizDiv.appendChild(answerDiv);
  }
  //Add a button for the user to submit their answers to the quiz
  //Activity - Create a new button element.  Set its text to "Submit",
  //set its id attribute to "submitButton"
  var submitButton = document.createElement("button");
  submitButton.innerHTML = "Submit";
  submitButton.id = "submitButton";

  submitButton.onclick = function(){
    displayResult();
  }
  quizDiv.appendChild(submitButton);
}

//This function processes the user's quiz answers and creates a productivity score.
//Based on the productivity score, a message is displayed to the user
function displayResult(){
  var quizDiv = document.getElementById("quizbox");
  var answerContainers = document.getElementsByClassName("answers"); //get all the elements with the class name "answers"
  var productivityPoints = 0;
  for(var i = 0; i < answerContainers.length; i++){
    var userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
    productivityPoints += parseInt(userAnswer) + 1;
  }

  var result;
  //Now that we've calculated the user's productivity points, we need to display
  //an appropriate message to the user.
  //Activity - use conditionals to determine which result you should display to the user.
  //The four possible results are:
  //"Least productive" for 4 points or under
  //"You're Struggling" for 5 - 8 points
  //"Productive Pro" for 9 - 12 points
  //"Productivity Queen" for 13 points or more
  if (productivityPoints <= 4){
    result = "Least Productive";
  } else if (productivityPoints <= 8){
    result = "You're Struggling";
  } else if (productivityPoints <= 12){
    result = "Productive Pro";
  } else {
    result = "Productivity QUEEN";
  }

  //Activity - call the clearDiv method with quizDiv as the parameter.
  //This clears the webpage so that we can add new content to it.
  clearDiv(quizDiv);

  //Activity - create a new div element and set the innerHTML to "Your Result is:"
  var headerDiv = document.createElement("h3");
  questionDiv.innerHTML = "Your Result is:";

  //Activity - add this new div element as a child of quizDiv
  quizDiv.appendChild(questionDiv)

  //Activity - Now, create a new element to display the result variable on the webpage.
  //set the id attirbute of this new element to "quizResult"
  //When youre finished, add it as a child to quizDiv
  var resultNode = document.createTextNode(result);
  var node = document.createElement("p");
  node.appendChild(resultNode);
  node.id = "quizResult";
  quizDiv.appendChild(node);
}

//PROVIDED CODE
  var numChildren = answersDiv.childNodes.length;

  for(var i = 0; i < numChildren; i++){
    answersDiv.removeChild(answersDiv.childNodes[0]);
  }
}
