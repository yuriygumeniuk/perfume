// function ibg(){
// 	$.each($('.ibg'), function(index, val) {
// 		if($(this).find('img').length>0){
// 			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
// 		}
// 	});
// }
// ibg();

document.querySelectorAll(".ibg").forEach(el => {
	if(el.querySelector('img')){
		el.style.backgroundImage = 'url('+el.querySelector('img').getAttribute('src')+')';
		el.querySelector('img').style.display = 'none';
	}
});