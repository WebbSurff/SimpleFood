$(function () {

    $(".user-nav__btn").on("click", function () {
        $(".user-nav__input").toggleClass("user-nav__input-active");
    })
    $(".user-nav__btn").on("click", function () {
        $(".user-nav__button").toggleClass("user-nav__button-active");
    })



    var mixer = mixitup('.popular-categories__product');


});

new Swiper('.customer-reviews__container', {
    navigation: {
        nextEl: '.customer-reviews__button-next ',
        prevEl: '.customer-reviews__button-prev'
    },
    pagination: {
        el: '.customer-reviews__pagination',
        clickable: true,
    },


});