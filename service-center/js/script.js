$(function () {
  // playing video
  $('.play-video').click(function () {
    let preview = $(this).parent();
    preview.addClass('played');
    let sliderItem = preview.parent();
    sliderItem.find('#video').get(0).play();
  })

  // popups
  $('.btn-quest').click(function () {
    $('#popup1').addClass('show');
    $('.overlay').addClass('show');
    $('body').addClass('lock');
  })
  $('.popup__close, .continue').click(function () {
    $(this).parent().removeClass('show');
    $('.overlay').removeClass('show');
    $('body').removeClass('lock');

  })
  $('.table-btn').click(function () {
    $('#popup2').addClass('show');
    $('.overlay').addClass('show');
    $('body').addClass('lock');
  })

  //btn show-more
  $('.show-all-btn').click(function () {
    let dots = $(this).parent().find('.dots');
    let more = $(this).parent().find('.more');

    if (dots.css('display') === "none") {
      dots.css('display', 'inline');
      $(this).html('Показать полностью')
      more.css('display', 'none');
    } else {
      dots.css('display', 'none');
      $(this).html('Скрыть текст')
      more.css('display', 'inline');
    }

    let p = $(this).parent().find('p');
    let more2

  })

  $('.show-all-btn-2').click(function () {
    let p = $(this).parent().find('.first-p');
    let more = $(this).parent().find('.how-me-works__warranty-more');

    p.toggleClass('active');
    $(this).toggleClass('active');
    more.toggleClass('show');
    if ($(this).hasClass('active')) {
      $(this).html('Скрыть текст')
    } else {
      $(this).html('Показать полностью')
    }
  })

  $('.device-show').click(function () {
    let button = $(this);
    let more = $(this).parent().find('.select-device__content').find('.more');

    more.toggleClass('active');
    if (more.hasClass('active')) {
      button.html('Скрыть девайсы')
    } else {
      button.html('Показать полностью')
    }
  })

  // btn quest-drop
  $('.questions__quest-item').click(function () {
    $(this).find('.questions__quest-content').toggleClass('active');
    $(this).find('.btn-drop').toggleClass('active')
  })

  // burger
  $('.header__burger').click(function () {
    $('.header__mobile-menu').toggleClass('active');
    $('.header__mobile-menu').find('.header__burger').toggleClass('active');
    $('body').toggleClass('lock');
    $('.overlay').toggleClass('show');
  })


})