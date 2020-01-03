function ibg(){
	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
			$(this).find('img').css('display','none');
		}
	});
}
ibg();

$(function() {
	$('.header-slider').slick({
	 		arrows: false,
	 		dots: true,
 	});

 	$('.seller-slider').slick({
 		dots: false,
 		slidesToShow: 5, 
 		slidesToScroll: 1,
 		arrows: false,
 		infinite: false,
 	});
 	
 	$('#arrow-next').on('click', function() {
  		$('.seller-slider').slick('slickNext');
	});

 	$('#arrow-prev').on('click', function() {
  		$('.seller-slider').slick('slickPrev');
	});

 	$('.seller-slider').on('afterChange', function(event, slick, CurrentSlide, nextSlide, slideCount) {
        // Делаем кнопку следующий неактивной
        if (slick.slickCurrentSlide() + 5 === slick.slideCount) {
			$('#arrow-next').removeClass('not-end');
        	$('#arrow-next').addClass('end');
        	$('#arrow-next').css('cursor','default');
        }
        else {
			$('#arrow-next').removeClass('end');
        	$('#arrow-next').addClass('not-end');
        	$('#arrow-next').css('cursor','pointer');
        }
        // Делаем копку предыдущий неактивной
        if (slick.slickCurrentSlide() !== 0 ) {
			$('#arrow-prev').removeClass('end');
        	$('#arrow-prev').addClass('not-end');
        	$('#arrow-prev').css('cursor','pointer');
        }
        else {
			$('#arrow-prev').removeClass('not-end');
        	$('#arrow-prev').addClass('end');
        	$('#arrow-prev').css('cursor','default');
        }
    });

 });

