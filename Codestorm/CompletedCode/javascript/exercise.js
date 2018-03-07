
//This function gets the selected item in the dropdown and returns its value
function getDropdownValue(){
    var days = document.getElementById('days').value;
    return days;
}

//This function confirms that if I select and item the right value is returned
function connectDaysToIcons(){
    if(getDropdownValue() === "monday"){
        return 'You chose ' + getDropdownValue();
    } else if(getDropdownValue() === "tuesday"){
        return 'You chose ' + getDropdownValue();
    } else if(getDropdownValue() === "wednesday"){
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

//Maybe I could use 1 object instead of multiple arrays. I also don't want to complicate the code
var mondayGoals = ['2KM Jog', ' 50 Squats', ' 50 Pushups'];
var tuesdayGoals = ['1KM Jog', ' 75 Squats', ' 25 Pushups'];
var wednesdayGoals = ['3KM Jog', ' 25 Squats', ' 10 Pushups'];
var thursdayGoals = ['1KM Jog', ' 50 Squats', ' 30 Pushups'];
var fridayGoals = ['3KM Jog', ' 60 Squats', ' 10 Pushups'];
var saturdayGoals = ['1KM Jog', ' 30 Squats', ' 50 Pushups'];
var sundayGoals = ['5KM Jog', ' 10 Squats', ' 10 Pushups'];

//Array for assigning checkbox ids
var checkboxId = ['box_one', 'box_two', 'box_three'];
//var checkboxValue = [false, false, false];

//This function creates a check box as well as a label and line break
//It takes the parameter dayGoal which takes the array for each and then creates a text node from the values inside the array
function createCheckBox(dayGoal){
    var createCheckbox = document.createElement("INPUT");
    var createLabel = document.createElement("LABEL");
    var createBreak = document.createElement("br");

    
    var addTextToBox = document.createTextNode(dayGoal);

    createCheckbox.setAttribute("type", "checkbox");
    createCheckbox.id = checkboxId[i];

    createLabel.appendChild(createCheckbox);
    createLabel.appendChild(addTextToBox);
    createLabel.appendChild(createBreak);

    element = document.getElementById("monday-goals");
    element.appendChild(createLabel);
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
        } else if(selectedDay === 'wednesday'){
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


    function checkboxTrue(selectedDay){
    for(i = 0; i < checkboxId.length; i++){
        var checkbox1 = document.getElementById(checkboxId[0]);
        var checkbox2 = document.getElementById(checkboxId[1]);
        var checkbox3 = document.getElementById(checkboxId[2]);
        
        var monday = document.getElementById('monIcon');
        var tuesday = document.getElementById('tuesIcon');
        var wednesday = document.getElementById('wedIcon');
        var thursday = document.getElementById('thursIcon');
        var friday = document.getElementById('friIcon');
        var saturday = document.getElementById('satIcon');
        var sunday = document.getElementById('sunIcon');
                                                        
            if(checkbox1.checked === true && checkbox2.checked === true && checkbox3.checked === true && selectedDay === 'monday'){
                console.log('Works!' + checkboxId[i] + selectedDay);
                monday.setAttribute("style", "background-color: #2EBD1B; color: white; border: 0px solid transparent;");
            } else if(selectedDay === 'monday'){
                monday.setAttribute("style", "background-color: #BD1B1B; color: white; border: 0px solid transparent;");
            }

            if(checkbox1.checked === true && checkbox2.checked === true && checkbox3.checked === true && selectedDay === 'tuesday'){
                console.log('Works!' + checkboxId[i] + selectedDay);
                tuesday.setAttribute("style", "background-color: #2EBD1B; color: white; border: 0px solid transparent;");
            } else if(selectedDay === 'tuesday'){
                tuesday.setAttribute("style", "background-color: #BD1B1B; color: white; border: 0px solid transparent;");
            }

            if(checkbox1.checked === true && checkbox2.checked === true && checkbox3.checked === true && selectedDay === 'wednesday'){
                console.log('Works!' + checkboxId[i] + selectedDay);
                wednesday.setAttribute("style", "background-color: #2EBD1B; color: white; border: 0px solid transparent;");
            } else if(selectedDay === 'wednesday'){
                wednesday.setAttribute("style", "background-color: #BD1B1B; color: white; border: 0px solid transparent;");
            }

            if(checkbox1.checked === true && checkbox2.checked === true && checkbox3.checked === true && selectedDay === 'thursday'){
                console.log('Works!' + checkboxId[i] + selectedDay);
                thursday.setAttribute("style", "background-color: #2EBD1B; color: white; border: 0px solid transparent;");
            } else if(selectedDay === 'thursday'){
                thursday.innerHTML = setAttribute("style", "background-color: #BD1B1B; color: white; border: 0px solid transparent;");
            }

            if(checkbox1.checked === true && checkbox2.checked === true && checkbox3.checked === true && selectedDay === 'friday'){
                console.log('Works!' + checkboxId[i] + selectedDay);
                friday.setAttribute("style", "background-color: #2EBD1B; color: white; border: 0px solid transparent;");
            } else if(selectedDay === 'friday'){
                friday.setAttribute("style", "background-color: #BD1B1B; color: white; border: 0px solid transparent;");
            }

            if(checkbox1.checked === true && checkbox2.checked === true && checkbox3.checked === true && selectedDay === 'saturday'){
                console.log('Works!' + checkboxId[i] + selectedDay);
                saturday.setAttribute("style", "background-color: #2EBD1B; color: white; border: 0px solid transparent;");
            } else if(selectedDay === 'saturday'){
                saturday.setAttribute("style", "background-color: #BD1B1B; color: white; border: 0px solid transparent;");
            }

            if(checkbox1.checked === true && checkbox2.checked === true && checkbox3.checked === true && selectedDay === 'sunday'){
                console.log('Works!' + checkboxId[i] + selectedDay);
                sunday.setAttribute("style", "background-color: #2EBD1B; color: white; border: 0px solid transparent;");
            } else if(selectedDay === 'sunday'){
                sunday.setAttribute("style", "background-color: #BD1B1B; color: white; border: 0px solid transparent;");
            }
        }
    }
function disableButton(){
    var thebutton = document.getElementById('button');
    thebutton.disabled = true;
    thebutton.setAttribute('style', 'cursor: not-allowed;');
}

function display(){
    console.log(getDropdownValue());
    console.log(connectDaysToIcons());
    goalsForTheDay(getDropdownValue());
 
}
