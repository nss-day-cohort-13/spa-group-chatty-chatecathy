var chatty = (function(chatty){

  //Deletes target id
  chatty.deleteDomElement = function(DOMelement, targetId) {
    DOMelement.parentNode.parentNode.removeChild(DOMelement.parentNode);
    deleteFromPrivateArray(targetId);
    checkMessage();
  };

  return chatty;

})(chatty || {});

