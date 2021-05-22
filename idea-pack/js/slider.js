$(document).ready(function () {
    $('.card-product__box-img').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        speed: 500,
        nextArrow: document.querySelector('.arrow-next'),
        prevArrow: document.querySelector('.arrow-prev'),
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2500,
            }
        }]
    });
    $('.slider-products__box').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        dots: false,
        speed: 500,
        nextArrow: document.querySelector('.arrow-next2'),
        prevArrow: document.querySelector('.arrow-prev2'),
        responsive: [{
                breakpoint: 1600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2500,
                }
            }
        ]
    });
});