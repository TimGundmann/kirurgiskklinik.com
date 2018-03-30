$(function(){
	setInterval(oneSecondFunction, 7000);
});

function oneSecondFunction() {
	slitslider  = $( '#slider' ).slitslider();
	if (slitslider) {
		slitslider.next();
	}
}

function loadPageSlider() {
			
	var Page = (function() {

		var $navButtons = $('.navbar-nav'),
		slitslider  = $( '#slider' ).slitslider();

			init = function() {

				initEvents();
				
			},
			initEvents = function() {

				$navButtons.each(function() {
					$( this ).on( 'click', function( event ) {
						if (slitslider) {
							slitslider.destroy();
						}
						slitslider  = $( '#slider' ).slitslider();
						if (slitslider) {						
							slitslider.play();
						}
						return false;
					
					} );
					
				})
				if (slitslider) {
					slitslider.play();
				}

			};

			return { init : init };

	})();

	Page.init();


};

$(function () {
	$(window).load(loadPageSlider);
});
