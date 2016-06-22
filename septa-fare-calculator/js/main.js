
$(document).ready(function() {
	
	var zones;
	var write = $("#answer").text();
	document.getElementById("zoneMenu").addEventListener("change", value);
	document.getElementById("dayMenu").addEventListener("change", value);
	document.getElementById("howManyMenu").addEventListener("change", value);
	document.getElementById("where").addEventListener("change", value);

	$.getJSON("fares.json", function(data){
		var x = data.info;
		var anytime= x.anytime;
		var weekday=x.weekday;
		var evening=x.evening_weekend;
		var advance=x.advance_purchase;
		var onboard=x.onboard_purchase;
		zones = data.zones;
		// console.log(zones[1].fares[0].price);
    $("#info").html(anytime + "<br>" + weekday + "<br>" + evening + "<br>" + advance + "<br>" + onboard);
   })


	function value() {
		var here;
		var answer=1;
		var zone = zoneFunction();
		var time = dayFunction();
		var where = wherePurchase();
		console.log(zone, time, where);
		$.getJSON("fares.json", function(data){
			zoneArray = data.zones;
			here=zones[zone-1];
			console.log("now " + here.fares[1].price);
			for (var j=0;j<5;j++) {
				if (here.fares[j].type === time) {
					if (here.fares[j].purchase === where) {
						answer = here.fares[j].price;
						console.log("answer is " + answer);
					}
				}
			}
		})
		answer = howManyFunction(answer);
		$("#answer").text(answer);
		// console.log("answer is " + answer);
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

	function wherePurchase() {
		var f = $('input[name="purchase"]:checked').val();
		console.log(f);
		if (f === "station") {
			return "advance_purchase";
		}
		else if (f === "train") {
			return "onboard_purchase";
		}
	}

// Get Value of HOW MANY
	function howManyFunction(answer) {
		var c = $("#d").val();
		return  answer * c;
	}

	value();
	
});