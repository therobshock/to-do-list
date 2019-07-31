const display = $("#display");

function welcome() {
  const button = $("<button>");
  const gifDiv = $("<div>");
  const gif = $('<iframe src="https://giphy.com/embed/woTdBa435yy6A" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/get-well-then-woTdBa435yy6A">via GIPHY</a></p>')

  // gifDiv.append(gif);
  display.html("<h3>Put your Shit here, get it sorted out...</h3>");
  button.text("Get Started!");
  display.append(button);
  // display.append(gifDiv);
  
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
    idValue = 0;
    display.html("<h2>Good Luck!</h2>");
    display.append("<button onClick='welcome()'>Start Again</button>");
  } else {
    return;
  }
}

welcome();