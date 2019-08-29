$(document).ready(function(){
	//slider for top
	 $('.slider').slick({
	    dots: true,
	    infinite: false,
	    speed: 100,
	    arrows: false,
	    slidesToShow: 1,
	    adaptiveHeight: true,
	    centerPadding: '0px'
	 });
 //slider for bot
	 $(window).on('load resize', function() {
	  if ($(window).width() < 768) {
	    $('.slider-bot:not(.slick-initialized)').slick({
			dots: true,
			infinite: false,
			speed: 100,
			arrows: false,
			slidesToShow: 1,
			adaptiveHeight: true,
			centerPadding: '0px'
	    });
	  } else {
	    $("#items.slick-initialized").slick("unslick");
	  }
	});
//for main > blocks
	$(window).resize(function() {
		if ( $(window).width() < 1200 ) {
			let mainCenterContainer= $('.container--for-table');
			let cointainer = 'container';
			let containerFluid = 'container-fluid';
			$(mainCenterContainer).removeClass(cointainer);
			$(mainCenterContainer).addClass(containerFluid);
			
		}
	});

//for menu container--for-menu

	$('.menu__button').click(function() {
		$('.menu__list').slideToggle();
	});

});