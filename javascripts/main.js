"use strict";
// ****************
// Event Listeners
// ****************

//Listens for delete button to be pressed inside mainBody container
//and passes the ID as the argument
// var messageBoard = document.getElementById("messageBoard");
// messageBoard.addEventListener("click", function(){
//   chatty.deleteDomElement(event.target, event.target.id);
// });

// jQuery version of lines 8-11
var messageBoard = $("#messageBoard");
$(document).on("click", "#messageBoard", function (event) {
	chatty.deleteDomElement(event.target, event.target.id);
});

//Listens for "clear message board" button to be pressed.
// var clearAll = document.getElementById("clearAll");
// clearAll.addEventListener("click", function(){
//   //Passes event target id to module 3 through deleteAll method
//   chatty.deleteAll(event.target.id);
//   //Calls method from Module 2
//   chatty.deleteAllFromPrivateArray();
//   //When clearALL is pressed this will disable the "clear message board" button.
//   clearAll.disabled = true;
// });

//jQuery version of lines 19-27
$("#clearAll").click(function () {
	chatty.deleteAll(event.target.id);
	chatty.deleteAllFromPrivateArray();
	$("#clearAll").attr("disabled", true);
});

//Listens for Dark Theme checkbox. It will add or remove class of "dark".
// var toDarkCheckbox = document.getElementById("toDark");
// toDarkCheckbox.addEventListener("click", function() {
// 	var body = document.getElementById("body");
// 	body.classList.toggle("dark");
// });

// jQuery version of lines 37-41
$("#toDark").click(function () {
	$("#body").toggleClass("dark");
});

//Listens for Large Text checkbox. It will add or remove class of "large".
// var toLargeCheckbox = document.getElementById("toLarge");
// toLargeCheckbox.addEventListener("click", function() {
// 	var body = document.getElementById("body");
// 	body.classList.toggle("large");
// });

// jQuery version of lines 49-53
$("#toLarge").click(function () {
	$("#body").toggleClass("large");
});

//Listens for the return key to be pressed.
// var userInput = document.getElementById("userMessageTextArea");
// userInput.addEventListener("keyup", function(e) {
// 	if (e.keyCode === 13) {
// 		// if the user tries to enter an empty string, throw an alert that asks for a message. if not, continue running the program
// 		if (userInput.value === "") {
// 			alert("Please enter a message!");
// 		} else {
// 	    //calls from main.js to enable "clear message board" button.
// 	    enableClearAll();
// 	    //passes value from textbox to setPrivateArray in module 2
// 			chatty.setPrivateArray(userInput.value);
// 	    //Passing value of message board in order for setMessageInDom
// 	    //to know where to insert information in the DOM
// 			chatty.setMessageInDOM(userInput.value, messageBoard);
// 	    //Sets textbox to blank after user hits enter.
// 			userInput.value = "";
// 		}
// 	}
// });

// jQuery version of lines 61-79
$("#userMessageTextArea").keypress(function (e) {
	if (e.keyCode === 13) {
		var userInput = $("#userMessageTextArea");
		if (userInput === "") {
			alert("Please enter a message!");
		} else {
			enableClearAll();
			chatty.setPrivateArray(userInput.val());
			chatty.setMessageInDOM(userInput.val(), messageBoard);
			userInput.val("");
		}
	}
});

// ********************
// DISABLING CLEAR BUTTON
// ********************

//checks if the message board is empty. If it is then "clear message Board"
//button will be disabled.
// function checkMessage () {
// 	if (messageBoard.innerHTML === "") {
// 		document.getElementById("clearAll").setAttribute("disabled", true);
// 	}
// }

// jQuery version of lies 103 -107
function checkMessage () {
	if (messageBoard.html() === "") {
		$("#clearAll").attr("disabled", true);
	}
}

//Enables "Clear Message Board" button.
function enableClearAll () {
  $("#clearAll").attr("disabled", false);
}
