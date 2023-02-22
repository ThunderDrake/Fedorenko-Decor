import Swiper from 'swiper/bundle';


const swiper = new Swiper('.review__swiper',{
  direction: 'horizontal' ,
  spaceBetween: 10,
  slidesPerView: 3,
  navigation: {
    nextEl: '.swiper__next',
    prevEl: '.swiper__prev'
  },

  pagination:{
    el: '.swiper__pagination',
    type: 'fraction',
    formatFractionCurrent: function (number) {
      return '0' + number;
  }
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
});
