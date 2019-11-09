//Sticky navbar
$(function(){
    var shrinkHeader = 10;
     $(window).scroll(function() {
       var scroll = getCurrentScroll();
         if ( scroll >= shrinkHeader ) {
              $('.navbar').addClass('sticky');
           }
           else {
               $('.navbar').removeClass('sticky');
           }
     });
   function getCurrentScroll() {
       return window.pageYOffset || document.documentElement.scrollTop;
    }
});

// Carousel init
$(document).ready(function(){
    $('#slideshow .responsive').slick({
        centerMode: true,
        arrows: false,
        infinite: true,
        centerPadding: '60px',
        slidesToScroll: 1,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
  });