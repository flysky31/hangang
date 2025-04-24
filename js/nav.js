

function handleOverflowByMenu() {
  if ($(window).width() <= 1024 && $('.hamBtn').hasClass('on')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'inherit';
  }
}

$('.hamBtn').on('click', function () {
  $(this).toggleClass('on');
  handleOverflowByMenu(); 
});

$(window).on('resize', function () {
  handleOverflowByMenu();
});

$(function(){
    $('.hamBtn').click(function(){
        $(this).toggleClass('on');
        $('.m-headWrap').toggleClass('on');
        $('.blackbox').toggleClass('on');
        // document.body.style.overflow = 'hidden';
        //   if ($('.hamBtn').hasClass("on")) {
        //     document.body.style.overflow = "hidden";
        //   } else {
        //     document.body.style.overflow = "inherit";
        //   }
    })
    $("#header .m-headWrap .mgnb_bg").click(function(){
        $(".hamBtn").removeClass('on');
        $('.m-headWrap').removeClass('on');
        $('.blackbox').removeClass('on');
    //    document.body.style.overflow = 'inherit';

    })

    

    $('#header #gnb li').mouseenter(function(){
        $(this).addClass("on");
        $(this).find('.sub_menu').addClass("on");
      });
      $('#header #gnb li').mouseleave(function(){
          $(this).removeClass("on");
          $(this).find('.sub_menu').removeClass("on");
      });

      $(".mgnb li").click(function(){
        $(this).toggleClass("on");
        //$(this).find(".sub").slideDown();
        $('.mgnb li').not(this).removeClass('on');        
        let subElement = $(this).find(".sub-menu");

        if (subElement.is(":visible")) {
          subElement.slideUp();
        } else {
          $(".mgnb li .sub-menu").slideUp();
          subElement.slideDown();
        }
    });
    // add wheel class
    $(window).scroll(function(){
        var sctop = $(window).scrollTop();
        if(sctop > 50){
            $('header').addClass('wheel');
        }else{
            $('header').removeClass('wheel');
        }
    })

    if($(window).width() > 768){
        if($('header').hasClass('transparent')){
            $('#contentsWrap').css('padding-top','0');
        }
    }


    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('#topBtn').fadeIn();
        } else {
            $('#topBtn').fadeOut();
        }
    });

    
    $('#topBtn').click(function() {
        $.fn.fullpage.moveTo(1); 
    });

  AOS.init({
    once: true, 
    duration: 1000,
  });
})
