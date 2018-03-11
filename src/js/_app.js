(function($, window, document) {

	$(function() {
		/* SLICK Slider */
		$(document).ready(function() {
			$('.slick').slick({
				adaptiveHeight: false,
				dots: false,
				mobileFirst: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 5,
							slidesToScroll: 5,
							infinite: true,
							dots: true
						}
					},
					{
						breakpoint: 750,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 4,
							dots: true					
						}
					},
					{
						breakpoint: 550,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3,
							dots: true
						}
					},
					{
						breakpoint: 400,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2
						}
					}
				]
			});
		});
		
		/* Waves bottom */
		$('.feel-the-wave').each( function(index, el) {
			$(el).wavify({
				height: 50,
				bones: 5,
				amplitude: 30,
				color: 'rgba(255, 255, 255, 0.05)',
				speed: .1
			});
		});
		 
		/* Waves top */
		$('.feel-the-wave-two').each( function(index, el) {
			$(el).wavify({
				height: 40,
				bones: 4,
				amplitude: 30,
				color: 'rgba(255, 255, 255, 0.05)',
				speed: .1
			});
		});
		
		// slow scroll to Form Submit
		$('.js-button-apply').click(function (e) {
				var elementClick = $(this).attr("href");
				var destination = $(elementClick).offset().top;
				e.preventDefault ? e.preventDefault() : (e.returnValue = false);
				jQuery('html:not(:animated)').animate({
					scrollTop: destination - 50
				}, 800);
				return false;
		});
	});
	
})(window.jQuery, window, document);
