function ibg(){
	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
			$(this).find('img').css('display','none');
		}
	});
}
ibg();


 $(function(){
 	$('.header-slider').slick({
 		arrows: false,
 		dots: true
 	})
 });


