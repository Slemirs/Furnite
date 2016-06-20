  $(document).ready(function () {
    //initialize swiper when document ready  
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
     scrollbar: '.swiper-scrollbar',
        scrollbarHide: false,
        slidesPerView: 'auto',
        centeredSlides: false,
        spaceBetween: 30,
        grabCursor: true,
        mousewheelControl: true,
        mousewheelInvert: true       
    })        
  });
