var News = (function($) {

	var newsSlider;

	var init = function() {

		var startSlide = $('.news-slider').find('.slide').length / 2;

		// set up royal slider 
		newsSlider = $('.news-slider').royalSlider({
			startSlideId: Math.floor(startSlide),
			fadeinLoadedSlide: false,
			numImagesToPreload: 20,
			addActiveClass: true,
			arrowsNav: false,
			arrowsNavAutoHide: false,
			controlNavigation: 'bullets',
			slidesSpacing: 70,
			navigateByClick: false,
			loop: false,
		}).data('royalSlider');

	};

	// programs next
	var next = function() {

		programSlider.next();

	};

	// programs prev
	var previous = function() {

		programSlider.prev();
		
	};

	return {
		init: init,
		next: next,
		previous: previous
	};

}(jQuery));