/**
 * Close modal contact form
 */
$(function() {
    $('.modal-close').on('click', function() {
        $('.modal-success').hide();
    })
});

/* Nav icon */
const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__row');

navBtn.addEventListener('click', () => {
    navIcon.classList.toggle('nav-icon--active');
    nav.classList.toggle('header__row--mobile');
    document.body.classList.toggle('no-scroll');
});

function hideMobMenu() {
    var $menu = $('.header__row');
    var $burger = $('.nav-icon');
    var $lock = $('body');

    if ($menu.hasClass('header__row--mobile')) {
        $menu.removeClass('header__row--mobile');
    }

    if ($burger.hasClass('nav-icon--active')) {
        $burger.removeClass('nav-icon--active');
    }

    if ($lock.hasClass('no-scroll')) {
        $lock.removeClass('no-scroll');
    }
}

$('.nav__list li a').on('click', function(event) {

    hideMobMenu();
});

$('.header__logo').on('click', function(event) {

    hideMobMenu();
});

$('.header__btn').on('click', function(event) {

    hideMobMenu();
});

/**
 * sticky header
 */
function menuFixed() {
    $(window).on('scroll', function() {
        if ($(window).scrollTop() >= 400) {
            $('.header').addClass('fixed-header');
        } else {
            $('.header').removeClass('fixed-header');
        }
    });
}
menuFixed();

/*
  wow js
*/
wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animate__animated',
    offset: 0,
    mobile: false,
    live: true
})
wow.init();

/**
 * Slider
 */
var swiper = new Swiper(".gallery__carousel", {
    slidesPerView: 3.5,
    spaceBetween: 32,
    grabCursor: true,
    slidesPerGroup: 1,
    speed: 800,
    navigation: {
        nextEl: '.next-btn',
        prevEl: '.prev-btn',
    },

    breakpoints: {
        300: {
            slidesPerView: 1.2,
            resistanceRatio: 0.85,
            spaceBetween: 40,
        },
        480: {
            slidesPerView: 1.2,
            resistanceRatio: 0.85,
            spaceBetween: 40,
        },
        768: {
            slidesPerView: 2.5,
            resistanceRatio: 0.85,
            spaceBetween: 30,
        },

        992: {
            slidesPerView: 3.5,
            resistanceRatio: 0.85,
        },
    }
});

var swiper = new Swiper(".reviews__carousel", {
    slidesPerView: 3,
    spaceBetween: 32,
    grabCursor: true,
    slidesPerGroup: 1,
    speed: 800,
    navigation: {
        nextEl: '.next-btn-rev',
        prevEl: '.prev-btn-rev',
    },

    breakpoints: {
        300: {
            slidesPerView: 1.2,
            resistanceRatio: 0.85,
            spaceBetween: 40,
        },
        480: {
            slidesPerView: 1.2,
            resistanceRatio: 0.85,
            spaceBetween: 40,
        },
        768: {
            slidesPerView: 2.5,
            resistanceRatio: 0.85,
            spaceBetween: 30,
        },

        992: {
            slidesPerView: 3,
            resistanceRatio: 0.85,
        },
    }
});

/**
 * animation
 */
function animationContent(paramShow, paramHidden) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add(paramShow);
            } else {
                entry.target.classList.remove(paramShow);
            }
        });
    });

    const hiddenElements = document.querySelectorAll(paramHidden);
    hiddenElements.forEach((el) => observer.observe(el));
}
animationContent('show-opacity', '.hidden-opacity');