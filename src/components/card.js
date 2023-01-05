import { popupShowImg } from './constants';

import { openPopup } from './modal.js';

// добавление лайка карточке
const addsLikeCads = (event) => {
  event.target.classList.toggle('element__btn-like_active');
}

// удаление карточки
const removeCards = (event) => {
  event.target.closest('.element').remove();
}

// просмотр картинки карточки
const showImgCard = (event) => {
  openPopup(popupShowImg);

  popupShowImg.querySelector('.popup__image').src = event.target.src;
  popupShowImg.querySelector('.popup__image').alt = event.target.alt;
  popupShowImg.querySelector('.popup__text').textContent = event.target.alt;
}

// добавление карточки
const addsElementCard = (elementsCard) => {
  const cardTemplate = document.querySelector('#tmp-card').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);

  const cardLike = cardElement.querySelector('.element__btn-like');
  const cardRemove = cardElement.querySelector('.element__btn-remove');
  const cardImage = cardElement.querySelector('.element__image');
  const cardTitle = cardElement.querySelector('.element__title');

  cardTitle.textContent = elementsCard.name;
  cardImage.src = elementsCard.link;
  cardImage.alt = elementsCard.name;

  cardLike.addEventListener('click', addsLikeCads);
  cardRemove.addEventListener('click', removeCards);
  cardImage.addEventListener('click', showImgCard);

  return cardElement;
}

export { addsElementCard };
