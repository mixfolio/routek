$(document).ready(function () {
    $('.header__burger').on('click', function () {
        $('.header__burger,.header__menu').toggleClass('active');
        $('.body').toggleClass('lock');
    });
});

$(document).ready(function () {
    $('.drop-btn').on('click', function () {
        if ($('.main-nav').hasClass('one')) {
            $('.drop-btn').not($(this)).removeClass('active');
            $('.main-nav__sub-item').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});