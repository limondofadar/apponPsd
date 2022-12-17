$(function(){
    $('.autoplay').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        // dots:true,

        arrows:true,
        prevArrow:'<i class="fa-solid fa-arrow-left-long prevArrow"></i>',
        nextArrow:'<i class="fa-solid fa-arrow-right-long nextArrow"></i>',
// responsive displays 
responsive: [
  {
    breakpoint: 576,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
    }
  },
  
 
  
]

      });

    // sticky navbar 
      //  Stykey Header  
  $(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    
    if(scrolling > 200){
        $('.navbar').addClass('sticky-nav-bar');
    }
    else {
         $('.navbar').removeClass('sticky-nav-bar');
    }
    });    
     


});