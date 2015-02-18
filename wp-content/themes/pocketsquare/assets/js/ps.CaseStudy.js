var CaseStudy = (function($) {

	var Slider;

	var init = function() {

		// create new slider properties
		Slider = new SliderProps($('.casestudies'), 0, 0, 0);

		// set slide total
		Slider.total = Slider.element.find('.slide').length - 1;

		// set default slide states
		Slider.element.find('.slide').each(function(index) {

			if(index > 0) {
				$(this).fadeOut(0);
			}

		});

		// set first testimonial nav active
		Slider.element.find('a.slidebtn:eq(0)').addClass('active');
		Slider.element.find('.slide:eq(0)').addClass('slide-active');

		// set listener for testimonial nav
		Slider.element.on("click", "a.slidebtn", goToItem);

	};

	var goToItem = function(e) {

		if(Slider.element.find('.slide').is(':animated')) return;

		// make sure current item doesn't get double clicked
		if(Slider.next == $(this).index('.slidebtn')) return;

		// set up correct indexes of next slide
		Slider.current = Slider.next;
		Slider.next = $(this).index('.slidebtn');

		// animate to new item
		animate();

	};

	var previous = function() {

		if(Slider.element.find('.slide').is(':animated')) return;

		// set up correct indexes of next slide
		Slider.current = Slider.next;
		Slider.next = Slider.next == 0 ? Slider.total : Slider.next - 1;

		// animate to new item
		animate();

	};

	var next = function() {

		if(Slider.element.find('.slide').is(':animated')) return;

		// set up correct indexes of next slide
		Slider.current = Slider.next;
		Slider.next = Slider.next == Slider.total ? 0 : Slider.next + 1;
		
		// animate to new item
		animate();

	};

	var animate = function() {

		// animate slides
		Slider.element.find('.slide:eq(' + Slider.current + ')').fadeOut(400);
		Slider.element.find('.slide:eq(' + Slider.next + ')').fadeIn(400);
	
		// toggle active slides
		Slider.element.find('.slide').removeClass('slide-active');
		Slider.element.find('.slide:eq(' + Slider.next + ')').addClass('slide-active');

		// set active slide
		$('.casestudy-slider-nav a').removeClass('active');
		$('.casestudy-slider-nav a:eq(' + Slider.next + ')').addClass('active');

	};

	return {
		init: init,
		next: next,
		previous: previous
	};

}(jQuery));

function SliderProps(element, total, next, current) {

	this.element = element;
	this.total = total;
	this.next = next;
	this.current = current;
	// this.disable = false;

}