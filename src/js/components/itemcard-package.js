const itemcardImgBtn = document.querySelectorAll('.itemcard-package__small-img');
const itemcardImg = document.querySelectorAll('.itemcard-package__big-img');
const itemcardBtnColor = document.querySelectorAll('.itemcard-package__properties__button');
const itemcardBtnColorWrapper = document.querySelectorAll('.itemcard-package__properties__button-wrapper');
const itemcardBtnPlus = document.querySelector('.itemcard-package__properties__button-cart_plus');
const itemcardBtnMinus = document.querySelector('.itemcard-package__properties__button-cart_minus');
const itemcardBtnCounter = document.querySelector('.itemcard-package__properties__button-cart_counter');
const cardCart = document.querySelector('.cart__button');
const cardCartNum =  document.querySelector('.cart__button__number');
const CartNum = document.querySelector('.cart-widget__count');
const itemcardAccordionBtn = document.querySelector('.itemcard-package__accordion__btn');


let itemcardTemp = 0;
let itemcardTempColor = 0;
let itemcardBtnCounterNum = 0;

function cardCartHide() {
  cardCart.classList.remove('cart__button--show');
}

if(itemcardImgBtn && itemcardImg) {

  for (let i = 0; i < itemcardImgBtn.length; i++) {
    itemcardImgBtn[i].addEventListener('click', () => {
      itemcardImg[itemcardTemp] .classList.remove('itemcard-package__big-img--show');
      itemcardImg[itemcardTemp] .classList.add('itemcard-package__big-img--hide');
      itemcardImg[i] .classList.add('itemcard-package__big-img--show');
      itemcardImg[i] .classList.remove('itemcard-package__big-img--hide');
      itemcardTemp = i;
    });
  }
}

if(itemcardBtnColor  && itemcardBtnColorWrapper) {
  for (let i = 0; i < itemcardBtnColor.length; i++) {
    itemcardBtnColor[i].addEventListener('click', () => {
      itemcardBtnColorWrapper[itemcardTempColor].classList.remove('itemcard-package__properties__button-wrapper--border');
      itemcardBtnColorWrapper[i].classList.add('itemcard-package__properties__button-wrapper--border');
      itemcardTempColor = i;
    });
  }
}

if(itemcardBtnPlus && itemcardBtnMinus && itemcardBtnCounter) {
  itemcardBtnPlus.addEventListener('click', () => {
    itemcardBtnCounterNum++;
    itemcardBtnCounter.innerHTML = itemcardBtnCounterNum;
    cardCart.classList.add('cart__button--show');
    cardCartNum.innerHTML = itemcardBtnCounterNum;
    CartNum.innerHTML = itemcardBtnCounterNum;
  });

  itemcardBtnMinus.addEventListener('click', () => {
    if(itemcardBtnCounterNum > 0){
      cardCart.classList.add('cart__button--show');
      itemcardBtnCounterNum--;
      itemcardBtnCounter.innerHTML = itemcardBtnCounterNum;
      cardCartNum.innerHTML = itemcardBtnCounterNum;
      CartNum.innerHTML = itemcardBtnCounterNum;
      if(itemcardBtnCounterNum < 1){
        cardCart.classList.remove('cart__button--show');
      }
    }
  });
}

