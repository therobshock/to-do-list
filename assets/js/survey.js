
const surveyQuestions = [
  {
    question: "What is your Shit?",
    input: "<input type='text' placeholder='enter your shit' />"
  },
  {
    question: "What type is Shit is this?",
    input: "<select>",
    options: ["Home", "Work", "Social", "Personal"],
    values: ["Home", "Work", "Social", "Personal"]
  },
  {
    question: "When should this get done?",
    input: "<select>",
    options: ["Like, Yesterday!", "Now!", "Soon", "In a while", "It can wait"],
    values: [1, 2, 3, 4, 5]
  },
  {
    question: "How much will this Shit affect other parts of your life?",
    input: "<select>",
    options: ["Totally", "A lot", "A bit", "Some", "Not much if anything"],
    values: [1, 2, 3, 4, 5]
  },
  {
    question: "What if this Shit never gets done?",
    input: "<select>",
    options: ["Disaster!", "Crisis!", "Major inconvenience", "Minor inconvenience", "Not much"],
    values: [1, 2, 3, 4, 5]
  },
  {
    question: "What would it cost if this Shit never gets done?",
    input: "<select>",
    options: ["Financial Ruin!", "Budget Bust", "Bank may notice", "Slight rebudgeting", "Nada"],
    values: [1, 2, 3, 4, 5]
  },
  {
    question: "How could this Shit affect your health?",
    input: "<select>",
    options: ["Hazardous!", "Somewhat Injurious", "Stressful", "Slight Stress", "It's Cool"],
    values: [1, 2, 3, 4, 5]
  }
];

// div id "display" is set to const display in home.js
var shitList = [];
var idValue = 0;

function shitSurvey() {
  var index = 0;
  const questionDiv = $("<p>");
  const form = $("<form>");
  var input = $(surveyQuestions[index].input);
  var answers = [];

  display.html("");
  
  questionDiv.text(surveyQuestions[index].question);
  display.append(questionDiv);
  form.append(input);
  display.append(form);
  display.append("<button id='button'>Next</button>");

  $(function(){  
      input.bind('keydown',function(e){ //on keydown for all textboxes  
        if(e.keyCode==13) //if this is enter key  
            e.preventDefault();                  
    });  
});  
  
  $("#button").on("click", function() {
    
    var answer = input.val();

    if (!answer) {
      alert("You got to name it something"); 
    } else {
      answers.push(answer);
      
      if (index < surveyQuestions.length - 1) {
        index++;
        input = $(surveyQuestions[index].input);
        
        questionDiv.text(surveyQuestions[index].question);
        form.html("");
        
        for (var i = 0; i < surveyQuestions[index].options.length; i++) {
          var value = surveyQuestions[index].values[i];
          var option = surveyQuestions[index].options[i];
          var optionTag = $("<option>")
          
          optionTag.attr("value", value);
          optionTag.text(option);
          input.append(optionTag);
          
        }
        form.append(input);
        
      }
      else {
        confirmShit(answers);
      }
    }
  });
}

function confirmShit(arr) {
  var answers = arr;
  idValue++;

  display.html("<h2>Here is your shit!</h2>");
  display.append("<h3>" + answers[0] + "</h3>");
  display.append("<button>Confirm</button>");

  $("button").on("click", function() {
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

    displayAndContinue();
    
  });

};

function displayAndContinue() {
  var div = $("<div>");
  display.html("<h2>Confirmed!</h2>");
  
  display.append("<button onClick='shitSurvey()'>Add More Shit</button>");
  display.append("<button onClick='shitAnalysis()'>Get Your Shit Together!</button>");
  display.append("<hr>");

  display.append(div);
  div.append("<h2>Your Shit List So Far</h2>");
  
  for (var i = 0; i < shitList.length; i++) {
    var deleteButton = $("<button class='l-button' name='shit-list' onClick='deleteShit(this.value, this.name)'>Delete</button>");
    var detailButton = $("<button class='l-button' onClick='shitDetail(this.value)'>Details</button>");
    deleteButton.attr("value", shitList[i].id);
    detailButton.attr("value", shitList[i].id);
    div.append("<h3>" + shitList[i].name + "</h3>");
    div.append("<p>Type: " + shitList[i].type + "</p>");
    div.append(detailButton);
    div.append(deleteButton);
    div.append("<hr>");
  }

}

function shitDetail(id) {
  var div = $("<div>")
  display.html("<h2>This Shit Right Here..</h2>");
  for (var j = 0; j < shitList.length; j++) {
    if (id == shitList[j].id) {
      var delButton = $("<button class='l-button' name='detail' onClick='deleteShit(this.value, this.name)'>Delete</button>");
      delButton.attr("value", shitList[j].id);
      div.append("<h3>Name: " + shitList[j].name + "</h3>");
      div.append("<p>Type: " + shitList[j].type + "</p>");
      div.append(delButton);      
    }
  }
  display.append(div);
  display.append("<hr>");
  display.append("<button onClick='shitSurvey()'>Add More Shit</button>");
  display.append("<button onClick='displayAndContinue()'>Whole List</button>");
  display.append("<button onClick='shitAnalysis()'>Get Your Shit Together!</button>");
}

function deleteShit(id, name) {
  
  if (confirm("Delete this Shit for Reals?")) {
    for (var j = 0; j < shitList.length; j++){
      if (id == shitList[j].id) {
        shitList.splice(j, 1);
      }
    }
    switch(name){
      case "shit-list":
        displayAndContinue();
        break;
      case "sort-list":
        sortList();
        break;
        case "detail":
        displayAndContinue();
        break;
     }
  } else {
    return;
  }
}