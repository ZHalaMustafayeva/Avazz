

// Navbar


$(document).ready(function () {
    $(window).bind('scroll', function () {

        var navHeight = $('header').height()
        if ($(window).scrollTop() > navHeight) {
            $('header').addClass('fixed');
            $('.humb').addClass('black');
            $('.humb').remove('white');   
        }
        else {
            $('header').css('background', 'transparent')
            $('header').removeClass('fixed');
            $('.humb').addClass('white');
            $('.humb').remove('black');
        }
    });

    $('.az-flag').click(function (e) {
        e.stopPropagation();
        $('.flag-drop').toggleClass('active')
        if ($('.flag-drop').hasClass('active')) {
            $('.flag-drop').css({
                'opacity': '1',
                'transition': '.4s',
                'pointer-events': 'auto'
            })
        }
        else {
            $('.flag-drop').css({
                'opacity': '0',
                'transition': '.4s',
                'pointer-events': 'none'

            })
        }
    });
    $('body').click(function (e) {
        $('.flag-drop').css({
            'opacity': '0',
            'transition': '.4s'
        })
    })

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true,
        nav: true,
        margin: 10,
        dots: true,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            960: {
                items: 2
            },
            1200: {
                dotsEach: 5,
                items: 3
            }
        },

    });
   
    $('.hamburger-menu').click(function () {
        $('.hamburger-menu').toggleClass('active-humb');
        if ($('.hamburger-menu').hasClass('active-humb')) {
            $('header').addClass('fixed')
            $('.mobile-overlay').css({
                transition: '.5s',
                'opacity':1,
                'visibility': 'visible'
            });;
            $('.mobile-menu').css({
                transform: 'translateX(0)',
                transition: '.5s'
            });
            $('.humb').addClass('black')
            $('.humb').remove('white')
        }
        else {
            $('.humb').addClass('white')
            $('.humb').remove('black')
            $('header').removeClass('fixed')
            $('.mobile-overlay').css({
                transition: '.4s',
                'opacity':0,
                'visibility': 'hidden'
            });
            $('.mobile-menu').css({
                transform: 'translateX(200%)',
                transition: '.5s'
            });

        }
    })
   
    $(".mobile-overlay").click(function () {
        if ($('header').hasClass('fixed') == true) {
            $('header').removeClass('fixed');
            $('.humb').addClass('white');
            $('.humb').remove('black');
        }
        else if ($('header').css('background', 'white') == true) {
            $('.humb').addClass('black');
            $('.humb').remove('white');
        }
        $('.hamburger-menu').removeClass('active-humb');
        $('.mobile-overlay').css({
            transition: '.4s',
                'opacity':0,
                'visibility': 'hidden'
        });
        $('.mobile-menu').css({
            transform: 'translateX(200%)',
            transition: '.5s'
        });

    });

})

