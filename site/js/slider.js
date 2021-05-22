$(document).ready(function () {
    $('.new-movie__slider').slick({
        slidesToShow: 5,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
        infinite: true,
        pauseOnHover: true,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 6000,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    centerMode: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    centerMode: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerMode: true,
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                }
            }
        ]

    })
})