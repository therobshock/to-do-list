// div id "display" is set to const display in home.js
var resultDiv = $("<div id='results'>");
var listDiv = $("<div id='list'>");
var optionsDiv = $("<div id='options'>");
var sortButtonDiv = $("<div id='sort-buttons'>");
var resHeader = $("<h3>");

function shitAnalysis() {
  const sortButtons = [
    {
      text: "Decide my Shit",
      value: "decide"
    }, 
    {
      text: "My Urgent Shit",
      value: "urgent"
    }, 
    {
      text: "My Effective Shit",
      value: "effect"
    }, 
    {
      text: "My Dangerous Shit",
      value: "danger"
    }, 
    {
      text: "My Costly Shit",
      value: "cost"
    }, 
    {
      text: "My Unhealthy Shit",
      value: "health"
    }
  ];

  
  display.html("<h1>Let's Sort Out Your Shit...</h1>");
  listDiv.empty();
  resultDiv.empty();
  
  for (var i = 0; i < sortButtons.length; i++) {
    var button = $("<button>");
    button.text(sortButtons[i].text);
    button.attr("value", "c-button");
    button.attr("value", sortButtons[i].value);
    sortButtonDiv.append(button);
  }
  display.append(sortButtonDiv);
  display.append(resultDiv);

  display.fadeIn();
  
  $("button").on("click", function() {
    switch(this.value) {
        case "decide":
            shitList.sort((a, b) => a.rating - b.rating);
            resHeader.text("You Should Probably Take Care of this Shit First...");
            break;
        case "urgent":
            shitList.sort((a, b) => a.urgency - b.urgency);
            resHeader.text("You said this Shit is Urgent...");
            break;
        case "effect":
            shitList.sort((a, b) => a.effect - b.effect);
            resHeader.text("You said this Shit will effect your Life...");
            break;
        case "danger":
            shitList.sort((a, b) => a.danger - b.danger);
            resHeader.text("You said this Shit is Dangerous...");
            break;
        case "cost":
            shitList.sort((a, b) => a.cost - b.cost);
            resHeader.text("You said this Shit will be Costly...");
            break;
        case "health":
            shitList.sort((a, b) => a.health - b.health);
            resHeader.text("You said this Shit could be Unhealthy...");
            break;
        }
        display.fadeOut(sortList);
    });

}

function sortList() {
  var listTag = $("<ol>");
  sortButtonDiv.empty();
  listDiv.html("");
  resultDiv.append(resHeader);
  resultDiv.append(listDiv);

  for (var j = 0; j < 3 && j < shitList.length; j++) {
    var listItem = $("<li class='sort-item'>");
    var detailButton = $("<button class='l-button s-button' onClick='shitDetail(this.value)'>deets</button>");
    var deleteButton = $("<button class='l-button s-button' name='sort-list' onClick='deleteShit(this.value, this.name)'>X</button>");
    detailButton.attr("value", shitList[j].id);
    deleteButton.attr("value", shitList[j].id);
    listItem.text(shitList[j].name);
    listItem.append(deleteButton);
    listItem.append(detailButton);
    listTag.append(listItem);
  }
  listDiv.append(listTag);
  optionsDiv.html("<h3>What Next?</h3>");

  var optionButtons = ["Back to Sort", "Whole List", "Add More Shit", "End This Shit"];
  var optionFunctions = ["shitAnalysis", "displayAndContinue", "shitSurvey", "confirmGoodbye"];
  
  for (var i = 0; i < optionButtons.length; i++) {
    var optButton = $("<button>");
    optButton.attr("onClick", `display.fadeOut(${optionFunctions[i]})`);
    optButton.text(optionButtons[i]);
    optionsDiv.append(optButton);
  }
  
  display.append(optionsDiv);
  display.fadeIn();
}
