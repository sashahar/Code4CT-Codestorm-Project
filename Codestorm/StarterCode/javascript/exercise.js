//Activity 1 - Create 7 Arrays, 1 for each day of the week
//Name each Array as follows:
//Array 1 - mondaysGoals; Array 2: tuesdayGoals; Array 3: wednesdayGoals...etc
//Each Array should contain only 3 properties that will represent the goals for that day
//You have the freedom to choose any goals you wish.
//Start coding here


//Activity 2 - This function will get the value of the drop value and returns it.
//Start by creating a function called getDropdownValue. 
//Inside create a variable called days and set it equal to document.getElementById('days').value;
//Finally return the value by using the return method.
//Start writing the function here



//This function confirms that if I select and item the right value is returned
//Testing is an important part of coding and we want to test and confirm that if the user
//selects a day in dropdown that the right value is returned
function connectDaysToIcons(){
    if(getDropdownValue() === "monday"){
        return 'You chose ' + getDropdownValue();
    } else if(getDropdownValue() === "tuesday"){
        return 'You chose ' + getDropdownValue();
    } 
//Activity 3 - Complete the function by adding in the rest of days of the week
//You can use the above else if as an example

}

//Activity 4 - At the bottom of this page is a function called display.
//Inside the display function add this line of code - console.log(connectDaysToIcons()); 

//Activity 5 - Create an Array called checkboxId
//The must contain the following 3 properties:
//'box_one'
//'box_two'
//'box_three'
//Create the Array below


//This function creates a checkbox as well as a label and line break
//This function will work as a template for creating the above mentioned elements which means it can be called multiple times
//Activity 6 - Add dayGoal as a parameter
//dayGoal will take the Arrays that you've created in Activity
function createCheckBox(dayGoal){
//Activity 7.1 - Create a variable called createCheckbox and create an INPUT element using the createElement() method.


//Activity 7.2 - Create a variable called createLabel and create an LABEL element using the createElement() method.


//Activity 7.3 - Create a variable called createBreak and create an br(break) element using the createElement() method.


//Activity 8 - Create a variable called addTextToBox and create a text node using the createTextNode() method.
//Use dayGoal as a parameter.


//Activity 9 - Use the setAttribute() to create a checkbox. Use your resources to learn how setAttribute works.
//Copy and paste createCheckbox.setAttribute(); and add the appropriate parameters to create the checkbox 


//Activity 10 - Uncomment the code below to 'active' it
 

//Activity 11.1 - Append createCheckbox to createLabel


//Activity 11.2 - Append addTextToBox to createLabel


//Activity 11.3 - Append createBreak to createLabel


//Activity 12.1 - Create a variable called element and set it equal to document.getElementById("goals");

//Activity 12.2 - Append createLabel element

}

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
//Activity 13.1 - Complete the function by adding in the rest of days of the week
//You can use the above else if as an example
   

        }
    }

//Activity 13.2 - Call the goalsForTheDay and add in the appropriate parameter.


//The function below checks if all the checkboxes are checked for a particular day.
//If all of the checkboxes are checked then the box for that specific day will turn green.
//If any of the checkboxes are not checked then the box for that specific day will turn red.
    function checkboxTrue(selectedDay){
//Activity 14 - This loop is broken. Find the problem and fix it.
    for(i = 0; i < checkboxId.length; i++){
//These variables gets the element with the specified ID in this case it will get the checkboxes
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
                console.log('Works!' + checkboxId[i] + selectedDay);
//If all the checkboxes are checked then the background color of the box for that day in the HTML DOM will change to green
                monday.setAttribute("style", "background-color: #2EBD1B; color: white; border: 0px solid transparent;");
            } else if(selectedDay === 'monday'){
//If all the checkboxes are not checked then the background color of the box for that day in the HTML DOM will change to red
                monday.setAttribute("style", "background-color: #BD1B1B; color: white; border: 0px solid transparent;");
            }

            if(checkbox1.checked === true && checkbox2.checked === true && checkbox3.checked === true && selectedDay === 'tuesday'){
                console.log('Works!' + checkboxId[i] + selectedDay);
                tuesday.setAttribute("style", "background-color: #2EBD1B; color: white; border: 0px solid transparent;");
            } else if(selectedDay === 'tuesday'){
                tuesday.setAttribute("style", "background-color: #BD1B1B; color: white; border: 0px solid transparent;");
            }
//Activity 16 - Complete the function by adding in the rest of days of the week
//You can use the above else if as an example

        }
    }

//Activity 17 - Create a function called disableButton that disables the 'GO' button in the HTML DOM after the user clicks it
//Call the function in the onclick attribute in the exercise.html file


function display(){

}