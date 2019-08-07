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

  display.fadeIn("slow");
  
  button.on("click", function(){
    display.fadeOut(shitSurvey);
  });
}

function confirmGoodbye() {
  display.html("<h3>Sure you wanna go?...</h3>");
  display.append("<p>Ending will delete everything!</p>");
  display.append("<button onClick='display.fadeOut(shitSurvey)'>Add More Shit</button>");
  display.append("<button onClick='display.fadeOut(shitAnalysis)'>Get Your Shit Together!</button>");
  display.append("<button onClick='display.fadeOut(displayAndContinue)'>All Your Shit!</button>");
  display.append("<button onClick='goodbye()'>I'm Done!</button>");
  display.fadeIn();
}

function goodbye() {
  if (confirm("Sure you wanna go?")) {
    display.fadeOut(function(){
      shitList = [];
      idValue = 0;
      display.html("<h2>Good Luck!</h2>");
      display.append("<button onClick='display.fadeOut(welcome)'>Start Again</button>");
      display.fadeIn();
    })
    
  } else {
    return;
  }
}

welcome();