// @top logo
introMotion = gsap.from('.sc-visual .item',{
  yPercent:100,
  stagger:0.1,
  paused:true,
})

// @header 스크롤 내릴때
let lastScroll = 0;

$(window).scroll(function(){
  curr = $(this).scrollTop(); //내 현재 스크롤 값
  serviceOffset = $('.sc-service').offset().top; //해당 태그의 위치값

  if (curr >= serviceOffset) {
    $('.header').addClass('on')
  } else {
    $('.header').removeClass('on')    
  }
  if (curr >= $(window).height()/2) { 
  if (curr > lastScroll) { //스크롤 내릴때
    $('.header').addClass('hide');
  } else {
    $('.header').removeClass('hide');    
  }
}

  if (curr > 0) { //슬로건 바뀌는 부분
    $('.header').addClass('change')
  } else {
    $('.header').removeClass('change')    
  } 

  lastScroll = curr;
})

// @header 메뉴 영역
$('.header .btn-menu').click(function(){
  $('.header .menu-area').addClass('on')
})
$('.header .btn-close').click(function(){
  $('.header .menu-area').removeClass('on')
})

// @visions 비디오
$('.sc-visions .link-info').hover(function(){
  $(this).find('img').addClass('on');
  $(this).find('video').get(0).currentTime = 0; //처음부터 재생
  $(this).find('video').get(0).play();
},function(){
  $('.link-info img').removeClass('on');
  $(this).find('video').get(0).pause();
})


// @마우스 커서
$(document).mousemove(function(e){
const mouseX = e.pageX;
const mouseY = e.pageY;

gsap.to('.mouse',{
  x:mouseX,
  y:mouseY,
  ease:'none'
})
})

// gsap 스크롤시 텍스트 나오게
$('[data-scroll=""]').each(function(i,el){ //반복문

  serviceTl = gsap.timeline({ 
    scrollTrigger:{ //영역에 도달했을 때 실행
            trigger:el, //기준점
            start:"0% 90%",
            end:"60% 0",          
            toggleActions:"play pause restart reset",
          },
  })
  serviceTl
  .from($(this).find('.child'),{
    yPercent:100,
    stagger:0.1,
  })
  .to($(this).find('.line'),{
    width:'100%',
  })
})

// gsap sc-avail 영역
circleTl = gsap.timeline({
  scrollTrigger:{ 
    trigger:'.sc-avail',
    start:"0% 90%",
    end:"60% 0",          
    toggleActions:"play pause restart reset",
  },
  defaults:{
    duration:2,
    ease:'none'
  }
})
circleTl
.to('.sc-avail .svg-box .curr',{
  'stroke-dashoffset': 92.1
},'a')
.to('.sc-avail .svg-box .abs2',{
  rotation:252,
},'a')
.to('.sc-avail .text-box .wrap',{
  yPercent:-100
},'a')

// @contact 영역
const contactSlide = new Swiper('.sc-contact .swiper',
{
  autoplay: {
    delay: 0,
    disableOnInteraction : false,
 },
  loop:true,
  speed:10000,
  slidesPerView:'auto',
  spaceBetween:26,
  freeMode: true,
})

// @footer logo
logoTl = gsap.timeline({ 
  scrollTrigger:{ 
          trigger:'.footer .col-right',
          start:"80% 70%",
          end:"100% 0",          
          toggleActions:"play pause restart reset",
        },
})
logoTl
.from('.footer .logo .child',{
  yPercent:-100,
  stagger:0.1
})