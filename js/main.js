$(function(){

	$('.slider-reviews').slick({
		arrows: false,
		dots: true,
		appendDots: $('.dots-box'),
		dotsClass: 'slider-dots',
		autoplay: 4000,

		onAfterChange:function(slickSlider,i){
			//remove all active class
			$('.slider-nav .slick-slide').removeClass('slick-active');
			//set active class for current slide
			$('.slider-nav .slick-slide').eq(i).addClass('slick-active');         
		}
		});

		$(document).on('click', '.next-arrow', function(){
			$('.slider-reviews').slick('slickNext');
		});
		$(document).on('click', '.prev-arrow', function(){
			$('.slider-reviews').slick('slickPrev');
		});


		var activeClass = 'slick-active',
			ariaAttribute = 'aria-hidden';
		$( '.slider-reviews' )
		.on( 'init', function() {
			$( '.slick-dots li:first-of-type' ).addClass( activeClass ).attr( ariaAttribute, false );
		} )
		.on( 'afterChange', function( event, slick, currentSlide ) {
			$.each(slick.$dots, (i, el) => {
			  $(el).find('li').eq(currentSlide).addClass('slick-active').find('button');
			})
		  });

		

});

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}



AOS.init();