import { initialCards } from './initialCards.js';
import { openPopup } from './modal.js';

const elementsCards = document.querySelector('.elements');
const popupShowImg = document.querySelector('.popup_show-img');


// добавление карточки
const addsElementCard = (nameCards, linkCards) => {
  const cardTemplate = document.querySelector('#tmp-card').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);

  const titleElement = cardElement.querySelector('.element__title');
  const imageElement = cardElement.querySelector('.element__image');

  titleElement.textContent = nameCards;
  imageElement.src = linkCards;
  imageElement.alt = nameCards;

  elementsCards.prepend(cardElement);
}

// загрузка карточек при старте страницы
const downloadСards = () => {
  for (let i = 0; i < initialCards.length; i++) {
    const nameCards = initialCards[i].name;
    const linkCards = initialCards[i].link;

    addsElementCard(nameCards, linkCards);
  }
}

// добавление лайка карточке
const addsLikeCads = (event) => {
  const likeCard = event.target.closest('.element__btn-like');

  if (likeCard) {
    likeCard.classList.toggle('element__btn-like_active');
  }
}

// удаление карточки
const removeCards = (event) => {
  const removeCards = event.target.closest('.element__btn-remove');

  if (removeCards) {
    removeCards.closest('.element').remove();
  }
}

// просмотр картинки карточки
const showImgCard = (event) => {
  const showImgCard = event.target.closest('.element__image');

  if (showImgCard) {
    const element = showImgCard.closest('.element');
    const elementTitle = element.querySelector('.element__title');
    openPopup(popupShowImg);
    popupShowImg.querySelector('.popup__image').src = showImgCard.src;
    popupShowImg.querySelector('.popup__image').alt = elementTitle.textContent;
    popupShowImg.querySelector('.popup__text').textContent = elementTitle.textContent;
  }
}

export {
  elementsCards,
  addsElementCard,
  downloadСards,
  addsLikeCads,
  removeCards,
  showImgCard
}
