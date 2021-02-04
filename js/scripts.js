$("document").ready(function() {
	$("form#questions").submit(function(event) {
		event.preventDefault();
		console.log("Submit pressed");

		$("#questions").hide();
		$("#result").show();
	});
});