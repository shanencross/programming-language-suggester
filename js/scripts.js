$("document").ready(function() {
	$("form#questions").submit(function(event) {
		event.preventDefault();
		console.log("Submit pressed");

		const challengeResult = $("input:radio[name=question1]:checked").val();
		const gamesResult = $("input:radio[name=question2]:checked").val();
		const websitesResult = $("input:radio[name=question3]:checked").val();
		const frontOrBackResult = $("input:radio[name=question4]:checked").val();
		const mathAndScienceResult = $("input:radio[name=question5]:checked").val();

		let pythonPoints = 0;
		let cSharpPoints = 0;
		let jsPoints = 0;

		if (challengeResult === "yes") {
			cSharpPoints += 1;
		} else if (challengeResult === "maybe") {
			jsPoints += 1;
		} else {
			pythonPoints += 1;
		}
	
		if (gamesResult === "unity") {
			cSharpPoints += 1;
		} else if (gamesResult === "HTML5") {
			jsPoints += 1;
		} else {
			pythonPoints += 1;
		}

		if (websitesResult === "yes") {
			jsPoints += 1;
		} else if (websitesResult === "maybe") {
			cSharpPoints += 1;
		} else {
			pythonPoints += 1;
		}

		if (frontOrBackResult === "front") {
			jsPoints += 1;
		} else if (frontOrBackResult === "back") {
			cSharpPoints += 1;
		} else {
			pythonPoints += 1;
		}

		if (mathAndScienceResult === "yes") {
			pythonPoints += 1;
		} else if (mathAndScienceResult === "maybe") {
			cSharpPoints += 1;
		} else {
			jsPoints += 1;
		}

		console.log("python points: " + pythonPoints);
		console.log("cSharp points: " + cSharpPoints);
		console.log("js points: " + jsPoints);

		// The priority for tie-breakers is Python -> JavaScript -> C#.
		// By default, the winner is Python.
		// JavaScript will win only if it exceeds the Python points, 
		// and is greater than or equal to the C# points.
		// C# will win only if it exceeds both the Python and JavaScript points.

		let winner = "Python";

		if (jsPoints > pythonPoints && jsPoints >= cSharpPoints) {
			winner = "JavaScript";
		}
		else if (cSharpPoints > pythonPoints && cSharpPoints > jsPoints) {
			winner = "C#";
		}
		
		console.log(winner);

		$("#questions").hide();
		$("#result").show();
	});
});