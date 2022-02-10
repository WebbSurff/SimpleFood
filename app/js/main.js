$(function () {

    $(".user-nav__btn").on("click", function () {
        $(".user-nav__input").toggleClass("user-nav__input-active");
    })
    $(".user-nav__btn").on("click", function () {
        $(".user-nav__button").toggleClass("user-nav__button-active");
    })
    $(".user-nav__btn").on("click", function () {
        $(".user-nav__close").toggleClass("user-nav__close--active");
    })

    $(".user-nav__burger").on("click", function () {
        $(".menu").toggleClass("menu--active");
    })
    $(".user-nav__burger").on("click", function () {
        $("body").toggleClass("lock");
    })
    $(".user-nav__burger").on("click", function () {
        $(".header__mobile").toggleClass("header__mobile--active");
    })


    $(".header__close-btn").on("click", function () {
        $(".header__mobile").removeClass("header__mobile--active");
    })
    $(".header__close-btn").on("click", function () {
        $(".menu").removeClass("menu--active");
    })
    $(".header__close-btn").on("click", function () {
        $("body").removeClass("lock");
    })
    $(".user-nav__close").on("click", function () {
        $(".user-nav__input, .user-nav__button, .user-nav__close").removeClass("user-nav__input-active user-nav__button-active user-nav__close--active");
    })

    var mixer = mixitup('.popular-categories__product');


});

new Swiper('.customer-reviews__container', {
    navigation: {
        nextEl: '.customer-reviews__button-next',
        prevEl: '.customer-reviews__button-prev'
    },
    pagination: {
        el: '.customer-reviews__pagination',
        clickable: true,
    },
});


var catalogSlider = null;
var mediaQuerySize = 768;

function catalogSliderInit() {
    if (!catalogSlider) {
        catalogSlider = new Swiper('.best-restaurants__container', {
            pagination: {
                el: '.best-restaurants__pagination',
                clickable: true,
            },
            centeredSlides: true,
            slidesPerView: 'auto',
            breakpoints: {
                320: {
                    spaceBetween: 330
                },
                560: {
                    spaceBetween: 200
                },
            }
        });
    }
}

function catalogSliderDestroy() {
    if (catalogSlider) {
        catalogSlider.destroy();
        catalogSlider = null;
    }
}

$(window).on('load resize', function () {
    var windowWidth = $(this).innerWidth();
    if (windowWidth <= mediaQuerySize) {
        catalogSliderInit()
    } else {
        catalogSliderDestroy()
    }
});