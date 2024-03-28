$(document).ready(function () {
    let rev = $('.slider-3d__box');
    rev.on('init', function (event, slick, currentSlide) {
        let cur = $(slick.$slides[slick.currentSlide]),
            next = cur.next(),
            prev = cur.prev();
        prev.addClass('slick-sprev');
        next.addClass('slick-snext');
        cur.removeClass('slick-snext').removeClass('slick-sprev');
        slick.$prev = prev;
        slick.$next = next;
    }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        let cur = $(slick.$slides[nextSlide]);
        slick.$prev.removeClass('slick-sprev');
        slick.$next.removeClass('slick-snext');
        next = cur.next();
        prev = cur.prev();
        prev.addClass('slick-sprev');
        next.addClass('slick-snext');
        slick.$prev = prev;
        slick.$next = next;
        cur.removeClass('slick-next').removeClass('slick-sprev');
    });

    $('.slider-3d__box').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
        centerPadding: '0',
        arrows: true,
        dots: true,
        swipe: true,
        nextArrow: $('.slider-3d__box').siblings('.arrow-next'),
        prevArrow: $('.slider-3d__box').siblings('.arrow-prev'),
        pauseOnHover: true,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 5000,
    })
})