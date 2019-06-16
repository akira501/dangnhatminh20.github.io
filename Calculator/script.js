$(".button").on('click', function(){
	if ($(this).attr('data-role')!='operator') {
		$(".display").val($(".display").val()+$(this).val());
	}
	else{
		if ($(".display").val()!='') {
			$(".display").val($(".display").val()+$(this).val());
		}
	}
});

//clear
$("#clear-btn").on('click', function(){
	$(".display").val('');
});

//Ans
$("#ans-btn").on('click', function(){
	var Ans;
	$(".display").val('Ans');
})

//=
$("#calculate-btn").on('click', function(){
	let experession = $('.display').val();
	$(".display").val(eval(experession));
	Ans=eval(experession);
});

//Backspace
$("#back-btn").on('click', function(){
	let experession = $('.display').val();
	$(".display").val(experession.substring(0, experession.length-1));
})

//Change theme
$("#theme-btn").on('click', function(){
	$("body>div>div").toggleClass("main1");
})
