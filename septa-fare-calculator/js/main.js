
$(document).ready(function() {
	
	var write = $("#answer").text();
	document.getElementById("zoneMenu").addEventListener("change", value);
	document.getElementById("dayMenu").addEventListener("change", value);

	function value() {
		var answer=1;
		answer = zoneFunction(answer);
		answer = dayFunction(answer);
		$("#answer").text(answer);
		console.log(answer);
	}

	function zoneFunction(answer){
		var a = $('#zoneMenu').val();

//ZONE
		if (a === "zone1") {
			return answer * 3;
		} 
		else if (a==="zone2") {
			return answer * 7;
		}
		else if (a==="zone3") {
			return answer * 2;
		}
		else if (a==="zone4") {
			return answer * 4;
		}
		else if (a==="zone5") {
			return answer * 10;
		}
}

	function dayFunction(answer) {
		var b = $("#dayMenu").val();
		// TIME OF DAY
		if (b === "weekday") {
			return answer + .5;
		}
		else if (b === "weekend") {
			return answer + .6;
		}
	}
	value();
	
	
});