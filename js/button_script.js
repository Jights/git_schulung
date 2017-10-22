function myFunction() {
	document.getElementById("button_id").addEventListener('click',function() {	
    	alert("Danke, dass Sie auf diesen Button geklickt haben!");
	});
};

function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(myFunction);
