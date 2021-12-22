$( document ).ready(function() {

	$('.menu').click(function (e) {
		e.stopPropagation();
		$('#nav_bar').toggleClass('active');
	});

	$(document).click(function() {
		$('#nav_bar').removeClass('active');
	});

});
