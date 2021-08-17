new WOW().init();

$(document).ready(function () {
    $('.reviews-content').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
          },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 2000
                }
            }
        ]

    })
    if ($(window).width() > 992) {
        $(function () {
            $('.paralax-title-orange-fruts').parallax({
                mouseport: $('.premium-orange__box'),
                decay: 0.9
            });
    
            $('.paralax-title-apple-fruts').parallax({
                mouseport: $('.premium-apple__box'),
                decay: 0.9
            });
    
            $('.paralax-title-tomat-fruts').parallax({
                mouseport: $('.premium-tomato__box'),
                decay: 0.9
            });
    
            $('.mas__fruts, .leaf__group, .splash-paralax-1').parallax({
                mouseport: $('.premium-orange__paralax'),
                decay: 0.9
            });
    
            $('.mas__fruts-2, .leaf__group-2, .splash-paralax-2').parallax({
                mouseport: $('.premium-apple__paralax'),
                decay: 0.95
            });
    
            $('.mas__fruts-3, .leaf__group-3, .splash-paralax-3').parallax({
                mouseport: $('.premium-tomat__paralax'),
                decay: 0.95
            });
    
            $('.paralax-title-about-us-fruts').parallax({
                mouseport: $('.about-us__box'),
                decay: 0.95
            });
    
            $('.paralax, .paralax-title').parallax({
                mouseport: $('.natural-product__bg'),
                decay: 0.95
            });
    
            $('.paralax-footer-title').parallax({
                mouseport: $('.footer'),
                decay: 0.95
            });
    
            $('.paralax-footer-fructs-map').parallax({
                mouseport: $('.footer__map'),
                decay: 0.95
            });
    
            $('.pralax__comment-item').parallax({
                mouseport: $('.comment'),
                decay: 0.95
            });
    
            $('.paralax-header').parallax({
                mouseport: $('.header'),
                decay: 0.9
            });
    
        });
        }
    
})
$(".burger").click(function (e) {
    e.preventDefault();
    $(".menu__box").toggleClass('open__burger');
    $('body').toggleClass('blur-block');
})

$(".menu__burger-item a").click(function (e) {
    $('.menu__box').removeClass('open__burger');
    $('body').removeClass('blur-block');
});
