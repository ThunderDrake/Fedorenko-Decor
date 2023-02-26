import Swiper from 'swiper/bundle';


const swiper = new Swiper('.review__swiper',{
  direction: 'horizontal' ,
  navigation: {
    nextEl: '.swiper__next',
    prevEl: '.swiper__prev'
  },
  slidesPerGroup: 1,
  slidesPerView: 1,
  spaceBetween: 16,

  pagination:{
    el: '.swiper__pagination',
    type: 'fraction',
    formatFractionTotal: function (number) {
      return number;
  }
  },



});
