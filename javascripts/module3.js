"use strict";


var chatty = (function(chatty){

  //Deletes the child and parent of the event.target
  chatty.deleteDomElement = function(DOMelement, targetId) {
    DOMelement.parentNode.parentNode.removeChild(DOMelement.parentNode);
    //calls function to remove corresponding item from private array
    chatty.deleteFromPrivateArray(targetId);
    //checks if message board is empty. If yes then it disables clearAll button
    checkMessage();
  };

  //Deletes the entire message board from the DOM
  chatty.deleteAll = function(clearAllId){
    messageBoard.html("");
  };

  return chatty;

})(chatty || {});

