// ****************
// Event Listeners
// ****************

//Listens for delete button to be pressed inside mainBody container
//and gives the ID
var mainBody = document.getElementById("mainBody");

mainBody.addEventListener("click", function(){
  chatty.deleteDomElement(event.target.id);
});

