

// Navbar


$(document).ready(function () {
    $(window).bind('scroll', function () {

        var navHeight = $('header').height()
        if ($(window).scrollTop() > navHeight) {
            $('header').addClass('fixed');
            $('.humb').css({
                'background-color': 'black',
                'border': '1px solid black'
            })
        }
        else {
            $('header').css('background', 'transparent')
            $('header').removeClass('fixed');
            $('.humb').css({
                'background-color': 'white',
                'border': '1px solid white'
            })

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
            $('header').css('background', 'white')
            $('.mobile-overlay').css({
                transition: '.5s',
                'opacity':1,
                'visibility': 'visible'
            });;
            $('.mobile-menu').css({
                transform: 'translateX(0)',
                transition: '.5s'
            });
            $('.humb').css({
                'background-color': 'black',
                'border': '1px solid black'
            })
        }
        else {
            $('.humb').css({
                'background-color': 'black',
                'border': '1px solid black'
            })
            $('header').css('background', 'transparent')
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
        if ($('header').css('background', 'transparent') == true) {
            $('.humb').css({
                'background-color': 'white',
                'border': '1px solid white'
            })
        }
        else if ($('header').css('background', 'white') == true) {
            $('.humb').css({
                'background-color': 'black',
                'border': '1px solid black'
            })
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

