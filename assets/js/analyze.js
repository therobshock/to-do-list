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

  const listDiv = $("<div>");

  display.html("<h1>Let's Sort Out Your Shit...</h1>");
  
  for (var i = 0; i < sortButtons.length; i++) {
    var button = $("<button>");
    button.text(sortButtons[i].text);
    button.attr("value", sortButtons[i].value);
    display.append(button);
  }
  display.append(listDiv);
  
  $("button").on("click", function() {
    var listTag = $("<ol>");
    listDiv.html("");

    switch(this.value) {
      case "decide":
        shitList.sort((a, b) => a.rating - b.rating);
        listDiv.append("<h3>You Should Probably Take Care of this Shit First...</h3>");
        break;
      case "urgent":
        shitList.sort((a, b) => a.urgency - b.urgency);
        listDiv.append("<h3>You said this Shit is Urgent...</h3>");
        break;
      case "effect":
        shitList.sort((a, b) => a.effect - b.effect);
        listDiv.append("<h3>You said this Shit will effect your Life...</h3>");
        break;
      case "danger":
        shitList.sort((a, b) => a.danger - b.danger);
        listDiv.append("<h3>You said this Shit is Dangerous...</h3>");
        break;
      case "cost":
        shitList.sort((a, b) => a.cost - b.cost);
        listDiv.append("<h3>You said this Shit will be Costly...</h3>");
        break;
      case "health":
        shitList.sort((a, b) => a.health - b.health);
        listDiv.append("<h3>You said this Shit could be Unhealthy...</h3>");
        break;
    }

    for (var j = 0; j < 3 && j < shitList.length; j++) {
      var listItem = $("<li>");
      listItem.text(shitList[j].name);
      listTag.append(listItem);
    }
    listDiv.append(listTag);

  })

}
