$(document).ready(function(){
    var mySwiper = new Swiper ('.swiper-container', {
        effect : 'slide',
        speed:1000,
        centeredSlides: true,
        loop : true,
        autoplay: {
            delay: 5000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },
        mousewheelControl : false,
    }) 
    var mySwiper = new Swiper('.myswiper',{
        effect : 'coverflow',
        slidesPerView: 2.5,
        speed:500,
        centeredSlides: true,
        loop : true,
        loopAdditionalSlides : 5,
        mousewheelControl : false,
        nextButton:'.swiper-button-right',
        prevButton:'.swiper-button-left',
        autoplay: {
            delay: 2000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },
        coverflowEffect: {
            rotate: 0,
            stretch:0,
            depth: 200,
            modifier: 1,
            slideShadows : false
        }
    })
    //导航栏吸顶效果
	var nav = document.getElementById("head");
    window.onscroll = function(){
        var bd = document.documentElement || document.body;
        nav.style.top = 30-bd.scrollTop + "px";
        if (bd.scrollTop>=700) {
            nav.style.top = "0px";
            nav.style.opacity = '1';
            nav.style.zIndex = '100'
        }else if(bd.scrollTop<=700){
            // nav.style.top = "30px";
            nav.style.opacity = '0';
            nav.style.zIndex = '-100'
        }
    }
    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
        new WOW().init();
    };    
    $(document).ready(function(){
        var a,b,c;
        a = $(window).height();    //浏览器窗口高度
        var group = $(".hot-blog-container");
        var cocos = $('.cocos2d-x-container');
        $(window).scroll(function(){
            b = $(this).scrollTop();   //页面滚动的高度
            c = group.offset().top;    //元素距离文档（document）顶部的高度
            d = cocos.offset().top;
            if(a+b>c){
                group.css('opacity','1'); 
            }
            if(a+b>d){
                cocos.css('opacity','1'); 
            }
        })
    })
})