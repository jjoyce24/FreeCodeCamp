$(document).ready(function(){
	// var buzzer = $("#buzzer")[0]; add audio file
	var count = parseInt($("#num").html());
	var breakTime = parseInt($("#breakNum").html());
	$("#reset").hide();
	$("#start").click(function(){
		var counter = setInterval(timer, 1000);
		function timer(){
			// Hide variables
			$("#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #breakNum, #title1, #title2").hide();
			$("#timeType").show();
			$("#timeType").html("Tomato Time: ")
			count -= 1;
			if (count === 0){
				// add audio file buzzer.play()
				clearInterval(counter);
				var startBreak = setInterval(breakTimer, 1000)
				$("#num").hide();
			}
			$("#num").html(count);

			function breakTimer(){
				$("#timeType").show();
				$("#timeType").html("Break Time: ")
				$("#breakNum").show();
				breakTime -= 1;
				if (breakTime === 0){
					clearInterval(startBreak);
					$("#reset").show();
					$("#breakNum, #timeType").hide();
				}
				$("#breakNum").html(breakTime);
			}
		}
	})

	$("#reset").click(function(){
		count = 25;
		breakTime = 10;
		$("#num").html(count);
		$("#breakNum").html(breakTime);
		$("#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #breakNum, #num, #title1, #title2").show();
		$("#reset, #timeType").hide();
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