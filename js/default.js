$(".hamburger").click(function(){
  $(this).toggleClass("is-active");
});


$(".hamburger").click(function(){

			if($(".m-menu").css("display")=="none"){

				$(".m-menu").stop().animate({"right":"0px"},300);
				$(".m-menu").show();
			}else{

				$(".m-menu").stop().animate({"right":"-330px"},300);

				setTimeout(function(){
					$(".m-menu").css("display","none");
				},400);
			}
		});
$('.pop-btx').click(function(){
	$('#popup-wrap').css('display','none');
	$('header').css('top','15px');
});


/* //table toggle

$(".notice-table tr.title").on("click", function(){
	if($(this).hasClass("open")) {
		$(this).removeClass("open").next(".fold").removeClass("open");
	} else {
		$(".notice-table tr.title").removeClass("open").next(".fold").removeClass("open");
		$(this).addClass("open").next(".fold").addClass("open");
	}
}); */

/* //반응형 모바일 메뉴 버그
var menu=$(".m-menu")
$(window).resize(function(){
  var wWidth=$(window).width();
  if(wWidth>870&&menu){
    menu.removeAttr("style");
  }
}); */



// 탭메뉴
//var tab=$(".reg-tab>li");
//	var menu=$(".reg-cont>div");
//
//	tab.click(function(){
//	var tg = $(this);
//	var tc = tg.find('>a');
//
//	tab.find(">a").removeClass("active");
//	tc.addClass("active");
//
//	var i=tg.index();
//	//alert(index)
//
//	menu.css("display","none");
//	menu.eq(i).css("display","block");
//});



//모바일 셀렉

function getVal(str) {
	var v = window.location.search.match(new RegExp('(?:[\?\&]'+str+'=)([^&]+)'));
	return v ? v[1] : null;
}
$(function(){
	var newURL = window.location.pathname;
	var URL_TEMP =newURL.split("/");
	var reg_tab =URL_TEMP[2];
	//등록기준 페이지만 호출 되게 처리
	if(reg_tab =="regist"){

		//마지막 url
		var reg_cate2 =URL_TEMP[3];
		//1차카테고리 값
		var cat1 =getVal('cate1');
		if(cat1){
      //웹버전일때
      //console.log(cat1);
      $(".reg-tab li a").removeClass("active");
      //1차탭 선택하기
      $(".reg-tab li").eq(cat1-1).find("a").addClass("active");
      //2차탭 보이기
      $(".reg-in").hide();
      $(".reg-in").eq(cat1-1).show();
      $(".reg-in").eq(cat1-1).find('li').each(function(){
        //console.log($(this).find('a').attr("href"));
        if($(this).find('a').attr("href")==reg_cate2+"?cate1="+cat1){
          //console.log("ok:"+reg_cate2);
          $(this).find("a").addClass("active");
        }else {
          $(this).find("a").removeClass("active");
          //console.log("no:"+reg_cate2);
        }
      });
      //모바일 버전일때
			$("#cat-1").val(cat1);
			var cat2 ="reg-"+cat1;
			$(".cate2").hide();
			$("#"+cat2).show();
			$("#"+cat2).val(reg_cate2);
		}
		//1차 카테고리 선택시 2차 카테고리 보이기
		$("#cat-1").change(function(){
			var cat1 =$(this).val();
			if(cat1){
				var cat2 ="reg-"+cat1;
				$(".cate2").hide();
				$("#"+cat2).show();
			}
		});
		//2차 카테고리 선택시
		$(".cate2").change(function(){
			var link =$(this).val();
			var cate1 =$("#cat-1 option:selected").val();
			//console.log(cate1);return;
			if(link){
				location.href="./"+link+"?cate1="+cate1;
			}
		});
	}

});


/* //header 어느정도 스크롤되면 아이콘 바뀌게
$("header").each(function(){
  var header = $(this);
  var headerOffset = header.offset().top;

  $(window).scroll(function(){
    var wScroll = $(window).scrollTop()-500;
    if(wScroll>headerOffset){
      header.addClass("on");
    } else {
      header.removeClass("on");
    }
  });
}); */

/* //layer-popup
$(".detail-btn").click(function(){
	var layer = $(".layer-wrap");
	layer.show();
	$('body').css({overflow:'hidden'});
});
$(".layer-wrap .clo-btn").click(function(){
	var layerClose = $(".layer-wrap")
	layerClose.hide();
	$('body').css({overflow:'visible'});
}); */


/* //패럴럭스 기본소스
function parallax(){
	var dot = $("#nav>ul>li");
	var contents = $("#contents>div");

	dot.on("click",function(e){
		e.preventDefault();
		var target = $(this);
		var index =target.index();
		var section=contents.eq(index);
		var offset=section.offset().top;
		$("html, body").animate({scrollTop:offset},300,"easeInQuint");
	});

	$(window).scroll(function(){
	var wScroll=$(this).scrollTop();

	if(wScroll >= 300){
		$("#nav").addClass("on");
	} else if (wScroll == 0){
		$("#nav").removeClass("on");
	}

	if(wScroll > $(".section3 .sec3-img").offset().top-1000){
		$(".section3 .sec3-img").addClass("show");
	};
	if(wScroll > $(".section4").offset().top-500){
		$(".section4").addClass("show");
	};
	if(wScroll > $(".tem-list-wrap").offset().top-500){
		$(".tem-list-wrap").addClass("show");
	};

});
}; */

/* // 원페이지 사이트 메뉴클릭하면 해당하는 섹션으로 이동
	var contents = $("#Container>article");
	var Gnb = $("#Gnb>li");

Gnb.on("click",function(e){
	e.preventDefault();
	var target = $(this);
	var index =target.index();
	var section=contents.eq(index);
	var offset=section.offset().top;
	//alert(offset);
	$("html, body").animate({scrollTop:offset-91},500,"easeInQuint");
});

	var contents = $("#Container>article");
	var m_menu = $(".m-menu>ul>li");

m_menu.on("click",function(e){
	e.preventDefault();
	var target = $(this);
	var index =target.index();
	var section=contents.eq(index);
	var offset=section.offset().top;
	//alert(offset);
	$("html, body").animate({scrollTop:offset-81},500,"easeInQuint");
}); */
