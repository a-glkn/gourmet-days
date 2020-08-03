$(function() {

	$('.faq__item').on( "click", function( event ) {
		$(this).toggleClass('active');
	});

	$('.menu-toggler').on('click', function(e) {
		$('.mobile-menu, .mobile-menu__inner').height( $(window).height() - $('.header').height() );
		
		$('body').toggleClass('menu-openned');
	});

});
