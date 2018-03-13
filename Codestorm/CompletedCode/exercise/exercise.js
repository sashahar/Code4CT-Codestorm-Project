
/********************** Part 1**********************/
//Activity 1 - Create 7 Arrays, 1 for each day of the week
//Name each Array as follows:
//Array 1 - mondaysGoals; Array 2: tuesdayGoals; Array 3: wednesdayGoals...etc
//Each Array should contain only 3 elements that will represent the goals for that day
//You have the freedom to choose any goals you wish.
//Start coding here
var mondayGoals = ['2KM Jog', ' 50 Squats', ' 50 Pushups'];
var tuesdayGoals = ['1KM Jog', ' 75 Squats', ' 25 Pushups'];
var wednesdayGoals = ['3KM Jog', ' 25 Squats', ' 10 Pushups'];
var thursdayGoals = ['1KM Jog', ' 50 Squats', ' 30 Pushups'];
var fridayGoals = ['3KM Jog', ' 60 Squats', ' 10 Pushups'];
var saturdayGoals = ['1KM Jog', ' 30 Squats', ' 50 Pushups'];
var sundayGoals = ['5KM Jog', ' 10 Squats', ' 10 Pushups'];

//Activity 2 - Create an Array called checkboxId
//The must contain the following 3 properties:
//'box_one'
//'box_two'
//'box_three'
//Create the Array below.
var checkboxId = ['box_one', 'box_two', 'box_three'];

//Activity 3 - This function will get the value of the drop value and returns it.
//Start by creating a function called getDropdownValue.
//Inside create a variable called days and set it equal to document.getElementById('days').value;
//Finally return the value by using the return method.
//Start writing the function here
function getDropdownValue(){
    var days = document.getElementById('days').value;
    return days;
}

//Activity 4 - Testing is an important part of coding and we want to test and confirm that if the user
//selects a day in the dropdown that the right value is returned or that a value is returned at all.
//Write a function called testDays.  Inside the function, call getDropdownValue
//and save its return value to a variable.  Then print "You chose " and the value
//of your variable to the console.
function connectDaysToIcons(){
    if(getDropdownValue() === "monday"){
        return 'You chose ' + getDropdownValue();
    } else if(getDropdownValue() === "tuesday"){
        return 'You chose ' + getDropdownValue();
    }
    else if(getDropdownValue() === "wednesday"){
        return 'You chose ' + getDropdownValue();
    } else if(getDropdownValue() === "thursday"){
        return 'You chose ' + getDropdownValue();
    } else if(getDropdownValue() === "friday"){
        return 'You chose ' + getDropdownValue();
    } else if(getDropdownValue() === "saturday"){
        return 'You chose ' + getDropdownValue();
    } else if(getDropdownValue() === "sunday"){
        return 'You chose ' + getDropdownValue();
    }
}

//Activity 5 - At the bottom of this page is a function called display.
//Inside the display function add this line of code - console.log(connectDaysToIcons());

//Activity 5 - Create an Array called checkboxId
//The must contain the following 3 properties:
//'box_one'
//'box_two'
//'box_three'
//Create the Array below.
var checkboxId = ['box_one', 'box_two', 'box_three'];

/********************** Part 2 **********************/

//This function creates a checkbox as well as a label and line break
//This function will work as a template for creating the above mentioned elements which means it can be called multiple times
//Activity 6 - Add dayGoal as a parameter
//dayGoal will take the Arrays that you've created in Activity
function createCheckBox(dayGoal){
//Activity 7.1 - Create a variable called createCheckBox and create an INPUT element using the createElement() method.
    var newCheckBox = document.createElement("INPUT");

//Activity 7.2 - Create a variable called createLabel and create a LABEL element.
    var newLabel = document.createElement("LABEL");

//Activity 7.3 - Create a variable called createBreak and create a br(break) element.
    var newBreak = document.createElement("br");

//Activity 8 - Create a variable called addTextToBox and create a text node using the createTextNode() method.
//Use dayGoal as a parameter.
    var addTextToBox = document.createTextNode(dayGoal);

//Activity 9 - Use the setAttribute() to create a checkbox. Use your resources to learn how setAttribute works.
//Copy and paste createCheckBox.setAttribute(); and add the appropriate parameters to create the checkbox.
    newCheckBox.setAttribute("type", "checkbox");

//Activity 10 - Uncomment the code below to 'active' it.
    newCheckBox.id = checkboxId[i];

//Activity 11.1 - Append createCheckBox to createLabel.
  newLabel.appendChild(newCheckBox);

//Activity 11.2 - Append addTextToBox to createLabel.
    newLabel.appendChild(addTextToBox);

//Activity 11.3 - Append createBreak to createLabel.
    newLabel.appendChild(newBreak);

//Activity 12.1 - Create a variable called element and set it equal to document.getElementById("goals");
    var element = document.getElementById("goals");
//Activity 12.2 - Append createLabel element
    element.appendChild(newLabel);
}

/********************** Part 3 **********************/

//This function creates a checkbox for each day based on the user's selection
//It uses the function above to create the checkbox
//The function contains a parameter called selectedDay which takes in the user selection
//based on that day the specific goals for that day will appear in the HTML DOM
function goalsForTheDay(selectedDay){

    for(i = 0; i < mondayGoals.length; i++){
        if(selectedDay === 'monday'){
            createCheckBox(mondayGoals[i]);
        } else if(selectedDay === 'tuesday'){
            createCheckBox(tuesdayGoals[i]);
        }
//Activity 13.1 - Complete the function by adding in the rest of days of the week.
//You can use the above else if statement as an example.
        else if(selectedDay === 'wednesday'){
            createCheckBox(wednesdayGoals[i]);
        } else if(selectedDay === 'thursday'){
            createCheckBox(thursdayGoals[i]);
        } else if(selectedDay === 'friday'){
            createCheckBox(fridayGoals[i]);
        } else if(selectedDay === 'saturday'){
            createCheckBox(saturdayGoals[i]);
        } else if(selectedDay === 'sunday'){
            createCheckBox(sundayGoals[i]);
        }

        }
    }

//Activity 13.2 - Call the goalsForTheDay in the display function and add in the appropriate parameter.



/********************** Part 4 **********************/
//The function below checks if all the checkboxes are checked for a particular day.
//If all of the checkboxes are checked then the box for that specific day will turn green.
//If any of the checkboxes are not checked then the box for that specific day will turn red.
    function checkboxTrue(selectedDay){
//Activity 14 - This loop is broken. Find the problem and fix it.
    //for(i = 0; i < checkboxId.length; i++){
//These variables gets the element with the specified ID in this case it will get the checkboxes
        var checkbox1 = document.getElementById(checkboxId[0]);
        var checkbox2 = document.getElementById(checkboxId[1]);
        var checkbox3 = document.getElementById(checkboxId[2]);

//Activity 15.1 - Create a variable called monday and get the element with the ID 'monIcon'
        var monday = document.getElementById('monIcon');
//Activity 15.2 - Create a variable called tuesday and get the element with the ID 'tuesIcon'
        var tuesday = document.getElementById('tuesIcon');
//Activity 15.3 - Create a variable called wednesday and get the element with the ID 'wedIcon'
        var wednesday = document.getElementById('wedIcon');
//Activity 15.4 - Create a variable called thursday and get the element with the ID 'thursIcon'
        var thursday = document.getElementById('thursIcon');
//Activity 15.5 - Create a variable called friday and get the element with the ID 'friIcon'
        var friday = document.getElementById('friIcon');
//Activity 15.6 - Create a variable called saturday and get the element with the ID 'satIcon'
        var saturday = document.getElementById('satIcon');
//Activity 15.7 - Create a variable called sunday and get the element with the ID 'sunIcon'
        var sunday = document.getElementById('sunIcon');

//These if states checks if all the each checkbox is checked for each day
            if(checkbox1.checked === true && checkbox2.checked === true && checkbox3.checked === true){
              //Activity 16.1 - If all the checkboxes are checked then the background color of the box for that day in the HTML DOM should change to green
              //Use setAttribute() to change the background colour to green. Additionally change the text color to white and eliminate the border.
              if(selectedDay === 'monday'){
                monday.setAttribute("style", "background-color: #2EBD1B; color: white; border: 0px solid transparent;");
              }
              //Activity 16.2 - The if statement above changes the background of the monday box to green.
              //Below, use if statements to do the same for every day of the week (there should be 7 total).
              //fill in the rest of the if statements here...
              else if (selectedDay === 'tuesday'){
                tuesday.setAttribute("style", "background-color: #2EBD1B; color: white; border: 0px solid transparent;");
              } else if (selectedDay === 'wednesday'){
                wednesday.setAttribute("style", "background-color: #2EBD1B; color: white; border: 0px solid transparent;");
              } else if (selectedDay === 'thursday'){
                thursday.setAttribute("style", "background-color: #2EBD1B; color: white; border: 0px solid transparent;");
              } else if (selectedDay === 'friday'){
                friday.setAttribute("style", "background-color: #2EBD1B; color: white; border: 0px solid transparent;");
              } else if (selectedDay === 'saturday'){
                saturday.setAttribute("style", "background-color: #2EBD1B; color: white; border: 0px solid transparent;");
              } else{
                sunday.setAttribute("style", "background-color: #2EBD1B; color: white; border: 0px solid transparent;");
              }
            }else{
              //Activity 16.3 - If even one checkbox is not ticked, then the background color of the box
              //for that day in the HTML DOM should change to red.
              //Use conditionals for each day of the week to change the background
              //colour of the appropriate box to red (as above).
              //Additionally, change the text color to white and eliminate the border.
              if(selectedDay === 'monday'){
                monday.setAttribute("style", "background-color: #BD1B1B; color: white; border: 0px solid transparent;");
              } else if (selectedDay === 'tuesday'){
                tuesday.setAttribute("style", "background-color: #BD1B1B; color: white; border: 0px solid transparent;");
              } else if (selectedDay === 'wednesday'){
                wednesday.setAttribute("style", "background-color: #BD1B1B; color: white; border: 0px solid transparent;");
              } else if (selectedDay === 'thursday'){
                thursday.setAttribute("style", "background-color: #BD1B1B; color: white; border: 0px solid transparent;");
              } else if (selectedDay === 'friday'){
                friday.setAttribute("style", "background-color: #BD1B1B; color: white; border: 0px solid transparent;");
              } else if (selectedDay === 'saturday'){
                saturday.setAttribute("style", "background-color: #BD1B1B; color: white; border: 0px solid transparent;");
              } else{
                sunday.setAttribute("style", "background-color: #BD1B1B; color: white; border: 0px solid transparent;");
              }
            }

    }

//Activity 17.1 - Create a function called disableButton that disables the 'GO' button in the HTML DOM after the user clicks it
//Call the function in the onclick attribute in the exercise.html file
function disableButton(){
    var theButton = document.getElementById('button');
    theButton.disabled = true;
    theButton.setAttribute('style', 'cursor: not-allowed;');
}

function display(){
    console.log(connectDaysToIcons());
    goalsForTheDay(getDropdownValue());
}
//Activity 17.2 - Call the disableButton function in the onclick attribute of the GO button in the exercise.html

//Activity 18 - If you've made it to this activity that means your JavaScript is working perfectly.
//For this activity you are going to use your creativity to style the webpage using CSS.
//You have full creative freedom to style it however you fancy.
//Start by creating a new css file and title it "your name".css and link it to the exercise.html file.
//Remember to use your resources.
//Have fun! :)
