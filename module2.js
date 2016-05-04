var chatty = (function(chatty) {
	var messages = [];

	chatty.setPrivateArray = function(userInput) {
		var newUserInputObject = {
			"msgid": (messages.length + 1),
			"message": userInput
		}
		messages.push(newUserInputObject);
	};

	chatty.getPrivateArray = function() {
		return messages
	};

	return chatty;

})(chatty || {});