var chatty = (function (chatty){
	var jsonData =[];

	function executeThisCodeAfterFileIsLoaded () {
	   jsonData = JSON.parse(this.responseText);
	   chatty.setJSONInArray(jsonData.messages);
	}

	function executeThisIfError () {
		throw "data did not load";
	}

	// Create an XHR object
	var myRequest = new XMLHttpRequest();

	// XHR objects emit events when their operation is complete, or an error occurs
	myRequest.addEventListener("load", executeThisCodeAfterFileIsLoaded);
	myRequest.addEventListener("error", executeThisIfError);



	// Then tell the XHR object exactly what to do
	myRequest.open("GET", "messages.json");


	// Tell the XHR object to start
	myRequest.send();


	chatty.getJsonData = function() {
		return jsonData;
	}

	return chatty;

})(chatty || {});
