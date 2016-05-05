var chatty = (function(chatty){

  //Deletes target id
  chatty.deleteDomElement = function(DOMelement, targetId) {
    DOMelement.parentNode.parentNode.removeChild(DOMelement.parentNode);
    chatty.deleteFromPrivateArray(targetId);
    checkMessage();
  };
  chatty.deleteAll = function(clearAllId){
    messageBoard.innerHTML = " ";
  };

  return chatty;

})(chatty || {});

