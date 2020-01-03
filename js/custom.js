function ibg(){
	$.each($('.ibg'), function(index, val) {
		if($(this).find('.img_bg').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
			$(this).find('.img_bg').css('display','none');
		}
	});
}
ibg();

$(function() {
	$('.header-slider').slick({
	 		arrows: false,
	 		dots: true,
	 		infinite: true,
	  		autoplay: true,
		  	autoplaySpeed: 4000,
		  	speed: 3000,
 	});
// //////////////// .best-seller-slider  //////////////////////////
 	$('.best-seller-slider').slick({
 		dots: false,
 		slidesToShow: 5, 
 		slidesToScroll: 1,
 		arrows: false,
 		infinite: false,
 	});
 	
 	$('#best-arrow-next').on('click', function() {
  		$('.best-seller-slider').slick('slickNext');
	});

 	$('#best-arrow-prev').on('click', function() {
  		$('.best-seller-slider').slick('slickPrev');
	});

 	$('.best-seller-slider').on('afterChange', function(event, slick, CurrentSlide, nextSlide, slideCount) {
        // Делаем кнопку следующий неактивной
        if (slick.slickCurrentSlide() + 5 === slick.slideCount) {
			$('#best-arrow-next').removeClass('not-end');
        	$('#best-arrow-next').addClass('end');
        	$('#best-arrow-next').css('cursor','default');
        }
        else {
			$('#best-arrow-next').removeClass('end');
        	$('#best-arrow-next').addClass('not-end');
        	$('#best-arrow-next').css('cursor','pointer');
        }
        // Делаем копку предыдущий неактивной
        if (slick.slickCurrentSlide() !== 0 ) {
			$('#best-arrow-prev').removeClass('end');
        	$('#best-arrow-prev').addClass('not-end');
        	$('#best-arrow-prev').css('cursor','pointer');
        }
        else {
			$('#best-arrow-prev').removeClass('not-end');
        	$('#best-arrow-prev').addClass('end');
        	$('#best-arrow-prev').css('cursor','default');
        }
    });
// ///////////////////////////////////////////////////////////
// ///////////////  women-seller-slider  /////////////////////
 	$('.women-seller-slider').slick({
 		dots: false,
 		slidesToShow: 5, 
 		slidesToScroll: 1,
 		arrows: false,
 		infinite: false,
 	});
 	
 	$('#women-arrow-next').on('click', function() {
  		$('.women-seller-slider').slick('slickNext');
	});

 	$('#women-arrow-prev').on('click', function() {
  		$('.women-seller-slider').slick('slickPrev');
	});

 	$('.women-seller-slider').on('afterChange', function(event, slick, CurrentSlide, nextSlide, slideCount) {
        // Делаем кнопку следующий неактивной
        if (slick.slickCurrentSlide() + 5 === slick.slideCount) {
			$('#women-arrow-next').removeClass('not-end');
        	$('#women-arrow-next').addClass('end');
        	$('#women-arrow-next').css('cursor','default');
        }
        else {
			$('#women-arrow-next').removeClass('end');
        	$('#women-arrow-next').addClass('not-end');
        	$('#women-arrow-next').css('cursor','pointer');
        }
        // Делаем копку предыдущий неактивной
        if (slick.slickCurrentSlide() !== 0 ) {
			$('#women-arrow-prev').removeClass('end');
        	$('#women-arrow-prev').addClass('not-end');
        	$('#women-arrow-prev').css('cursor','pointer');
        }
        else {
			$('#women-arrow-prev').removeClass('not-end');
        	$('#women-arrow-prev').addClass('end');
        	$('#women-arrow-prev').css('cursor','default');
        }
    });
//////////////////////////////////////////////////////////////
// ///////////////  men-seller-slider  /////////////////////
 	$('.men-seller-slider').slick({
 		dots: false,
 		slidesToShow: 5, 
 		slidesToScroll: 1,
 		arrows: false,
 		infinite: false,
 	});
 	
 	$('#men-arrow-next').on('click', function() {
  		$('.men-seller-slider').slick('slickNext');
	});

 	$('#men-arrow-prev').on('click', function() {
  		$('.men-seller-slider').slick('slickPrev');
	});

 	$('.men-seller-slider').on('afterChange', function(event, slick, CurrentSlide, nextSlide, slideCount) {
        // Делаем кнопку следующий неактивной
        if (slick.slickCurrentSlide() + 5 === slick.slideCount) {
			$('#men-arrow-next').removeClass('not-end');
        	$('#men-arrow-next').addClass('end');
        	$('#men-arrow-next').css('cursor','default');
        }
        else {
			$('#men-arrow-next').removeClass('end');
        	$('#men-arrow-next').addClass('not-end');
        	$('#men-arrow-next').css('cursor','pointer');
        }
        // Делаем копку предыдущий неактивной
        if (slick.slickCurrentSlide() !== 0 ) {
			$('#men-arrow-prev').removeClass('end');
        	$('#men-arrow-prev').addClass('not-end');
        	$('#men-arrow-prev').css('cursor','pointer');
        }
        else {
			$('#men-arrow-prev').removeClass('not-end');
        	$('#men-arrow-prev').addClass('end');
        	$('#men-arrow-prev').css('cursor','default');
        }
    });
//////////////////////////////////////////////////////////////

 });

