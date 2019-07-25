var display = $("#display");

var shitList = [
  {
    name: "A",
    type: "A",
    urgency: 3,
    effect: 2,
    danger: 1,
    cost: 5,
    health: 4,
    rating: 3,
    id: 1
  },
  {
    name: "B",
    type: "B",
    urgency: 4,
    effect: 3,
    danger: 2,
    cost: 1,
    health: 5,
    rating: 2,
    id: 2
  },
  {
    name: "C",
    type: "C",
    urgency: 1,
    effect: 4,
    danger: 5,
    cost: 4,
    health: 1,
    rating: 1,
    id: 3
  },
  {
    name: "D",
    type: "D",
    urgency: 3,
    effect: 1,
    danger: 4,
    cost: 2,
    health: 3,
    rating: 5,
    id: 4
  },
]

function displayAndContinue() {
  var div = $("<div>");
  display.html("<h2>Confirmed!</h2>");
  display.append(div);
  
  div.append("<h2>Your Shit List So Far</h2>");
  for (var i = 0; i < shitList.length; i++) {
    var deleteButton = $("<button onClick='listDelete(this.value)'>Delete</button>");
    var detailButton = $("<button onClick='shitDetail(this.value)'>Details</button>");
    deleteButton.attr("value", shitList[i].id);
    detailButton.attr("value", shitList[i].id);
    div.append("<hr>");
    div.append("<h3>" + shitList[i].name + "</h3>");
    div.append("<p>Type: " + shitList[i].type + "</p>");
    div.append(detailButton);
    div.append(deleteButton);
  }
  display.append("<hr>");
  display.append("<button onClick='shitSurvey()'>Add More Shit</button>");
  display.append("<button onClick='shitAnalysis()'>Get Your Shit Together!</button>");

}

function listDelete(id) {
  for (var j = 0; j < shitList.length; j++){
    if (id == shitList[j].id) {
      shitList.splice(j, 1);
    }
  }
  displayAndContinue();
}

function shitDetail(id) {
  var div = $("<div>")
  display.html("<h2>This Shit Right Here..</h2>");
  for (var j = 0; j < shitList.length; j++) {
    if (id == shitList[j].id) {
      div.append("<h3>Name: " + shitList[j].name + "</h3>");
      div.append("<p>Type: " + shitList[j].type + "</p>");
      
    }
  }
  display.append(div);
}

displayAndContinue();