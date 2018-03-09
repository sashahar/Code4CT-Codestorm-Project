/* You have been asked to create an exercise app to keep track of your daily exercise goals.
The app has to give an indication of whether the all the goals for a specific day has been met, for example,
if all the goals for a specific day is met then the box in the web page that contains that day will turn green, 
but if any one of goals is not the box that contains that day will turn red.
*/

/********************** Part 1**********************/
//Activity 1 - Create 7 Arrays, 1 for each day of the week
//Name each Array as follows:
//Array 1 - mondaysGoals; Array 2: tuesdayGoals; Array 3: wednesdayGoals...etc
//Each Array should contain only 3 properties that will represent the goals for that day.
//You have the freedom to choose any goals you wish.
//Start coding here

//Activity 2 - Create an Array called checkboxId
//The must contain the following 3 properties:
//'box_one'
//'box_two'
//'box_three'
//Create the Array below.

//Activity 3 - Create a function that will get the value of the drop value and returns it.
//Start by creating a function called getDropdownValue. 
//Inside create a variable called days and set it equal to document.getElementById('days').value;
//Finally return the value by using the return method.
//Start writing the function here


//Activity 4 - Testing is an important part of coding and we want to test and confirm that if the user
//selects a day in the dropdown that the right value is returned or that a value is returned at all.
//Write a function called testDays that prints: "You chose " and the day the user has selected from the dropdown)
//You can print it in the console.


//Activity 5 - At the bottom of this page is a function called display.
//Inside the display function call the testDays function you've created.
//The display() function is already called in the exercise.html file
//The element looks like this <input type="submit" value="GO" id="button" onclick="display();">


/********************** Part 2 **********************/
//This function creates a checkbox as well as a label and line break
//This function will work as a template for creating the above mentioned elements which means it can be called multiple times
//Activity 6 - Add dayGoal as a parameter
//dayGoal will take the Arrays that you've created in Activity
function createCheckBox(){
//Activity 7.1 - Create a variable called createCheckBox and create an INPUT element using the createElement() method.


//Activity 7.2 - Create a variable called createLabel and create a LABEL element.


//Activity 7.3 - Create a variable called createBreak and create a br(break) element.


//Activity 8 - Create a variable called addTextToBox and create a text node using the createTextNode() method.
//Use dayGoal as a parameter.


//Activity 9 - Use the setAttribute() to create a checkbox. Use your resources to learn how setAttribute works.
//Copy and paste createCheckBox.setAttribute(); and add the appropriate parameters to create the checkbox.


//Activity 10 - Uncomment the code below to 'active' it.
    //createCheckBox.id = checkboxId[i];

//Activity 11.1 - Append createCheckBox to createLabel.


//Activity 11.2 - Append addTextToBox to createLabel.


//Activity 11.3 - Append createBreak to createLabel.


//Activity 12.1 - Create a variable called element and set it equal to document.getElementById("goals");

//Activity 12.2 - Append createLabel element

}

/********************** Part 3 **********************/

//This function creates a checkbox for each day based on the user's selection
//It uses the createCheckBox function to create the checkbox
//The function contains a parameter called selectedDay which takes in the user selection
//based on that day the specific goals for that day will appear in the HTML DOM
//Activity 13.1 - Inside the for loop of the goalsForTheDay function create an if statement
//that checks which day the user had selected in the dropdown and then based on that day
//use the createCheckBox function to create a checkbox that contains the goals for that.
//Example: if(selectedDay === 'monday') then create a box for that day {createCheckBox(mondayGoals[i]);}
function goalsForTheDay(selectedDay){

    for(i = 0; i < mondayGoals.length; i++){
//Start coding here 

        }
    }

//Activity 13.2 - Call the goalsForTheDay in the display function and add in the appropriate parameter.


//The function below checks if all the checkboxes are checked for a particular day.
//If all of the checkboxes are checked then the box for that specific day will turn green.
//If any of the checkboxes are not checked then the box for that specific day will turn red.
    function checkboxTrue(selectedDay){
//Activity 14 - This loop is broken. Find the problem and fix it.
    for(i = 0; i < checkboxId.length; i++){
//These variables gets the element with the specified ID in this case it will get the checkboxes.
        var checkbox1 = document.getElementById(checkboxId[0]);
        var checkbox2 = document.getElementById(checkboxId[1]);
        var checkbox3 = document.getElementById(checkboxId[2]);

//Activity 15.1 - Create a variable called monday and get the element with the ID 'monIcon'


//Activity 15.2 - Create a variable called tuesday and get the element with the ID 'tuesIcon'


//Activity 15.3 - Create a variable called wednesday and get the element with the ID 'wedIcon'


//Activity 15.4 - Create a variable called thursday and get the element with the ID 'thursIcon'


//Activity 15.5 - Create a variable called friday and get the element with the ID 'friIcon'


//Activity 15.6 - Create a variable called saturday and get the element with the ID 'satIcon'


//Activity 15.7 - Create a variable called sunday and get the element with the ID 'sunIcon'



//These if states checks if all the each checkbox is checked for each day
            if(checkbox1.checked === true && checkbox2.checked === true && checkbox3.checked === true && selectedDay === 'monday'){
//Activity 16.1 - If all the checkboxes are ticked then the background color of the box for that day in the HTML DOM should change to green.
//Use setAttribute() to change the background colour to green. Additionally change the text color to white and eliminate the border.

            } else if(selectedDay === 'monday'){
//Activity 16.2 - If even one checkbox is not ticked then the background color of the box for that day in the HTML DOM should change to red.
//Use setAttribute() to change the background colour to red. Additionally change the text color to white and eliminate the border.

            }
//Activity 16.3 - Complete the function by adding in the rest of days of the week.
//You can use the above else if statement as an example.

        }
    }

//Activity 17.1 (OPTIONAL) - Create a function called disableButton that disables the 'GO' button in the HTML DOM after the user clicks it
//Call the function in the onclick attribute in the exercise.html file.
//Start your code here.


//Activity 17.2 - Call the disableButton function in the onclick attribute of the GO button in the exercise.html 

function display(){

    
}


//Activity 18 - If you've made it to this activity that means your JavaScript is working perfectly.
//For this activity you are going to use your creativity to style the webpage using CSS.
//You have full creative freedom to style it however you fancy.
//Start by creating a new css file and title it "your name".css and link it to the exercise.html file.
//Remember to use your resources.
//Have fun! :)
