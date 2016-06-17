
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
		var here;
		var answer=1;
		var zone = zoneFunction();
		var time = dayFunction();
		for (var i=1;i<=5;i++){
			if (zones[i].zone === zone){
				here=zones[i];
				for (var j=1;j<=5;j++) {
					if (here.fares[j].type === time) {
						if here.
					}
				}
				if here.
			}
		}
		answer = howManyFunction(answer);
		$("#answer").text(answer);
		console.log(answer);
	}

//Get Value for ZONE
	function zoneFunction(){
		var a = $('#zoneMenu').val();
		if (a === "zone1") {
			return 1;
		} 
		else if (a==="zone2") {
			return 2;
		}
		else if (a==="zone3") {
			return 3;
		}
		else if (a==="zone4") {
			return 4;
		}
		else if (a==="zone5") {
			return 5;
		}
}

// Get Value for TIME OF DAY
	function dayFunction() {
		var b = $("#dayMenu").val();

		if (b === "weekday") {
			return "weekday";
		}
		else if (b === "weekend") {
			return "evening_weekend";
		}
		else if (b === "anytime") {
			return "anytime";
		}
	}

// Get Value of HOW MANY
	function howManyFunction(answer) {
		var c = $("#d").val();
		return  answer * c;
	}

	value();
	
});