const swiperSettings = {
  slidesPerView:1,
// 슬라이드 갯수 # 'auto'
  spaceBetween:0,
// 슬라이드 간격
  autoplay:{
      delay:2000,
  },
// 오토플레이 딜레이설정
// 무한 루프 시에 delay: 1 로 두는 것이 좋음

  speed:1200,
// 속도
  loop:true,
// 루프
  direction:'horizontal', //수평
// 'vertical' 수직

  parallax:true,
// 시간차
  pagination: {
      el: '.main_visual_basic .pagination',
// type: 'custom',
// bullets progressbar fraction
  },

  effect:'slide',
// 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip' | 'creative' | 'cards'

  followFinger:true,
// 그랩 따라 움직일 것이냐

  on: {
      activeIndexChange: function () {
      console.log('swiper initialized');
      },
  },
// 이벤트 설정
  breakpoints:{
      0:{

      }
  }
// 브레이크포인트
};