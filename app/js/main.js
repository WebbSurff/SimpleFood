$(function () {
    $(".product-price__input").ionRangeSlider();

    $('.make-order__star, .product-opinion__star').raty({
        starOff: '../images/icons/star-false.svg',
        starOn: '../images/icons/star-true.svg',
        readOnly: true,
    });

    $('.select-style, .make-order__input').styler();

    $(".user-nav__btn").on("click", function () {
        $(".user-nav__input").toggleClass("user-nav__input-active");
    })
    $(".user-nav__btn").on("click", function () {
        $(".user-nav__button").toggleClass("user-nav__button-active");
    })
    $(".user-nav__btn").on("click", function () {
        $(".user-nav__close").toggleClass("user-nav__close--active");
    })

    $(".user-nav__close").on("click", function () {
        $(".user-nav__input, .user-nav__button, .user-nav__close").removeClass("user-nav__input-active user-nav__button-active user-nav__close--active");
    })

    $(".header-mobile__close-btn").on("click", function () {
        $(".header-mobile, body ").removeClass("header-mobile--active lock");
    })

    $(".product-offer__input").on("click", function () {
        $(".product-offer__input").removeClass("product-offer__input--checked");
    })

    $(".filter-mobile__close").on("click", function () {
        $(".filter-mobile, body").removeClass("filter-mobile--active lock-filter");
    })

    $('.product-nav__link').on("click", function (e) {
        e.preventDefault();
        $('.product-nav__link').removeClass('product-nav__link--active');
        $(this).addClass('product-nav__link--active');

        $('.product-tabs__info').removeClass('product-tabs__info--active');
        $($(this).attr('href')).addClass('product-tabs__info--active');

    });

    Fancybox.bind("[data-fancybox]", {

        animated: false,
        showClass: false,
        hideClass: false,
        dragToClose: false,
        closeButton: "top",

        Thumbs: false,
        Toolbar: false,
        autoplay: 'autoplay',

        Carousel: {
            // Enable dots
            Dots: true,

            // Disable touch guestures
            Panzoom: {
                touch: false,
            },

            // Disable sliding animation
            friction: 0,
            Autoplay: {
                timeout: 1000,
            },
        },

        Image: {
            zoom: false,
            click: false,
            wheel: false,
            fit: "contain-w",
        },

        on: {
            init: (fancybox) => (fancybox.prevScrollTop = 0),
            done: (fancybox, slide) => (slide.$el.scrollTop = fancybox.prevScrollTop),
            "Carousel.change": (fancybox, carousel, to, from) => {
                fancybox.prevScrollTop = carousel.slides[from].$el.scrollTop || 0;

                if (carousel.slides[to].$el) {
                    carousel.slides[to].$el.scrollTop = fancybox.prevScrollTop;
                }
            },
        },

    });

    var swiper = new Swiper('.order-product__photo', {
        navigation: {
            nextEl: '.order-product__button-next',
            prevEl: '.order-product__button-prev'
        },
    });

    var swiperInterested = new Swiper('.maybe-interested__container', {
        spaceBetween: 30,
        slidesPerView: true,
        freeMode: true,
        navigation: {
            nextEl: '.maybe-interested__button-next',
            prevEl: '.maybe-interested__button-prev'
        },
        pagination: {
            el: '.maybe-interested__pagination',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 5,
                slidesPerGroup: 2,

            },
            550: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 30,

            },
            768: {
                slidesPerView: 4,
                spaceBetween: 15,
            },

            992: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 5,
            },
        },
    });

});
let containerEl = document.querySelector('.popular-categories__product');
let mixer;

if (containerEl) mixer = mixitup(containerEl);

var $range = $(".product-price__input");
var $inputFrom = $(".product-price__from");
var $inputTo = $(".product-price__to");
var instance;
var min = 0;
var max = 1200;
var from = 0;
var to = 0;

$range.ionRangeSlider({
    type: "double",
    min: min,
    max: max,
    onStart: updateInputs,
    onChange: updateInputs,
    onFinish: updateInputs
});
instance = $range.data("ionRangeSlider");

function updateInputs(data) {
    from = data.from;
    to = data.to;

    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
}

$inputFrom.on("change", function () {
    var val = $(this).prop("value");

    // validate
    if (val < min) {
        val = min;
    } else if (val > to) {
        val = to;
    }

    instance.update({
        from: val
    });

    $(this).prop("value", val);

});

$inputTo.on("change", function () {
    var val = $(this).prop("value");

    // validate
    if (val < from) {
        val = from;
    } else if (val > max) {
        val = max;
    }

    instance.update({
        to: val
    });

    $(this).prop("value", val);
});

var customerSwiper = new Swiper('.customer-reviews__container', {
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
var mediaQuerySize = 992;

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
                    spaceBetween: 200,
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


document.addEventListener('DOMContentLoaded', () => {

    const burger = document.querySelector('.user-nav__burger');
    const mobileMenu = document.querySelector('.header-mobile');
    const bodyLock = document.querySelector('body');

    burger.addEventListener('click', () => {
        mobileMenu.classList.toggle('header-mobile--active');
        if (mobileMenu.classList.contains('header-mobile--active')) {
            bodyLock.classList.add('lock');
        } else {
            bodyLock.classList.remove('lock');
        }
    });

    document.addEventListener('click', function (e) {
        if (e.target !== burger && e.target == bodyLock) {
            mobileMenu.classList.remove('header-mobile--active');
            bodyLock.classList.remove('lock');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {

    const filter = document.querySelector('.filter-mobile__btn');
    const filterMobile = document.querySelector('.filter-mobile');
    const bodyLock = document.querySelector('body');

    filter.addEventListener('click', () => {
        filterMobile.classList.toggle('filter-mobile--active');
        if (filterMobile.classList.contains('filter-mobile--active')) {
            bodyLock.classList.add('lock-filter');
        } else {
            bodyLock.classList.remove('lock-filter');
        }
    });

    document.addEventListener('click', function (e) {
        if (e.target !== filter && e.target == bodyLock) {
            filterMobile.classList.remove('filter-mobile--active');
            bodyLock.classList.remove('lock-filter');
        }
    });
});