// ****************
// Event Listeners
// ****************

//Listens for delete button to be pressed inside mainBody container
//and gives the ID
var messageBoard = document.getElementById("messageBoard");
messageBoard.addEventListener("click", function(){
  chatty.deleteDomElement(event.target, event.target.id);
});

var clearAll = document.getElementById("clearAll");
clearAll.addEventListener("click", function(){
  chatty.deleteAll(event.target.id);
  chatty.deleteAllFromPrivateArray();
});

var toDarkCheckbox = document.getElementById("toDark");
toDarkCheckbox.addEventListener("click", function() {
	var body = document.getElementById("body");
	body.classList.toggle("dark");
});

var toLargeCheckbox = document.getElementById("toLarge");
toLargeCheckbox.addEventListener("click", function() {
	var body = document.getElementById("body");
	body.classList.toggle("large");
});

var userInput = document.getElementById("userMessageTextArea");
var messageBoard = document.getElementById("messageBoard");
userInput.addEventListener("keyup", function(e) {
	if (e.keyCode === 13) {
		chatty.setPrivateArray(userInput.value);
		chatty.setMessageInDOM(userInput.value, messageBoard);
		userInput.value = "";
	}
});

// ********************
// DISABLING CLEAR BUTTON

function checkMessage () {
	if (messageBoard.InnerHTML === "") {
		document.getElementById("clearAll").setAttribute("disabled", true);
	}
}

