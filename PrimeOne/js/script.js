const anchors = document.querySelectorAll('a[href*="#"]');

for(let anchor of anchors ){
	anchor.addEventListener("click",function(event){
		event.preventDefault();
		const blockID = anchor.getAttribute('href')
		document.querySelector('' + blockID).scrollIntoView({
			behavior:"smooth",
			block:"start"
		})
	})
}

$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__box-menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
$('.single-item').slick({
	аccessibility:false,
	autoplay:true,
	autoplaySpeed:5000,
	arrows:false,
});