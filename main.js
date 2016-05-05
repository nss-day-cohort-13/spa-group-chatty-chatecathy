// ****************
// Event Listeners
// ****************

//Listens for delete button to be pressed inside mainBody container
//and passes the ID as the argument
var messageBoard = document.getElementById("messageBoard");
messageBoard.addEventListener("click", function(){
  chatty.deleteDomElement(event.target, event.target.id);
});

//Listens for "clear message board" button to be pressed.
var clearAll = document.getElementById("clearAll");
clearAll.addEventListener("click", function(){
  //Passes event target id to module 3 through deleteAll method
  chatty.deleteAll(event.target.id);
  //Calls method from Module 2
  chatty.deleteAllFromPrivateArray();
  //When clearALL is pressed this will disable the "clear message board" button.
  clearAll.disabled = true;
});

//Listens for Dark Theme checkbox. It will add or remove class of "dark".
var toDarkCheckbox = document.getElementById("toDark");
toDarkCheckbox.addEventListener("click", function() {
	var body = document.getElementById("body");
	body.classList.toggle("dark");
});

//Listens for Large Text checkbox. It will add or remove class of "large".
var toLargeCheckbox = document.getElementById("toLarge");
toLargeCheckbox.addEventListener("click", function() {
	var body = document.getElementById("body");
	body.classList.toggle("large");
});

//Listens for the return key to be pressed.
var userInput = document.getElementById("userMessageTextArea");
userInput.addEventListener("keyup", function(e) {
	if (e.keyCode === 13) {
    //calls from main.js to enable "clear message board" button.
    enableClearAll();
    //passes value from textbox to setPrivateArray in module 2
		chatty.setPrivateArray(userInput.value);
    //Passing value of message board in order for setMessageInDom
    //to know where to insert information in the DOM
		chatty.setMessageInDOM(userInput.value, messageBoard);
    //Sets textbox to blank after user hits enter.
		userInput.value = "";
	}
});

// ********************
// DISABLING CLEAR BUTTON
// ********************

//checks if the message board is empty. If it is then "clear message Board"
//button will be disabled.
function checkMessage () {
	if (messageBoard.innerHTML === "") {
		document.getElementById("clearAll").setAttribute("disabled", true);
	}
}

//Enables "Clear Message Board" button.
function enableClearAll () {
  clearAll.disabled = false;
}
