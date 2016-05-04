var chatty = (function(){

  function deleteDomElement (DOMelement) {
    DOMelement.parentNode.removeChild(DOMelement);
  }

  return{
    getDeleteDomElement = (function() {
      return deleteDomElement();
    }
  }

})(chatty || {});




// new method deleteDomElement that is called by iife 2 to delete element from DOM.
// This method deleted from dom.
