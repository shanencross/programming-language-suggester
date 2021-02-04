$("document").ready(function() {
	$("form#questions").submit(function(event) {
		event.preventDefault();
		console.log("Submit pressed");

		const result1 = $("input:radio[name=question1]:checked").val();
		const result2 = $("input:radio[name=question2]:checked").val();
		const result3 = $("input:radio[name=question3]:checked").val();
		const result4 = $("input:radio[name=question4]:checked").val();
		const result5 = $("input:radio[name=question5]:checked").val();

		console.log(result5);

		$("#questions").hide();
		$("#result").show();
	});
});