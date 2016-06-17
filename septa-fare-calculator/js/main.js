
$(document).ready(function() {
	
	var write = $("#answer").text();
	document.getElementById("zoneMenu").addEventListener("change", value);
	document.getElementById("dayMenu").addEventListener("change", value);
	document.getElementById("howManyMenu").addEventListener("change", value);

	$.getJSON("fares.json", function(data){
		var x = data.info;
		var anytime= x.anytime;
		var weekday=x.weekday;
		var evening=x.evening_weekend;
		var advance=x.advance_purchase;
		var onboard=x.onboard_purchase;
		var zones = data.zones;
		console.log(zones[1].fares[0].price);
    $("#info").html(anytime + "<br>" + weekday + "<br>" + evening + "<br>" + advance + "<br>" + onboard);
   })

	function value() {
		var answer=1;
		answer = zoneFunction(answer);
		answer = dayFunction(answer);
		answer = howManyFunction(answer);
		$("#answer").text(answer);
		console.log(answer);
	}

//Get Value for ZONE
	function zoneFunction(answer){
		var a = $('#zoneMenu').val();
		if (a === "zone1") {
			return answer * 1;
		} 
		else if (a==="zone2") {
			return answer * 2;
		}
		else if (a==="zone3") {
			return answer * 3;
		}
		else if (a==="zone4") {
			return answer * 4;
		}
		else if (a==="zone5") {
			return answer * 5;
		}
}

// Get Value for TIME OF DAY
	function dayFunction(answer) {
		var b = $("#dayMenu").val();

		if (b === "weekday") {
			return answer + .1;
		}
		else if (b === "weekend") {
			return answer + .5;
		}
	}

// Get Value of HOW MANY
	function howManyFunction(answer) {
		var c = $("#d").val();
		return  answer * c;
	}

	value();
	
});