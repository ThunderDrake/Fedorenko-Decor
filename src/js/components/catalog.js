const catalogButton = document.querySelectorAll('.catalog-furniture__elem__button');
const catalogCounter = document.querySelectorAll('.catalog-furniture__elem__button_counter');
const catalogPlus = document.querySelectorAll('.catalog-furniture__elem__button_plus');
const catalogMinus = document.querySelectorAll('.catalog-furniture__elem__button_minus');

let catalogCounterNumber = [];

if (catalogButton && catalogCounter && catalogPlus && catalogMinus) {
  for (let j = 0; j < catalogButton.length; j++){
    catalogCounterNumber[j] = 1;
  }
  for (let i = 0; i < catalogButton.length; i++) {
    catalogButton[i].addEventListener('click', () => {
      catalogCounter[i].classList.add('catalog__button__show');
      catalogPlus[i].classList.add('catalog__button__show');
      catalogMinus[i].classList.add('catalog__button__show');
      catalogButton[i].classList.add('catalog__button__hide');
      catalogCounterNumber[i] = 1;
      catalogCounter[i].innerHTML = catalogCounterNumber[i];
    });

    catalogPlus[i].addEventListener('click', () => {
      ++catalogCounterNumber[i];
      catalogCounter[i].innerHTML = catalogCounterNumber[i];
    });

    catalogMinus[i].addEventListener('click', () => {
      --catalogCounterNumber[i];
      catalogCounter[i].innerHTML = catalogCounterNumber[i];
      if(catalogCounterNumber[i] < 1){
        catalogCounter[i].classList.remove('catalog__button__show');
        catalogPlus[i].classList.remove('catalog__button__show');
        catalogMinus[i].classList.remove('catalog__button__show');
        catalogButton[i].classList.remove('catalog__button__hide');
        console.log('fdfdfdffdf');
      }
    });
  }






}

