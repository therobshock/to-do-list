const display = $("#display");

// Our Welcome message with a button to get started.
// Should I just render the onClick function to the button? Yes, I will.
function welcome() {
  display.html("<h3>Put your Shit here, get it sorted out...</h3>");
  display.append("<button onClick='display.fadeOut(shitSurvey)'>Get Started!</button>");
  
  display.fadeIn("slow");
}

// this gives users chance to go back to app before ending
// three buttons are declared in survey.js
// most buttons are rendered with onclick events tied to them
function confirmGoodbye() {
  display.html("<h3>Sure you wanna go?...</h3>");
  display.append("<p>Ending will delete everything!</p>");
  display.append(addButton);
  display.append(GYSTButton);
  display.append(listButton);
  display.append("<button onClick='goodbye()'>I'm Done!</button>");
  display.fadeIn();
}

// once a confirm prompt is answered, tha app resets and renders button to start again
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

// our initial function is called on page load
welcome();