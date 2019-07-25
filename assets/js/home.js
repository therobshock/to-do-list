const display = $("#display");

function welcome() {
  const button = $("<button>");
  display.html("<h3>Put your Shit here, get it sorted out...</h3>");
  button.text("Get Started!");
  display.append(button);
  
  button.on("click", shitSurvey);
}

function confirmGoodbye() {
  display.html("<h3>Sure you wanna go?...</h3>");
  display.append("<p>Ending will delete everything!</p>");
  display.append("<button onClick='shitSurvey()'>Add More Shit</button>");
  display.append("<button onClick='shitAnalysis()'>Get Your Shit Together!</button>");
  display.append("<button onClick='displayAndContinue()'>All Your Shit!</button>");
  display.append("<button onClick='goodbye()'>I'm Done!</button>");
}

function goodbye() {
  if (confirm("Sure you wanna go?")) {
    shitList = [];
    display.html("<h2>Good Luck!</h2>");
    display.append("<button onClick='welcome()'>Start Again</button>");
  } else {
    return;
  }
}

welcome();