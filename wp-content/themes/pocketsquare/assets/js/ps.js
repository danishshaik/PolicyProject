var PS = (function($) {

	var init = function() {

		// add animate class to animate in any css items
		setTimeout(function() {
			$('body').addClass('animate-in');
		}, 150);

		// news functionality
		if(typeof News !== 'undefined') 
			News.init();

		// case study functionality
		if(typeof CaseStudy !== 'undefined') 
			CaseStudy.init();

		// video functionality
		if(typeof Video !== 'undefined') 
			Video.init();

		// Parallax Functionality
		if ($.fn.Parallax && !Modernizr.appleios) {
			$('.hero-parallax').Parallax({ property:'translateY', speed:0.12, start:0, delay:0 });
		}

		// header waypoint
		$('.header-waypoint').waypoint(function(direction) {

			$('.header').toggleClass('header-active', direction === 'down');

		}, { offset:0 });

		// philosophy waypoint
		$('.philosophy').waypoint(function(direction) {

			$('.philosophy').toggleClass('philosophy-active', direction === 'down');

		}, { offset:400 });

		// importance waypoint
		$('.importance').waypoint(function(direction) {

			$('.importance').toggleClass('importance-active', direction === 'down');

		}, { offset:100 });

		// partners waypoint
		$('.partners').waypoint(function(direction) {

			$('.partners').toggleClass('partners-active', direction === 'down');

		}, { offset:200 });

		// partners waypoint
		$('.projects').waypoint(function(direction) {

			$(this).toggleClass('projects-active', direction === 'down');

		}, { offset:200 });

		// set backgrounds with data attribute
		$('.set-background').each(function(index) {

			$(this).css({ 'background-image':'url(' + $(this).data('background') + ')' });

		});

	};

	var toggleMenu = function() {

		if($('body').hasClass('body-modal-open')) {

			$('body').removeClass('body-modal-open');
		
			setTimeout(function() {
				$('.menu').removeClass('menu-active');
				$('.modal').removeClass('modal-open');
			},25);

		} else {

			$('body').addClass('body-modal-open');
		
			setTimeout(function() {
				$('.menu').addClass('menu-active');
			},25);

		}

	};
	
	var scrollTo = function(id) {
		
		// Stop any currently active scroll
		$('html, body').dequeue();
		// Scroll to #id offset by 90 pixels
		$('html, body').animate({ scrollTop: $(id).offset().top-60 }, 1000, 'easeOutExpo');
	
	};
	
	return {
		init: init,
		scrollTo: scrollTo,
		toggleMenu: toggleMenu
	};

}(jQuery));

$(function() {
	PS.init();
});