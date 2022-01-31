$(function () {

    $(".icon__btn").on("click", function () {
        $(".icon__input").toggleClass("icon__input-active");
    })
    $(".icon__btn").on("click", function () {
        $(".icon__button").toggleClass("icon__button-active");
    })


    var mixer = mixitup('.categories__product-item');

});

