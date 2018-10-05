$(document).ready(function () {
    'use strict';
    // -----------------------------
    //  Headroom Initialize
    // -----------------------------
    $('.main-nav').headroom();

    $('.step__item').matchHeight({
        byRow: 0
    });

    // Smooth Scroll to Section
    $('a.page-scroll').on('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 0)
        }, 700);
        event.preventDefault();
    });

    // testimonial slider
    $('.testimonial__slider').slick({
        arrows: true,
        autoplay: false,
        dots: false,
        prevArrow: '<button type=\'button\' class=\'prevArrow\'><i class=\'ti-angle-left\'></i></button>',
        nextArrow: '<button type=\'button\' class=\'nextArrow\'><i class=\'ti-angle-right\'></i></button>',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    // -----------------------------
    //  Parallax Scene
    // -----------------------------
    // if (screen.width > 991) {
    //     var scene = $('#icons').get(0);
    //     var parallaxInstance = new Parallax(scene);
    //     parallaxInstance.friction(0.2, 0.2);

    //     var scene2 = $('#audienceIcons').get(0);
    //     var parallaxInstance2 = new Parallax(scene2);
    //     parallaxInstance2.friction(0.2, 0.2);
    // }

    // -----------------------------
    //  AOS Initialize
    // -----------------------------
    AOS.init();

    // -----------------------------
    //  Smooth Scrollbar
    // -----------------------------
    // var Scrollbar = window.Scrollbar;
    // Scrollbar.init(document.querySelector('#my-scrollbar'));

    $(window).on('scroll', function () {
        var windscroll = $(window).scrollTop();
        if (windscroll >= 100) {
            $('.main-nav').addClass('nav-bg');
        } else {
            $('.main-nav').removeClass('nav-bg');
        }
    });

    setTimeout(function () {
        var des = $('.odometer').attr('data-up');
        console.log(des);
        $('.odometer').html(des);
    }, 1000);

});