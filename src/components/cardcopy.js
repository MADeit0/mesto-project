import { popupShowImg } from './constants';

import { openPopup } from './modal.js';

// добавление карточки
const addsElementCard = (elementsCard) => {
  const cardTemplate = document.querySelector('#tmp-card').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);

  cardElement.querySelector('.element__title').textContent = elementsCard.name;
  cardElement.querySelector('.element__image').src = elementsCard.link;
  cardElement.querySelector('.element__image').alt = elementsCard.name;

  return cardElement;
}

// просмотр картинки карточки
const showImgCard = (event) => {
  const showImgCard = event.target.closest('.element__image');

  if (showImgCard) {
    openPopup(popupShowImg);

    popupShowImg.querySelector('.popup__image').src = event.target.src;
    popupShowImg.querySelector('.popup__image').alt = event.target.alt;
    popupShowImg.querySelector('.popup__text').textContent = event.target.alt;
  }
}

export { addsElementCard, showImgCard };
