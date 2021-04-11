$(document).ready(function(){
	// SLICK SLIDER
	$('.slider').slick({
		dots: true,
		arrows:  true,
		infinite: true,
		speed: 300,
		//autoplay: true,
		slidesToShow: 1,
		adaptiveHeight: true,
		customPaging : (slider, i) => {
			return '<a>'+(i+1)+'</a>';
			},
	});

	// Alternative slider
	$('.features__slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
	  });
	  
	// SIDE MENU TOGGLE
	$(".menu-toggle").click(() => {
	$(".mobile-menu").toggleClass("motion-in");
	});

	//LOADER EFFECT
	$(".loader").delay(200).fadeOut("slow");
});

AOS.init({
	duration: 800,
	easing: 'slide',
	once: true
});