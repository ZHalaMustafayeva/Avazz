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
            items:3
        },
        1200:{
            dotsEach: 5,
            items:3
        }
    }
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});
