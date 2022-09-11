// Create function addUser()
function addUser(){
  player1=document.getElementById("player1_name_input").value;
  player2=document.getElementById("player2_name_input").value;
  // Get value of user by id player1_name_input and player2_name_input
localStorage.setItem("player1_name",player1_name_input)
window.localStorage.setItem("player2_name",player2_name_input)
  // Store these values locally
location.replace("game_page.html");
  //Assign "game_page.html" to window.location
}

