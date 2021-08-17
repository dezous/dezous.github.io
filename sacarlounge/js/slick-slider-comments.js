$(document).ready(function () {
    $('.comments__slider-box').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        nextArrow: $('.comments__slider-box').siblings('.arrow-next'),
        prevArrow: $('.comments__slider-box').siblings('.arrow-prev'),
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]

    })
})