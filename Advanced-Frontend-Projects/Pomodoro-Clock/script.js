$(document).ready(function(){
	var buzzer = $("#buzzer")[0];
	var count = parseInt($("#num").html());
	var breakTime = parseInt($("#breakNum").html());
	$("#reset").hide();


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