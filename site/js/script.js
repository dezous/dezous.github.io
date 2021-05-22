$(".header__burger").click(function () {
    $('.navMobile').toggleClass('active')
    $('.header').toggleClass('active')
    $('.header__burger').toggleClass('active')
    $('body').toggleClass('lock')
})

function PlayerjsAsync() {
    var player = new Playerjs({
        id: "player",
        file: "video/video.mp4"
    });
}