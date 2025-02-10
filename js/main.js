$(function(){

    var prod = new Swiper('.prod',{
        
        navigation:{
            prevEl:'.prod-prev',
            nextEl:'.prod-next'
        },
        slidesPerView: 1.,

        // speed:1200,
         spaceBetween:50,
        //  autoplay:{
        //      delay:3500,
        //      pauseOnMouseEnter:true,
        //  },
        loop:true,
        breakpoints: {
    
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
        },

    });


    let options = {
        root: document.querySelector('#scrollArea'),
        rootMargin: '0px',
        threshold: 0.6
      }

    let observer = new IntersectionObserver((e)=>{
        e.forEach((박스)=>{
            if(박스.isIntersecting)
            박스.target.classList.add('on')
            else
            박스.target.classList.remove('on')

        })
    },options)

    var div = document.querySelectorAll('.scrollmove');
    div.forEach((item)=>{
        observer.observe(item);
    })
})
