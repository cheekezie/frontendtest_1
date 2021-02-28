$(document).ready(function(){
	// Write any custom scripts here
	$('.slider').slick({
		dots: true,
		arrows:  true,
		infinite: true,
		speed: 300,
		autoplay: true,
		slidesToShow: 1,
		adaptiveHeight: true,
		customPaging : (slider, i)=> {
			return '<a>'+(i+1)+'</a>';
			},
	  });
	  $(".js-show-form").click(()=>{
		$(".expanding-form").toggleClass("hide");
	  });
});

AOS.init({
	duration: 800,
	easing: 'slide',
	once: true
});