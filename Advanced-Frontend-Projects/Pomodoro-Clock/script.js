$(document).ready(function(){
	var buzzer = $("#buzzer")[0]; 
	var count = parseInt($("#num").html());
	var breakTime = parseInt($("#breakNum").html());
	$("#reset").hide();
	$("#start").click(function(){
		var counter = setInterval(timer, 1000);
		function timer(){
			// Hide variables
			$("#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #breakNum, #title1, #title2").hide();
			$("#timeType").html("Tomato Time:")
			count -= 1;
			if (count === 0){
				
				clearInterval(counter);
			}
			$("#num").html(count)
		}
	})


	$("#minus5Clock").click(function(){
		if (count > 5){
		count -= 5;
		$("#num").html(count);
		}
	});

	$("#add5Clock").click(function(){
		count += 5;
		$("#num").html(count);
	});

	$("#minus5Break").click(function(){
		if (breakTime > 5){
		breakTime -= 5;
		$("#breakNum").html(breakTime);
		}
	});

	$("#add5Break").click(function(){
		breakTime += 5;
		$("#breakNum").html(breakTime);
	});
});