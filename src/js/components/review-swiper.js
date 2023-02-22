import Swiper from "swiper";

new Swiper('.review__swiper',{
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
  }
});
