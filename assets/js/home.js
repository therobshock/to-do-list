const display = $("#display");

function welcome() {
  const button = $("<button>");
  display.html("<h3>Put your Shit here, get it sorted out...</h3>");
  button.text("Get Started!");
  display.append(button);
  
  button.on("click", shitSurvey);
}

welcome();