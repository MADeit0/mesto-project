import { popupShowImg, cardTemplate } from './constants';

import { openPopupDeleteCard, openPopup } from './modal.js';

// добавление лайка карточке
const addsLikeCads = (element) => {
  element.classList.toggle('element__btn-like_active');
}

// проверка сколько поставлено лайков изображению
const changeLike = (element, lengthLikes) => {
  const LikeCounter = element.querySelector('.element__like-count');
  LikeCounter.textContent = lengthLikes;
}

// удаление карточки
const deleteCardFromPage = (card) => {
  card.remove();
}

// просмотр картинки карточки
const showImgCard = (event) => {
  popupShowImg.querySelector('.popup__image').src = event.target.src;
  popupShowImg.querySelector('.popup__image').alt = event.target.alt;
  popupShowImg.querySelector('.popup__text').textContent = event.target.alt;

  openPopup(popupShowImg);
}
// инициализация карточки, добавление слушателей, добавление маркера лайка если
// лайк был поставлен ранее, добавление информации о количестве поставленных лайков
const createCard = (myId, elementsCard, likeCardCallback) => {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);

  const cardLike = cardElement.querySelector('.element__btn-like');
  const cardRemove = cardElement.querySelector('.element__btn-remove');
  const cardImage = cardElement.querySelector('.element__image');
  const cardTitle = cardElement.querySelector('.element__title');
  const likesCount = cardElement.querySelector('.element__like-count');

  cardImage.src = elementsCard.link;
  cardImage.alt = elementsCard.name;
  cardTitle.textContent = elementsCard.name;
  likesCount.textContent = elementsCard.likes.length;
  cardElement.dataset.cardId = elementsCard._id;

  const isLiked = elementsCard.likes.some((likes) => {
    return likes._id === myId;
  });

  if (isLiked) {
    addsLikeCads(cardLike);
  }

  if (myId === elementsCard.owner._id) {
    cardRemove.addEventListener('click', openPopupDeleteCard);
  } else {
    cardRemove.remove();
  }

  cardLike.addEventListener('click', likeCardCallback);
  cardImage.addEventListener('click', showImgCard);

  return cardElement;
}

export { createCard, deleteCardFromPage, addsLikeCads, changeLike }
