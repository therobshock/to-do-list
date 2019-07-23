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
    rating: 3
  },
  {
    name: "B",
    type: "B",
    urgency: 4,
    effect: 3,
    danger: 2,
    cost: 1,
    health: 5,
    rating: 2
  },
  {
    name: "C",
    type: "C",
    urgency: 1,
    effect: 4,
    danger: 5,
    cost: 4,
    health: 1,
    rating: 1
  },
  {
    name: "D",
    type: "D",
    urgency: 3,
    effect: 1,
    danger: 4,
    cost: 2,
    health: 3,
    rating: 5
  },
]

function shitAnalysis2() {
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
   
    for (var i = 0; i < 3; i++) {
      var listItem = $("<li>");
      listItem.append(shitList[i].name);
      listTag.append(listItem);
    }
    listDiv.append(listTag);

  })

}

shitAnalysis2();

function shitAnalysis() {
  const decide = $("<button >Decide my Shit</button>");
  const urgent = $("<button>My Urgent Shit</button>");
  const effect = $("<button>My Effective Shit</button>");
  const danger = $("<button>My Dangerous Shit</button>");
  const cost = $("<button>My Costly Shit</button>");
  const health = $("<button>My Unhealthy Shit</button>");
  const listDiv = $("<div>");
  const listTag = $("<ol>");
  
  display.html("<h1>Let's sort out your shit...</h1>");
  display.append(decide);
  display.append(urgent);
  display.append(effect);
  display.append(danger);
  display.append(cost);
  display.append(health);
  display.append(listDiv);

  decide.on("click", function() {
    shitList.sort((a, b) => a.rating - b.rating);
    listDiv.html("");
    listTag.html("");
    listDiv.append("<h3>You Should Probably Take Care of this Shit First...</h3>");
    listDiv.append(listTag);
  
    listShit(listTag);
 
  });

  urgent.on("click", function() {
    shitList.sort((a, b) => a.urgency - b.urgency);
    listDiv.html("");
    listTag.html("");
    listDiv.append("<h3>You said this Shit is Urgent...</h3>");
    listDiv.append(listTag);
  
    listShit(listTag);
  });

  effect.on("click", function() {
    shitList.sort((a, b) => a.effect - b.effect);
    listDiv.html("");
    listTag.html("");
    listDiv.append("<h3>You said this Shit will effect your Life...</h3>");
    listDiv.append(listTag);
  
    listShit(listTag);
  });

  danger.on("click", function() {
    shitList.sort((a, b) => a.danger - b.danger);
    listDiv.html("");
    listTag.html("");
    listDiv.append("<h3>You said this Shit is Dangerous...</h3>");
    listDiv.append(listTag);
  
    listShit(listTag);
  });

  cost.on("click", function() {
    shitList.sort((a, b) => a.cost - b.cost);
    listDiv.html("");
    listTag.html("");
    listDiv.append("<h3>You said this Shit will be Costly...</h3>");
    listDiv.append(listTag);
  
    listShit(listTag);
  });

  health.on("click", function() {
    shitList.sort((a, b) => a.health - b.health);
    listDiv.html("");
    listTag.html("");
    listDiv.append("<h3>You said this Shit could be Unhealthy...</h3>");
    listDiv.append(listTag);
  
    listShit(listTag);
  });

};

function listShit(div) {
  for (var i = 0; i < 3; i++) {
    var listItem = $("<li>");
    listItem.append(shitList[i].name);
    div.append(listItem);
  }
}

// shitAnalysis();