$(document).ready(function(){
	$('.gift img').click(function(){
		$('.card, .pine_png').toggle();
		$('#music').attr('src', 'music/WeWishYouAMerryChristmas.mp3');
		$('.back').attr('hidden', 'true')
	});
});

