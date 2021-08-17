$(document).ready(function () {

	$('.burger').click(function (event) {
		$('.burger,.header__menu').toggleClass('active');
		$('.burger').toggleClass('burger-active');
		$('body').toggleClass('lock');
	});
	$('.burger2').click(function (event) {
		$('.burger2,.mob-menu,.mask-content').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.custom-select').click(function (event) {
		$('.select-selected').toggleClass('select-arrow-active');
		$('.select-items').toggleClass('select-hide');
	});
	$('.boxlist-select-1').click(function (event) {
		$('.boxlist-items-1').toggleClass('boxlist-hide');
	});
	$('.boxlist-select-2').click(function (event) {
		$('.boxlist-items-2').toggleClass('boxlist-hide');
	});
	$('.boxlist-select-3').click(function (event) {
		$('.boxlist-items-3').toggleClass('boxlist-hide');
	});
	$('.boxlist-select-4').click(function (event) {
		$('.boxlist-items-4').toggleClass('boxlist-hide');
	});
	$('.boxlist-select-5').click(function (event) {
		$('.boxlist-items-5').toggleClass('boxlist-hide');
	});
	$('.boxlist-select-6').click(function (event) {
		$('.boxlist-items-6').toggleClass('boxlist-hide');
	});
	$('.boxlist-select-7').click(function (event) {
		$('.boxlist-items-7').toggleClass('boxlist-hide');
	});
	$('.boxlist-items  .boxlist-item').click(function () {
		$(this).parents(".boxlist-select").find('.boxlist-selected ').html($(this).html());
	});
	$('.select-items  .select-item').click(function () {
		$(this).parents(".custom-select").find('.select-selected').html($(this).html());
	});

	$('.invest__tarifs-item').click(function (event) {
		$('.invest__tarifs-item').removeClass('tarifs-work');
		$(this).addClass('tarifs-work');
	});
	//copy_btn
	$('.copy-btn').click(function () {
		var copyText = $('.copy-box').find('.copy-text');
		var Text = copyText.val();
		copyText.select();
		document.execCommand("copy");

		$('.copy-box').find('.copy-text').val('copied');

		setTimeout(function () {
			copyText.val(Text);
		}, 1000);
	});
	$('.html-copy__box-button .copy-html').click(function (e) {
        e.preventDefault();
        var $tmp = $("<textarea>");
        $("body").append($tmp);
		var copyText = $(this).parents('.html-copy__box').find('.text-html');
		var Text = copyText.text();
        $tmp.val(Text).select();
		document.execCommand("copy");
		$(this).parents('.html-copy__box').find('.text-html').text('copied');

		setTimeout(function () {
			copyText.text(Text);
		}, 1000);
	});
});
new WOW().init();