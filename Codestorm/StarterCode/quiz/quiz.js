//Below is an array called quiz questions. Each element of the array is an object whose properties are a
//question and the array of possible answers.
var questions = [{question:"How cluttered is your desk?", answers:["A mess", "Cluttered", "Organized", "Empty"]},
 {question:"On average, how much sleep do you get per night?", answers:["Less than 6 hours", "6-7 hours", "7-8 hours","More than 8 hours"]},
 {question:"How many days of the week do you exercise?", answers:["Less than 2 days", "3 days", "4 days", "5 days or more"]},
 {question:"What time of day do you do your work?", answers:["In the morning", "During business hours", "After dinner", "Late at night"]}];

/************************** PART 1 **************************/

//This function adds DOM elements to the webpage to display
//an introductory page prompting the user to start the quiz.
function intro(){
  console.log("Setting up beginning page.");
  var headingDiv = document.getElementById("heading");
  var bodyDiv = document.getElementById("bodyText");
  //Activity 1 - Change the contents of the headingDiv to say "How productive are you?"
  //using the innerHTML property.
  //You should see this text appear on your webpage.


  //Activity 2.1 -
  //Create a variable called textNode.
  //Set the variable equal to a new text node that will be added to
  //bodyDiv to make a description of the quiz appear on the screen. 
  //HINT: Use document.createTextNode() to create a new text node.
  //The string you should display is the following: 
  //"Take this quiz to see whether you have the habits of highly productive people."
  

  //Activity 2.2 - Append the textNode to the bodyDiv element (using appendChild()).


  //Below, we are created a button to help get you started on the next activity
  var startButton = document.createElement("button");
  startButton.id = "startButton";

  //Activity 3.1 - Create a break <br> element and append the element to bodyDiv.


  //Activity 3.2 - Append startButton to bodyDiv.


  //Activity 4 - Change the button text to say "Get Started".

  
  //If you've completed part 1 correctly, you should see your heading ("How productive are you?"),
  //The description of your quiz, and your "Get Started" button.
  //When you click the "Get Started" button, you should see a new, blank page appear.

  //Here, we define the start button's onclick method that calls the buildQuiz method.
  //We've completed this part for you.
  startButton.onclick = function(){
    buildQuiz();
  }
}

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
    //Activity 5 - Create a variable called questionDiv and 
    //create a new h3 element that will be used for the question text.


    //Activity 6 - Set the h3 element's innerHTML to the current question in the array
    //Hint: questions[i] is the current element in the questions array, and has two properties
    // called "question" and "answers"


    //Activity 7 - Set the "className" attribute of questionDiv to "question"
    //We need to set the className property to be able to style the question text using CSS.


    //Activity 8 - Now that you've filled in the h3 element, add this new element as a child of the quizDiv.
    //If you've done everything correctly up until this point, you should see all 4 questions
    //appear on the webpage when you click the "Get Started" button


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
    //Activity 9 - Here, add answerDiv as a child of quizDiv.


    //When you're finished, you should see all of the answer choices pop up on the quiz page.
  }

  //Next, we will add a button for the user to submit their answers to the quiz.
  //Activity 10.1 - Create a variable called submitButton and set it equal to a new button element. 


  //Activity 10.2 - Set its text to "Submit".


  //Activity 10.2 - Set its id attribute to "submitButton" (this is for CSS purposes).


  //This block of codes set your button's onclick property to be a function that
  //calls "displayResult", the function defined below.
  submit.onclick = function(){
    displayResult();
  }

  //Activity 11 - Add the button as a child of the quiz div.


  //When you're finished, you should be able to see your button at the bottom of your webpage.
}

/************************** PART 3 **************************/

//This function processes the user's quiz answers and creates a productivity score.
//Based on the productivity score, a message is displayed to the user
function displayResult(){
  //We've filled in this part of the code for you.
  //It calculates the user's score based on the buttons they selected during the quiz.
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
  //Activity 12 - Use an if statement to determine which result you should display to the user.
  //The four possible results are:
  //"Least productive" for 4 points or under
  //"You're Struggling" for 5 - 8 points
  //"Productive Pro" for 9 - 12 points
  //"Productivity Queen" for 13 points or more
  

  
  //Activity 13 - Call the clearDiv method with quizDiv as the parameter.
  //This clears the webpage so that we can add new content to it.


  //Activity 14.1 - Create a new variable called headerDiv and set it equal to a new h3 element.


  //Activity 14.2 - Set the innerHTML property of the headerDiv to "Your Result is:".


  //Activity 14.3 - Add headerDiv as a child of quizDiv (using appendChild()).


  var resultNode = document.createTextNode(result);
 
  //Activity 15.1 - Now, create a new paragraph element to display the result variable on the webpage.
  //Name the variable newPara.


  //Activity 15.2 - Append resultNode to newPara (using appendChild).


  //Activity 15.3 - Set the id attribute of newPara to "quizResult".


  //Activity 15.4 - Finally, append newPara to quizDiv.


  //If you have completed this part correctly,
  //you should see the result in yellow when you submit the quiz.
}

//PROVIDED CODE
//We have written this function for you to use.  It takes a DOM element as a parameter
//and deletes all of its children.
function clearDiv(answersDiv){
  var numChildren = answersDiv.childNodes.length;

  for(var i = 0; i < numChildren; i++){
    answersDiv.removeChild(answersDiv.childNodes[0]);
  }
}
