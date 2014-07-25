$(document).ready(function() {
	// get reference to the list
	var jqitems = $(".items");
	console.log(jqitems);
	
	$("#formcontainer").submit(function ( event ) {
		// get the input field
		var jqinput = $("#input");
		// and its value
		var strinput = jqinput.val();
		
		console.log(strinput);
		// add it to the list
		jqitems.append("<li><input type='text' value='"+ strinput +"' /></li>"); 
		// empty the previously submitted value
		jqinput.val("");
		// prevent the form from submitting
		event.preventDefault();
	});
	
	jqitems.on('focus', 'input', function() {
		console.log(this);
		this.select();
	});
	
	jqitems.on('mouseup', 'input', function(e) {
		e.preventDefault();
	});
});