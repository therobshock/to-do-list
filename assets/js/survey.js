
// questions and inputs for the survey form are stored in this object
const surveyQuestions = [
  {
    question: "What is your Shit?"
  },
  {
    question: "What type is Shit is this?",
    options: ["Home", "Work", "Social", "Personal"],
    values: ["Home", "Work", "Social", "Personal"],
    name: "type"
  },
  {
    question: "When should this get done?",
    options: ["Like, Yesterday!", "Now!", "Soon", "In a while", "It can wait"],
    values: [1, 2, 3, 4, 5],
    name: "urgency"
  },
  {
    question: "How much will this Shit affect other parts of your life?",
    options: ["Totally", "A lot", "A bit", "Some", "Not much if anything"],
    values: [1, 2, 3, 4, 5],
    name: "effect"
  },
  {
    question: "What if this Shit never gets done?",
    options: ["Disaster!", "Crisis!", "Major inconvenience", "Minor inconvenience", "Not much"],
    values: [1, 2, 3, 4, 5],
    name: "danger"
  },
  {
    question: "What would it cost if this Shit never gets done?",
    options: ["Financial Ruin!", "Budget Bust", "Bank may notice", "Slight rebudgeting", "Nada"],
    values: [1, 2, 3, 4, 5],
    name: "cost"
  },
  {
    question: "How could this Shit affect your health?",
    options: ["Hazardous!", "Somewhat Injurious", "Stressful", "Slight Stress", "It's Cool"],
    values: [1, 2, 3, 4, 5],
    name: "health"
  }
];

// div id "display" is set to const display in home.js
var shitList = []; // our main array that holds all the user data
var idValue = 0; // this is set to give each entry a unique id;

// frequent buttons to be rendered all with onclick events
const addButton = $("<button onClick='display.fadeOut(shitSurvey)' title='Add Item'>Add More Shit</button>");
const listButton = $("<button onClick='display.fadeOut(displayAndContinue)' title='All Items'>Whole List</button>");
const GYSTButton = $("<button onClick='display.fadeOut(shitAnalysis)' title='Go To Sort'>Get Your Shit Together!</button>");
const endButton = $("<button onClick='display.fadeOut(confirmGoodbye)' title='End Session'>End This Shit!</button>");

// this survey function rendered inputs with values from the surveyQuestions object
function shitSurvey() {
  var index = 0;
  const div = $("<div class='survey'>");
  const questionDiv = $("<h3>");
  var input = $("<input type='text' placeholder='enter your shit' autofocus>");
  const form = $("<form onSubmit='return false'>");
  var answers = [];


  display.html("");
  
  questionDiv.text(surveyQuestions[index].question);
  div.append(questionDiv);
  form.append("<label>ex: Clean my garage? Do taxes? Fix car? See doc about gaping wound? Get some friends?</label>");
  form.append(input);
  div.append(form);
  div.append("<button id='button' type='submit' title='Enter and Continue'>Next</button>");
  div.append("<button class='l-button' onClick='cancelButton()' title='Cancel Entry'>Cancel</button>");
  display.append(div);

  display.fadeIn();
  
  $("#button").on("click", function(e) {
    if (index === 0) {
      var answer = input.val();
    } else {
      var answer = $('input[name="survey"]:checked').val();
    }
    console.log(answer);
    if (!answer) {
    alert("You have to name it something"); 
    } else {
    display.fadeOut(function() {
        answers.push(answer);

            if (index < surveyQuestions.length - 1) {
            index++;
            // input = $("<select>");
            
            questionDiv.text(surveyQuestions[index].question);
            form.html("");
            
            for (var i = 0; i < surveyQuestions[index].options.length; i++) {
                var value = surveyQuestions[index].values[i];
                // var name = surveyQuestions[index].name;
                var option = surveyQuestions[index].options[i];
                input = $(`<input type='radio' name='survey' value='${value}'> ${option}<br>`);

                if (i === 0) input.attr("checked", true);                
                
                form.append(input);
                
            }
            // form.append(input);
            display.fadeIn();
            
            } else {
            confirmShit(answers);
            }
        });    
    }
  });
}

// when cancel button is clicked from survey it either goes back to start, or
// calls the function to render the main list if items exist
function cancelButton() {
    if (confirm("Forget this particular Shit?")) {
        display.fadeOut(function() {
            if (shitList.length) {
                displayAndContinue();
            } else {
                welcome();
            }
        });
    } else {
        return;
    }
}

// this function is designed to give the user a feeling of control
// it renders simple info and a confirm or cancel button
// when confirm is clicked item is stored as object in the shitList array
// current id value is assigned and idValue variable is incremented for later entries
// answer values are averaged out and the number is assigned to a rating key
function confirmShit(arr) {
  var answers = arr;

  display.html("<h2>Here is your shit!</h2>");
  display.append("<h3>" + answers[0] + "</h3>");
  display.append("<button id='confirm' title='Save and Continue'>Confirm</button>");
  display.append("<button class='l-button' onClick='cancelButton()' title='Cancel Entry'>Cancel</button>");
  display.fadeIn();

  $("#confirm").on("click", function() {
   
      var item = {
        name: answers[0],
        type: answers[1],
        urgency: parseInt(answers[2]),
        effect: parseInt(answers[3]),
        danger: parseInt(answers[4]),
        cost: parseInt(answers[5]),
        health: parseInt(answers[6]),
        rating: 0,
        id: idValue
      };
    
      var totalVals = item.urgency + item.effect + item.danger + item.cost + item.health;
      var valsAverage = totalVals / 5;
      item.rating = parseInt(valsAverage);
    
      shitList.push(item);
      idValue++;

      display.fadeOut(displayAndContinue);
    });

};

// function to render basic list of current entries with detail and delete buttons
// control buttons are rendered at top for easy use in case of long lists
// maybe a back-to-top button at bottom could be added?
function displayAndContinue() {
  var div = $("<div>");
  display.html("<h2>Confirmed!</h2>");
  
  display.append(addButton);
  display.append(GYSTButton);
  display.append(endButton);
  display.append("<hr>");

  div.append("<h2>Your Shit List So Far</h2>");
  
  for (var i = 0; i < shitList.length; i++) {
    var deleteButton = $("<button class='l-button' name='shit-list' onClick='deleteShit(this.value, this.name)' title='Delete Item'>Delete</button>");
    var detailButton = $("<button class='l-button' onClick='shitDetail(this.value)' title='Item Details'>Details</button>");
    deleteButton.attr("value", shitList[i].id);
    detailButton.attr("value", shitList[i].id);
    div.append("<h3>" + shitList[i].name + "</h3>");
    div.append("<p>Type: " + shitList[i].type + "</p>");
    div.append(detailButton);
    div.append(deleteButton);
    div.append("<hr>");
  }
  display.append(div);
  display.fadeIn();

}

// when a detail button is clicked, the button gets the item's id and passes it to the render details function
// the items are saved with numerical values for calculating purposes
// so I had to tease back out the original expressions I used for the select inputs from the survey
// so that the user can see which they chose. I also plan to add ability to edit the item details.
function shitDetail(id) {
  var div = $("<div>");
  var ul = $("<ul>");
  for (var j = 0; j < shitList.length; j++) {
    if (id == shitList[j].id) {
      var dVals = Object.values(shitList[j]);
      var dKeys = Object.keys(shitList[j]);
      var delButton = $("<button class='l-button' name='shit-list' onClick='deleteShit(this.value, this.name)' title='Delete Item'>Delete</button>");
      delButton.attr("value", shitList[j].id);

      div.append("<h3>Name: " + shitList[j].name + "</h3>");
      div.append("<p>Type: " + shitList[j].type + "</p>");
      div.append("<p>What you said: </p>");
        
      for (var i = 2; i < surveyQuestions.length; i++) {
          for (var k = 0; k < surveyQuestions[i].values.length; k++) {
            if (surveyQuestions[i].values[k] === dVals[i]){
                ul.append("<li>"+ dKeys[i] + ": <b>" + surveyQuestions[i].options[k] + "</b></li>");
            }
          }
      }

      div.append(ul);
      div.append("<p>Overall Rating (1=highest): " + shitList[j].rating + "<p>");
      div.append(delButton);      
    }
  }
  display.fadeOut(function(){
      display.html("<h2>This Shit Right Here..</h2>");
      display.append(div);
      display.append("<hr>");
      display.append(addButton);
      display.append(listButton);
      display.append(GYSTButton);
      display.append(endButton);
      display.fadeIn();
    });
}

// can't have a list of data without the ability to yeet some of it
// this one gets the name from where it's clicked so it knows what to do next
function deleteShit(id, name) {
  
  if (confirm("Delete this Shit for Reals?")) {
    for (var j = 0; j < shitList.length; j++){
      if (id == shitList[j].id) {
        shitList.splice(j, 1);
      }
    }
    switch(name){
      case "shit-list":
        display.fadeOut(displayAndContinue);
        break;
      case "sort-list":
        display.fadeOut(sortList);
        break;
     }
  } else {
    return;
  }
}