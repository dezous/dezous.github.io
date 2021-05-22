$(document).ready(function () {

    new WOW().init();

    $('.header__burger').click(function () {
        $(this).toggleClass('active');
        $('.menu__list').toggleClass('active');
        $('body').toggleClass('lock')
    })

    $('.btn-minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });

    $('.btn-plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    if ($(window).width() <= 992) {
        $('#link-catalog').click(function (e) {
            e.preventDefault();
            $(this).toggleClass('active');
        })
    }
});