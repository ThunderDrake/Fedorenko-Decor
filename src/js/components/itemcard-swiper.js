import Swiper from 'swiper/bundle';
const sliderSectionContainer = document?.querySelector('.catalog-furniture__slider__container');

if (sliderSectionContainer) {
  console.log('dfdfdfdf');


const swiper = new Swiper('.catalog-furniture__slider',{
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  breakpoints: {
    320: {
      slidesPerView: 'auto'
    },
    567: {
      slidesPerView: 'auto'

    }
  },





});

}
