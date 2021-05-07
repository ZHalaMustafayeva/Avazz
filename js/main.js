

// Navbar


$(document).ready(function () {
    $(window).bind('scroll', function () {
        var navHeight = $('header').height();
        if ($(window).scrollTop() > navHeight) {
          $('header').addClass('fixed');
        }
        else {
          $('header').removeClass('fixed');
    
        }
      });

    $('.az-flag').click(function (e) {
        e.stopPropagation();
        $('.flag-drop').toggleClass('active')
        if($('.flag-drop').hasClass('active')){
            $('.flag-drop').css({
                'opacity':'1',
                'transition':'.4s',
                'pointer-events':'auto'
            })
        }
        else{
            $('.flag-drop').css({
                'opacity':'0',
                'transition':'.4s',
                'pointer-events':'none'
    
            })
        }
      });
      $('body').click(function (e){
        $('.flag-drop').css({
            'opacity':'0',
            'transition':'.4s'
        })
      })
    
      var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop:true,
        nav:true,
        margin:10,
        dots:true,
        navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },            
            960:{
                items:2
            },
            1200:{
                dotsEach: 5,
                items:3
            }
        },
        
    });


    // owl.on('mousewheel', '.owl-stage', function (e) {
    //     if (e.deltaY>0) {
    //         owl.trigger('next.owl');
    //     } else {
    //         owl.trigger('prev.owl');
    //     }
    //     e.preventDefault();
    // });
 
    
  
    $('.hamburger-menu').click(function(){
        $('.hamburger-menu').toggleClass('active-humb');
        if($('.hamburger-menu').hasClass('active-humb')){
            $('header').css('background','white')
        $('.mobile-overlay').css({
            transform:'translateX(0)',
              transition:'.5s'
          });;
            $('.mobile-menu').css({
              transform:'translateX(0)',
                transition:'.5s'
            });
           
        }
        else{
            $('header').css('background','transparent')
            $('.mobile-overlay').css({
                transform:'translateX(200%)',
                  transition:'.5s'
              });
            $('.mobile-menu').css({
                transform:'translateX(200%)',
                transition:'.5s'
            });   
            
        }
    })
    $(".mobile-overlay").click(function () {
        $('.hamburger-menu').removeClass('active-humb');
        $('.mobile-overlay').css({
            transform:'translateX(200%)',
              transition:'.5s'
          });
        $('.mobile-menu').animate({ transform: 'translateX(200%)' }, 500, 'linear');
      });

 
  })

 