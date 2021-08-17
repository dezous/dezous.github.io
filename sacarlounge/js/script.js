$(document).ready(function () {
    const da = new DynamicAdapt("max");
    da.init();

    let $page = $('html, body');
    $('a[href*="#services-prices"],a[href*="#top"]').click(function () {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 700);
        return false;
    });

    // MENU
    const mobile_menu = $('.navMobile');
    const mobile_burger = $('.menu__burger');
    const dropdown_menu = $('.dropdown-menu');
    const menu = $('.menu');
    mobile_burger.click(function () {
        $(this).toggleClass('active');
        mobile_menu.toggleClass('active');
        $("body").toggleClass('lock');
        if (dropdown_menu.hasClass('active')) {
            dropdown_menu.removeClass('active');
        }
    })

    $(document).click(function (e) {
        if (
            !mobile_burger.is(e.target) &&
            !mobile_menu.is(e.target) &&
            mobile_menu.has(e.target).length === 0 &&
            !menu.is(e.target) &&
            menu.has(e.target).length === 0 &&
            !dropdown_menu.is(e.target) &&
            dropdown_menu.has(e.target).length === 0
        ) {
            mobile_burger.removeClass('active')
            mobile_menu.removeClass('active');
            $('body').removeClass('lock')

            if (dropdown_menu.hasClass('active')) {
                dropdown_menu.removeClass('active');
            }
        }
    })

    $(".dropdown").click(function (e) {
        e.preventDefault();
        if ($(window).width() < 992) {
            $('.dropdown-menu').toggleClass('active');
        }
        return;
    })

    $(".dropdown").mouseenter(function () {
        if ($(window).width() > 992) {
            if (menu.hasClass('menu-text--white')) {} else {
                menu.addClass('mega-menu');
            }
        }
    }).mouseleave(function () {
        if ($(window).width() > 992) {
            if (menu.hasClass('menu-text--white')) {

            } else {
                if (menu.hasClass('mega-menu')) {
                    menu.removeClass('mega-menu');
                }
            }
        }
    })

    //dop soc button
    const dop_soc = $('.soc2__box-item--more');
    const more_soc = $('.more-soc');
    more_soc.click(function (e) {
        e.preventDefault();
        let this_button = $(this);
        let items_more_cos = this_button.closest('.soc2__box').find('.soc2__box-item--more');
        if (this_button.hasClass('active') && items_more_cos.hasClass('active')) {
            this_button.removeClass('active');
            items_more_cos.removeClass('active');

        } else {
            if (more_soc.hasClass('active') && dop_soc.hasClass('active')) {
                more_soc.removeClass('active');
                dop_soc.removeClass('active');
                this_button.addClass('active');
                items_more_cos.addClass('active');
            } else {
                this_button.addClass('active');
                items_more_cos.addClass('active');
            }

        }
    })

    //button prev page 
    $(window).scroll(function () {
        var sticky = $('#button-prev-page'),
            scroll = $(window).scrollTop();

        if (scroll >= 170) sticky.addClass('fixed');
        else sticky.removeClass('fixed');

    });

})