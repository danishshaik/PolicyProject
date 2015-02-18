var Modal = (function($) {

	var init = function() {

		// handle close modal
		$('.modal .close').on("click", close);

	};

	var show = function(id) {
		
		$('body').addClass('body-modal-open');
		$('.modal').removeClass('modal-open');
		
		setTimeout(function() {
			$(id).addClass('modal-open');
		},25);
		
	}

	var close = function() {

		$('body').removeClass('body-modal-open');

		setTimeout(function() {
			$('.modal').removeClass('modal-open');
		},25);
		
	};
	
	return {
		init: init,
		show: show,
		close: close
	};

}(jQuery));