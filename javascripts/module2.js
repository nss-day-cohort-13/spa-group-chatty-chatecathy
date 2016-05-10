"use strict";


var chatty = (function(chatty) {
	//This iife contains all methods corresponding with getting and setting
	//information in the private array.
	var messages = [];
	//Loops through private array and prints each message to the DOM.
	//Also sets the elements id
	chatty.setMessageInDOM = function(userInput, messageDestination) {
		var HTML = "";
		for (var i = 0; i < messages.length; i++) {
			HTML += `<div id="msg-${messages[i].msgid}" class="messages">`;
			HTML += `<span>${messages[i].message}</span><button id="${messages[i].msgid}" class="buttons">Delete</button></div>`;
		}
		messageDestination.html(HTML);
	};

	//Adds new message to the private array
	chatty.setPrivateArray = function(userInput) {
		var newUserInputObject = {
			"msgid": (messages.length + 1),
			"message": userInput
		};
		messages.push(newUserInputObject);
	};

	//Adds the JSON data to the private array
	chatty.setJSONInArray = function(JSONData) {
		for (var i = 0; i < JSONData.length; i++) {
			messages.push(JSONData[i]);
			chatty.setMessageInDOM(messages, messageBoard);
		}
	};

	//When delete button is pressed, this function deletes the corresponding
	//message from the private array.
	chatty.deleteFromPrivateArray = function(id) {
		messages.splice(messages[id - 1], 1);
	};

	//Deletes all messages from the private array
	chatty.deleteAllFromPrivateArray = function() {
		messages = [];
	};

	//This makes the content of the private array available to view but not change
	chatty.getPrivateArray = function() {
		return messages;
	};

	return chatty;

})(chatty || {});
