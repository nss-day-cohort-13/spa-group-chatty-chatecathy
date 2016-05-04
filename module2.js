var chatty = (function(chatty) {
	var messages = [];

	chatty.setMessageInDOM = function(userInput, messageDestination) {
		var HTML = "";
		for (var i = 0; i < messages.length; i++) {
			HTML += `<div id="msg-${messages[i].msgid}" class="messages">`;
			HTML += `<span>${messages[i].message}</span><button id="${messages[i]}.msgid" class="buttons">Delete</button></div>`
		};
		messageDestination.innerHTML = HTML;
	};

	chatty.setPrivateArray = function(userInput) {
		var newUserInputObject = {
			"msgid": (messages.length + 1),
			"message": userInput
		}
		messages.push(newUserInputObject);
	};

	chatty.setJSONInArray = function(JSONData) {
		for (var i = 0; i < JSONData.length; i++) {
			messages.push(JSONData[i]);
			chatty.setMessageInDOM(messages, messageBoard);
		};
	};

	chatty.getPrivateArray = function() {
		return messages
	};

	return chatty;

})(chatty || {});