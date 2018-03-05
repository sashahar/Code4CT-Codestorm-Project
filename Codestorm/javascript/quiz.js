
//An array of quiz questions.  Each element of the array is an object whose properties are a
//question and the array of possible answers.
var questions = [{question:"How cluttered is your desk?", answers:["A mess", "Cluttered", "Organized", "Empty"]},
 {question:"On average, how much sleep do you get per night?", answers:["Less than 6 hours", "6-7 hours", "7-8 hours","More than 8 hours"]},
 {question:"How many days of the week do you exercise?", answers:["Less than 2 days", "3 days", "4 days", "5 days or more"]},
 {question:"What time of day do you do your work?", answers:["In the morning", "During business hours", "After dinner", "Late at night"]}];

/************************** PART 1 **************************/

//This function adds dom elements to the webpage to display
//an introductory page prompting the user to start the quiz.
function intro(){
  console.log("Setting up beginning page.");
  var headingDiv = document.getElementById("heading");
  var bodyDiv = document.getElementById("bodyText");
  //Activity 1 - Change the contents of the headingDiv to say "How productive are you?"
  headingDiv.innerHTML = "How productive are you?";

  //Activity 2 - Add a new child node to the bodyDiv to make a
  //description of the quiz appear on the screen.
  //The string you should display is the following: "Take this quiz to see whether you have the habits of highly productive people."
  var textNode = document.createTextNode("Take this quiz to see whether you have the habits of highly productive people.");
  bodyDiv.appendChild(textNode);

  //Below, we are create a button to help get you started on the next activity
  var startButton = document.createElement("button");
  startButton.id = "startButton";
  //Activity 3 - Change the button text to say "Get Started".
  startButton.innerHTML = "Get Started";
  //Activity 4 - Create an onclick method that calls the buildQuiz method.
  startButton.onclick = function(){
    buildQuiz();
  }

  //Activity 5 - add your new button as a child of the bodyDiv.
  //Hint: If you want add your button on a new line, you can add a new
  //"br" element to the DOM

  bodyDiv.appendChild(document.createElement("br"));
  bodyDiv.appendChild(startButton);

}

//Activity 6 - call the intro function you completed above
//If you've completed part 1 correctly, you should see your heading ("How productive are you?"),
//The description of your quiz, and your "Get Started" button.
//When you click the "Get Started" button, you should see a new, blank page appear.
intro();

/************************** PART 2 **************************/

//This function displays the quiz questions on the webpage by iterating through
//the questions array and creating new DOM elements for each question.
function buildQuiz(){
  var quizDiv = document.getElementById("quizbox");
  //This function call clears the introductory screen
  clearDiv(quizDiv);
  //The for loop is to iterate through questions array to add questions and answers to HTML DOM
  for(var i = 0; i < questions.length; i++){
    //Activity 1 - Create a new h3 element for the question text
    var questionDiv = document.createElement("h3");
    //Activity 2 - set the h3 element's innerHTML to the current question in the array
    //Hint: questions[i] is the current element in the questions array, and has two properties
    // called "question" and "answers"

    questionDiv.innerHTML = questions[i].question;

    //Activity 3 - set the element's "className" attribute to be equal to "question"
    //We need to set the className property to be able to style the quesiton text using CSS.
    questionDiv.className = "question";

    //Activity 4 - Now that you've created the quiz question item, add this new element as a child of the quizDiv.
    //If you've done everything correctly up until this point, you should see all 4 questions
    // appear on the webpage when you click the "Get Started button"
    quizDiv.appendChild(questionDiv);

    //Next, we will add the four answer options as radio buttons
    //We've taken care of writing this part of the code for you.
    var answersArray = questions[i].answers; //save the array of answers.  Each element is a string
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
    //Activity 5 - here, add answerDiv as a child of quizDiv
    //When you're finished, you should see all of the answer choices pop up on the quiz page.
    quizDiv.appendChild(answerDiv);
  }

  //Next, we will add a button for the user to submit their answers to the quiz.
  //Activity 6 - Create a new button element.  Set its text to "Submit",
  //set its id attribute to "submitButton" (this is for CSS purposes)
  var submitButton = document.createElement("button");
  submitButton.innerHTML = "Submit";
  submitButton.id = "submitButton";

  //Activity 7 - Uncomment the three lines of code below to add the onlick function
  //
  submitButton.onclick = function(){
    displayResult();
  }
  quizDiv.appendChild(submitButton);
}

/************************** PART 3 **************************/

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
  headerDiv.innerHTML = "Your Result is:";

  //Activity - add this new div element as a child of quizDiv
  quizDiv.appendChild(headerDiv);

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
function clearDiv(answersDiv){
  var numChildren = answersDiv.childNodes.length;

  for(var i = 0; i < numChildren; i++){
    answersDiv.removeChild(answersDiv.childNodes[0]);
  }
}
