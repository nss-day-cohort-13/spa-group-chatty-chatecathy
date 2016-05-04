// ****************
// Event Listeners
// ****************

//Listens for delete button to be pressed inside mainBody container
//and gives the ID
var mainBody = document.getElementById("mainBody");
mainBody.addEventListener("click", function(){
  chatty.setDeleteIndividualMessage(event.target.id);
});

var toDarkCheckbox = document.getElementById("toDark");
toDarkCheckbox.addEventListener("click", function() {
	var body = document.getElementById("mainBody");
	// console.log("body:", body);
	body.classList.toggle("dark");
});

