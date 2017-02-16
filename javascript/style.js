$(document).ready(function() {

AOS.init();

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
        $(".navbar").addClass('big');
    }
    else {
        $(".navbar").removeClass('big');
    }
});


$('#overlay').click(function() {
	$('.navbar-overlay').fadeIn(400)
});

$('#overlay').click(function() {
	$('.navbar-toggle').fadeOut(10)
});


$('#close').click(function() {
	$('.navbar-overlay').fadeOut(400)
});

$('#close').click(function() {
	$('.navbar-toggle').fadeIn(400)
});


});