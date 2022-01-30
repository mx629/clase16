$(function () {
    $(window).scroll(function () {
        var currentScrollTop = $(window).scrollTop();
        $('#hero-overlay').css('opacity',currentScrollTop/$('#hero-overlay').height());

    });
});